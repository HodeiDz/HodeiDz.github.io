//_____________FOR_VIDEO_PAGES___________//

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
  function checkEnter(event) {
    if (event.key === "Enter") {
      login();
    }
  }

//______________FOR_CONTROL_PANEL_______________//

  function updateSlideIdDisplay() { // ? acutaliza el slideid en la pantalla 
    const slideid = localStorage.getItem('slideid');
    document.getElementById('slideid-display').textContent = `Aurkezpen orria: ${slideid}`;
  }


  function next(){
    if (localStorage.getItem('Displayed') === 'ppt'){

      const currentSlideId = localStorage.getItem('slideid');

      const nextSlideId = parseInt(currentSlideId) + 1;
      localStorage.setItem('slideid', nextSlideId);
      console.log("SET: slideid -> " + nextSlideId);

      updateSlideIdDisplay();

    } else {
      localStorage.setItem('next', 'true');
      console.log("SET: Next -> true");

      setTimeout(() => {
        if(localStorage.getItem('next') === 'false'){
          console.log("next worked succesfully");
        } else {
            console.log('ERROR: No changes recived, reverting changes');
            localStorage.setItem('next', 'false');
          }
        }, 2500);
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
    } else if(option === 'vid'){
        resetVideo();
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

  if (option === 'ppt') {
      pptButton.classList.remove('unselected');
      pptButton.classList.add('selected');

      vidButton.classList.remove('selected');
      vidButton.classList.add('unselected');

      localStorage.setItem('Displayed', 'ppt');
      document.getElementById('vidTitle').style.color = 'gray';

      vidFullscreen.classList.add('unabled');
      vidMinimize.classList.add('unabled');

      document.getElementById('slideid-display').style.color = '#005FCC';
      
  } else if (option === 'vid') {
    pptButton.classList.remove('selected');
    pptButton.classList.add('unselected');

    vidButton.classList.remove('unselected');
    vidButton.classList.add('selected');

    localStorage.setItem('Displayed', 'vid');
    document.getElementById('vidTitle').style.color = 'black';

    vidFullscreen.classList.remove('unabled');
    vidMinimize.classList.remove('unabled');

    document.getElementById('slideid-display').style.color = 'gray';

  }
}