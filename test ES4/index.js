// import IndexReact from "./js/indexReact.jsx";
// import "./styles/css/style.css";
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

// !!! https://webref.ru/dev/dark-mode/toggling-themes
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
// !!! https://ru.stackoverflow.com/questions/858396/%D0%9A%D0%B0%D0%BA-%D0%BF%D0%BE%D0%B2%D0%B5%D1%81%D0%B8%D1%82%D1%8C-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B5-%D0%BD%D0%B0-%D0%B2%D1%81%D0%B5-%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B8-%D0%BD%D0%B0-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B5
// ! 1
// const swlabelAll = document.querySelectorAll(".switcher-label");
// const swNeut = document.querySelector(".switcher-neutral");
// const swOn = document.querySelector(".switcher-on");
// const swOff = document.querySelector(".switcher-off");
// swlabelAll.addEventListener("click", function (e) {
//   if (e.target.classList.contains(swNeut)) console.log(1);
//   //  alert(`Я выполню задачу ${e.target.textContent}`);
//   if (e.target.classList.contains(swOn))
//     alert(`Я выполню задачу ${e.target.textContent}`);
//   if (e.target.classList.contains(swOff))
//     alert(`Я выполню задачу ${e.target.textContent}`);
//   //и так далее
// });
// ! 2
// Выбираем все кнопки на странице и получаем массив
var btns = document.querySelectorAll(".switcher-label");
// Проходим по массиву
btns.forEach(function (btn) {
  const swNeut = document.querySelector(".switcher-neutral");
  const swOn = document.querySelector(".switcher-on");
  const swOff = document.querySelector(".switcher-off");
  // Вешаем событие клик
  btn.addEventListener("click", function (e) {
    console.log("Button clicked" + e.target.classList);
    // ! 2.1
    // if (e.target.classList === swNeut) {
    //   console.log(1);
    // }
    // if ((e.target.classList.contains == swOn)) {
    //   console.log(2);
    // }
    // if ((e.target.classList.contains == swOff)) {
    //   console.log(3);
    // }
    // ! 2.2
    // if (e.target.classList.contains(swNeut));
    // console.log(1);
    // if (e.target.classList.contains(swOn));
    // console.log(2);
    // if (e.target.classList.contains(swOff));
    // console.log(3);
    // ! 2.3
    if (btn == swNeut){
      console.log('~');
      document.body.classList.remove("light-theme");
      document.body.classList.remove("dark-theme");
      document.body.classList.add("gray-theme");
    }
    if (btn == swOn){
      console.log('+');
      // document.body.classList.toggle("light-theme");
      document.body.classList.remove("dark-theme");
      document.body.classList.remove("gray-theme");
      document.body.classList.add("light-theme");
    }
    if (btn == swOff){
      console.log('o');
      // document.body.classList.toggle("dark-theme");
      document.body.classList.remove("light-theme");
      document.body.classList.remove("gray-theme");
      document.body.classList.add("dark-theme");
    }
  });
});
// ! 3
// document.body.addEventListener("click", (e) => {
//   if (e.target.classList.contains(".switcher-label"));
//   console.log(4);
// });
