 function tc(){
        var htmlElement = document.querySelector('html');
        var bb = document.getElementById('theme');
         var cc = bb.value;
        htmlElement.setAttribute('data-theme', cc)
    }
  tc()
