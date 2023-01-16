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

// for home-main slider 
const slides = document.querySelectorAll(".img-slide");
var counter = 0;

slides.forEach(
  (slide, index) => {
    slide.style.left = `${index * 100}%`
  }
)

const goPrev = () =>{
    counter--;
    console.log("me clicked")
    slideImage()
}

const goNext = () =>{
    counter++;
    console.log("clicked")
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            console.log("clicked me")
            if(counter >4  ){
                counter === 0;
                slide.style.transform = `translateX(-0% )`
            }
            slide.style.transform = `translateX(-${counter * 100}% )`
        }
    )
}


