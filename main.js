let img;

(function(window, document, undefined) {

    // code that should be taken care of right away
  
    window.onload = init;
  
    function init(){
      img = document.getElementById("kaja-kep");
    }
  
  })(window, document, undefined);

fetch('https://foodish-api.com/api/')
    .then(response => response.json())
    .then(data => img.src = data.image)
    .catch(error => console.log(error));
