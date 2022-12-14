mapboxgl.accessToken = 'pk.eyJ1IjoicnA3OSIsImEiOiJjbGFvdHU0bzEwbDI5M29vYXllMjljNml0In0.dV3MSApeOtqS1Tw85YQGCg';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/rp79/clb2vdtsk000314jln4ibx9ts',
  bearing: 0,
  center: [-73.86903827899671, 40.740663448194056],
  zoom: 10,
  pitch: 0
});


var chapters = {
  'prologue': {
      bearing: 0,
      center: [-73.86903827899671, 40.740663448194056],
      zoom: 10,
      pitch: 0
  },

  'home': {
    bearing: 0,
    center: [-73.805019, 40.729539],
    zoom: 20,
    pitch: 0
  },

  'ps154': {
    bearing: 0,
    center: [-73.807316, 40.726544],
    zoom: 20,
    pitch: 0
  },

  'corona-park': {
    bearing: 0,
    center: [-73.850531, 40.746674],
    zoom: 20,
    pitch: 0
  },

  'fhhs': {
    bearing: 0,
    center: [-73.844974, 40.729761],
    zoom: 20,
    pitch: 0
  },

  'qc': {
    bearing: 0,
    center: [-73.81958, 40.736669],
    zoom: 20,
    pitch: 0
  },

  'meadow-lake': {
    bearing: 0,
    center: [-73.843952, 40.734312],
    zoom: 20,
    pitch: 0
  },

  'forest-hills': {
    bearing: 0,
    center: [-73.844951, 40.719628],
    zoom: 20,
    pitch: 0
  },

  'present': {
    bearing: 0,
    center: [-73.984, 40.748],
    zoom: 20,
    pitch: 0
  },
}


const geojson = {
  'type': 'FeatureCollection',
  'features': [
    {
      'type': 'Feature',
        'geometry': {
        'type': 'Point',
        'coordinates': [-73.805019, 40.729539]
      },
      'properties': {
        'title': 'Home',
        'description': 'coming soon'
      }
    },

    {
      'type': 'Feature',
        'geometry': {
        'type': 'Point',
        'coordinates': [-73.807316, 40.726544]
      },
      'properties': {
        'title': 'P.S. 154',
        'description': 'coming soon'
      }
    },

    {
      'type': 'Feature',
        'geometry': {
        'type': 'Point',
        'coordinates': [-73.850531, 40.746674]
      },
      'properties': {
        'title': 'Corona Park',
        'description': 'some text will be added here at some point, definitely before the due date which is on the 16th of december. now i am just going to add some more nonsense text to see what happens if there is a lot of text in a box and whether it will be able to show nicely when the box pops up',
        'image': './flushing-meadows-corona-park.JPG',
        'audio': './audio/levitation.mp3'
      }
    },

    {
      'type': 'Feature',
        'geometry': {
        'type': 'Point',
        'coordinates': [-73.843952, 40.734312]
      },
      'properties': {
        'title': 'Meadow Lake',
        'description': 'coming soon'
      }
    },

    {
      'type': 'Feature',
        'geometry': {
        'type': 'Point',
        'coordinates': [-73.844974, 40.729761]
      },
      'properties': {
        'title': 'Forest Hills High School',
        'description': 'coming soon'
      }
    },

    {
      'type': 'Feature',
        'geometry': {
        'type': 'Point',
        'coordinates': [-73.81958, 40.736669]
      },
      'properties': {
        'title': 'Queens College of the City University of New York',
        'description': 'coming soon'
      }
    },

    {
      'type': 'Feature',
        'geometry': {
        'type': 'Point',
        'coordinates': [-73.844951, 40.719628]
      },
      'properties': {
        'title': 'Forest Hills',
        'description': 'coming soon'
      }
    },

    {
      'type': 'Feature',
      'geometry': {
      'type': 'Point',
      'coordinates': [-73.984, 40.748]
    },
    'properties': {
      'title': 'Present',
      'description': 'coming soon'
    }
    }
  ]
};

// POP-UPS
// add markers to map
for (const feature of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'marker';
   
  // make a marker for each feature and add it to the map
  new mapboxgl.Marker(el)
  .setLngLat(feature.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML(
    `<h3><font color = #C9DBBA>${feature.properties.title}</h3>
    <p><img src= ${feature.properties.image} + width = 200></img></p>
    <p><img src= ${feature.properties.image} + width = 200></img></p>
    <p><audio src = ${feature.properties.audio} + style = width:200px + controls=controls</audio></p>
    <p><font color = #BEA2C2>${feature.properties.description}</p>`
    )
  )
  .addTo(map);
}

// SCROLLYTELLING
// On every scroll event, check which element is on screen
window.onscroll = function() {
  var chapterNames = Object.keys(chapters);
  for (var i = 0; i < chapterNames.length; i++) {
      var chapterName = chapterNames[i];
      if (isElementOnScreen(chapterName)) {
          setActiveChapter(chapterName);
          break;
      }
  }
};

var activeChapterName = 'baker';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}

// Toggling Between Pictures
function homeImages() {
  let button = document.getElementById('button');
  button.addEventListener("click", homeImagesToggle);
}

function homeImagesToggle() {
  let homePics = document.getElementById('homeImages');

  if(homePics.getAttribute('src') === "./meadow-lake/meadow-lake1.JPG")
  {
    homePics.setAttribute('src', "./meadow-lake/meadow-lake2.jpeg");
  }
  else
  {
    homePics.setAttribute('src', "./meadow-lake/meadow-lake1.JPG");
  }
}

homeImages();