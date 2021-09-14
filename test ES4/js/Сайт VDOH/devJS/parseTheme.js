import { fn } from "jquery";

// ! <настройки стиля-цвета(--theme:dark,neutral,light)>˅=======================================================================================˅
function generalFunctionOfColorSchemes() {
  // ! https://webref.ru/dev/dark-mode
  // ! https://www.kooslooijesteijn.net/blog/add-dark-mode-to-website
  // Проверяем предпочтение тёмного режима на уровне ОС
  const prefDark = window.matchMedia("(prefers-color-scheme: dark)");
  const preflight = window.matchMedia("(prefers-color-scheme: light)");
  const prefNo = window.matchMedia("(prefers-color-scheme: no-preference)");
  const NoCurrentTheme = localStorage.getItem("--theme") == null;
  if (NoCurrentTheme) {
    if (prefDark) {
      // var theme = document.body.classList.contains("--theme-dark");
      // document.body.classList.contains("_-theme-dark");
      var theme = "_dark";
      // return "dark";
    } else if (preflight) {
      var theme = "_light";
    } else if (prefNo) {
      var theme = "_neutral";
    }
    localStorage.setItem("--theme", theme);
  }
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
  var swLabelAll = document.querySelectorAll(".sw3btn-label");
  // Проходим по массиву
  swLabelAll.forEach(function (btn) {
    // заводим перем для позиций кнопок
    const swDark = document.querySelector(".sw3btn__dark");
    const swNeut = document.querySelector(".sw3btn__neutral");
    const swLight = document.querySelector(".sw3btn__light");
    // Вешаем событие клик
    btn.addEventListener("click", function () {
      // if (btn == swDark || currentTheme == "dark" || currentTheme == "null") {
      if (btn == swDark) {
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
}
generalFunctionOfColorSchemes();
// ! </настройки стиля-цвета(--theme:dark,neutral,light)>˄=======================================================================================˄

// ??? не раб - Травник - понять почему не взаимосвязаны label и input. связать в общее переключение

// ??? не раб - Травник - сделать взаимосвязь кнопок и тем. при настройки станд ОС и Размеров они различались

// ! <настройки стиля-размера(--size:big,mid,small,off)>˅=======================================================================================˅
function generalFunctionOfReducedMotion() {
  const prefRebuce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const prefNoPref = window.matchMedia(
    "(prefers-reduced-motion: no-preference)"
  );
  const NoCurrentTheme2 = localStorage.getItem("--size") == null;
  if (NoCurrentTheme2) {
    if (prefNoPref) {
      var size = "_mid";
    } else if (prefRebuce) {
      var size = "_off";
    }
    localStorage.setItem("--size", size);
  }
  const currentStyle = localStorage.getItem("--size");
  if (currentStyle == "_mid") {
    document.body.classList.add("--size_mid");
  } else if (currentStyle == "_big") {
    document.body.classList.add("--size_big");
  } else if (currentStyle == "_small") {
    document.body.classList.add("--size_small");
  } else if (currentStyle == "_off") {
    document.body.classList.add("--size_off");
  }
  var sw4btnLabelAll = document.querySelectorAll(".sw4btn-input");
  // var sw4btnLabelAll = document.querySelectorAll(".sw4btn-label");
  sw4btnLabelAll.forEach(function (btn) {
    // const sw4btnLabBig = document.querySelector(".sw4-lab__big");
    // const sw4btnLabMid = document.querySelector(".sw4-lab__mid");
    // const sw4btnLabSmall = document.querySelector(".sw4-lab__small");
    // const sw4btnLabOff = document.querySelector(".sw4-lab__off");
    const sw4btnInpBig = document.querySelector(".sw4-inp__big");
    const sw4btnInpMid = document.querySelector(".sw4-inp__mid");
    const sw4btnInpSmall = document.querySelector(".sw4-inp__small");
    const sw4btnInpOff = document.querySelector(".sw4-inp__off");
    btn.addEventListener("click", function () {
      if (btn == sw4btnInpMid) {
        document.body.classList.remove("--size_big");
        document.body.classList.remove("--size_small");
        document.body.classList.remove("--size_off");
        document.body.classList.add("--size_mid");
        var size = "_mid";
      }
      // if (btn == sw4btnLabBig ) {
      if (btn == sw4btnInpBig) {
        // if (btn == sw4btnLabBig || sw4btnInpBig.onclick) {
        document.body.classList.remove("--size_mid");
        document.body.classList.remove("--size_small");
        document.body.classList.remove("--size_off");
        document.body.classList.add("--size_big");
        var size = "_big";
      }

      if (btn == sw4btnInpSmall) {
        document.body.classList.remove("--size_big");
        document.body.classList.remove("--size_mid");
        document.body.classList.remove("--size_off");
        document.body.classList.add("--size_small");
        var size = "_small";
      }
      if (btn == sw4btnInpOff) {
        document.body.classList.remove("--size_big");
        document.body.classList.remove("--size_mid");
        document.body.classList.remove("--size_small");
        document.body.classList.add("--size_off");
        var size = "_off";
      }
      localStorage.setItem("--size", size);
    });
  });
}
generalFunctionOfReducedMotion();
// ! </настройки стиля-размера(--size:big,mid,small,off)>˄=======================================================================================˄

// ! <сохран checked в localStorage(массив input[type=radio])>˅=======================================================================================˅
function saveCheckedToLocalStorage(selector) {
  // ! https://qna.habr.com/q/555513
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
// ! </сохран checked в localStorage(массив input[type=radio])>˄=======================================================================================˄
