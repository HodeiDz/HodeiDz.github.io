//_____________FOR_VIDEO_PAGES___________//

function VideoUpdate(videoOption) { // ? Update video page
  const pages = [
    '2A.1', '2A.2', '2A.3',
    '2B.1', '2B.2', '2B.3',
    '2D.1', '2D.2', '2D.3',
    '2E.1', '2E.2', '2E.3'
  ];

  if(!localStorage.getItem('currentPage')){
    console.log('INFO: current page not, setting to default');
    localStorage.setItem('currentPage', '2A.1')
  }

  const currentIndex = pages.indexOf(localStorage.getItem('currentPage')); //! currentIndex = currentPage
  console.log('DEBUG: Raw Index:' + currentIndex)

  if (currentIndex === -1) {
    console.log('ERROR/ALERT: Current page not found in pages list');
    return;
  }

  const prevPage  = pages[currentIndex - 1];
  const currentPage = pages[currentIndex];
  const nextPage = pages[currentIndex + 1];

  
  console.log('INFO: Pev page: ' + prevPage + ', Current page: ' + currentPage + ', Next page: ' + nextPage);
  

  if (videoOption === 'prev' && currentIndex > 0) {
    // const prevPage = pages[currentIndex - 1];
    localStorage.setItem('currentPage', prevPage); 
    console.log("SET: currentPage -> " + prevPage);

    localStorage.setItem('prevPage', pages[pages.indexOf(prevPage) -1]);
    localStorage.setItem('nextPage', pages[pages.indexOf(prevPage) +1]);

  } else if (videoOption === 'next' && currentIndex < pages.length - 1) {
    // const nextPage = pages[currentIndex + 1];
    localStorage.setItem('currentPage', nextPage);
    console.log("SET: currentPage -> " + nextPage);

    localStorage.setItem('prevPage', pages[pages.indexOf(nextPage) -1]); 
    localStorage.setItem('nextPage', pages[pages.indexOf(nextPage) +1]);

  } else {
    console.log('ALERT: Cannot add or decrease nº of pages');
  }

  console.log('INFO: VideoUpdate done!');
  updateVideoDisplay();

}

  if (window.location.pathname.startsWith('/Video%20Media/')) {
    console.log('Video page detected');
        
  var nextPage;
  var prevPage;
  var nextPageEdited;
  var prevPageEdited;
  var currentPage;

  window.onload = function() {                //? VIDEO VARIABLES 

      if (window.location.pathname.endsWith('2A.1.html')) {
          prevPage = null;
          nextPage = '2A.2.html';
          console.log('"2A.1.html"');

      } else if (window.location.pathname.endsWith('2A.2.html')) {
          prevPage = '2A.1.html';
          nextPage = '2A.3.html';
          console.log('"2A.2.html"');

      } else if (window.location.pathname.endsWith('2A.3.html')) {
          nextPage = '2B.1.html';
          prevPage = '2A.2.html';
          console.log('"2A.3.html"');

      } else if (window.location.pathname.endsWith('2B.1.html')) {
          nextPage = '2B.2.html';
          prevPage = '2A.3.html';
          console.log('"2B.1.html"');

      } else if (window.location.pathname.endsWith('2B.2.html')) {
          nextPage = '2B.3.html';
          prevPage = '2B.1.html';
          console.log('"2B.2.html"');

      } else if (window.location.pathname.endsWith('2B.3.html')) {
          nextPage = '2D.1.html';
          prevPage = '2B.2.html';
          console.log('"2B.3.html"');

      } else if (window.location.pathname.endsWith('2D.1.html')) {
          nextPage = '2D.2.html';
          prevPage = '2B.3.html';
          console.log('"2D.1.html"');

      } else if (window.location.pathname.endsWith('2D.2.html')) {
          nextPage = '2D.3.html';
          prevPage = '2D.1.html';
          console.log('"2D.2.html"');

      } else if (window.location.pathname.endsWith('2D.3.html')) {
          nextPage = '2E.1.html';
          prevPage = '2D.2.html';
          console.log('"2D.3.html"');

      } else if (window.location.pathname.endsWith('2E.1.html')) {
          nextPage = '2E.2.html';
          prevPage = '2D.3.html';
          console.log('"2E.1.html"');

      } else if (window.location.pathname.endsWith('2E.2.html')) {
          nextPage = '2E.3.html';
          prevPage = '2E.1.html';
          console.log('"2E.2.html"');

      } else if (window.location.pathname.endsWith('2E.3.html')) {
          nextPage = null;
          prevPage = '2E.2.html';
          console.log('"2E.3.html"');
      }

      //? Guardar variables en localStorage

      currentPage = window.location.pathname;
      currentPage = currentPage.replace('/Video%20Media/', '');
      currentPage = currentPage.replace('.html', '');

      prevPageEdited = prevPage.replace('.html', '');

      nextPageEdited = nextPage.replace('.html', '');

      localStorage.setItem('currentPage', currentPage);
      localStorage.setItem('prevPage', prevPageEdited);
      localStorage.setItem('nextPage', nextPageEdited);
}

document.onkeydown = function(e) {          //? Cambio de paginas con flechas
    if (e.keyCode == 39) { // next page
        if (nextPage == null) {
            console.log('no next page');
        } else {
        window.location.href = nextPage;
    }}

    if (e.keyCode == 37) {  // previous page
        if (prevPage == null) {
            console.log('no prev page');
        } else {
        window.location.href = prevPage;
    }}
};

setInterval(function(){                     //? checkeo de next
    if (localStorage.getItem('next') == 'true') {
        console.log('next')
        if (nextPage == null) {
            console.log('no next page');
        } else {
        window.location.href = nextPage;
        }
        localStorage.setItem('next', 'false')
    }
}, 1000); 

setInterval(function(){                     //? checkeo de prev(ious)
    if (localStorage.getItem('prev') == 'true') {
        console.log('prev')
        if (prevPage == null) {
            console.log('no prev page');
        } else {
        window.location.href = prevPage;
        }
        localStorage.setItem('prev', 'false')
    }
}, 1000); 

setInterval(function() { // ? FULSCREEN
    if (localStorage.getItem('fullscreen') === 'true') {
        console.log('Fullscreen detected');
        
        const iframe = document.getElementById('video');
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
            });
        } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
            iframe.webkitRequestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
            });
        } 
        localStorage.setItem('fullscreen', 'false');
    }
}, 1000); // Check every 1 second

setInterval(function() { // ? EXIT FULLSCREEN
    if (localStorage.getItem('minimize') === 'true') {
        console.log('EXIT FULSCREEN detected');
        
        const iframe = document.getElementById('video');
        if (document.exitFullscreen) {
            document.exitFullscreen().catch(err => {
                console.error(`Error attempting to exit fullscreen mode: ${err.message} (${err.name})`);
            });
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen().catch(err => {
                console.error(`Error attempting to exit fullscreen mode: ${err.message} (${err.name})`);
            });
        } 
        localStorage.setItem('minimize', 'false');
                   
        }
        }, 1000);


  }
//_____________FOR_LOGIN_________________//

  function login() {
    const currentPassword = document.getElementById("password").value;
    const correctPassword = "1234"; // 1234 pasahitza oso ohikoa da, buscabas y has encuentrado, aqui tienes la pasahitza :) (tampoco me queria liar mucho con esto)

    if (currentPassword === correctPassword) {
      if (tocontrol === true){
        window.location.href = "control_panel.html";
      }
      if (tomusic === true){
        window.location.href = "music.html";
      }
      if(tovideo === true){
        window.location.href = "video.html";
      }
    } else {
      alert("Pasahitza okerra");
    }
  }
  function checkEnter(event) { // ? Search for enter key
    if (event.key === "Enter") {
      login();
    }
  }

//______________FOR_CONTROL_PANEL_______________//

  function updateSlideIdDisplay() { // ? acutaliza el slideid en la pantalla 
    const slideid = localStorage.getItem('slideid');
    document.getElementById('slideid-display').textContent = `Aurkezpen orria: ${slideid}`;
  }

  function updateVideoDisplay(option) { // ? acutaliza el video en la pantalla
    if(localStorage.getItem('prevPage') === 'undefined' || localStorage.getItem('prevPage') === null) {
      
      document.getElementById('prevPage-display').textContent = `-`;
    } else {
      document.getElementById('prevPage-display').textContent = `${localStorage.getItem('prevPage')}`;
    }

    document.getElementById('currentPage-display').textContent = `${localStorage.getItem('currentPage')}`;

    if(localStorage.getItem('nextPage') === 'undefined' || localStorage.getItem('nextPage') === null){

      document.getElementById('nextPage-display').textContent = `-`;
      
    } else {
      document.getElementById('nextPage-display').textContent = `${localStorage.getItem('nextPage')}`;
    }

    console.log('INFO: updateVideoDisplay runned');


  }


  function next(){
    if (localStorage.getItem('Displayed') === 'ppt'){

      const currentSlideId = localStorage.getItem('slideid');

      const nextSlideId = parseInt(currentSlideId) + 1;
      localStorage.setItem('slideid', nextSlideId);
      console.log("SET: slideid -> " + nextSlideId);

      updateSlideIdDisplay();

    } else if (localStorage.getItem('Displayed') === 'vid') {
      VideoUpdate('next');

/*     } else {
      localStorage.setItem('next', 'true'); //! REVISAR IMPORTANTE
      console.log("SET: Next -> true");

      setTimeout(() => {
        if(localStorage.getItem('next') === 'false'){
          console.log("next worked succesfully");
        } else {
            console.log('ERROR: No changes recived, reverting changes');
            localStorage.setItem('next', 'false');
          }
        }, 2500); */
    } else {
      console.log('ERROR: Invalid option');
    }
    }


  function prev(){
    if(localStorage.getItem('Displayed') === 'ppt'){
  
      const currentSlideId = localStorage.getItem('slideid');

      if(currentSlideId === '1'){
        console.log('ERROR: Cannot go back from first slide');
        return;
      }

      const prevSlideId = parseInt(currentSlideId) - 1;
      localStorage.setItem('slideid', prevSlideId);
      console.log("SET: slideid -> " + prevSlideId);

      updateSlideIdDisplay();

    } else if (localStorage.getItem('Displayed') === 'vid'){
      
      VideoUpdate('prev')

    } else {
      localStorage.setItem('prev', 'true');
      console.log("SET: prev -> true");

      setTimeout(() => {
        if(localStorage.getItem('next') === 'false'){
          console.log("prev worked succesfully");
        } else {
            console.log('ERROR: No changes recived, reverting changes');
            localStorage.setItem('prev', 'false');
          }
        }, 2500);}
  }

  function reset(option){
    if(option === 'slide'){
      localStorage.setItem('slideid', '1');
      updateSlideIdDisplay();
      console.log('RESET: slideid -> 1');
    } else if(option === 'video'){
        localStorage.setItem('prevPage', undefined);
        localStorage.setItem('currentPage', '2A.1');
        localStorage.setItem('nextPage', '2A.2');
        updateVideoDisplay();
    }
  }

  function fullscreen(){
    localStorage.setItem('fullscreen', 'true');
    console.log("fulscreen on");

    setTimeout(() => {
      if(localStorage.getItem('fullscreen') === 'false'){
        console.log("fullscreen worked succesfully");
      } else {
          console.log('ERROR: No changes recived, reverting changes');
          localStorage.setItem('fullscreen', 'false');
        }
      }, 2500);
  }

  function minimize(){
    localStorage.setItem('minimize', 'true');
    console.log("minimize on");

    setTimeout(() => {
      if(localStorage.getItem('minimize') === 'false'){
        console.log("minimize worked succesfully");
      } else {
          console.log('ERROR: No changes recived, reverting changes');
          localStorage.setItem('minimize', 'false');
        }
      }, 2500);

  } 

  //______________pptx_control_________________//

  document.querySelectorAll('.slidebutton button').forEach(button => {
    button.addEventListener('click', function() { //! WTF hay que mirar esto
        const slideid = this.getAttribute('slideid');
        localStorage.setItem('slideid', slideid);
    });
});


function Displayed(option) { // elegir que se va a mostrar en la pantalla
  const pptButton = document.getElementById('ppt-button');
  const vidButton = document.getElementById('vid-button');

  if (option === 'ppt') { //! Boton de diapositivas
      pptButton.classList.remove('unselected');
      pptButton.classList.add('selected');

      vidButton.classList.remove('selected');
      vidButton.classList.add('unselected');

      document.getElementById('reset1').classList.remove('unabled');
      document.getElementById('reset2').classList.add('unabled');

      document.getElementById('prevPage-display').style.color = 'gray'; 
      document.getElementById('currentPage-display').style.color = 'gray';
      document.getElementById('nextPage-display').style.color = 'gray';
      
      document.getElementById('slideid-display').style.color = '#005FCC';
      
      localStorage.setItem('Displayed', 'ppt');
      document.getElementById('vidTitle').style.color = 'gray';

      vidFullscreen.classList.add('unabled');
      vidMinimize.classList.add('unabled');

      
    } else if (option === 'vid') { //! Boton de video
      pptButton.classList.remove('selected');
      pptButton.classList.add('unselected');
      
      vidButton.classList.remove('unselected');
      vidButton.classList.add('selected');
      
      document.getElementById('reset1').classList.add('unabled');
      document.getElementById('reset2').classList.remove('unabled');
      
      localStorage.setItem('Displayed', 'vid');
      document.getElementById('vidTitle').style.color = 'black';
      
      vidFullscreen.classList.remove('unabled');
      vidMinimize.classList.remove('unabled');
      
        // ? habilitar info diapositivas

      document.getElementById('prevPage-display').style.color  = '#5084be';                               
      document.getElementById('currentPage-display').style.color  = '#005FCC';                               
      document.getElementById('nextPage-display').style.color  = '#5084be';  
     
      document.getElementById('slideid-display').style.color = 'gray';

  }
}

//By: Hodei Dz for: OLabide Ikastola 