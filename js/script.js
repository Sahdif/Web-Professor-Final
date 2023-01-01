let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
   loop:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

// var swiper = new Swiper(".reviews-slider", {
//    grabCursor:true,
//    loop:true,
//    autoHeight:true,
//    spaceBetween: 20,
//    breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       700: {
//         slidesPerView: 2,
//       },
//       1000: {
//         slidesPerView: 3,
//       },
//    },
// });


// template id - template_fkxvz2hh
// service id - service_cby3uyi
// public key - e7z_yyFeP3SpxqYIS





function contact(event) {
   console.log('Hello')
   event.preventDefault();
   const msg = document.querySelector(".form-msg");

   msg.classList += " form-show";
   emailjs
     .sendForm(
       "service_cby3uyi",
       "template_fkxvz2h",
       event.target,
       "e7z_yyFeP3SpxqYIS"
     )
     .then(() => {
     })
     .catch(() => {
       alert(
         "The email service is temporarily unavailable. Please contact me directly on webprofessor@outlook.com "
       );
     });
 }