// РАЗМЕРЫ
// доступные размеры окна браузера, только для чтения (с лево до скрола - тег html). clientWidth и clientHeight
const mainEl = document.documentElement;
const mainElWidth = mainEl.clientWidth;
const mainElHeight = mainEl.clientHeight;
console.log("доступ. Width:" + mainElWidth);
console.log("доступ. Height:" + mainElHeight);
// вместе со скролом
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
console.log("скрол Width:" + windowWidth);
console.log("скрол Height:" + windowHeight);
// макс ширина и высота - общий блок в body
let scrolдlWidth = Math.max(
  document.body.scrollWidth,
  document.documentElement.scrollWidth,
  document.body.offsetWidth,
  document.documentElement.offsetWidth,
  document.body.clientWidth,
  document.documentElement.clientWidth
);
let scrolдlHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);
console.log("весь Width:" + scrolдlWidth);
console.log("весь Height:" + scrolдlHeight);
// получ кол-во прокруч пикселей. только для чтения
const scrollTop = window.pageYOffset;
const scrollLeft = window.pageXOffset;
console.log("scrollTop:" + scrollTop);
console.log("scrollLeft:" + scrollLeft);

// УПРАВ ПРОКРУТКОЙ СТРАНИЦЫ
// добавл к текущему
function setScrollBy() {
  window.scrollBy(0, 50);
  // ??? не раб - в консоли undefined
  // const windScrollTop = window.scrollYOffset;
  // var windScrollTop = window.scrollYOffset;
  // let windScrollTop = window.scrollYOffset;
  // console.log("ScrollBy:" + windScrollTop);
  // console.log(windScrollTop);
}
// прокруч на абсолют коорд (pageX, pageY). тоже самое что scroll()
function setScrollTo() {
  window.scrollTo(0, 150);
}
// scrollTo с опциями. не раб в safary. позиции и прокрутка - плавно, авто
function setScrollToOpt() {
  window.scrollTo({
    top: 500,
    left: 0,
    behavior: "smooth",
  });
}
// scrollIntoView прокруч в опред место. атр top=true(по умолч), прокуч чтоб el был вверху. top=false - внизу
function setScrollIntoViewHead() {
  const headerScroll = document.querySelector("header");
  headerScroll.scrollIntoView();
}
function setScrollIntoViewFoot() {
  const footerScroll = document.querySelector("footer");
  footerScroll.scrollIntoView(false);
}
// scrollIntoView с опциями. не раб в safary
function setScrollIntoViewOpt() {
  const centrText = document.querySelector(".centr-text");
  centrText.scrollIntoView({
    // block - вертикаль позиция. center(умолч), start, end, nearest - до `ближайший` видимости
    block: "nearest",
    // inline - горизонт. nearest(умолч)
    inline: "nearest",
    // прокрутка плавно
    behavior: "smooth",
  });
}
// запрет прокрутки. убирает scroll
function setEnableDesableScroll() {
  // полностью убирает scroll
  // document.body.style.overflow = "hidden";
  // переключения scrolla
  document.body.classList.toggle("scroll-lock");
}

// МЕТРИКА(РАЗМЕРЫ/ПОЛОЖЕНИЯ) ЕЛЕМ НА СТРАНИЦЕ


// ! своё
// ??? не раб - не знаю как поставить .miniAside вертикально по середине доступного окна браузера
function clickMinAside2() {
  const mainEl = document.documentElement;
  const mainElHeight = mainEl.clientHeight;
  console.log("доступ. Width:" + mainElWidth);
  console.log("доступ. Height:" + mainElHeight);
  let miniAside = document.querySelectorAll(".miniAside");
  miniAside.document.body.style.left = function () {
    // calc(100% / clientHeight(););
    clientHeight() / 2;
    clientHeight();
    miniAside.clientHeight();
  };
}
// clickMinAside2();
// нажатие на кнопки .miniAside
function clickMinAside() {
  let jsScroll = document.querySelectorAll(".js-scroll");
  jsScroll.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const jScr1 = document.querySelector("#jScr1");
      const jScr2 = document.querySelector("#jScr2");
      const jScr3 = document.querySelector("#jScr3");
      const jScr4 = document.querySelector("#jScr4");
      const jScr5 = document.querySelector("#jScr5");
      const jScr6 = document.querySelector("#jScr6");
      const jScr7 = document.querySelector("#jScr7");
      // if (btn == jScr1) {
      //   setScrollBy();
      // }
      if (btn == jScr1) setScrollBy();
      if (btn == jScr2) setScrollTo();
      if (btn == jScr3) setScrollToOpt();
      if (btn == jScr4) setScrollIntoViewHead();
      if (btn == jScr5) setScrollIntoViewFoot();
      if (btn == jScr6) setScrollIntoViewOpt();
      if (btn == jScr7) setEnableDesableScroll();
    });
  });
}
clickMinAside();
