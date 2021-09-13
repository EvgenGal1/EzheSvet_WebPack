// !! JS Размеры, Прокрутка, Координаты. ФриПоЖиз - TEeKr2ON66A
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
  // чтоб прижать .header(position:fixed) добавил .empty_block. теперь x0 смещён на 150px
  // window.scrollTo(0, 0);
}
// scrollTo с опциями. не раб в safary. позиции и прокрутка - плавно, авто
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
  // попыька .empty_block.
  // )- 150 компенс  + 'px';
}
// scrollIntoView с опциями. не раб в safary
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

// !!! своё
// ??? не раб - не знаю как поставить .mini-aside вертикально по середине доступного окна браузера
function clickMinAside2() {
  const mainEl = document.documentElement;
  const mainElHeight = mainEl.clientHeight;
  // console.log("доступ. Width:" + mainElWidth);
  // console.log("доступ. Height:" + mainElHeight);
  let miniAside = document.querySelectorAll(".mini-aside");
  miniAside.document.body.style.left = function () {
    // calc(100% / clientHeight(););
    clientHeight() / 2;
    clientHeight();
    miniAside.clientHeight();
  };
}
// clickMinAside2();
// ! нажатие на кнопки .mini-aside(мини меню с боку на скролах)
function clickMinAside() {
  let jsScroll = document.querySelectorAll(".ma-bl__js-scroll");
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
      if (btn == jScr2) setScrollIntoViewHead();
      if (btn == jScr3) setScrollToOpt();
      if (btn == jScr4) setScrollIntoViewOpt();
      if (btn == jScr5) setScrollTo();
      if (btn == jScr6) setScrollIntoViewFoot();
      if (btn == jScr7) setEnableDesableScroll();
    });
  });
}
clickMinAside();

// !
function scrolHead() {
  // !1
  var headerLogo = document.querySelector(".header-logo");
  var headerMenu = document.querySelector(".header-menu");
  var headerMenuTop = document.querySelector(".menu__top");
  var headerMenuBottom = document.querySelector(".menu__bottom");
  var headerLang = document.querySelector(".header-menu__icon");
  var headerBurger = document.querySelector(".header-burger");
  // !1
  var header = document.querySelector("header");
  var helloys = document.querySelector(".helloys");
  document.addEventListener("scroll", () => {
    // if (window.pageYOffset >= 150) {
    //   header.classList.add("fixed_menu");
    // } else {
    //   header.classList.remove("fixed_menu");
    // }
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled >= 100) {
      console.log(0);
      header.style.height = "50px";
      helloys.style.paddingTop = "140px";
      header.classList.add("fixed_menu");
      // !2
      // headerMenuTop.classList.add("done").appendChild(headerBurger)
      let hedDon = headerMenuTop.classList.add("done");
      // hedDon.append(headerBurger);
      // headerMenuTop.classList.add("done").insertAdjacentHTML(headerBurger)
      // !2
    } else {
      header.style.height = "150px";
      helloys.style.paddingTop = "0px";
      header.classList.remove("fixed_menu");
    }
  });
}
scrolHead();

// !!
// function adaptive_header(w, h) {
function adaptive_header() {
  console.log("adaptheader");
  var headerLogo = document.querySelector(".header-logo");
  var headerMenu = document.querySelector(".header-menu");
  var headerMenuTop = document.querySelector(".menu__top");
  var headerMenuBottom = document.querySelector(".menu__bottom");
  var headerLang = document.querySelector(".header-menu__icon");
  var headerBurger = document.querySelector(".header-burger");

  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  console.log(1);
  if (scrolled >= 75) {
    console.log(2);
    // е\и в языках нет класса done
    if (!headerMenuTop.classList.contains("done")) {
      console.log(3);
      // то блоку header-top-lang добавит класс "done" и добавить его в блок header-burger
      // headerLang.addClass("done").appendTo(headerBurger);
      // headerMenuTop.classList.add("done").insertAdjacentHTML(headerBurger)//.appendTo(headerBurger);
      headerMenuTop.classList.add("done").appendChild(headerBurger); //.appendTo(headerBurger);
      console.log(4);
    }
    console.log(5);
  }
  // else {
  //   // е\и в языках есть класса done
  //   if (headerLang.hasClass("done")) {
  //     // то у блока headerLang добавит класс "done" и добавить его в начало блока (prepend - `перед именем`) header-top
  //     headerLang.removeClass("done").prependTo($(".header-top"));
  //   }
  // }

  // е\и ширина меньше 767
  // if (w < 767) {
  //   // е\и у меню нет класса done
  //   if (!headerMenu.hasClass("done")) {
  //     // то блоку header-bottom-menu добавит класс "done" и добавить его в блок header-burger
  //     headerMenu.addClass("done").appendTo(headerBurger);
  //   }
  // } else {
  //   // перебираем все элементы each (перебор `каждого` элем. коллекции jQuery, выполняя при этом функцию для каждого из них)
  //   $.each(headerMenu, function (index, val) {
  //     // е/и у эл. класс --right
  //     if ($(this).hasClass("header-bottom-menu--right")) {
  //       // е/и есть класс done
  //       if ($(this).hasClass("done")) {
  //         // у этих эл.
  //         $(this)
  //           //удалить done
  //           .removeClass("done")
  //           // и переместить в header-bottom__column в позицию 3 (так как индекс 2, счёт 3)
  //           .prependTo($(".header-bottom__column").eq(2));
  //       }
  //     } else {
  //       // е/и
  //       if ($(this).hasClass("done")) {
  //         $(this)
  //           //удалить done
  //           .removeClass("done")
  //           // и переместить в header-bottom__column в позицию 1 (так как индекс 0, счёт 1)
  //           .prependTo($(".header-bottom__column").eq(0));
  //       }
  //     }
  //   });
  // }
  // !!!

  // // блок скрытого бургера
  // var headerBurger = $(".header-burger");
  // // класс языков
  // var headerLang = $(".header-top-lang");
  // // класс меню
  // var headerMenu = $(".header-bottom-menu");
  // // е\и ширина меньше 767
  // if (w < 767) {
  //   // е\и в языках нет класса done
  //   if (!headerLang.hasClass("done")) {
  //     // то блоку header-top-lang добавит класс "done" и добавить его в блок header-burger
  //     headerLang.addClass("done").appendTo(headerBurger);
  //   }
  // } else {
  //   // е\и в языках есть класса done
  //   if (headerLang.hasClass("done")) {
  //     // то у блока headerLang добавит класс "done" и добавить его в начало блока (prepend - `перед именем`) header-top
  //     headerLang.removeClass("done").prependTo($(".header-top"));
  //   }
  // }
  // // е\и ширина меньше 767
  // if (w < 767) {
  //   // е\и у меню нет класса done
  //   if (!headerMenu.hasClass("done")) {
  //     // то блоку header-bottom-menu добавит класс "done" и добавить его в блок header-burger
  //     headerMenu.addClass("done").appendTo(headerBurger);
  //   }
  // } else {
  //   // перебираем все элементы each (перебор `каждого` элем. коллекции jQuery, выполняя при этом функцию для каждого из них)
  //   $.each(headerMenu, function (index, val) {
  //     // е/и у эл. класс --right
  //     if ($(this).hasClass("header-bottom-menu--right")) {
  //       // е/и есть класс done
  //       if ($(this).hasClass("done")) {
  //         // у этих эл.
  //         $(this)
  //           //удалить done
  //           .removeClass("done")
  //           // и переместить в header-bottom__column в позицию 3 (так как индекс 2, счёт 3)
  //           .prependTo($(".header-bottom__column").eq(2));
  //       }
  //     } else {
  //       // е/и
  //       if ($(this).hasClass("done")) {
  //         $(this)
  //           //удалить done
  //           .removeClass("done")
  //           // и переместить в header-bottom__column в позицию 1 (так как индекс 0, счёт 1)
  //           .prependTo($(".header-bottom__column").eq(0));
  //       }
  //     }
  //   });
  // }
}
// adaptive_header();

function adaptive_function() {
  var w = $(window).outerWidth();
  var h = $(window).outerHeight();
  adaptive_header(w, h);
}
// adaptive_function();

// =================================================================
// ! touch -
// определяет на каком устройстве открыта страница
var ua = navigator.userAgent;
var isMobile = {
  // ! touch 0.1
  TouchPC: function (){
    // метод match() производит поиск по заданной строке с использованием регулярного выражения (глобальный объект RegExp) и возвращает массив, содержащий результаты этого поиска.
    // метод search() выполняет поиск первого соответствия (сопоставления) регулярному выражению (объект RegExp) внутри строки.
      return ua.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini)/i)
      // возможно не  нужно 0.1
       || ua.search(/mobile/i) > 0
  },
  // ! touch 0.1
  // ! touch 0
  // Android: function () {
    //   return ua.match(/Android/i);
    // },
    // BlackBerry: function () {
      //   return ua.match(/BlackBerry/i);
      // },
      // iOS: function () {
        //   return ua.match(/iPhone|iPad|iPod/i);
        // },
        // Opera: function () {
          //   return ua.match(/Opera Mini/i);
          // },
          // Windows: function () {
            //   return ua.match(/IEMobile/i);
  // },
  // // возможно не  нужно 1
  // Mobile: function () {
    //   return ua.search(/mobile/i);
    // },
    // возможно не  нужно 1
    // ! touch 0
    any: function () {
      return (
        // ! touch 0.2
        isMobile.TouchPC()
        // ! touch 0.2
        // ! touch 0
        // isMobile.Android() ||
        // isMobile.BlackBerry() ||
        // isMobile.iOS() ||
        // isMobile.Opera() ||
        // isMobile.Windows() 
        // // возможно не  нужно 0.2
        // || isMobile.Mobile() > 0
        // // возможно не  нужно 0.2
        // ! touch 0
    );
  },
};

// ! дабав класс опред body е/и touchscreen(Сенсорный экран) или PC
if (isMobile.any()) {
  document.body.classList.add("_touch");
} else {
  document.body.classList.add("_pc");
}
