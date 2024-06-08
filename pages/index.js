let currentIndex = 0;
const viewportWidth = window.innerWidth;
const cards = document.querySelector('.participants__cards');
const cardsWith = cards.offsetWidth;
const cardWidth = document.querySelector('.participants__card').offsetWidth;
const totalCards = document.querySelectorAll('.participants__card').length;

const counter = document.querySelector('.participants__counter');
const slidesPerView = Math.floor(cardsWith / cardWidth);
const totalViews = Math.ceil(totalCards / slidesPerView);

console.log(slidesPerView);
console.log(totalViews);
console.log(totalCards);


function updateSlider() {

  if (viewportWidth < 1281) {
    cards.style.transform = `translateX(-${
      (currentIndex * 635.5) / totalViews
    }%)`;
    counter.textContent = `${currentIndex + 1}/6`;
    document.querySelector('.participants__control_type_prev').disabled =
      currentIndex === 0;
    document.querySelector('.participants__control_type_next').disabled =
      currentIndex === totalViews - 1;;
  } else {
    cards.style.transform = `translateX(-${currentIndex * 101.7}%)`;
    counter.textContent = `${currentIndex * 3 + 3}/6`;
    document.querySelector('.participants__control_type_prev').disabled =
      currentIndex === 0;
    document.querySelector('.participants__control_type_next').disabled =
      currentIndex === totalCards / 3 - 1;
  }
}

function nextSlide() {
  if (currentIndex < totalViews - 1) {
    currentIndex++;
    updateSlider();
    console.log(currentIndex);
    console.log(totalViews);
  } else {
    currentIndex = -1;
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
}

function goToSlide(index) {
  currentIndex = index;
  updateSlider();
}

setInterval(nextSlide, 4000);

updateSlider();

const slidesPerViewTransform = 2;
const totalSlides = document.querySelectorAll(
  '.transformation__grid-area'
).length;
const totalViewsTransform = Math.ceil(totalSlides / slidesPerViewTransform + 1);

function updateTransformSlider() {
  const cards = document.querySelector('.transformation__container');
  cards.style.transform = `translateX(-${(currentIndex * 530) / totalViewsTransform}%)`;

  updateIndicators();

  document.querySelector('.transformation__control_type_prev').disabled =
    currentIndex === 0;
  document.querySelector('.transformation__control_type_next').disabled =
    currentIndex === totalViewsTransform - 1;
}

function updateIndicators() {
  const indicators = document.querySelectorAll('.transformation__indicator');
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle(
      'transformation__indicator_active',
      index === currentIndex
    );
  });
}

function nextTransformSlide() {
  if (currentIndex < totalViewsTransform - 1) {
    currentIndex++;
    updateTransformSlider();
  }
}

function prevTransformSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateTransformSlider();
  }
}

function goToTransformSlide(index) {
  currentIndex = index;
  updateTransformSlider();
}

updateTransformSlider();
