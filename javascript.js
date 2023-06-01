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
  