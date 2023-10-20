const dropDownMenuElement = document.querySelector(".language_drop-down-menu");
const selectedTestElement = document.querySelector(".div-selected_language");
const unselectedTestElements = document.querySelector(
  ".div-unselected_language"
);
const liElement = document.querySelectorAll(".ul_language--unselected li");
const selectedLiElement = document.querySelector(".ul_language--selected li");

/**
 * show and hide popup
 */
function toggleElementVisibility() {
  if (unselectedTestElements.style.display === "none") {
    unselectedTestElements.style.display = "block"; // Показываем элемент
  } else {
    unselectedTestElements.style.display = "none"; // Скрываем элемент
  }
}

selectedTestElement.addEventListener("click", toggleElementVisibility);

/**
 * hide when language choosen
 */
function closePopapAfterChoosingLang(event) {
  const targetedElement = event.target;
  if (unselectedTestElements.style.display === "block") {
    unselectedTestElements.style.display = "none";
  }
  const text = targetedElement.textContent;
  targetedElement.textContent = selectedLiElement.textContent;
  selectedLiElement.textContent = text;
}

liElement.forEach((element) => {
  element.addEventListener("click", closePopapAfterChoosingLang);
});

/**
 * hide when clicked outside popup
 */
document.addEventListener("click", (e) => {
  const withinBoundaries = e.composedPath().includes(dropDownMenuElement);
  if (unselectedTestElements.style.display === "block" && !withinBoundaries) {
    unselectedTestElements.style.display = "none";
  }
});

/**
 * show and hide menu for mobile version
 */
const navBtn = document.querySelector(".header_nav-btn");
const overlay = document.querySelector(".overlay-mobile-menu");

navBtn.addEventListener("click", () => {
  overlay.classList.toggle("overlay-mobile-menu--active");
  navBtn.classList.toggle("header_nav-btn--active");
  document.body.classList.toggle("no-scroll");
});

overlay.addEventListener("click", () => {
  overlay.classList.toggle("overlay-mobile-menu--active");
  document.body.classList.toggle("no-scroll");
});
