const navbar = document.getElementById('navbar');
const aboutSection = document.getElementById('about');

window.addEventListener('scroll', () => {
  const aboutTop = aboutSection.offsetTop;

  if (window.scrollY >= aboutTop) {
    navbar.classList.add('white-bg');
  } else {
    navbar.classList.remove('white-bg');
  }
});



var typed = new Typed('.animation', {
      strings: ["Developer ","Larry Daniels","Designer "],
     typeSpeed: 50,           
    backSpeed: 80,           
    backDelay: 1500,        
    startDelay: 300,        
    loop: true,             
    });



$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
      {
            items: 1,
            autoplay: true,
            nav: false,
            dots: true,
            loop: true,

      }
  );
});



 const portfolioModal = document.getElementById('portfolioModal');
  portfolioModal.addEventListener('show.bs.modal', function (event) {
    let button = event.relatedTarget; 
    let index = button.getAttribute('data-index'); // which image clicked
    let carousel = bootstrap.Carousel.getInstance(document.getElementById('portfolioCarousel'));
    if (!carousel) {
      carousel = new bootstrap.Carousel(document.getElementById('portfolioCarousel'));
    }
    carousel.to(index); // jump to that image
  });