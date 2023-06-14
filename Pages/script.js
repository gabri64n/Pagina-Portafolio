//Animaciones
window.sr= ScrollReveal();

sr.reveal('.titular', {
	duration: 3000,
    origin: 'bottom',
    distance: '-100px'
});

sr.reveal('.sobre-mi', {
	duration: 3000,
    origin: 'right',
    distance: '-100px'
});

sr.reveal('.potato', {
	duration: 2000,
    origin: 'top',
    distance: '-100px'
});

sr.reveal('.ser', {
	duration: 3000,
    origin: 'bottom',
    distance: '-100px'
});

sr.reveal('.contenedor-porque', {
	duration: 3000,
    origin: 'top',
    distance: '-100px'
});

sr.reveal('.contenedor-publicacion', {
	duration: 3000,
    origin: 'top',
    distance: '-100px'
});

sr.reveal('.publicaciones', {
	duration: 3000,
    origin: 'top',
    distance: '-100px'
});

sr.reveal('.boton', {
	duration: 3000,
    origin: 'left',
    distance: '-100px'
});

//buton
  let mybutton = document.getElementById("myBtn");
      
      
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

//
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}