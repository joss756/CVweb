var root=document.querySelector(':root');

function toggleMenu(){

    var button = document.querySelector('.gg-menu-oreos');

    button.classList.toggle('gg-close')

    var menú = document.getElementsByClassName('js-menu');

    menú[0].classList.toggle("active");

}

function fixPhotoOnScroll(){

    var photo = document.getElementById("photo-profile");

    this.scrollY > 50 ? photo.style.marginTop = 0 : photo.style.marginTop = '-7rem';

}

function showImage(image){

    var newImage=document.createElement('img');

    newImage.src=image.src;newImage.removeAttribute('onclick');

    var modal=document.getElementById('preview');

    modal.classList.toggle('showModal');modal.appendChild(newImage);

}

var root=document.querySelector(':root');

function toggleMenu(){

    var button = document.querySelector('.gg-menu-oreos');

    button.classList.toggle('gg-close')

    var menú = document.getElementsByClassName('js-menu');

    menú[0].classList.toggle("active");

}

function fixPhotoOnScroll(){

    var photo = document.getElementById("photo-profile");

    this.scrollY > 50 ? photo.style.marginTop = 0 : photo.style.marginTop = '-7rem';

}

window.addEventListener("scroll", fixPhotoOnScroll, false);

function showImage(image){

    var newImage=document.createElement('img');

    newImage.src=image.src;

    newImage.removeAttribute('onclick');

    var modal=document.getElementById('preview');

    modal.classList.toggle('showModal');

    var existinImage=modal.querySelector('img');

    if(existinImage){

        modal.removeChild(existinImage);

    }

    modal.appendChild(newImage);    

}



function cerrarModal(){

    var modal = document.getElementById('preview');

    modal.classList.remove('showModal')

}