	
	
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

var y2016L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'mquackenbush.7dhghgyl',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    });
    
y2016L.addTo(map1);


var y2000R = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'kirstenkurz.pp5b7478',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'
    });
   y2000R.addTo(map2);



// building layers
var layers =  [y1750L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'mquackenbush.8zqshzgf',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    }), y1800L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'mquackenbush.8486unl8',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    }),	y1850L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'mquackenbush.d6ygvc7k',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    }), y1900L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'mquackenbush.b47j4n1z',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    }), y1950L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'mquackenbush.dfru63pa',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    }), y2000L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'mquackenbush.3ou022qn',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'}),
		y2016L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'mquackenbush.7dhghgyl',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    })
   ];
    
//extent layers
var exLayers =  [
    y1762R = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'kirstenkurz.pp5ac5kc',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'	
   
   }),
		y1800R = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'kirstenkurz.pp5ai3e0',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'	
   
   }),
		y1855R = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'kirstenkurz.pp5al5gb',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'
    }), y1900R = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'kirstenkurz.pp5b2nmn',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'
    }), y1942R = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'kirstenkurz.pp5ap0fi',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'
	}), 
		y2000R = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'kirstenkurz.pp5b7478',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'
	})

   ];

var yearsLeft = {
	    "1750" : y1750L,
	    "1800" : y1800L,
	    "1850": y1850L,
	    "1900" : y1900L,
	    "1950" : y1950L,
	    "2000": y2000L,
	    "Present" : y2016L
	};
	
var yearsRight = {
	    "1762" : y1762R,
	    "1800" : y1800R,
	    "1855": y1855R,
	    "1900" : y1900R,
	    "1942" : y1942R,
	    "Present" : y2000R,
	};
   
   
   
//toggle layers
L.control.layers(yearsLeft).addTo(map1);
L.control.layers(yearsRight).addTo(map2);



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

function onClick() {
    clearTimeout(setTimeout);
    gogogo();
}



//sync maps
map1.sync(map2);
map2.sync(map1);

//splash screen

	$("#splasher").click(function(){
		$("#splasher").fadeOut('slow');
	
	});

//animate left side
$("#trigger1").click(function (){
 $("#map1").remove(); 
 var $newdiv1 = $( "<div id='map1'/>" ),
  newdiv2 = document.createElement( "div" );
 
$( "body" ).append( $newdiv1, [ newdiv2 ] );
 $('#body').append('#map1');
 var map = L.map('map1', {
	    center: [39.9926, -75.1652],
	    zoom: 12
	})
function addLayer(layer, name, zIndex) {
    layer
        .setZIndex(zIndex)
        .addTo(map);
}

// building layers
var layers =  [y1750L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'mquackenbush.8zqshzgf',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    }), y1800L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'mquackenbush.8486unl8',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    }),		
		y1850L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'mquackenbush.d6ygvc7k',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    }),
		y1900L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'mquackenbush.b47j4n1z',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    }), y1950L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'mquackenbush.dfru63pa',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    }), y2000L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'mquackenbush.3ou022qn',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'}),
		y2016L = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'mquackenbush.7dhghgyl',
			token: 'pk.eyJ1IjoibXF1YWNrZW5idXNoIiwiYSI6ImNpbXdzbTdreTAzOWx1cGtrejZ2MmZjMHIifQ.3odAcWtHPlHtvqJvhOTTYA'
    })
   ];

var yearsLeft = {
	    "1750" : y1750L,
	    "1800" : y1800L,
	    "1850": y1850L,
	    "1900" : y1900L,
	    "1950" : y1950L,
	    "2000": y2000L,
	    "Present" : y2016L
	}; 
   
   
//toggle layers

L.control.layers(yearsLeft).addTo(map1);
 var arrayLength = layers.length;
var i = 0;
                    

// set the timer delay function to add layers to map, calling function name in HTML button
function gogogo () {           
   setTimeout(function () {    
      addLayer(layers[i], i); // adding one layer at a time from the array
      i++;                     
      if (i < arrayLength) {            
         gogogo();             
      }                        
   }, 3000); // delay between layer adds in milliseconds
};
gogogo();

});

//animate right side
$("#trigger2").click(function (){
 $("#map2").remove(); 
 var $newdiv1 = $( "<div id='map2'/>" ),
  newdiv2 = document.createElement( "div" );
 
$( "body" ).append( $newdiv1, [ newdiv2 ] );
 $('#body').append('#map2');
 var map = L.map('map2', {
	    center: [39.9926, -75.1652],
	    zoom: 12
	})
function addLayer(layer, name, zIndex) {
    layer
        .setZIndex(zIndex)
        .addTo(map);
}

//extent layers
var exLayers =  [
    y1762R = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'kirstenkurz.pp5ac5kc',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'	
   
   }),
		y1800R = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'kirstenkurz.pp5ai3e0',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'	
   
   }),
		y1855R = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'kirstenkurz.pp5al5gb',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'
    }), y1900R = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'kirstenkurz.pp5b2nmn',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'
    }), y1942R = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'kirstenkurz.pp5ap0fi',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'
	}), 
		y2000R = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 15,
			id: 'kirstenkurz.pp5b7478',
			token: 'pk.eyJ1Ijoia2lyc3Rlbmt1cnoiLCJhIjoiY2lnd2g4ZmdhMHM3d3c5bTUzaGVldzdsMyJ9.fsyf6xgVQAW23HPBuf8glQ'
	})

   ];

var yearsRight = {
	    "1762" : y1762R,
	    "1800" : y1800R,
	    "1855": y1855R,
	    "1900" : y1900R,
	    "1942" : y1942R,
	    "Present" : y2000R,
	};
   
   
   
//toggle layers

L.control.layers(yearsRight).addTo(map2);
 var arrayLength2 = exLayers.length;
var i = 0
                    

// set the timer delay function to add layers to map, calling function name in HTML button
function gogogo2 () {           
   setTimeout(function () {    
      addLayer(exLayers[i], i); // adding one layer at a time from the array
      i++;                     
      if (i < arrayLength2) {            
         gogogo2();             
      }                        
   }, 3000); // delay between layer adds in milliseconds
};
gogogo2();
});
