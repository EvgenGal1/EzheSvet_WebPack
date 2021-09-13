// 7 своё
// !!!!! настройки стиля-цвета
function generalFunctionOfColorSchemes(){
// ! 2
// !!! https://www.kooslooijesteijn.net/blog/add---theme-dark-to-website
// ??? не раб - Травник - настроить выборку стандарт ОС
// Проверяем предпочтение тёмного режима на уровне ОС
const prefDark = window.matchMedia("(prefers-color-scheme: dark)");
const preflight = window.matchMedia("(prefers-color-scheme: light)");
const prefNo = window.matchMedia("(prefers-color-scheme: no-preference)");
const NoCurrentTheme = localStorage.getItem("--theme") == null;
if (NoCurrentTheme) {
  console.log(11);
  if (prefDark) {
    console.log(10);
    // var theme = document.body.classList.contains("--theme-dark");
    // document.body.classList.contains("_-theme-dark");
    var theme = "_dark";
    console.log(9);
    // return "dark";
  } else if (preflight) {
    var theme = "_light";
    console.log(8);
  } else if (prefNo) {
    var theme = "_neutral";
  }
  localStorage.setItem("--theme", theme);
}
// !! опред ОС
// !!! 1. https://webref.ru/dev/--theme-dark/os-level
// !!! 2. https://www.kooslooijesteijn.net/blog/add---theme-dark-to-website
// Получаем предпочтение темы пользователя из локального хранилища, если оно доступно
const currentTheme = localStorage.getItem("--theme");
// Если текущая тема в localStorage равна "neutral"
if (currentTheme == "_neutral") {
  //  if (currentTheme == "neutral" || NoCurrentTheme) {
  // вкл класс .--theme_neutral для <body>
  document.body.classList.add("--theme_neutral");
} else if (currentTheme == "_dark") {
  document.body.classList.add("--theme_dark");
} else if (currentTheme == "_light") {
  document.body.classList.add("--theme_light");
}
// Выбираем все кнопки на странице и получаем массив
var swLabelAll = document.querySelectorAll(".switcher-label");
// Проходим по массиву
swLabelAll.forEach(function (btn) {
  // заводим перем для позиций кнопок
  const swDark = document.querySelector(".switcher__dark");
  const swNeut = document.querySelector(".switcher__neutral");
  const swLight = document.querySelector(".switcher__light");
  // Вешаем событие клик
  console.log(1);
  btn.addEventListener("click", function () {
    console.log(2);
    if (btn == swDark) {
      // if (btn == swDark || currentTheme == "dark" || currentTheme == "null") {
      console.log("o");
      document.body.classList.remove("--theme_light");
      document.body.classList.remove("--theme_neutral");
      document.body.classList.add("--theme_dark");
      var theme = "_dark";
    }

    if (btn == swNeut) {
      console.log("~");
      document.body.classList.remove("--theme_light");
      document.body.classList.remove("--theme_dark");
      document.body.classList.add("--theme_neutral");
      var theme = "_neutral";
    }
    if (btn == swLight) {
      console.log("+");
      document.body.classList.remove("--theme_dark");
      document.body.classList.remove("--theme_neutral");
      document.body.classList.add("--theme_light");
      var theme = "_light";
    }
    localStorage.setItem("--theme", theme);
  });
});
// !!!!! настройки стиля-цвета
}
generalFunctionOfColorSchemes()
//</.m-s-switcher-5(3 позиции - горизонт)>˄=======================================================================================˄

// ??? не раб - Травник - понять почему не взаимосвязаны label и input. связать в общее переключение
// <.m-s-switcher-7(3 позиции - круг)>˅=======================================================================================˅

// !!!!! настройки стиля-размера

// !!! ПОПРОБОВАТЬ - Сокращение количества анимации
// @media screen and (prefers-reduced-motion: reduce) {
//   .pulse {
//     animation: none;
//   }
// }
// ??? не раб - Травник - настроить выборку стандарт размеров --size(можно через reduced-motion)
// const prefDark = window.matchMedia("(prefers-reduced-motion: big)");
// const prefRebuce = window.matchMedia("(prefers-reduced-motion: reduce)");
// const prefNoPref = window.matchMedia("(prefers-reduced-motion: no-preference)");
// // const prefNo = window.matchMedia("(prefers-reduced-motion: no-preference)");
// if (prefRebuce) {
//   var theme = document.body.classList.contains("_size-mid");
//   var theme = "_off";
// } else if (prefNoPref) {
//   var theme = document.body.classList.contains("_size-mid"||"_size-mid"||"_size-mid");
//   var theme = "_mid";
//   // return "light";
// }
// // else if (prefNo) {
// //   var theme = document.body.classList.contains("--theme-neutral");
// //   var theme = "_neutral";
// //   // return "neutral";
// // }
// localStorage.setItem("style", style);

localStorage.setItem("_size", "mid");
const currentStyle = localStorage.getItem("_size");
if (currentStyle == "mid" || currentStyle == "") {
  document.body.classList.add("_size-mid");
} else if (currentStyle == "big") {
  document.body.classList.add("_size-big");
} else if (currentStyle == "small") {
  document.body.classList.add("_size-small");
} else if (currentStyle == "off") {
  document.body.classList.add("_size-off");
}
var sw7LabelAll = document.querySelectorAll(".sw7-label");
sw7LabelAll.forEach(function (btn) {
  // let style = document.body.classList.add("_size-mid");
  // localStorage.setItem("style", style);
  // !
  // !
  const sw7big = document.querySelector(".sw7-big");
  const sw7mid = document.querySelector(".sw7-mid");
  const sw7small = document.querySelector(".sw7-small");
  const sw7off = document.querySelector(".sw7-off");
  // const sw7big = document.querySelector("#--style-state-big");
  // const sw7Of = document.querySelectorById("--style-state-big");
  btn.addEventListener("click", function () {
    if (btn == sw7big) {
      document.body.classList.remove("_size-mid");
      document.body.classList.remove("_size-small");
      document.body.classList.remove("_size-off");
      document.body.classList.add("_size-big");
      var style = "_big";
    }
    if (btn == sw7mid) {
      document.body.classList.remove("_size-big");
      document.body.classList.remove("_size-small");
      document.body.classList.remove("_size-off");
      document.body.classList.add("_size-mid");
      var style = "_mid";
    }
    if (btn == sw7small) {
      document.body.classList.remove("_size-big");
      document.body.classList.remove("_size-mid");
      document.body.classList.remove("_size-off");
      document.body.classList.add("_size-small");
      var style = "__small";
    }
    if (btn == sw7off) {
      document.body.classList.remove("_size-big");
      document.body.classList.remove("_size-mid");
      document.body.classList.remove("_size-small");
      document.body.classList.add("_size-off");
      var style = "_off";
    }
    localStorage.setItem("_size", style);
  });
});
// !!!!! настройки стиля-размера

// ! сохранить в localStorage значения нескольких input[radio]
// ! https://qna.habr.com/q/555513
function saveCheckedToLocalStorage(selector) {
  // не дублируем код
  function save(data) {
    localStorage.setItem(selector, JSON.stringify(data));
  }
  // и не создаем тысячи функций в цикле а используем одну общую
  function onChange(event) {
    var element = event.target,
      name = element.name,
      value = element.value;
    data[name] = value;
    save(data);
  }
  var elements = document.querySelectorAll(selector),
    data = localStorage.getItem(selector);
  if (data) {
    // если в сторадже что-то есть то можем и распарсить
    data = JSON.parse(data);
  } else {
    // иначе парсить нельзя, будет ошибка присвоим дефолтное значение и сохраним
    save((data = {}));
  }
  // вместо ненужного создания массива обратимся напрямую к прототипу
  Array.prototype.forEach.call(elements, function (element) {
    var name = element.name,
      value = element.value;
    if (data[name] === value) {
      // если текущий элемент отмечен в сторадже то отметим и на странице
      element.checked = true;
    }
    // навесим созданый вне цикла хандлер на событие
    element.addEventListener("change", onChange);
  });
  // ??? не раб - попытка вывести умолчание в localStorage. надо разобратся в коде
  // if (data[name] === "") {
  // localStorage.setItem("_size12", "0");
  // }
}
saveCheckedToLocalStorage("input[type=radio]");

// ??? не раб - Травник - сделать взаимосвязь кнопок и тем. при настройки станд ОС и Размеров они различались

// ??? не раб - Травник -
