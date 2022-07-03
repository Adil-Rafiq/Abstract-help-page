// nav-bar
let burger = document.querySelector('.burger');
let navBar = document.querySelector('.nav-links');

burger.addEventListener('click', function(){
    navBar.classList.toggle('nav-active');
    this.classList.toggle('toggle');
})


// search bar
let searchIcon = document.querySelector('.search i');
let crossIcon = document.querySelector('.cross i');
let searchDiv = document.querySelector('.search');
let logoDiv = document.querySelector('.logo-div');
let cross = document.querySelector('.cross');
let searchInput = document.querySelector('.search-input');
let nav = document.querySelector('nav');
let menue = document.getElementsByClassName('menue');

searchIcon.addEventListener('click', function(){
    searchDiv.classList.toggle('menue-active');
    logoDiv.classList.toggle('menue-active');
    burger.classList.toggle('menue-active');
    nav.classList.toggle('searchNav-active');
    cross.classList.toggle('cross-active');
    searchInput.classList.toggle('searchInput-active');
})

crossIcon.addEventListener('click', function(){
    searchDiv.classList.remove('menue-active');
    logoDiv.classList.remove('menue-active');
    burger.classList.remove('menue-active');
    nav.classList.remove('searchNav-active');
    cross.classList.remove('cross-active');
    searchInput.classList.remove('searchInput-active');
})



// navLinks Animation
const navLinks = document.querySelectorAll('.nav-links li');
const divider = document.querySelector('.nav-links .divider');

burger.addEventListener('click', function(){
    navLinks.forEach(function(link, index){
        if (link.style.animation){
            link.style.animation = ''; // this is to reset the animation
        }
        else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + .5}s`;
        }
    })

    // animate the divider
    if (divider.style.animation){
        divider.style.animation = '';
    }
    else{
        divider.style.animation = `dividerFade 1s ease forwards 1s`;
    }
})


//------------------------------------------------------------//

let icons = document.querySelectorAll('.icon');
let texts = document.querySelectorAll('.text');


const iconObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        else {
            entry.target.classList.add('appearIcon');
            iconObserver.unobserve(entry.target);
        }
    })
}, {
    threshold: 0,
    rootMargin: '0px 0px -150px 0px'
})

icons.forEach(icon => {
    iconObserver.observe(icon);
})



const textObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        else {
            if (entry.target.style.animation) {
                entry.target.style.animation = '';
            }
            else {
                entry.target.style.animation = `animateText 0.5s ease forwards .3s`;
            }

            textObserver.unobserve(entry.target);
        }
    })
}, {
    threshold: 0,
    rootMargin: '0px 0px -150px 0px'
})

texts.forEach(text => {
    textObserver.observe(text);
})
