console.log('index.js');
// подкл JS
import "./js/Сайт VDOH/devJS/themeModesSettings.js";

// подкл CSS/SCSS
import "./styles/scss/styles.scss";

// врем. подкл JS/CSS/SCSS
import "./js/Сайт VDOH/devJS/effect.js";
// ??? не раб - не принимает перемен е/и подкл файл сюда
// Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):
// ModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
// SassError: Undefined variable. background: $DarkRed;
// import "./styles/scss/htmlProjsBlocks/mini-aside.scss"

// !
// ! разобрать и удалить
// import IndexReact from "./js/indexReact.jsx";
// import "./styles/css/style.css";
// import { fn } from "jquery";
// import "./js/Сайт VDOH/prodJS/jQuery";
// import "./styles/scss/utils/mixins.scss";
// import "./styles/scss/VDOH/null.scss";
// import "./styles/scss/VDOH/ui.scss";
// import "./styles/scss/htmlProjsBlocks/header.scss";
// import "./styles/scss/VDOH/effect.scss";
// import "./styles/scss/VDOH/grid.scss";
// ??? не раб - SassError: Undefined variable - много $переменыч
// import "./styles/scss/VDOH/parseTheme.scss";
// ??? не раб - Module not found: Error: Can't resolve. 17 ERRORS
// import "./styles/scss/VDOH/style.scss";
// import "./styles/scss/htmlProjsBlocks/footer.scss";

// console.log(IndexReact)

// на JS
function ibgJS() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (
      ibg[i].querySelector("img") &&
      ibg[i].querySelector("img").getAttribute("src") != null
    ) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}
ibgJS();

// !!! https://webref.ru/dev/dark-theme/toggling-themes
// 1 Использование класса для <body> (2 Использование пользовательских свойств)
// Выбираем кнопку
// const btn = document.querySelector(".btn-toggle");
// // Отслеживаем щелчок по кнопке
// btn.addEventListener("click", function () {
//   // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
//   document.body.classList.toggle("dark-theme");
// });
// 4 Переопределение настроек ОС
// // Выбираем кнопку
// const btn = document.querySelector('.btn-toggle');
// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
// // Отслеживаем щелчок по кнопке
// btn.addEventListener("click", function() {
//   // Если ОС настроена в тёмном режиме…
//   if (prefersDarkScheme.matches) {
//     // …тогда применяем класс .light-theme для переопределения этих стилей
//     document.body.classList.toggle("light-theme");
//   // В противном случае…
//   } else {
//     // …применяем класс .dark-theme для переопределения светлого стиля по умолчанию
//     document.body.classList.toggle("dark-theme");
//   }
// });
// 5 Использование localStorage
// // Выбираем кнопку
// const btn = document.querySelector(".btn-toggle");
// // Выбираем настройки темы из localStorage
// const currentTheme = localStorage.getItem("theme");
// // Если текущая тема в localStorage равна "dark"…
// if (currentTheme == "dark") {
//   // …тогда мы используем класс .dark-theme
//   document.body.classList.add("dark-theme");
// }
// // Отслеживаем щелчок по кнопке
// btn.addEventListener("click", function() {
//   // Переключаем класс .dark-theme при каждом щелчке
//   document.body.classList.toggle("dark-theme");
//   // Допустим, тема светлая
//   let theme = "light";
//   // Если <body> содержит класс .dark-theme…
//   if (document.body.classList.contains("dark-theme")) {
//     // …тогда делаем тему тёмной
//     theme = "dark";
//   }
//   // После чего сохраняем выбор в localStorage
//   localStorage.setItem("theme", theme);
// });

// ? ! 6 измен моё Использование JavaScript и Local Storage
// Выбираем кнопку
// const btn = document.querySelector(".btn-toggle");
// Проверяем предпочтение тёмного режима на уровне ОС
// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Получаем предпочтение темы пользователя из локального хранилища, если оно доступно
// const currentTheme = localStorage.getItem("theme");
// Если текущая тема в localStorage равна "dark"…
// if (currentTheme == "dark") {
// …переключаем класс .dark-theme для <body>
//   document.body.classList.toggle("dark-theme");
// В противном случае, если текущая тема в localStorage равна "light"…
// } else if (currentTheme == "light") {
// …переключаем класс .light-theme для <body>
//   document.body.classList.toggle("light-theme");
// }
// Отслеживаем щелчок по кнопке
// btn.addEventListener("click", function () {
// Если у пользователя тёмный режим ОС и он соответствует нашему классу .dark-theme…
// if (prefersDarkScheme.matches) {
// …тогда переключаем класс светлого режима
//   document.body.classList.toggle("light-theme");
// …но используем .dark-theme, если класс .light-theme уже находится в <body>
//   var theme = document.body.classList.contains("light-theme")
//     ? "light"
//     : "dark";
// } else {
// В противном случае, делаем то же самое, но для .dark-theme
//   document.body.classList.toggle("dark-theme");
//   var theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
// }
// В конце сохраняем текущее предпочтение в localStorage, чтобы продолжить его использовать
//   localStorage.setItem("theme", theme);
// });

// // 7 своё
// // !!!
// // ! 2
// // !!! https://www.kooslooijesteijn.net/blog/add-dark-theme-to-website
// // Проверяем предпочтение тёмного режима на уровне ОС
// // const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
// // const prefDark = window.matchMedia("(prefers-color-scheme: dark)");
// // const preflight = window.matchMedia("(prefers-color-scheme: light)");
// // const prefNo = window.matchMedia("(prefers-color-scheme: no-preference)");
// // if (prefDark) {
// //   var theme = document.body.classList.contains("dark-theme")
// //   return "dark";
// // } else if (preflight) {
// //   var theme = document.body.classList.contains("light-theme")
// //   return "light";
// // } else if (prefNo) {
// //   var theme = document.body.classList.contains("neutral-theme")
// //   return "neutral";
// // }
// // localStorage.setItem("theme", theme);
// // !!
// // !! опред ОС
// // !!! 1. https://webref.ru/dev/dark-theme/os-level
// // !!! 2. https://www.kooslooijesteijn.net/blog/add-dark-theme-to-website
// // 1.
// // Получаем предпочтение темы пользователя из локального хранилища, если оно доступно
// const currentTheme = localStorage.getItem("theme");
// // Если текущая тема в localStorage равна "neutral"
// if (currentTheme == "neutral") {
//   // вкл класс .neutral-theme для <body>
//   document.body.classList.add("neutral-theme");
// } else if (currentTheme == "dark") {
//   document.body.classList.add("dark-theme");
// } else if (currentTheme == "light") {
//   document.body.classList.add("light-theme");
// }
// // Выбираем все кнопки на странице и получаем массив
// var swLabelAll = document.querySelectorAll(".switcher-label");
// // Проходим по массиву
// swLabelAll.forEach(function (btn) {
//   // заводим перем для позиций кнопок
//   const swNeut = document.querySelector(".switcher-neutral");
//   const swOn = document.querySelector(".switcher-on");
//   const swOff = document.querySelector(".switcher-off");
//   // Вешаем событие клик
//   btn.addEventListener("click", function () {
//     // console.log("Button clicked" + e.target.classList);
//     if (btn == swNeut) {
//       console.log("~");
//       document.body.classList.remove("light-theme");
//       document.body.classList.remove("dark-theme");
//       document.body.classList.add("neutral-theme");
//       var theme = "neutral";
//       // !
//       // document.swNeut.checked=true;
//       // localStorage.setItem("document.swNeut.checked", true);
//       // localStorage.setItem("document.swNeut.checked", checkbox.checked);
//       // localStorage.input = this.checked
//       // localStorage.setItem("document.swNeut", checkbox.checked);
//       // localStorage.setItem("swNeut", checkbox.checked);

//       // el.onchange = () => localStorage.setItem(el.id, el.checked);
//       // el.checked = localStorage.getItem(el.id) === "true";
//       btn.onchange = () => localStorage.setItem(btn.id, btn.checked);
//       btn.checked = localStorage.getItem(btn.id) === "true";
//       // !
//     }
//     if (btn == swOn) {
//       console.log("+");
//       document.body.classList.remove("dark-theme");
//       document.body.classList.remove("neutral-theme");
//       document.body.classList.add("light-theme");
//       var theme = "light";
//       // !
//       // document.swOn.checked=true;
//       localStorage.setItem("document.swOn.checked", true);
//       // !
//     }
//     if (btn == swOff) {
//       console.log("o");
//       document.body.classList.remove("light-theme");
//       document.body.classList.remove("neutral-theme");
//       document.body.classList.add("dark-theme");
//       var theme = "dark";
//       // !
//       // document.swOff.checked=true;
//       localStorage.setItem("document.swOff.checked", true);
//       // !
//     }
//     localStorage.setItem("theme", theme);
//     // localStorage.clear();
//   });
// });
// // document.querySelector(".switcher-off").checkbox.checked
// // document.querySelector(".switcher-off").checked
// // !

// ! https://ru.stackoverflow.com/questions/943640/%D0%9A%D0%B0%D0%BA-%D1%81%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B8%D1%82%D1%8C-%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B5-%D1%87%D0%B5%D0%BA%D0%B1%D0%BE%D0%BA%D1%81%D0%B0-%D0%B2-localstorage
// document.querySelectorAll(".switcher-label").forEach(el => {
//   el.onchange = () => localStorage.setItem(el.id, el.checked);
//   el.checked = localStorage.getItem(el.id) === "true";
// })

// ! https://stackoverflow.com/questions/26628812/localstorage-how-to-save-a-checkbox
// function saveRtd() {
//   var checkbox = document.getElementById("checkbox1zaal1");
//   localStorage.setItem("checkbox1zaal1", checkbox.checked);
// }
// function load() {
//   // var checked = JSON.parse(localStorage.getItem("checkbox1zaal1"));
//   // if (checked == true) {
//   //   document.getElementById("checkbox1zaal1").checked = true;
//   // }
//   var checked = JSON.parse(localStorage.getItem("checkbox1zaal1"));
//   document.getElementById("checkbox1zaal1").checked = checked;
// }
// function wis() {
//   location.reload();
//   localStorage.clear();
// }
// load();
// ! https://www.cyberforum.ru/javascript/thread1815033.html
// function save_checkbox(name) {
//   localStorage[name] = document.getElementById(name).checked ? 1 : 0;
//   // localStorage[name] = document.querySelector(name).checked ? 1 : 0;
// }
// function load_checkbox() {
//   var table = document.getElementById("resources");
//   var input = table.getElementsByTagName("input");

//   for (var i = 0; i < input.length; i++) {
//     var checkbox = input[i];
//     checkbox.checked = parseInt(localStorage[checkbox.id], 10);
//   }
// }
// load_checkbox()
// save_checkbox('sale_wood')
// !

// // !!!!! настройки стиля-размера
// const currentStyle = localStorage.getItem("style");
// if (currentStyle == "mid") {
//   document.body.classList.add("style-mid");
// } else if (currentStyle == "big") {
//   document.body.classList.add("style-big");
// } else if (currentStyle == "small") {
//   document.body.classList.add("style-small");
// } else if (currentStyle == "off") {
//   document.body.classList.add("style-off");
// }
// var swLabelAll = document.querySelectorAll(".sw7-label");
// swLabelAll.forEach(function (btn) {
//   const sw7big = document.querySelector(".sw7-big");
//   const sw7small = document.querySelector(".sw7-small");
//   const sw7mid = document.querySelector(".sw7-mid");
//   const sw7off = document.querySelector(".sw7-off");
//   // ??? не раб - по id не вызов. для смены стиля по нажатию на центр в 3х циферблатную кнопку
//   // const sw7Of = document.querySelectorById(".--style-state-off");
//   // const sw7On = document.querySelectorById(".--style-state-on");
//   // const sw7Nul = document.querySelectorById(".--style-state-null");
//   btn.addEventListener("click", function () {
//     if (btn == sw7big) {
//       document.body.classList.remove("style-mid");
//       document.body.classList.remove("style-small");
//       document.body.classList.remove("style-off");
//       document.body.classList.add("style-big");
//       var style = "big";
//     }
//     if (btn == sw7small) {
//       document.body.classList.remove("style-big");
//       document.body.classList.remove("style-mid");
//       document.body.classList.remove("style-off");
//       document.body.classList.add("style-small");
//       var style = "small";
//     }
//     if (btn == sw7mid) {
//       document.body.classList.remove("style-big");
//       document.body.classList.remove("style-small");
//       document.body.classList.remove("style-off");
//       document.body.classList.add("style-mid");
//       var style = "mid";
//     }
//     if (btn == sw7off) {
//       document.body.classList.remove("style-big");
//       document.body.classList.remove("style-mid");
//       document.body.classList.remove("style-small");
//       document.body.classList.add("style-off");
//       var style = "off";
//     }
//     localStorage.setItem("style", style);
//     // localStorage.clear();
//   });
// });
// // !!!!! настройки стиля-размера

// !
// // !
// // !
// // !
// // !
// // !
// // for (var i = 0; i < ibg.length; i++) {
// //   if (
// //     ibg[i].querySelector("img") &&
// //     ibg[i].querySelector("img").getAttribute("src") != null
// //   )
// // }
// function clickText() {
//   console.log(1);
//   const contBl = document.querySelectorAll(".cont-block-");
//   // const subDet = document.querySelectorAll("#sub-detail-");
//   // const blText = document.querySelectorAll(".block-text-");
//   // const textDet = document.querySelectorAll(".text-detail-");
//   // contBl.forEach(function (cont) {
//   // cont.subDet.forEach(function (idI) {
//   for (var i = 0; i < contBl.length; i++) {
//     // for (var i = 0; i < contBl.length; i+=1) {
//     console.log(2);
//     // subDet.forEach(function (idI) {
//     // const subDet = cont.querySelectorAll("#sub-detail-");
//     // const contBlN = contBl[i].querySelector("#sub-detail-");
//     // contBlN[i].style.color == "blue";
//     // contBlN[i].style.display == "block"
//     console.log(2.1);
//     // const subDet = contBl[i].querySelector("#sub-detail-");
//     // const subDet = contBl[i].querySelector("#sub-detail-");
//     // const subDet = contBl[i].querySelectorAll(".block-img- .sub-");
//     // const subDet = contBl[i].querySelectorAll(".sub-");
//     // const subDet = contBl[i].querySelector(".sub-");
//     const subDet = contBl[i].querySelector(".sub-");
//     // const subDetTh = this.attr('id');
//     console.log(2.2);
//     // var ellements = document.getElementsByClassName("tohide");
//     // for(var i=0;i<ellements.length;i++) {
//     //    ellements[i].style.display="none";
//     // }
//     // var lyricsBox = document.getElementsByClassName("lyricsBox");
//     // var displaySetting = lyricsBox[0].style.display;
//     // if (displaySetting == "block") {
//     //   lyricsBox[0].style.display = "none";
//     // }
//     // idI.addEventListener("click", function () {
//     // for (var i=0;i<elems.length;i+=1){
//     //   elems[i].style.display = 'block';
//     // }
//     // subDet.addEventListener("click", function () {
//     subDet.addEventListener("click", () => {
//       // subDetTh.addEventListener("click", function () {
//       console.log(3);
//       const blText = document.querySelectorAll(".block-text-");
//       // const blText = document.getElementsByClassName("block-text-");
//       // const blText = document.querySelector(".block-text-");
//       const displayBlText = blText[0].style.display;
//       console.log(3.1);
//       const textDet = document.querySelectorAll(".text-detail-");
//       // const textDet = document.querySelector(".text-detail-");
//       const displayTextDet = textDet[0].style.display;
//       // const textDet = Array.from(document.querySelectorAll('.text-detail-'));
//       // const textDet = Array.from(document.querySelector('.text-detail-'));
//       console.log(3.2);
//       // if (blText.style.display == "block") {
//       // if (displayBlText.style.display == "block") {
//       // if (displayBlText == "block") {
//       if (displayBlText == "block" && displayTextDet == "block") {
//         console.log(4);
//         // blText.style.display = "flex";
//         blText[0].style.display = "flex";
//         // displayBlText.style.display = "flex";
//         console.log(4.1);
//         // textDet.style.display = "none";
//         // textDet[i].style.display = "none";
//         textDet[0].style.display = "none";
//         // displayTextDet[0].style.display = "none";
//         // displayTextDet.style.display = "none";
//         console.log(4.2);
//         // } else if ((blText.style.display = "flex")) {
//         // } else if ((displayBlText.style.display = "flex")) {
//         // } else if ((displayBlText = "flex")) {
//       } else {
//         console.log(5);
//         // blText.style.display = "block";
//         blText[0].style.display = "block";
//         // displayBlText.style.display = "block";
//         console.log(5.1);
//         // textDet.style.display = "block";
//         // textDet[i].style.display = "block";
//         textDet[0].style.display = "block";
//         // displayTextDet[0].style.display = "block";
//         console.log(5.2);
//       }
//     });
//     // });
//   }
//   // });
// }
// // clickText();

// ! клик по кнопке в новом тектово-картиночном блоке(+текст,прыг кнп)
// переписать боле кратко
// переделать поб структуру (карт+текст+кнп)
function clickToBlSub() {
  const contBl = Array.from(document.querySelectorAll(".cont-block-"));
  const subDet = contBl.map((item) => item.querySelector(".sub-"));
  // Тоже самое, что
  // const subDet = Array.from(document.querySelectorAll(".sub-"));
  // const subDet = Array.from(document.querySelectorAll('#sub-detail-'))
  // const subDet = contBl.map((item) => item.querySelector("#sub-detail-"));
  subDet.forEach((item, i) => {
    const blText = contBl[i].querySelector(".block-text-");
    const textDet = contBl[i].querySelector(".text-detail-");
    const blSub = contBl[i].querySelector(".bl-sub-");
    const blSubright = contBl[i].querySelector(".bl-sub-.right");
    item.addEventListener("click", () => {
      contBl[i].classList.toggle("active");
      if (contBl[i].classList.contains("active")) {
        // blText.style.display = "block";
        // blText.style.marginBottom = "10px";
        // blText.style.padding = "0px 0px 15px";
        blText.style.padding = "0px";
        textDet.style.display = "block";
        const blTextHeight = blText.offsetHeight;
        console.log('blTextHeight : ' + blTextHeight);
        // blSub.style.top = "50px";
        // blSub.style.top = "0px" + "15px";
        // blSub.style.top = "0px" + textDetHeight;
        blSub.style.top = blTextHeight + "px";
        //??? не раб - ТРАВНИК - с transition стал выводить большую высоту(~ 40px). было норм
        console.log('blSub.style.top : ' + blSub.style.top);
        blSub.style.left = "10%";
        blSub.style.marginTop = "15px";
        blSub.style.transform = "scale(1, 1)";
        // blSubright.style.transform = "scale(-1, -1)";
        // blSub.style.transform = "scale(1, 1)";
        // !
        // blSub.style.cssText = "left: 35px; transform: scale(1, 1);";
        // !
        blSubright.style.left = "80%";
        blSubright.style.transform = "scale(-1, 1)";
        // ??? не раб - не прописывается много свойств вместе
        // blSub.style.cssText = "top: 0%; left: 0%";
        // blSub.style = { top: "0%", left: "0%", transform: "scale(1, -1)" };
      } else {
        blText.style.cssText = "";
        textDet.style.cssText = "";
        blSub.style = {};
        blSubright.style = "";
        // blSub.style = { top: "100%", left: "100%", transform: "scale(1, 1)" };
      }
    });
  });
}
clickToBlSub();
// // !

// //! блоки на/для jQ
// function clickText3() {
//   console.log(1);
//   const btn = document.querySelectorAll(".btn");
//   // document.querySelectorAll(".btn").addEventListener("click", function () {
//   // document.querySelector(".btn").addEventListener("click", function () {
//   // querySelectorAll
//   // querySelectorBy
//   // const btn = document.querySelector(".btn");
//   console.log(1.1);
//   // btn.addEventListener("click", function () {
//   this.addEventListener("click", function () {
//     console.log(2);
//     const block = document.querySelector(".block");
//     // block.classList.remove("active");
//     block.classList.toggle("active");
//     console.log(3);
//     // var num = this.attr("data-num");
//     // var num = this.querySelector(".btn").getAttribute('data-num')
//     var num = this.getAttribute("data-num");
//     console.log(4);
//     const IdBlock = document.querySelector("#block" + num);
//     console.log(5);
//     IdBlock.classList.add("active");
//     // IdBlock.classList.toggle("active");
//     console.log(6);
//   });
// }
// // clickText3();

// function clickText4() {
//   $(".btn").click(function () {
//     $(".block").removeClass("active");
//     var num = $(this).attr("data-num");
//     $("#block" + num).toggle("active");
//   });
// }
// clickText4();
// //! блоки на/для jQ
// //! блоки проб 1
// // !!!https://ru.stackoverflow.com/questions/1200678/%D0%9E%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D0%B5-%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE%D0%B2-%D0%BF%D0%BE-%D0%BA%D0%BB%D0%B8%D0%BA%D1%83-js
// function clickText5() {
//   const users = Array.from(document.querySelectorAll(".user"));
//   const triggers = users.map((item) => item.querySelector(".trigger")); // Тоже самое, что Array.from(document.querySelectorAll('.trigger'))

//   triggers.forEach((item, i) => {
//     let settings = document.querySelector(".settings");
//     // проходимся по каждому тригеру
//     // item.addEventListener("click", (e) => {
//     item.addEventListener("click", () => {
//       // settings.style.display = "block";
//       // ставим на него слушатель события клика
//       users[i].classList.toggle("active");
//       // if (users[i].classList.toggle("active")) {
//       //   // settings.
//       // } // что-то делаем
//     });
//   });
// }
// clickText5();
// //! блоки проб 1
// //! блоки проб 2
// // ??? не раб
// function switchVisible2(element) {
//   console.log(2.1);
//   if (element.className && element.className.length > 0) {
//     console.log(2.2);
//     // находим элемент на который указывает класс нажатой кнопки
//     var targetEl = document.getElementById(element.className);
//     var displayMode = targetEl.style.display === "block" ? "none" : "block";
//     // иной способ без тернарного оператора
//     // var visility = "";
//     //if (targetEl.style.display === "block"){
//     //    displayMode = "none";
//     //}
//     //else{
//     //    displayMode = "block";
//     //}
//     targetEl.style.display = displayMode;
//   }
// }
// switchVisible2(".Div3");
// //! блоки проб 2
// //! блоки проб 3
// function clickText6() {
//   document.querySelector(".box-menu").addEventListener("click", (e) => {
//     if (e.target.classList.contains("menu")) {
//       let num = [...document.querySelectorAll(".box-menu .menu")].indexOf(
//           e.target
//         ),
//         content = document.querySelectorAll(".content");
//       for (let i = 0; i < content.length; i++)
//         i == num
//           ? (content[i].style.display = "block")
//           : (content[i].style.display = "none");
//     }
//   });
//   // <ul class="box-menu">
//   // <li class="menu">Text 4</li>
//   // </ul>
//   // <div class="content" style="display: none">Содержимое 1</div>
// }
// clickText6();
// //! блоки проб 3
// //! блоки проб 4
// function HideAll() {
//   var ellements = document.getElementsByClassName("tohide");
//   for (var i = 0; i < ellements.length; i++) {
//     ellements[i].style.display = "none";
//   }
// }
// HideAll();
// //! блоки проб 4
// !
