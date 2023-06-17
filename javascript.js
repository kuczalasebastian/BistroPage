/* Change image in background */
window.addEventListener('DOMContentLoaded', function() {
    let images = document.querySelectorAll('#background-images img');
    let currentIndex = 0;
    let currentImage = images[currentIndex];
    currentImage.style.opacity = 1;
  
    function changeImage() {
      currentImage.style.opacity = 0;
      currentIndex = (currentIndex + 1) % images.length;
      currentImage = images[currentIndex];
      currentImage.style.opacity = 1;
    }
  
    setInterval(changeImage, 5000);
  });

  /* Choose and show section from 3 main */
  function showContent(index) {
    const contentItems = document.getElementsByClassName('content-item');
    const buttons = document.getElementsByTagName('button');
  
    for (let i = 0; i < contentItems.length; i++) {
      contentItems[i].classList.remove('active');
      buttons[i].classList.remove('active');
    }
    contentItems[index].classList.add('active');
    buttons[index].classList.add('active');
  }

  /* Show or hide menu */
  function toggleMenu() {
    const menu = document.getElementById("mainmenu");
    const buttons = document.getElementById("button-container");

    menu.classList.toggle("menu-open");
    buttons.classList.toggle("show-button");
    buttons.classList.toggle("hide-button");
  }
  