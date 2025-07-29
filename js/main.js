const btnScrollRight = document.getElementById("scroll-right");
const btnScrollLeft = document.getElementById("scroll-left");

const houseButton = document.getElementById("houseButton");
const villaButton = document.getElementById("villaButton");
const apartmentButton = document.getElementById("apartmentButton");

const housesContainer = document.getElementById("houses");
const villaContainer = document.getElementById("villa");
const apartmentContainer = document.getElementById("apartment");

btnScrollRight.addEventListener("click", buttonScrollRight);
btnScrollLeft.addEventListener("click", buttonScrollLeft);

houseButton.addEventListener("click", showHouses);
villaButton.addEventListener("click", showVilla);
apartmentButton.addEventListener("click", showApartment);

const card = document.querySelector(".property-card__item");
const cardWidth = card.offsetWidth;

function buttonScrollRight() {
  const container = getVisibleCards();
  container.scrollBy({
    left: cardWidth + 25,
    behavior: "smooth",
  });
  setTimeout(checkScrollButtons, 236);
}
function buttonScrollLeft() {
  const container = getVisibleCards();
  container.scrollBy({
    left: -cardWidth - 25,
    behavior: "smooth",
  });
  setTimeout(checkScrollButtons, 236);
}
function checkScrollButtons() {
  const container = getVisibleCards();
  const scrollLeft = container.scrollLeft;
  const scrollWidth = container.scrollWidth;
  const clientWidth = container.clientWidth;
  if (scrollLeft <= 50) {
    btnScrollLeft.classList.remove("nav__controls-btn--active");
    changeIcon("arrow-left", "asserts/images/icons/arrow-left.svg");
  } else {
    btnScrollLeft.classList.add("nav__controls-btn--active");
    changeIcon("arrow-left", "asserts/images/icons/chevron-left.svg");
  }
  if (scrollLeft + clientWidth >= scrollWidth - 50) {
    btnScrollRight.classList.remove("nav__controls-btn--active");
    changeIcon("arrow-right", "asserts/images/icons/chevron-right.svg");
  } else {
    btnScrollRight.classList.add("nav__controls-btn--active");
    changeIcon("arrow-right", "asserts/images/icons/arrow-right.svg");
  }
}

function changeIcon(iconId, iconPath) {
  document.getElementById(iconId).src = iconPath;
}
function showHouses() {
  housesContainer.classList.remove("property-card--hidden");
  villaContainer.classList.add("property-card--hidden");
  apartmentContainer.classList.add("property-card--hidden");
  houseButton.classList.add("nav__btn--active");
  villaButton.classList.remove("nav__btn--active");
  apartmentButton.classList.remove("nav__btn--active");
  checkScrollButtons();
}
function showVilla() {
  housesContainer.classList.add("property-card--hidden");
  villaContainer.classList.remove("property-card--hidden");
  apartmentContainer.classList.add("property-card--hidden");
  houseButton.classList.remove("nav__btn--active");
  villaButton.classList.add("nav__btn--active");
  apartmentButton.classList.remove("nav__btn--active");
  checkScrollButtons();
}
function showApartment() {
  housesContainer.classList.add("property-card--hidden");
  villaContainer.classList.add("property-card--hidden");
  apartmentContainer.classList.remove("property-card--hidden");
  houseButton.classList.remove("nav__btn--active");
  villaButton.classList.remove("nav__btn--active");
  apartmentButton.classList.add("nav__btn--active");
  checkScrollButtons();
}
function getVisibleCards() {
  if (!housesContainer.classList.contains("property-card--hidden")) {
    return housesContainer;
  }
  if (!villaContainer.classList.contains("property-card--hidden")) {
    return villaContainer;
  }
  if (!apartmentContainer.classList.contains("property-card--hidden")) {
    return apartmentContainer;
  }
}
