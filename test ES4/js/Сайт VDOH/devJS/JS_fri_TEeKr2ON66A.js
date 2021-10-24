// !! JS Размеры, Прокрутка, Координаты. ФриПоЖиз - TEeKr2ON66A
// ! https://html5.by/blog/scroll-effects/

// ! РАЗМЕРЫ
function sizeFri() {
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
}
// sizeFri()

// ! УПРАВ ПРОКРУТКОЙ СТРАНИЦЫ
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
  window.scrollTo(0, 1870);
}
// scrollTo с опциями. ??? не раб в safary. позиции и прокрутка - плавно, авто
function setScrollToOpt() {
  window.scrollTo({
    top: 50,
    top: 75,
    top: 100,
    left: 0,
    behavior: "smooth",
  });
}
// scrollIntoView прокруч в опред место. атр top=true(по умолч), прокуч чтоб el был вверху. top=false - внизу
function setScrollIntoViewHead() {
  const headerScroll = document.querySelector("header");
  headerScroll.scrollIntoView({
    behavior: "smooth",
  });
}
function setScrollIntoViewOpt() {
  const footerScroll = document.querySelector(".centr-cont-");
  footerScroll.scrollIntoView(
    // ??? не раб - false с опц не выводит вниз, раб как при top=true
    {
      // top: false,
      // top: true,
      // block: "nearest",
      block: "start",
      behavior: "smooth",
    }
  );
}
// scrollIntoView с опциями. ??? не раб в safary
function setScrollIntoViewFoot() {
  const centrText = document.querySelector("footer");
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

// ! МЕТРИКА(РАЗМЕРЫ/ПОЛОЖЕНИЯ) ЕЛЕМ НА СТРАНИЦЕ
