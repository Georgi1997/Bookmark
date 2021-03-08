const selectedItem = document.querySelectorAll(".features__item");
const selectedSlide = document.querySelectorAll(".features__slide");

const slideOnClick = function () {
  selectedItem.forEach((el, i, arr) => {
    el.addEventListener("click", () => {
      arr.forEach((item) => {
        item.classList.remove("is-selected-item");
      });
      el.classList.add("is-selected-item");
      selectedSlide.forEach((slide) => {
        slide.classList.remove("is-selected-slide");
      });
      selectedSlide[i].classList.toggle("is-selected-slide");
    });
  });

  //   slide on click
};
slideOnClick();

// FAQ ACCORDION FUNCTIONALITY

const upBtn = document.querySelectorAll(".upBtn");
const downBtn = document.querySelectorAll(".downBtn");
const faqPanel = document.querySelectorAll(".faq__panel");
const faqPanelParagraph = document.querySelectorAll(".faq__panel p");

const accordion = function () {
  downBtn.forEach((el, i, arr) => {
    el.addEventListener("click", () => {
      faqPanel[i].classList.toggle("faq-active");

      el.classList.toggle("rotate-btn");
    });
  });
};

accordion();

// NAVBAR RESPONSIVE

const burgerIcon = document.querySelector(".burger");
const navbar = document.querySelector(".navbar__nav");

const toggleNav = function () {
  burgerIcon.addEventListener("click", () => {
    navbar.classList.toggle("nav-active");
    burgerIcon.classList.toggle("triggerAnim");

    if (navbar.classList.contains("nav-active")) {
      document.querySelector(".navbar__logo img").src =
        "images/logo-bookmark2.svg";
    } else {
      document.querySelector(".navbar__logo img").src =
        "images/logo-bookmark.svg";
    }
  });
};

toggleNav();
