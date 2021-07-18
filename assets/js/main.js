/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */

let indicatorPrev = null;
function createBackground() {
  let color;
  color = Math.round((Math.random() * 1000) % 255);
  return '#0' + color.toString(16);
};

function createSlides(slidesCount) {
  slides = document.createElement('ul');
  slides.setAttribute('class', 'slides');
  
  for (let i = 0; i < slidesCount; i++) {
    slidesItem = document.createElement('li');
    (i > 0) ? slidesItem.setAttribute('class', 'slides__item') : slidesItem.setAttribute('class', 'slides__item active');
    slidesItem.setAttribute('style', 'background: ' + createBackground());
    slidesLink = document.createElement('a');
    slidesLink.setAttribute('href', '#');
    slides.appendChild(slidesItem);
    slidesItem.appendChild(slidesLink);
  };
  carouselContainer.appendChild(slides);
};

function createIndikators(slidesCount) {
  indicators = document.createElement('div');
  indicators.setAttribute('class', 'indicators');
  carouselContainer.appendChild(indicators);
  
  for (let i = 0; i < slidesCount; i++) {
    indicatorsItem = document.createElement('span');
    (i > 0) ? indicatorsItem.setAttribute('class', 'indicators__item') : indicatorsItem.setAttribute('class', 'indicators__item active');
    indicatorsItem.setAttribute('data-slide-to', i);
    indicators.appendChild(indicatorsItem);
  };
};

function createControls() {
  controlsContainer = document.createElement('div');
  controlsContainer.setAttribute('class', 'controls');
  const classItemExtra = ['controls__prev', 'controls__next', 'controls__pause'];
  const classIconExtra = ['fa-chevron-left', 'fa-chevron-right', 'fa-play'];
  for (let i = 0; i < 3; i++) {
    controlsItem = document.createElement('div');
    controlsItem.setAttribute('class', 'controls__item');
    controlsItem.classList.add(classItemExtra[i])
    controlsIcon = document.createElement('i');
    controlsIcon.setAttribute('class', 'fas');
    controlsIcon.classList.add(classIconExtra[i])
    controlsContainer.appendChild(controlsItem);
    controlsItem.appendChild(controlsIcon);
    
  };
  carouselContainer.appendChild(controlsContainer);
  // controlsContainer.style.position = 'absolute';
};

function createStyle() {
  styleCarousel = document.createElement('style');
  styleCarouselInner = `
  .slides {
    position: relative;
  }
  .controls {
    position: relative;
  }
  .indicators {
    display: flex;
  }`;
  styleCarousel.innerHTML = styleCarouselInner;
  carouselContainer.appendChild(styleCarousel);
 
};

function indicatorsHandler(e) {
  let target = e.target;
  console.log(target);
  if (target && target.classList.contains('indicators__item')) {
    if (indicatorPrev !== null) indicatorPrev.removeAttribute('style');
    target.style.backgroundColor = 'red';
    indicatorPrev = target;
  };
};

function createListener() {
  indicatorsContainer = document.querySelector('.indicators');
  indicatorsContainer.addEventListener('click', indicatorsHandler);
};

function createCarousel(slidesCount) {
 carouselContainer = document.querySelector('#carousel');
 createSlides(slidesCount);
 createIndikators(slidesCount);
 createControls();
 createStyle();
 createListener();
}

createCarousel(10);