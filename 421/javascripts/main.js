	
	
//create maps
var map1 = L.map('map1', {
	    center: [39.9926, -75.1652],
	    zoom: 12
	})
var map2 = L.map('map2', {
	    center: [39.9926, -75.1652],
	    zoom: 12
	})

// define addLayer function
function addLayer(layer, name, zIndex) {
    layer
        .setZIndex(zIndex)
        .addTo(map1);
}
function addLayer2(layer, name, zIndex) {
    layer
        .setZIndex(zIndex)
        .addTo(map2);
}
//add basemaps

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'mquackenbush.9tzvtilf',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    }).addTo(map1);
	
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'kirstenkurz.po8ckkhk',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'	
   
   }).addTo(map2);

// building layers
var layers =  [L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'mquackenbush.9tzvtilf',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    }),		
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'mquackenbush.9tzvtilf',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    }),
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'mquackenbush.3pyck3vj',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    }), L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'mquackenbush.8vsxtj76',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    }), y2016 = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'mquackenbush.99rcfe5y',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'}),
		y2000 = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'mquackenbush.2bm7p436',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    })
   ];
   
//extent layers
var exLayers =  [
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'kirstenkurz.po8ckkhk',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'	
   
   }),
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'kirstenkurz.60u22nxn',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'
    }), L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'kirstenkurz.ac5dm0f6',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'
    }), L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'kirstenkurz.4jj22crd',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'
	}), 
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'kirstenkurz.1n8ejeqt',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'
	}), L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 12,
			id: 'kirstenkurz.1nrctxwm',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'
    })

   ];

   
   
   
//toggle layers
L.control.layers(layers).addTo(map1);
L.control.layers(exLayers).addTo(map2);




var arrayLength = layers.length;
var arrayLength2 = exLayers.length;

// set the counter for the timer
var i = 0;                     

// set the timer delay function to add building layers to map, calling function name in HTML button
function gogogo () {           
   setTimeout(function () {    
      addLayer(layers[i], i); // adding one layer at a time from the array
      i++;                     
      if (i < arrayLength) {            
         gogogo();             
      }                        
   }, 7000); // delay between layer adds in milliseconds
};

//function for extent layers
function gogogo2 () {           
   setTimeout(function () {    
      addLayer2(exLayers[i], i); // adding one layer at a time from the array
      i++;                     
      if (i < arrayLength2) {            
         gogogo2();             
      }                        
   }, 7000); // delay between layer adds in milliseconds
};
//sync maps
map1.sync(map2);
map2.sync(map1);

//splash screen

	$("#splasher").click(function(){
		$("#splasher").fadeOut('slow');
		gogogo ();
		gogogo2 ();
	});