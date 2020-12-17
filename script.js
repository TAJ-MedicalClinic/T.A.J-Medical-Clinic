/****** Navigation bar activity ******/
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navigationLinks = document.getElementsByClassName('navigation-links')[0];

/* Whenever the element "button" is click toggle is active*/
toggleButton.addEventListener('click',() => {
  navigationLinks.classList.toggle('active')
});