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


// smtpJS config

function sendEmail() {
    Email.send({
        SecureToken: "",
        Host: "smtp.elasticemail.com",
        Username: "username",
        Password: "password",
        To: 'them@website.com',
        From: document.getElementById('email').value,
        Subject: "Novo Contato",
        Body: "Nome: " + document.getElementById('name').value
        + "<br> Email: " + document.getElementById('email').value
        + "<br> Telefone: " + document.getElementById('phone').value
        + "<br> Mensagem: " + document.getElementById('message').value
    }).then(
        message => {
            if(message=='OK'){
                swal("Good job!", "Suas informações foram enviadas com sucesso!", "success");
            }
            else {
                swal("Error", "Suas informações não foram enviadas", "error");
            }
        }
    );
}