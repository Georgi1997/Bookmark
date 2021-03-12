//variables
const navList = document.querySelector(".navbar__list");
const footer = document.querySelector(".footer");
const selectedItem = document.querySelectorAll(".features__item");
const selectedSlide = document.querySelectorAll(".features__slide");
const allSections = document.querySelectorAll(".section");
const upBtn = document.querySelectorAll(".upBtn");
const downBtn = document.querySelectorAll(".downBtn");
const faqPanel = document.querySelectorAll(".faq__panel");
const faqPanelParagraph = document.querySelectorAll(".faq__panel p");

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

//Reveal sections on scroll

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) {
    return;
  } else {
    entry.target.classList.remove("section-hidden");
  }
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.45,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

//nav links scroll to section

const linkScroll = function (e) {
  e.preventDefault();

  if (e.target.classList.contains(this)) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
};

navList.addEventListener("click", linkScroll.bind("navbar__link"));

footer.addEventListener("click", linkScroll.bind("footer__link"));
