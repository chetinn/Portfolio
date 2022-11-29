const page = document.querySelector('.page');

 function spinner () {

    
   setTimeout(() => {
       page.style.display = 'none';
   }, "3000");
}


window.onload = spinner();





