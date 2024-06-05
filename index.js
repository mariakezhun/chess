let currentIndex = 0;

function updateSlider() {
  const viewportWidth = window.innerWidth;
  console.log(viewportWidth);
  const slidesPerView = 1;
  const totalCards = document.querySelectorAll(".participants__card").length;
  console.log(totalCards);
  const counter = document.querySelector(".participants__counter");

  const totalViews = Math.ceil(totalCards / slidesPerView);

  const cards = document.querySelector(".participants__cards");

  if (viewportWidth < 376) {
    console.log("Ширина видимой области 375 и меньше");
    cards.style.transform = `translateX(-${
      (currentIndex * 635.5) / totalViews
    }%)`;
    counter.textContent = `${currentIndex + 1}/6`;
    document.querySelector(".participants__control_type_prev").disabled =
      currentIndex === 0;
    document.querySelector(".participants__control_type_next").disabled =
      currentIndex === totalCards - 1;
  } else {
    cards.style.transform = `translateX(-${currentIndex * 101.7}%)`;
    console.log("Ширина видимой области больше 375");
    counter.textContent = `${currentIndex * 3 + 3}/6`;
    document.querySelector(".participants__control_type_prev").disabled =
      currentIndex === 0;
    document.querySelector(".participants__control_type_next").disabled =
      currentIndex === totalCards / 3 - 1;
  }
}

function nextSlide() {
  if (currentIndex < totalViews - 0) {
    currentIndex++;
    updateSlider();
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

updateSlider();

const slidesPerView = 2;
const totalSlides = document.querySelectorAll(
  ".transformation__grid-area"
).length;
console.log(totalSlides);
const totalViews = Math.ceil(totalSlides / slidesPerView + 1);
console.log(totalViews);
// let currentIndex = 0;

function updateTransformSlider() {
  const cards = document.querySelector(".transformation__container");
  cards.style.transform = `translateX(-${(currentIndex * 530) / totalViews}%)`;

  updateIndicators();

  document.querySelector(".transformation__control_type_prev").disabled =
    currentIndex === 0;
  document.querySelector(".transformation__control_type_next").disabled =
    currentIndex === totalViews - 1;
}
console.log(currentIndex);

function updateIndicators() {
  const indicators = document.querySelectorAll(".transformation__indicator");
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle(
      "transformation__indicator_active",
      index === currentIndex
    );
  });
}

function nextTransformSlide() {
  if (currentIndex < totalViews - 1) {
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
