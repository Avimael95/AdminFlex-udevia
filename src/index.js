
// require('./styles/main.scss');
//otra forma de cargar los archivos
import './styles/main.scss';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import './static/Logo.png';
import './static/Logo.svg';
import './static/user.jpg';


const menuIzquierdo = document.querySelector('.menu-izquierdo');

menuIzquierdo.addEventListener('click', (e)=>{
    const claseMenu = e.target.classList;

    //Crear variable
    const pagina = document.querySelector('.pagina'),
          menuIzq = document.querySelector('.fa-arrow-left'),
          menuDer = document.querySelector('.fa-arrow-right');
    if(claseMenu.contains('fa-arrow-left')){
        menuIzq.style.display = 'none';
        menuDer.style.display = 'block';
        pagina.classList.add('no-menu');
    }
    else if(claseMenu.contains('fa-arrow-right')){
        
        menuIzq.style.display = 'block';
        menuDer.style.display = 'none';
        pagina.classList.remove('no-menu');
        pagina.classList.add('sidebar-ok');
    }
})

