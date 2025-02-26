  const pages = [
    '2A.1', '2A.2', '2A.3',
    '2B.1', '2B.2', '2B.3',
    '2D.1', '2D.2', '2D.3',
    '2E.1', '2E.2', '2E.3'
  ];

  const titles = [
    /* 2A.1 */       'GANESHEN HORTZA', 
    /* 2A.2 */       'HARRAPATUAK', 
    /* 2A.3 */       'LAPURKETA BIKAINA',
    /* 2B.1 */       'MAITEMINDUAK', 
    /* 2B.2 */       'PERTSONEN HEDAPENA',
    /* 2B.3 */       'USTEKABEA',
    /* 2D.1 */       'FATIMA', 
    /* 2D.2 */       'ENTRENAMENDUA', 
    /* 2D.3 */       'ZEIN DA ZURE IZENA?',
    /* 2E.1 */       'NOR DA HORI?', 
    /* 2E.2 */       'INGELESEKO AZTERKETAREN LAPURKETA', 
    /* 2E.3 */       'PIKOTZA ETA PALA'
  ];

  const url = [
    /* 2A.1 */       'https://drive.google.com/file/d/1_rCrkt-KUYU44PEvEhoc3Mza9awnZRpr/preview', 
    /* 2A.2 */       'https://drive.google.com/file/d/1uXj7qQShYfi3ir--hIveJ6aKOY6D19Mc/preview', 
    /* 2A.3 */       'https://drive.google.com/file/d/1qDRY4pSxlu5aV9Qtgd3j7Kz0BR2nEBfv/preview',
    /* 2B.1 */       'https://drive.google.com/file/d/1LR5BW_OCI6odUINDh8_gKi61wEKYP_Wv/preview', 
    /* 2B.2 */       'https://drive.google.com/file/d/1vB8oR1OpXwHnrzND5vJhC4aomWtg85lM/preview', 
    /* 2B.3 */       'https://drive.google.com/file/d/1Pq2l5f7IEkAcVvEEDGKLGgVqN-Wh2EKs/preview',
    /* 2D.1 */       'https://drive.google.com/file/d/1VLHAdq-5CfCZsj4T1ydbRswDLh0Ky08V/preview', 
    /* 2D.2 */       'https://drive.google.com/file/d/1IPTxN9rd80EQFXsYw3I2lzZQWYQnsrbu/preview', 
    /* 2D.3 */       'https://drive.google.com/file/d/1EKxkEXS86oXs3xARc32JuLw1YRl-Kqp0/preview',
    /* 2E.1 */       'https://drive.google.com/file/d/1ftohRsWjrBpvLLA_8RyBiZyM4_khZsqk/preview', 
    /* 2E.2 */       'https://drive.google.com/file/d/18rukqkpbJODJq_LRsP2DuiXcuZJPwC8G/preview', 
    /* 2E.3 */       'https://drive.google.com/file/d/1G4wyX-ifv_kBDhhCQbhNAxQfbotUgV0c/preview'
  ];

window.onload = function() {

    const params = new URLSearchParams(window.location.search);
    const page = params.get('videoid');

    if (!page) { //! if no attribute to default 
        window.location.href = 'video.html?videoid=2A.1';
    } 
    
    localStorage.setItem('currentPage', page);
    console.log(page);

    var index = pages.indexOf(page);
    console.log('DEBUG: RAW INDEX: ' + index);

    document.getElementById('title').textContent = `${titles[index]}`;
    document.getElementById('video').src = `${url[index]}`;
    document.title = titles[index] + ' | 5. Zinemaldia';
    requestAnimationFrame(checkFullscreen)



};


function video(option) {
  const currentIndex = pages.indexOf(localStorage.getItem('currentPage')); //! currentIndex = currentPage
  console.log('DEBUG: Raw Index:' + currentIndex)

  const nextPage = pages[currentIndex + 1]; 
  console.log('DEBUG: nextPage: ' + nextPage);

  const prevPage  = pages[currentIndex - 1]; 
  console.log('DEBUG: prevPage: ' + prevPage);

  if (option == 'next' && currentIndex < pages.length - 1) {

    window.location.href= 'video.html?videoid=' + nextPage;

    displayerror('next');

  } else if (option == 'previous' && currentIndex > 0) {

    window.location.href= 'video.html?videoid=' + prevPage;

    displayerror('prev')
  }
};


//____TEST___// //!mirar!

function checkFullscreen() {
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
  requestAnimationFrame(checkFullscreen);
}

function checkMinimize() {
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
    requestAnimationFrame(checkMinimize);

}
    
