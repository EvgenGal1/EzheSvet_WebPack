// import IndexReact from "./js/indexReact.jsx";
// import "./styles/css/style.css";
import { fn } from "jquery";
import "./styles/scss/styles.scss";
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
// // Проверяем предпочтение тёмного режима на уровне ОС
// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// // Получаем предпочтение темы пользователя из локального хранилища, если оно доступно
// const currentTheme = localStorage.getItem("theme");
// // Если текущая тема в localStorage равна "dark"…
// if (currentTheme == "dark") {
//   // …переключаем класс .dark-theme для <body>
//   document.body.classList.toggle("dark-theme");
//   // В противном случае, если текущая тема в localStorage равна "light"…
// } else if (currentTheme == "light") {
//   // …переключаем класс .light-theme для <body>
//   document.body.classList.toggle("light-theme");
// }
// // Отслеживаем щелчок по кнопке
// btn.addEventListener("click", function () {
//   // Если у пользователя тёмный режим ОС и он соответствует нашему классу .dark-theme…
//   if (prefersDarkScheme.matches) {
//     // …тогда переключаем класс светлого режима
//     document.body.classList.toggle("light-theme");
//     // …но используем .dark-theme, если класс .light-theme уже находится в <body>
//     var theme = document.body.classList.contains("light-theme")
//       ? "light"
//       : "dark";
//   } else {
//     // В противном случае, делаем то же самое, но для .dark-theme
//     document.body.classList.toggle("dark-theme");
//     var theme = document.body.classList.contains("dark-theme")
//       ? "dark"
//       : "light";
//   }
//   // В конце сохраняем текущее предпочтение в localStorage, чтобы продолжить его использовать
//   localStorage.setItem("theme", theme);
// });

// 7 своё
// !!!
// ! 2
// Проверяем предпочтение тёмного режима на уровне ОС
// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// !!
// Если у пользователя тёмный режим ОС и он соответствует нашему классу .dark-theme…
// if (prefersDarkScheme.matches) {
//   // …тогда переключаем класс светлого режима
//   document.body.classList.toggle("light-theme");
//   // …но используем .dark-theme, если класс .light-theme уже находится в <body>
//   var theme = document.body.classList.contains("light-theme")
//     ? "light"
//     : "dark";
// } else {
//   // В противном случае, делаем то же самое, но для .dark-theme
//   document.body.classList.toggle("dark-theme");
//   var theme = document.body.classList.contains("dark-theme")
//     ? "dark"
//     : "light";
// }
// В конце сохраняем текущее предпочтение в localStorage, чтобы продолжить его использовать
// ! альтернатива  для //!!
// !!! https://www.kooslooijesteijn.net/blog/add-dark-theme-to-website
// if (prefDark) {
//   var theme = document.body.classList.contains("dark-theme")
//   return "dark";
// } else if (preflight) {
//   var theme = document.body.classList.contains("light-theme")
//   return "light";
// } else if (prefNo) {
//   var theme = document.body.classList.contains("grayn-theme")
//   return "grayn";
// }

// localStorage.setItem("theme", theme);
// !!
// const prefDark = window.matchMedia("(prefers-color-scheme: dark)");
// const preflight = window.matchMedia("(prefers-color-scheme: light)");
// const prefNo = window.matchMedia("(prefers-color-scheme: no-preference)");
// // Получаем предпочтение темы пользователя из локального хранилища, если оно доступно
// const currentTheme = localStorage.getItem("theme");
// // Если текущая тема в localStorage равна "dark"…
// if (currentTheme == "dark") {
//   // …переключаем класс .dark-theme для <body>
//   document.body.classList.toggle("dark-theme");
//   // В противном случае, если текущая тема в localStorage равна "light"…
// } else if (currentTheme == "light") {
//   // …переключаем класс .light-theme для <body>
//   document.body.classList.toggle("light-theme");
// } else if (currentTheme == "grayn") {
//   // …переключаем класс .grayn-theme для <body>
//   document.body.classList.toggle("grayn-theme");
// }

// !! опред ОС
// !!! 1. https://webref.ru/dev/dark-theme/os-level
// !!! 2. https://www.kooslooijesteijn.net/blog/add-dark-theme-to-website
// 1.
// Получаем предпочтение темы пользователя из локального хранилища, если оно доступно
const currentTheme = localStorage.getItem("theme");
// Если текущая тема в localStorage равна "grayn"
if (currentTheme == "grayn") {
  // вкл класс .grayn-theme для <body>
  document.body.classList.add("grayn-theme");
} else if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.add("light-theme");
}
// Выбираем все кнопки на странице и получаем массив
var swLabelAll = document.querySelectorAll(".switcher-label");
// Проходим по массиву
swLabelAll.forEach(function (btn) {
  // заводим перем для позиций кнопок
  const swNeut = document.querySelector(".switcher-neutral");
  const swOn = document.querySelector(".switcher-on");
  const swOff = document.querySelector(".switcher-off");
  // Вешаем событие клик
  btn.addEventListener("click", function () {
    // console.log("Button clicked" + e.target.classList);
    if (btn == swNeut) {
      console.log("~");
      document.body.classList.remove("light-theme");
      document.body.classList.remove("dark-theme");
      document.body.classList.add("grayn-theme");
      var theme = "grayn";
      // !
      // document.swNeut.checked=true;
      // localStorage.setItem("document.swNeut.checked", true);
      // localStorage.setItem("document.swNeut.checked", checkbox.checked);
      // localStorage.input = this.checked
      // localStorage.setItem("document.swNeut", checkbox.checked);
      // localStorage.setItem("swNeut", checkbox.checked);

      // el.onchange = () => localStorage.setItem(el.id, el.checked);
      // el.checked = localStorage.getItem(el.id) === "true";
      btn.onchange = () => localStorage.setItem(btn.id, btn.checked);
      btn.checked = localStorage.getItem(btn.id) === "true";
      // !
    }
    if (btn == swOn) {
      console.log("+");
      document.body.classList.remove("dark-theme");
      document.body.classList.remove("grayn-theme");
      document.body.classList.add("light-theme");
      var theme = "light";
      // !
      // document.swOn.checked=true;
      localStorage.setItem("document.swOn.checked", true);
      // !
    }
    if (btn == swOff) {
      console.log("o");
      document.body.classList.remove("light-theme");
      document.body.classList.remove("grayn-theme");
      document.body.classList.add("dark-theme");
      var theme = "dark";
      // !
      // document.swOff.checked=true;
      localStorage.setItem("document.swOff.checked", true);
      // !
    }
    localStorage.setItem("theme", theme);
    // localStorage.clear();
  });
});
// document.querySelector(".switcher-off").checkbox.checked
// document.querySelector(".switcher-off").checked
// !

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

// !!!!! настройки стиля-размера
const currentStyle = localStorage.getItem("style");
if (currentStyle == "mid") {
  document.body.classList.add("style-mid");
} else if (currentStyle == "big") {
  document.body.classList.add("style-big");
} else if (currentStyle == "small") {
  document.body.classList.add("style-small");
} else if (currentStyle == "off") {
  document.body.classList.add("style-off");
}
var swLabelAll = document.querySelectorAll(".sw7-label");
swLabelAll.forEach(function (btn) {
  const sw7big = document.querySelector(".sw7-big");
  const sw7small = document.querySelector(".sw7-small");
  const sw7mid = document.querySelector(".sw7-mid");
  const sw7off = document.querySelector(".sw7-off");
  // ???не раб - по id не вызов. для смены стиля по нажатию на центр в 3х циферблатную кнопку
  // const sw7Of = document.querySelectorById(".item3-state-off");
  // const sw7On = document.querySelectorById(".item3-state-on");
  // const sw7Nul = document.querySelectorById(".item3-state-null");
  btn.addEventListener("click", function () {
    if (btn == sw7big) {
      document.body.classList.remove("style-mid");
      document.body.classList.remove("style-small");
      document.body.classList.remove("style-off");
      document.body.classList.add("style-big");
      var style = "big";
    }
    if (btn == sw7small) {
      document.body.classList.remove("style-big");
      document.body.classList.remove("style-mid");
      document.body.classList.remove("style-off");
      document.body.classList.add("style-small");
      var style = "small";
    }
    if (btn == sw7mid) {
      document.body.classList.remove("style-big");
      document.body.classList.remove("style-small");
      document.body.classList.remove("style-off");
      document.body.classList.add("style-mid");
      var style = "mid";
    }
    if (btn == sw7off) {
      document.body.classList.remove("style-big");
      document.body.classList.remove("style-mid");
      document.body.classList.remove("style-small");
      document.body.classList.add("style-off");
      var style = "off";
    }
    localStorage.setItem("style", style);
    // localStorage.clear();
  });
});
console.log(1)
// !!!!! настройки стиля-размера

// !
// let najat = document.querySelectorById("#kup");
// najat.addEventListener("click", function () {
//   console.log(12)
//   let w12q = document.querySelectorByClassName(".w12q");
//   // w12q.style.
//   if (w12q.style.display === "flex") {
//     w12q.style.display = "block";
//   } else {
//     w12q.style.display = "flex";
//   }
// });

// let najat2 = document.querySelectorById("#kup2");
// najat2.addEventListener("click", function () {
//   console.log(2)
//   let w12q = document.querySelectorByClassName(".w12q");
//   let bltx = document.querySelectorByClassName('.block-text-');
//   // w12q.style.
//   if (bltx.style.display === "flex") {
//     w12q.style.display = "block";
//   } else if (bltx.style.display === "block"){
//     bltx.style.display = "flex";
//     w12q.style.display = "none";
//   }
// });

// let but = document.querySelectorById(".button");
// but.addEventListener("click", function () {
//   console.log(2)
//   let w12q = document.querySelectorByClassName(".w12q");
//   let bltx = document.querySelectorByClassName('.block-text-');
//   // w12q.style.
//   if (bltx.style.display === "flex") {
//     w12q.style.display = "block";
//   } else if (bltx.style.display === "block"){
//     bltx.style.display = "flex";
//     w12q.style.display = "none";
//   }
// });
// !
