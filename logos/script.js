  window.addEventListener('DOMContentLoaded', function() {
    var imagePath = window.location.pathname.split('/').pop();
    var image = document.getElementById('image' + getPageNumber(imagePath));
    
    if (image) {
      image.classList.add('active');
    }
  });
  
  function getPageNumber(path) {
    switch (path) {
      case 'hive':
        return 1;
      case 'general-energy':
        return 2;
      case 'charge-back':
        return 3;
      case 'lactec':
        return 4;
      case 'giusoft':
        return 5;
      case 'adn-tech':
        return 6;
      default:
        return 1;
    }
  }
  
  
  