`use strict`;

const card = document.querySelectorAll(`.card`);

const allCards = document.querySelector(`.all-cards`);

/*
card.forEach((el) =>
  el.addEventListener(`mousemove`, (e) => {
    //console.log(e.pageX, e.pageY);
    let horiz = (window.innerWidth / 3 - e.pageX) / 12;
    let verti = (window.innerHeight / 3 - e.pageY) / 10;
    card.forEach(
      (el) => (el.style.transform = `rotateX(${horiz}deg) rotateY(${verti}deg)`)
    );
  })
);

allCards;
*/
/*
allCards.addEventListener(`mousemove`, function (e) {
  let horiz = (window.innerWidth / 2 - e.pageX) / 10;
  let verti = (window.innerHeight / 2 - e.pageY) / 10;
  console.log(horiz, verti);

  if (e.target.classList.contains(`card`)) {
    const carr = e.target;

    card.forEach((el) => {
      if (el === carr)
        el.style.transform = `rotateX(${horiz}deg) rotateY(${verti}deg)`;
    });
  }
});
*/
const swiper = new Swiper(".swiper", {
  // Optional parameters

  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,

  // If we need pagination

  // Navigation arrows

  // And if we need scrollbar
});

////SLIDER  /////

//////// SLIDER ///////
const rightBtn = document.querySelector(`.right`);
const leftBtn = document.querySelector(`.left`);
const slideAll = document.querySelectorAll(`.slide`);
//////

let numm = 0;
const maxSlide = slideAll.length;
/////////
slideAll.forEach((el, i) => {
  el.style.transform = `translateX(${100 * i}%)`;
});
rightBtn.addEventListener(`click`, function () {
  if (numm === maxSlide - 1) {
    numm = 0;
  } else {
    numm++;
  }

  slideAll.forEach((el, i) => {
    el.style.transform = `translateX(${100 * (i - numm)}%)`;
  });
});
leftBtn.addEventListener(`click`, function () {
  if (numm === 0) {
    numm = maxSlide - 1;
  } else {
    numm--;
  }
  slideAll.forEach((el, i) => {
    el.style.transform = `translateX(${100 * (i - numm)}%)`;
  });
});
/////////////////
//SIDE MENU
////////////
const menu = document.querySelector(`.menu`);
const sideMenu = document.querySelector(`.side-menu`);
const close = document.querySelector(`.close-btn`);
menu.addEventListener(`click`, function () {
  sideMenu.style.width = `300px`;
});
close.addEventListener(`click`, function () {
  sideMenu.style.width = `0px`;
});
//////////////////
// SMOOTH SCROLLING
//////////////////
const links = document.querySelectorAll(`.link`);
links.forEach((el) => {
  el.addEventListener(`click`, function (e) {
    e.preventDefault();
    const id = this.getAttribute(`href`);
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
    sideMenu.style.width = `0px`;
  });
});
/////////////
//STICKY NAVIGACION
////////////////
const header = document.querySelector(`.header`);
const nav = document.querySelector(`.nav`);
///
const obfunc = function (entries) {
  console.log(entries);
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add(`sticky`);
  } else {
    nav.classList.remove(`sticky`);
  }
};

const obheader = new IntersectionObserver(obfunc, {
  root: null,
  threshold: 0,
});
obheader.observe(header);
//
const btnExplore = document.querySelector(`.main-button--2`);
const section2 = document.querySelector(`.section--2`);
btnExplore.addEventListener(`click`, function (e) {
  e.preventDefault();
  section2.scrollIntoView({ behavior: `smooth` });
});
