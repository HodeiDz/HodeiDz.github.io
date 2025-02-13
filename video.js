
//! NOT IN USE !!!!

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