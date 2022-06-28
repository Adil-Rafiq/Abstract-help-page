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
