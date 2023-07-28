function openPage(pageId) {
    const pages = document.getElementsByClassName('page');
    for (let i = 0; i < pages.length; i++) {
      pages[i].classList.remove('show');
    }
  
    const pageToShow = document.getElementById(pageId);
    pageToShow.classList.add('show');
  }


  