

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active')

    globBoxc.classList.remove('active')
    loginForm.classList.remove('active')
    navbar.classList.remove('active')
    tstbtn.classList.remove('active')
    tstbtnr.classList.remove('active')
}



let globBox = document.querySelector('.glob-box');
document.querySelector('#cart-btn',).onclick = () =>{

    searchForm.classList.remove('active')
    globBoxc.classList.toggle('active')
    loginForm.classList.remove('active')
    navbar.classList.remove('active')

    tstbtn.classList.remove('active')
    tstbtnr.classList.remove('active')
}



let globBoxc = document.querySelector('.glob-box');
document.querySelector('#cancel-btn').onclick = () =>{
    globBoxc.classList.toggle('active')
}


let loginForm = document.querySelector('.login-parent');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active')
    searchForm.classList.remove('active')
    globBoxc.classList.remove('active')
    navbar.classList.remove('active')
    tstbtn.classList.toggle('active')
    tstbtnr.classList.remove('active')
    forgotpart.classList.remove('active')

}

let tstbtn = document.querySelector('.login-part');
document.querySelector('#loginchild-btn').onclick = () =>{
    tstbtn.classList.toggle('active')
    tstbtnr.classList.remove('active')
    forgotpart.classList.remove('active')
}

let tstbtnr = document.querySelector('.register-part');
document.querySelector('#register-btn').onclick = () =>{
    tstbtnr.classList.toggle('active')
    tstbtn.classList.remove('active')
    forgotpart.classList.remove('active')
}

let forgotpart = document.querySelector('.forgot-part');
document.querySelector('#forgt').onclick = () =>{
    forgotpart.classList.toggle('active')
    tstbtn.classList.remove('active')
    tstbtnr.classList.remove('active')
}

let tstbtnr2 = document.querySelector('.register-part');
document.querySelector('#register-btn2').onclick = () =>{
    tstbtnr2.classList.toggle('active')
    tstbtn.classList.remove('active')
    forgotpart.classList.remove('active')
}

let tstbtn2 = document.querySelector('.login-part');
document.querySelector('#loginchild-btn2').onclick = () =>{
    tstbtn2.classList.toggle('active')
    tstbtnr.classList.remove('active')
    forgotpart.classList.remove('active')
}

let forgotpart1 = document.querySelector('.forgot-part');
document.querySelector('#forgt1').onclick = () =>{
    forgotpart1.classList.toggle('active')
    tstbtn.classList.remove('active')
    tstbtnr.classList.remove('active')
}






let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active')
    loginForm.classList.remove('active')
    searchForm.classList.remove('active')
    globBoxc.classList.remove('active')

    tstbtn.classList.remove('active')
    tstbtnr.classList.remove('active')
}


window.onscroll = () =>{
    searchForm.classList.remove('active')
    globBoxc.classList.remove('active')
    loginForm.classList.remove('active')
    navbar.classList.remove('active')

    tstbtn.classList.remove('active')
    tstbtnr.classList.remove('active')
}

















var swiper = new Swiper(".product-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
      delay: 4100,
      disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});



/*---dark theme----*/



var toggleBtn = document.querySelector('.theme-toggle-btn')
var body = document.querySelector('body')

window.onload = function(){
const theme = localStorage.getItem('theme')  || 'right'

if(theme === 'dark'){
    body.classList.add('dark')
    toggleBtn.classList.add('dark')
}
}
toggleBtn.addEventListener('click', function () {
    const isDark = body.classList.contains('dark')

    body.classList.toggle('dark')
    toggleBtn.classList.toggle('dark')

    localStorage.setItem('theme', isDark ? 'light' : 'dark')
})
/*---dark theme end----*/