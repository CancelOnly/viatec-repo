// carousel slideshow

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 10000); // Change image every 10 seconds
}

// toggle menu hamburguer

const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

// scroll sticky header
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})



function toggleMenu() {
    menuToggle.classList.remove('active');
    navigation.classList.remove('active');
}

// Scroll reveal

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

ScrollReveal().reveal(".contentBx", scrollRevealOption);
ScrollReveal().reveal(".title", scrollRevealOption);
ScrollReveal().reveal(".content", scrollRevealOption);
ScrollReveal().reveal(".contactForm", scrollRevealOption);
ScrollReveal().reveal(".cardContainer", scrollRevealOption);

//

// const logo = document.querySelector('.logo')

// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
//         navigation.style.maxHeight = "10px";
//         navigation.style.filter = "brightness(.6)";
//         logo.style.maxHeight = "180px";
//         logo.style.maxWidth = "280px";
//         logo.style.marginTop = "-3.5rem";
//         media.style.marginTop = "5rem";
//         media.style.fontSize = "1.3rem";
//     }

//     else {
//         navigation.style.maxHeight = "15px";
//         navigation.style.filter = "brightness(.9)";
//         logo.style.maxHeight = "375px";
//         logo.style.maxWidth = "450px";
//         logo.style.marginTop = "8rem";
//         media.style.marginTop = "25rem";
//         media.style.fontSize = "1.8rem";

//     }
// }