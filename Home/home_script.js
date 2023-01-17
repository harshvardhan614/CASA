// Navigation Bar 
const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', ()=> {
        navbar.classList.add('active');        
    })
}

if(close){
    close.addEventListener('click', ()=> {
        navbar.classList.remove('active');        
    })
}

$(".menu-bar").click(function () {
  navbar.classList.remove('active');      
});

// FAQ part 
const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) =>{
    faq.addEventListener('click', ()=> {
        faq.classList.toggle('active');
        console.log("faq clicked");
    })
});

// kitchen image owl-carousel 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        650:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// swiper section for main image carousel 
const swiper = new Swiper('.swiper-1', {
    // Optional parameters  
    autoplay:{
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,  
  
     
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });
  
  const swiper2 = new Swiper(".swiper-container-2", {
          // Optional parameters
          //   direction: 'vertical', remove it and add new slideperview
          autoplay:{
          delay: 2000,
          disableOnInteraction: false,
          },loop: true,
          slidesPerGroup: 1,
          speed: 2000,
          breakpoints: {
            470: {
              slidesPerView: 1,
              // slidesPerGroup:0,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            820: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          },        
  
          // And if we need scrollbar
          scrollbar: {
            el: ".swiper-scrollbar",
          },
        });

