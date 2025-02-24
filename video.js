  const pages = [
    '2A.1', '2A.2', '2A.3',
    '2B.1', '2B.2', '2B.3',
    '2D.1', '2D.2', '2D.3',
    '2E.1', '2E.2', '2E.3'
  ];

  const titles = [
    /* 2A.1 */       '2A.1', 
    /* 2A.2 */       'HARRAPATUAK', 
    /* 2A.3 */       '2A.3',
    /* 2B.1 */       '2B.1', 
    /* 2B.2 */       '2B.2', 
    /* 2B.3 */       '2B.3',
    /* 2D.1 */       '2D.1', 
    /* 2D.2 */       '2D.2', 
    /* 2D.3 */       '2D.3',
    /* 2E.1 */       '2E.1', 
    /* 2E.2 */       '2E.2', 
    /* 2E.3 */       '2E.3'
  ];

  const url = [
    /* 2A.1 */       '2A.1', 
    /* 2A.2 */       'https://drive.google.com/file/d/1uXj7qQShYfi3ir--hIveJ6aKOY6D19Mc/preview', 
    /* 2A.3 */       '2A.3',
    /* 2B.1 */       '2B.1', 
    /* 2B.2 */       '2B.2', 
    /* 2B.3 */       '2B.3',
    /* 2D.1 */       '2D.1', 
    /* 2D.2 */       '2D.2', 
    /* 2D.3 */       '2D.3',
    /* 2E.1 */       '2E.1', 
    /* 2E.2 */       '2E.2', 
    /* 2E.3 */       '2E.3'
  ];

window.onload = function() {

    const params = new URLSearchParams(window.location.search);
    const page = params.get('videoid');

    if (!page) { //! if no attribute to default
        window.location.href = 'video_media.html?videoid=2A.1';
    }
    
    localStorage.setItem('videoid', page);
    console.log(page);

    var index = pages.indexOf(page);
    console.log('DEBUG: RAW INDEX: ' + index);

    document.getElementById('title').textContent = `${titles[index]}`;
    document.getElementById('video').src = `${url[index]}`;
    document.title = titles[index] + ' | 5. Zinemaldia';



};

function video(option) {
  if (option == 'next') {
    console.log('DEBUG: NEXT');
  } else if (option == 'previous') {
    console.log('DEBUG: PREVIOUS');
  }
};
    

function nextVideo() { //! Reescribir esto! y sin uso
  const currentPage = localStorage.getItem('currentPage');
  const currentIndex = pages.indexOf(currentPage);
  const nextIndex = (currentIndex + 1) % pages.length;
  const nextPage = pages[nextIndex];
  
  localStorage.setItem('currentPage', nextPage);
  window.location.href = 'video_media.html?videoid=' + nextPage;
}

function previousVideo() { //! sin uso
  const currentPage = localStorage.getItem('currentPage');
  const currentIndex = pages.indexOf(currentPage);
  const prevIndex = (currentIndex - 1 + pages.length) % pages.length;
  const prevPage = pages[prevIndex];
  
  localStorage.setItem('currentPage', prevPage);
  window.location.href = 'video_media.html?videoid=' + prevPage;
}