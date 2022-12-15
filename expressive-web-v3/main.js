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
        'description1': 'This Must Be The Place by Talking Heads',
        'audio1': './home/this-must-be-the-place.mp3',
        'description2': 'Caribbean Blue by Enya',
        'audio2': './home/caribbean-blue.mp3'
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
        'description1': 'Strawberry Swing by Coldplay',
        'audio1': './ps154/strawberry-swing.mp3',
        'description2': 'Look Kids by Apparatjik',
        'audio2': './ps154/look-kids.mp3'
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
        'description1': 'Im a Kid by Jadu Heart',
        'audio1': './corona-park/im-a-kid.mp3',
        'description2': 'Ode to the Mets by The Strokes',
        'audio2': './corona-park/ode-to-the-mets.mp3'
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
        'description1': 'Adolescents by Incubus',
        'audio1': './fhhs/adolescents.mp3',
        'description2': 'Fluorescent Adolescent by Arctic Monkeys',
        'audio2': './fhhs/fluorescent-adolescent.mp3'
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
        'description1': 'RIP 2 My Youth by The Neighborhood',
        'audio1': './qc/rip2MyYouth.mp3',
        'description2': 'Talk by Coldplay',
        'audio2': './qc/talk.mp3'
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
        'description1': 'Sunday by Sia',
        'audio1': './meadow-lake/sunday.mp3',
        'description2': 'Levitation by Beach House',
        'audio2': './meadow-lake/levitation.mp3'
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
        'description1': 'Good Looking by Suki Waterhouse',
        'audio1': './forest-hills2/goodlooking.mp3',
        'description2': 'Automatic Stop by The Strokes',
        'audio2': './forest-hills2/automatic-stop.mp3'
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
      'description1': 'Gilded Lily by Cults Cults Cults',
      'audio1': './present/gildedlily.mp3',
      'description2': 'Crest of Waves by Coldplay',
      'audio2': './present/crest-of-waves.mp3'
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
    <p><font color = #BEA2C2>${feature.properties.description1}</p>
    <p><audio src = ${feature.properties.audio1} + style = width:200px + controls=controls</audio></p>
    <p><font color = #BEA2C2>${feature.properties.description2}</p>
    <p><audio src = ${feature.properties.audio2} + style = width:200px + controls=controls</audio></p>`
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

// TOGGLING BETWEEN PICTURES

//home
function homeImages() {
  let button = document.getElementById('homebutton');
  button.addEventListener("click", homeImagesToggle);
}

function homeImagesToggle() {
  let homePics = document.getElementById('homeImages');

  if(homePics.getAttribute('src') === "./home/home1.jpeg"){
    homePics.setAttribute('src', "./home/home2.jpeg");
  }
  else if(homePics.getAttribute('src') === "./home/home2.jpeg"){
    homePics.setAttribute('src', "./home/home3.jpeg");
  }
  else if(homePics.getAttribute('src') === "./home/home3.jpeg"){
    homePics.setAttribute('src', "./home/home4.jpeg");
  }
  else if(homePics.getAttribute('src') === "./home/home4.jpeg"){
    homePics.setAttribute('src', "./home/home5.jpeg");
  }
  else if(homePics.getAttribute('src') === "./home/home5.jpeg"){
    homePics.setAttribute('src', "./home/home6.jpeg");
  }
  else if(homePics.getAttribute('src') === "./home/home6.jpeg"){
    homePics.setAttribute('src', "./home/home7.jpeg");
  }
  else if(homePics.getAttribute('src') === "./home/home7.jpeg"){
    homePics.setAttribute('src', "./home/home8.jpeg");
  }
  else if(homePics.getAttribute('src') === "./home/home8.jpeg"){
    homePics.setAttribute('src', "./home/home9.jpeg");
  }
  else if(homePics.getAttribute('src') === "./home/home9.jpeg"){
    homePics.setAttribute('src', "./home/home10.jpeg");
  }
  else{
    homePics.setAttribute('src', "./home/home1.jpeg");
  }
}

homeImages();


//ps154
function ps154Images() {
  let button = document.getElementById('schoolbutton');
  button.addEventListener("click", ps154ImagesToggle);
}

function ps154ImagesToggle() {
  let elementaryPics = document.getElementById('ps154Images');

  if(elementaryPics.getAttribute('src') === "./ps154/ps154.jpeg"){
    elementaryPics.setAttribute('src', "./ps154/ps154-1.jpeg");
  }
  else if(elementaryPics.getAttribute('src') === "./ps154/ps154-1.jpeg"){
    elementaryPics.setAttribute('src', "./ps154/ps154-2.jpeg");
  }
  else if(elementaryPics.getAttribute('src') === "./ps154/ps154-2.jpeg"){
    elementaryPics.setAttribute('src', "./ps154/ps154-3.jpeg");
  }
  else if(elementaryPics.getAttribute('src') === "./ps154/ps154-3.jpeg"){
    elementaryPics.setAttribute('src', "./ps154/ps154-4.jpeg");
  }
  else if(elementaryPics.getAttribute('src') === "./ps154/ps154-4.jpeg"){
    elementaryPics.setAttribute('src', "./ps154/ps154-5.jpeg");
  }
  else if(elementaryPics.getAttribute('src') === "./ps154/ps154-5.jpeg"){
    elementaryPics.setAttribute('src', "./ps154/ps154-6.jpeg");
  }
  else{
    elementaryPics.setAttribute('src', "./ps154/ps154.jpeg");
  }
}

ps154Images();


//corona park
function coronaParkImages() {
  let button = document.getElementById('coronaparkbutton');
  button.addEventListener("click", coronaParkImagesToggle);
}

function coronaParkImagesToggle() {
  let coronaPics = document.getElementById('coronaParkImages');

  if(coronaPics.getAttribute('src') === "./corona-park/coronapark1.jpeg"){
    coronaPics.setAttribute('src', "./corona-park/coronapark2.jpeg");
  }
  else if(coronaPics.getAttribute('src') === "./corona-park/coronapark2.jpeg"){
    coronaPics.setAttribute('src', "./corona-park/coronapark3.jpeg");
  }
  else if(coronaPics.getAttribute('src') === "./corona-park/coronapark3.jpeg"){
    coronaPics.setAttribute('src', "./corona-park/coronapark4.jpeg");
  }
  else if(coronaPics.getAttribute('src') === "./corona-park/coronapark4.jpeg"){
    coronaPics.setAttribute('src', "./corona-park/coronapark5.jpeg");
  }
  else if(coronaPics.getAttribute('src') === "./corona-park/coronapark5.jpeg"){
    coronaPics.setAttribute('src', "./corona-park/coronapark6.jpeg");
  }
  else if(coronaPics.getAttribute('src') === "./corona-park/coronapark6.jpeg"){
    coronaPics.setAttribute('src', "./corona-park/coronapark7.jpeg");
  }
  else if(coronaPics.getAttribute('src') === "./corona-park/coronapark7.jpeg"){
    coronaPics.setAttribute('src', "./corona-park/coronapark8.jpeg");
  }
  else if(coronaPics.getAttribute('src') === "./corona-park/coronapark8.jpeg"){
    coronaPics.setAttribute('src', "./corona-park/coronapark9.jpeg");
  }
  else if(coronaPics.getAttribute('src') === "./corona-park/coronapark9.jpeg"){
    coronaPics.setAttribute('src', "./corona-park/coronapark10.jpeg");
  }
  else if(coronaPics.getAttribute('src') === "./corona-park/coronapark10.jpeg"){
    coronaPics.setAttribute('src', "./corona-park/coronapark11.jpeg");
  }
  else if(coronaPics.getAttribute('src') === "./corona-park/coronapark11.jpeg"){
    coronaPics.setAttribute('src', "./corona-park/coronapark12.jpeg");
  }
  else if(coronaPics.getAttribute('src') === "./corona-park/coronapark12.jpeg"){
    coronaPics.setAttribute('src', "./corona-park/coronapark13.jpeg");
  }
  else if(coronaPics.getAttribute('src') === "./corona-park/coronapark13.jpeg"){
    coronaPics.setAttribute('src', "./corona-park/coronapark14.jpeg");
  }
  else if(coronaPics.getAttribute('src') === "./corona-park/coronapark14.jpeg"){
    coronaPics.setAttribute('src', "./corona-park/coronapark15.jpeg");
  }
  else if(coronaPics.getAttribute('src') === "./corona-park/coronapark15.jpeg"){
    coronaPics.setAttribute('src', "./corona-park/coronapark16.jpeg");
  }
  else{
    coronaPics.setAttribute('src', "./corona-park/coronapark1.jpeg");
  }
}

coronaParkImages();


//fhhs
function fhhsImages() {
  let button = document.getElementById('fhhsbutton');
  button.addEventListener("click", fhhsImagesToggle);
}

function fhhsImagesToggle() {
  let fhhsPics = document.getElementById('fhhsImages');

  if(fhhsPics.getAttribute('src') === "./fhhs/fhhs1.jpeg"){
    fhhsPics.setAttribute('src', "./fhhs/fhhs2.jpeg");
  }
  else if(fhhsPics.getAttribute('src') === "./fhhs/fhhs2.jpeg"){
    fhhsPics.setAttribute('src', "./fhhs/fhhs3.jpeg");
  }
  else if(fhhsPics.getAttribute('src') === "./fhhs/fhhs3.jpeg"){
    fhhsPics.setAttribute('src', "./fhhs/fhhs4.jpeg");
  }
  else if(fhhsPics.getAttribute('src') === "./fhhs/fhhs4.jpeg"){
    fhhsPics.setAttribute('src', "./fhhs/fhhs5.jpeg");
  }
  else if(fhhsPics.getAttribute('src') === "./fhhs/fhhs5.jpeg"){
    fhhsPics.setAttribute('src', "./fhhs/fhhs6.jpeg");
  }
  else if(fhhsPics.getAttribute('src') === "./fhhs/fhhs6.jpeg"){
    fhhsPics.setAttribute('src', "./fhhs/fhhs7.jpeg");
  }
  else if(fhhsPics.getAttribute('src') === "./fhhs/fhhs7.jpeg"){
    fhhsPics.setAttribute('src', "./fhhs/fhhs8.jpeg");
  }
  else if(fhhsPics.getAttribute('src') === "./fhhs/fhhs8.jpeg"){
    fhhsPics.setAttribute('src', "./fhhs/fhhs9.jpeg");
  }
  else if(fhhsPics.getAttribute('src') === "./fhhs/fhhs9.jpeg"){
    fhhsPics.setAttribute('src', "./fhhs/fhhs10.jpeg");
  }
  else if(fhhsPics.getAttribute('src') === "./fhhs/fhhs10.jpeg"){
    fhhsPics.setAttribute('src', "./fhhs/fhhs11.jpeg");
  }
  else{
    fhhsPics.setAttribute('src', "./fhhs/fhhs1.jpeg");
  }
}

fhhsImages();


//queens college
function qcImages() {
  let button = document.getElementById('qcbutton');
  button.addEventListener("click", qcImagesToggle);
}

function qcImagesToggle() {
  let qcPics = document.getElementById('qcImages');

  if(qcPics.getAttribute('src') === "./qc/QC_1.jpeg"){
    qcPics.setAttribute('src', "./qc/QC_2.jpeg");
  }
  else if(qcPics.getAttribute('src') === "./qc/QC_2.jpeg"){
    qcPics.setAttribute('src', "./qc/QC_3.jpeg");
  }
  else if(qcPics.getAttribute('src') === "./qc/QC_3.jpeg"){
    qcPics.setAttribute('src', "./qc/QC_4.jpeg");
  }
  else if(qcPics.getAttribute('src') === "./qc/QC_4.jpeg"){
    qcPics.setAttribute('src', "./qc/QC_5.jpeg");
  }
  else if(qcPics.getAttribute('src') === "./qc/QC_5.jpeg"){
    qcPics.setAttribute('src', "./qc/QC_6.jpeg");
  }
  else if(qcPics.getAttribute('src') === "./qc/QC_6.jpeg"){
    qcPics.setAttribute('src', "./qc/QC_7.jpeg");
  }
  else if(qcPics.getAttribute('src') === "./qc/QC_7.jpeg"){
    qcPics.setAttribute('src', "./qc/QC_8.jpeg");
  }
  else if(qcPics.getAttribute('src') === "./qc/QC_8.jpeg"){
    qcPics.setAttribute('src', "./qc/QC_9.jpeg");
  }
  else if(qcPics.getAttribute('src') === "./qc/QC_9.jpeg"){
    qcPics.setAttribute('src', "./qc/QC_10.jpeg");
  }
  else if(qcPics.getAttribute('src') === "./qc/QC_10.jpeg"){
    qcPics.setAttribute('src', "./qc/QC_11.jpg");
  }
  else if(qcPics.getAttribute('src') === "./qc/QC_11.jpg"){
    qcPics.setAttribute('src', "./qc/QC_12.jpg");
  }
  else if(qcPics.getAttribute('src') === "./qc/QC_12.jpg"){
    qcPics.setAttribute('src', "./qc/QC_13.jpeg");
  }
  else if(qcPics.getAttribute('src') === "./qc/QC_13.jpeg"){
    qcPics.setAttribute('src', "./qc/QC_14.jpeg");
  }
  else if(qcPics.getAttribute('src') === "./qc/QC_14.jpeg"){
    qcPics.setAttribute('src', "./qc/QC_15.jpeg");
  }
  else{
    qcPics.setAttribute('src', "./qc/QC_1.jpeg");
  }
}

qcImages();


//meadow lake
function meadowlakeImages() {
  let button = document.getElementById('meadowlakebutton');
  button.addEventListener("click", meadowlakeImagesToggle);
}

function meadowlakeImagesToggle() {
  let meadowPics = document.getElementById('meadowlakeImages');

  if(meadowPics.getAttribute('src') === "./meadow-lake/meadow-lake1.jpeg"){
    meadowPics.setAttribute('src', "./meadow-lake/meadow-lake2.jpeg");
  }
  else if(meadowPics.getAttribute('src') === "./meadow-lake/meadow-lake2.jpeg"){
    meadowPics.setAttribute('src', "./meadow-lake/meadow-lake3.jpeg");
  }
  else if(meadowPics.getAttribute('src') === "./meadow-lake/meadow-lake3.jpeg"){
    meadowPics.setAttribute('src', "./meadow-lake/meadow-lake4.jpeg");
  }
  else if(meadowPics.getAttribute('src') === "./meadow-lake/meadow-lake4.jpeg"){
    meadowPics.setAttribute('src', "./meadow-lake/meadow-lake5.jpeg");
  }
  else if(meadowPics.getAttribute('src') === "./meadow-lake/meadow-lake5.jpeg"){
    meadowPics.setAttribute('src', "./meadow-lake/meadow-lake6.jpg");
  }
  else if(meadowPics.getAttribute('src') === "./meadow-lake/meadow-lake6.jpg"){
    meadowPics.setAttribute('src', "./meadow-lake/meadow-lake7.jpeg");
  }
  else{
    meadowPics.setAttribute('src', "./meadow-lake/meadow-lake1.jpeg");
  }
}

meadowlakeImages();


//forest hills part 2
function fhImages() {
  let button = document.getElementById('fhbutton');
  button.addEventListener("click", fhImagesToggle);
}

function fhImagesToggle() {
  let fhPics = document.getElementById('fhImages');

  if(fhPics.getAttribute('src') === "./forest-hills2/fh-1.jpeg"){
    fhPics.setAttribute('src', "./forest-hills2/fh-2.jpg");
  }
  else if(fhPics.getAttribute('src') === "./forest-hills2/fh-2.jpg"){
    fhPics.setAttribute('src', "./forest-hills2/fh-3.jpeg");
  }
  else if(fhPics.getAttribute('src') === "./forest-hills2/fh-3.jpeg"){
    fhPics.setAttribute('src', "./forest-hills2/fh-4.jpeg");
  }
  else if(fhPics.getAttribute('src') === "./forest-hills2/fh-4.jpeg"){
    fhPics.setAttribute('src', "./forest-hills2/fh-5.jpeg");
  }
  else if(fhPics.getAttribute('src') === "./forest-hills2/fh-5.jpeg"){
    fhPics.setAttribute('src', "./forest-hills2/fh-6.jpeg");
  }
  else if(fhPics.getAttribute('src') === "./forest-hills2/fh-6.jpeg"){
    fhPics.setAttribute('src', "./forest-hills2/fh-7.jpeg");
  }
  else if(fhPics.getAttribute('src') === "./forest-hills2/fh-7.jpeg"){
    fhPics.setAttribute('src', "./forest-hills2/fh-8.jpeg");
  }
  else if(fhPics.getAttribute('src') === "./forest-hills2/fh-8.jpeg"){
    fhPics.setAttribute('src', "./forest-hills2/fh-9.jpeg");
  }
  else if(fhPics.getAttribute('src') === "./forest-hills2/fh-9.jpeg"){
    fhPics.setAttribute('src', "./forest-hills2/fh-10.jpeg");
  }
  else if(fhPics.getAttribute('src') === "./forest-hills2/fh-10.jpeg"){
    fhPics.setAttribute('src', "./forest-hills2/fh-11.jpeg");
  }
  else if(fhPics.getAttribute('src') === "./forest-hills2/fh-11.jpeg"){
    fhPics.setAttribute('src', "./forest-hills2/fh-12.jpeg");
  }
  else if(fhPics.getAttribute('src') === "./forest-hills2/fh-12.jpeg"){
    fhPics.setAttribute('src', "./forest-hills2/fh-13.jpeg");
  }
  else if(fhPics.getAttribute('src') === "./forest-hills2/fh-13.jpeg"){
    fhPics.setAttribute('src', "./forest-hills2/fh-14.jpeg");
  }
  else if(fhPics.getAttribute('src') === "./forest-hills2/fh-14.jpeg"){
    fhPics.setAttribute('src', "./forest-hills2/fh-15.jpeg");
  }
  else{
    fhPics.setAttribute('src', "./forest-hills2/fh-1.jpeg");
  }
}

fhImages();


//present
function presentImages() {
  let button = document.getElementById('presentbutton');
  button.addEventListener("click", presentImagesToggle);
}

function presentImagesToggle() {
  let presentPics = document.getElementById('presentImages');

  if(presentPics.getAttribute('src') === "./present/present1.jpeg"){
    presentPics.setAttribute('src', "./present/present2.jpeg");
  }
  else if(presentPics.getAttribute('src') === "./present/present2.jpeg"){
    presentPics.setAttribute('src', "./present/present3.jpeg");
  }
  else if(presentPics.getAttribute('src') === "./present/present3.jpeg"){
    presentPics.setAttribute('src', "./present/present4.jpg");
  }
  else if(presentPics.getAttribute('src') === "./present/present4.jpg"){
    presentPics.setAttribute('src', "./present/present5.jpeg");
  }
  else if(presentPics.getAttribute('src') === "./present/present5.jpeg"){
    presentPics.setAttribute('src', "./present/present6.jpeg");
  }
  else if(presentPics.getAttribute('src') === "./present/present6.jpeg"){
    presentPics.setAttribute('src', "./present/present7.jpeg");
  }
  else if(presentPics.getAttribute('src') === "./present/present7.jpeg"){
    presentPics.setAttribute('src', "./present/present8.jpeg");
  }
  else if(presentPics.getAttribute('src') === "./present/present8.jpeg"){
    presentPics.setAttribute('src', "./present/present9.jpeg");
  }
  else if(presentPics.getAttribute('src') === "./present/present9.jpeg"){
    presentPics.setAttribute('src', "./present/present10.jpeg");
  }
  else if(presentPics.getAttribute('src') === "./present/present10.jpeg"){
    presentPics.setAttribute('src', "./present/present11.jpeg");
  }
  else if(presentPics.getAttribute('src') === "./present/present11.jpeg"){
    presentPics.setAttribute('src', "./present/present12.jpeg");
  }
  else if(presentPics.getAttribute('src') === "./present/present12.jpeg"){
    presentPics.setAttribute('src', "./present/present13.jpeg");
  }
  else if(presentPics.getAttribute('src') === "./present/present13.jpeg"){
    presentPics.setAttribute('src', "./present/present14.jpeg");
  }
  else{
    presentPics.setAttribute('src', "./present/present1.jpeg");
  }
}

presentImages();
