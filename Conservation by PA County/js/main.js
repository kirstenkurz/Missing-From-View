//basemaps

var map = L.map("map").setView([41.0534015, -77.1601904], 8);
			var satellite = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'kirstenkurz.005efni8',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'
			}).addTo(map);
			
			
			var light = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'mapbox.light',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'
			})
 
//counties layer
var countyBase

	function getColor(d) {
			return d > 37.168463  ? '#810f7c' :
			       d > 19.025396  ? '#8856a7' :
			       d > 11.357224   ? '#8c96c6' :
			       d > 5.236092  ? '#b3cde3' :
			       d > 0   ? '#edf8fb' :
			                  '#FFFFFF';
		}

		function style(feature) {
			return {
				weight: 2,
				opacity: 1,
				color: 'white',
				fillOpacity: 0.7,
				fillColor: getColor(feature.properties.percentarea_percent)
			};
		}

var info = L.control();
		
info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>County</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' + props.percentarea_percent + '% of total land protected'
        : 'Hover over a county');
};

info.addTo(map);
	
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        dashArray: '',
        fillOpacity: 1
    });

   
	info.update(layer.feature.properties);
}	
function resetHighlight(e) {
    countyBase.resetStyle(e.target);
	info.update();
}
	
	function countyInfo (feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight
	
	});}
	
	
	countyBase = L.geoJson(counties, {
	style: style,
	onEachFeature: countyInfo
	}).addTo(map);	
	
//conservation tracts layer
var conservation

	function conColor(d) {
			return d == 'PENNSYLVANIA GAME COMMISSION'  ? '#8dd3c7' :
			       d == 'NATIONAL PARK SERVICE'  ? '#ffffb3' :
			       d == "PENNSYLVANIA CHAPTER OF THE NATURE CONSERVANCY"   ? '#bebada' :
			       d == "PRIVATE"  ? '#fb8072' :
			       d == "BUREAU OF STATE PARKS"   ? '#80b1d3' :
				   d == "COUNTY & LOCAL PARKS"   ? '#fdb462' :
				   d == "PENNSYLVANIA BUREAU OF FORESTRY"   ? '#b3de69' :
				   d == "ALLEGHENY NATIONAL FOREST"   ? '#fccde5' :
				   d == "NORTHERN ALLEGHENY CONSERVATION ASSOCIATION"   ? '#d9d9d9' :
				   d == "WESTERN PENNSYLVANIA CONSERVANCY"   ? '#bc80bd' :
				   d == "NATIONAL NATURAL LANDMARK"   ? '#ccebc5' :
				   d == "PRESQUE ISLE AUDUBON SOCIETY"   ? '#ffed6f' :
				   d == "AUDUBON SOCIETY OF WESTERN PENNSYLVANIA"   ? '#e31a1c' :
				   d == "BRANDYWINE CONSERVANCY"   ? '#b15928' :
				   d == "CARNEGIE MUSEUM"   ? '#ff7f00' :
				   d == "HAWK MOUNTAIN SANCTUARY ASSOCIATION"   ? '#6a3d9a' :
				   d == "U.S. FISH & WILDLIFE SERVICE"   ? '#1f78b4' :
			                  '#FFFFFF';
		}

		function conStyle(feature) {
			return {
				weight: 1,
				opacity: 1,
				color: 'white',
				fillOpacity: 1,
				fillColor: conColor(feature.properties.DIVISION),
				zIndex: 2
			};
		}

var info2 = L.control();
		
info2.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info2'); 
    this.update();
    return this._div;
};

// infor window
info2.update = function (props) {
    this._div.innerHTML = '<h4>Managed By</h4>' +  (props ?
        '<b>' + props.DIVISION + '</b><br />' 
        : 'Hover over a conservation parcel');
};

info2.addTo(map);
	
function highlightConserve(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 3,
        color: 'white',
        dashArray: '',
        fillOpacity: 1.0
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
	info2.update(layer.feature.properties);
}	
function resetConserve(e) {
    conservation.resetStyle(e.target);
	info2.update();
}


	function conInfo (feature, layer) {
		layer.on({
			mouseover: highlightConserve,
			mouseout: resetConserve});
		
	
}
	
	
	conservation = L.geoJson(conserved, {
	style: conStyle,
	onEachFeature: conInfo
	}).addTo(map);
	
//trail layer
function trailStyle (feature) {
			return {
				weight: 1,
				opacity: 1,
				color: 'black'
			};
		}

var trails = L.geoJson (trails, {
	style: trailStyle
}).addTo (map);


//control layers

var baseLayers = {
    "Earth View": satellite,
	"Streets View": light

};

var overlays = {
    "Conservation Lands": conservation,
	"Trails" : trails
};

L.control.layers(baseLayers, overlays, {position: 'topleft'}).addTo(map);

//county legend
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
			
    
		grades = [0, 5.24, 11.36, 19.03, 37.17]
	div.innerHTML += "<img id='tIcon'></img><strong>&nbsp; Dept of Conservation &amp; Natural Resources Trail</strong></br></br><strong>Percentage of total county land protected:</strong></br>"
	// loop through classes
	for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '%<br>' : '%+');
    }

    return div;
};

legend.addTo(map);


	