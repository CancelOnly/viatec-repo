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