//splash screen

	$("#splasher").click(function(){
		$("#splasher").fadeOut('slow');
	});
	$("#intro").click(function() {
		$("#splasher").fadeIn('slow');
	});
	


//map
var map = L.map("map").setView([39.952451, -75.163459], 13);
			L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 18,
			id: 'kirstenkurz.p5od0hk9',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'
			}).addTo(map);
		




	
/*if (properties.state = "Extant") {layer.setIcon(apartment);}
		else if (properties.state = "Demolished") {layer.setIcon(ball);};		
*/

	
	
//icons
	var apartment = new L.icon({ iconUrl: 'images/apartment.png'});
	var ball = new L.icon ({iconUrl: 'images/transport.png'});

	
	//median home value layer	
	function getColor(d) {
			return d > 611142 ? '#8A4E8A' :
			       d > 509285  ? '#A05AA0' :
			       d > 407428  ? '#B379B3' :
			       d > 305571  ? '#C08FC0' :
			       d > 203714   ? '#CCA5CC' :
			       d > 101857  ? '#D8BBD8' :
			       d > 0   ? '#F1E6F1' :
			                  '#FFFFFF';
		}

		function style(feature) {
			return {
				weight: 2,
				opacity: 1,
				color: 'white',
				dashArray: '3',
				fillOpacity: 0.7,
				fillColor: getColor(feature.properties.hd01_vd01)
			};
		}
	function homeInfo (feature, layer) {
		layer.bindPopup("<h3>Median Home Value:"+feature.properties.hd01_vd01+"</h3");
	};
		
var home = L.geoJson(homeValue, {
	style: style,
	onEachFeature: homeInfo
	}).addTo(map);	
	
	
//Surviving building layer	
	function surviveInfo(feature, layer) {
		layer.on({
        click: function populate() {
            document.getElementById('sidebar').innerHTML = "<h2>"+ feature.properties.name +"</h2><h3> Completed: "+ feature.properties.finish +" </h3><h3> Demolition Plans: "+ feature.properties.demo +" </h3><h3> Current State: "+ feature.properties.state +" </h3><p>"+ feature.properties.description +"</p>";
         }
    	});
		layer.bindPopup(""+feature.properties.img +"", {maxWidth: 400});
		layer.setIcon (apartment);
	};
		
		

var ex = L.geoJson(surviving, {
	
		onEachFeature: surviveInfo
    
	}).addTo(map);

//demolished layer
		function demoInfo(feature, layer) {
		layer.on({
        click: function populate() {
            document.getElementById('sidebar').innerHTML = "<h2>"+ feature.properties.name +"</h2><h3> Completed: "+ feature.properties.finish +" </h3><h3> Demolished: "+ feature.properties.demo +" </h3><h3> Current State: "+ feature.properties.state +" </h3><p>"+ feature.properties.description +"</p>";
         }
    	});
		layer.bindPopup(""+feature.properties.img +"", {maxWidth: 400});
		layer.setIcon (ball);
	};


var d =	L.geoJson(demol, {
	
		onEachFeature: demoInfo
    
	}).addTo(map);
	
//on/off demolished

	$("#demolist").click(function () {
		if ( map.hasLayer (d)) {
			map.removeLayer (d);
		} else {
			map.addLayer (d);
		};
	});
	
//on/off extant
	$("#survive").click(function () {
		if ( map.hasLayer (ex)) {
			map.removeLayer (ex);
		} else {
			map.addLayer (ex);
		};
	});
//on/off median home value
	
	$("#homebutt").click(function () {
		if ( map.hasLayer (home)) {
			map.removeLayer (home);
		} else {
			map.addLayer (home);
		};
	});

