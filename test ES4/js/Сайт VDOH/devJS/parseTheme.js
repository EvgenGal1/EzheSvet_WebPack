// 7 своё
// !!!!! настройки стиля-цвета
// ! 2
// !!! https://www.kooslooijesteijn.net/blog/add-dark-theme-to-website
// Проверяем предпочтение тёмного режима на уровне ОС
// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
// const prefDark = window.matchMedia("(prefers-color-scheme: dark)");
// const preflight = window.matchMedia("(prefers-color-scheme: light)");
// const prefNo = window.matchMedia("(prefers-color-scheme: no-preference)");
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
// !!!!! настройки стиля-цвета

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
// !!!!! настройки стиля-размера