/*window.addEventListener('DOMContentLoaded', function() {
    var imagePath = window.location.pathname.split('/').pop();
    if (imagePath === 'hive') {
    var image1 = document.getElementById('image1');
      image1.src = './images/Hive_Cor.png';
    } else if (imagePath === 'general-energy') {
    var image2 = document.getElementById('image2');
      image2.src = './images/logo_big.png';
    }else if (imagePath === 'charge-back') {
        var image3 = document.getElementById('image3');
        image3.src = './images/chargeback.png';
      }else if (imagePath === 'lactec') {
        var image4 = document.getElementById('image4');
        image4.src = './images/lactec.png';
      }else if (imagePath === 'giusoft') {
        var image5 = document.getElementById('image5');
        image5.src = './images/giusoft.png';
      }else if (imagePath === 'adn-tech') {
        var image6 = document.getElementById('image6');
        image6.src = './images/ADNtech.png';
      }
  }); */



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
  
  
  