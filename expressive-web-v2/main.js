mapboxgl.accessToken = 'pk.eyJ1IjoicnA3OSIsImEiOiJjbGFvdHU0bzEwbDI5M29vYXllMjljNml0In0.dV3MSApeOtqS1Tw85YQGCg';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/rp79/clb2vdtsk000314jln4ibx9ts',
});

const geojson = {
  'type': 'FeatureCollection',
  'features': [
    {
      'type': 'Feature',
        'geometry': {
        'type': 'Point',
        'coordinates': [-73.850531, 40.746674]
      },
      'properties': {
        'title': 'Flushing Meadows Corona Park',
        'description': 'some text will be added here at some point, definitely before the due date which is on the 16th of december. now i am just going to add some more nonsense text to see what happens if there is a lot of text in a box and whether it will be able to show nicely when the box pops up',
        'image': './flushing-meadows-corona-park.JPG',
        'audio': './levitation.mp3'
      }
    },

    {
      'type': 'Feature',
        'geometry': {
        'type': 'Point',
        'coordinates': [-73.818501, 40.754065]
      },
      'properties': {
        'title': 'Bowne Street Gurdwara',
        'description': 'coming soon'
      }
    },

    {
      'type': 'Feature',
        'geometry': {
        'type': 'Point',
        'coordinates': [-73.804704, 40.747828]
      },
      'properties': {
        'title': 'Kissena Park',
        'description': 'coming soon'
      }
    },

    {
      'type': 'Feature',
        'geometry': {
        'type': 'Point',
        'coordinates': [-73.825297, 40.742968]
      },
      'properties': {
        'title': 'Queens Library - Queensboro Hill',
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
        'coordinates': [-73.845118, 40.719955]
      },
      'properties': {
        'title': 'Forest Hills Station House',
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
        'coordinates': [-73.809843, 40.732477]
      },
      'properties': {
        'title': 'Queens Library - Pomonok Library',
        'description': 'coming soon'
      }
    },

    {
      'type': 'Feature',
        'geometry': {
        'type': 'Point',
        'coordinates': [-73.805684, 40.731456]
      },
      'properties': {
        'title': 'P.S./M.S. 200',
        'description': 'coming soon'
      }
    },

    {
      'type': 'Feature',
        'geometry': {
        'type': 'Point',
        'coordinates': [-73.8141111, 40.729218]
      },
      'properties': {
        'title': 'Pomonok',
        'description': 'coming soon'
      }
    },

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
        'coordinates': [-73.813632, 40.725692]
      },
      'properties': {
        'title': 'Kew Gardens Hills',
        'description': 'coming soon'
      }
    },

    {
      'type': 'Feature',
        'geometry': {
        'type': 'Point',
        'coordinates': [-73.93869, 40.71928]
      },
      'properties': {
        'title': 'Brooklyn Steel',
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
        'title': 'Forest Hills Station Square',
        'description': 'coming soon'
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
        'coordinates': [-73.891111, 40.746667]
      },
      'properties': {
        'title': 'Jackson Heights',
        'description': 'coming soon'
      }
    }

    
  ]
};

// ORIGINAL THAT WORKS IN REGARDS TO EMBEDDING IMAGE, AUDIO, AND TEXT!!!
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
    `<h3><font color = #C9DBBA>${feature.properties.title}</h3><p><img src= ${feature.properties.image} + width = 200></img></p><p><audio src = ${feature.properties.audio} + style = width:200px + controls=controls</audio></p><p><font color = #BEA2C2>${feature.properties.description}</p>`
    )
  )
  .addTo(map);
}