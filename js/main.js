$(document).ready(function () {
   $('.slider').slick({
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 4,
      speed: 500,
      draggable: false
   });
})

let clk = document.querySelector('.lnk');
let lnk = document.querySelector('.links');

clk.addEventListener('click', () => {
   lnk.classList.add('links-active')
});

document.addEventListener('click', (e) => {
   if (!(e.target.closest('.links') || e.target.closest('.lnk'))) {
      lnk.classList.remove('links-active');
   }
})
