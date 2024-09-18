'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.send-us-a-message__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  form.reset();
});

const images = document.querySelectorAll('.slider__image');
const sliderLine = document.querySelector('.slider__line');
const buttonLeft = document.querySelector('.slider__button-left');
const buttonRight = document.querySelector('.slider__button-right');
const styles = window.getComputedStyle(buttonLeft);
const initPosition = styles.getPropertyValue('left');
let count = 0;
let width = 0;

function init() {
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';

  images.forEach(item => {
    item.style.width = width + 'px';
  });

  rollSlider();
}

window.addEventListener('resize', init);

init();

buttonLeft.addEventListener('click', function() {
  count--;
  buttonRight.style.opacity = '1';

  if (count < 0) {
    count = 0;
  }

  if (count === 0) {
    buttonRight.style.left = initPosition;
  }

  rollSlider();
});

buttonRight.addEventListener('click', function() {
  count++;
  buttonRight.style.left = +initPosition.slice(0, 2) + 48 + 'px';

  if (count >= images.length) {
    count = images.length - 1;
  }

  if (count === images.length - 1) {
    buttonRight.style.opacity = '0';
  }

  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}
