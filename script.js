
// NAVBAR
const toggleButton = document.getElementsByClassName("navbar-toggle")[0];
const navbarLinks = document.getElementsByClassName("navbar-links");
const navbar = document.getElementsByClassName('navbar')[0];
const body = document.getElementsByTagName('body')[0];
const html = document.getElementsByTagName('html')[0];
toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('navbar-full');
    body.classList.toggle('scroll-disabled');
    html.classList.toggle('scroll-disabled');
    for (var iterasi = 0; iterasi < navbarLinks.length; iterasi++) {
        navbarLinks[iterasi].classList.toggle('active');
    }
});

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

if (vw >= 992) {
    navbar.classList.remove('navbar-full');
    body.classList.remove('scroll-disabled');
    html.classList.remove('scroll-disabled');
    for (var iterasi = 0; iterasi < navbarLinks.length; iterasi++) {
        navbarLinks[iterasi].classList.remove('active');
    }
}

console.log(vw);