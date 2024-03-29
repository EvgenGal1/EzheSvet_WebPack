
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/ansi-html-community/index.js":
      /*!***************************************************!*\
  !*** ./node_modules/ansi-html-community/index.js ***!
  \***************************************************/
      /***/ (module) => {
        "use strict";

        module.exports = ansiHTML;

        // Reference to https://github.com/sindresorhus/ansi-regex
        var _regANSI =
          /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/;

        var _defColors = {
          reset: ["fff", "000"], // [FOREGROUD_COLOR, BACKGROUND_COLOR]
          black: "000",
          red: "ff0000",
          green: "209805",
          yellow: "e8bf03",
          blue: "0000ff",
          magenta: "ff00ff",
          cyan: "00ffee",
          lightgrey: "f0f0f0",
          darkgrey: "888",
        };
        var _styles = {
          30: "black",
          31: "red",
          32: "green",
          33: "yellow",
          34: "blue",
          35: "magenta",
          36: "cyan",
          37: "lightgrey",
        };
        var _openTags = {
          1: "font-weight:bold", // bold
          2: "opacity:0.5", // dim
          3: "<i>", // italic
          4: "<u>", // underscore
          8: "display:none", // hidden
          9: "<del>", // delete
        };
        var _closeTags = {
          23: "</i>", // reset italic
          24: "</u>", // reset underscore
          29: "</del>", // reset delete
        };

        [0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
          _closeTags[n] = "</span>";
        });

        /**
         * Converts text with ANSI color codes to HTML markup.
         * @param {String} text
         * @returns {*}
         */
        function ansiHTML(text) {
          // Returns the text if the string has no ANSI escape code.
          if (!_regANSI.test(text)) {
            return text;
          }

          // Cache opened sequence.
          var ansiCodes = [];
          // Replace with markup.
          var ret = text.replace(/\033\[(\d+)m/g, function (match, seq) {
            var ot = _openTags[seq];
            if (ot) {
              // If current sequence has been opened, close it.
              if (!!~ansiCodes.indexOf(seq)) {
                // eslint-disable-line no-extra-boolean-cast
                ansiCodes.pop();
                return "</span>";
              }
              // Open tag.
              ansiCodes.push(seq);
              return ot[0] === "<" ? ot : '<span style="' + ot + ';">';
            }

            var ct = _closeTags[seq];
            if (ct) {
              // Pop sequence
              ansiCodes.pop();
              return ct;
            }
            return "";
          });

          // Make sure tags are closed.
          var l = ansiCodes.length;
          l > 0 && (ret += Array(l + 1).join("</span>"));

          return ret;
        }

        /**
         * Customize colors.
         * @param {Object} colors reference to _defColors
         */
        ansiHTML.setColors = function (colors) {
          if (typeof colors !== "object") {
            throw new Error("`colors` parameter must be an Object.");
          }

          var _finalColors = {};
          for (var key in _defColors) {
            var hex = colors.hasOwnProperty(key) ? colors[key] : null;
            if (!hex) {
              _finalColors[key] = _defColors[key];
              continue;
            }
            if ("reset" === key) {
              if (typeof hex === "string") {
                hex = [hex];
              }
              if (
                !Array.isArray(hex) ||
                hex.length === 0 ||
                hex.some(function (h) {
                  return typeof h !== "string";
                })
              ) {
                throw new Error(
                  "The value of `" +
                    key +
                    "` property must be an Array and each item could only be a hex string, e.g.: FF0000"
                );
              }
              var defHexColor = _defColors[key];
              if (!hex[0]) {
                hex[0] = defHexColor[0];
              }
              if (hex.length === 1 || !hex[1]) {
                hex = [hex[0]];
                hex.push(defHexColor[1]);
              }

              hex = hex.slice(0, 2);
            } else if (typeof hex !== "string") {
              throw new Error(
                "The value of `" +
                  key +
                  "` property must be a hex string, e.g.: FF0000"
              );
            }
            _finalColors[key] = hex;
          }
          _setTags(_finalColors);
        };

        /**
         * Reset colors.
         */
        ansiHTML.reset = function () {
          _setTags(_defColors);
        };

        /**
         * Expose tags, including open and close.
         * @type {Object}
         */
        ansiHTML.tags = {};

        if (Object.defineProperty) {
          Object.defineProperty(ansiHTML.tags, "open", {
            get: function () {
              return _openTags;
            },
          });
          Object.defineProperty(ansiHTML.tags, "close", {
            get: function () {
              return _closeTags;
            },
          });
        } else {
          ansiHTML.tags.open = _openTags;
          ansiHTML.tags.close = _closeTags;
        }

        function _setTags(colors) {
          // reset all
          _openTags["0"] =
            "font-weight:normal;opacity:1;color:#" +
            colors.reset[0] +
            ";background:#" +
            colors.reset[1];
          // inverse
          _openTags["7"] =
            "color:#" + colors.reset[1] + ";background:#" + colors.reset[0];
          // dark grey
          _openTags["90"] = "color:#" + colors.darkgrey;

          for (var code in _styles) {
            var color = _styles[code];
            var oriColor = colors[color] || "000";
            _openTags[code] = "color:#" + oriColor;
            code = parseInt(code);
            _openTags[(code + 10).toString()] = "background:#" + oriColor;
          }
        }

        ansiHTML.reset();

        /***/
      },

    /***/ "./test ES4/index.js":
      /*!***************************!*\
    !*** ./test ES4/index.js ***!
    \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _js_VDOH_devJS_themeModesSettings_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./js/Сайт VDOH/devJS/themeModesSettings.js */ "./test ES4/js/Сайт VDOH/devJS/themeModesSettings.js"
          );
        /* harmony import */ var _js_VDOH_devJS_themeModesSettings_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _js_VDOH_devJS_themeModesSettings_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _styles_scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./styles/scss/styles.scss */ "./test ES4/styles/scss/styles.scss"
          );
        /* harmony import */ var _js_VDOH_devJS_effect_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./js/Сайт VDOH/devJS/effect.js */ "./test ES4/js/Сайт VDOH/devJS/effect.js"
          );
        /* harmony import */ var _js_VDOH_devJS_effect_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _js_VDOH_devJS_effect_js__WEBPACK_IMPORTED_MODULE_2__
          );
        console.log("index.js"); // подкл JS

        // подкл CSS/SCSS

        // врем. подкл JS/CSS/SCSS

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
          var ibg = document.querySelectorAll(".ibg");

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

        ibgJS(); // !!! https://webref.ru/dev/dark-theme/toggling-themes
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
          var contBl = Array.from(document.querySelectorAll(".cont-block-"));
          var subDet = contBl.map(function (item) {
            return item.querySelector(".sub-");
          }); // Тоже самое, что
          // const subDet = Array.from(document.querySelectorAll(".sub-"));
          // const subDet = Array.from(document.querySelectorAll('#sub-detail-'))
          // const subDet = contBl.map((item) => item.querySelector("#sub-detail-"));

          subDet.forEach(function (item, i) {
            var blText = contBl[i].querySelector(".block-text-");
            var textDet = contBl[i].querySelector(".text-detail-");
            var blSub = contBl[i].querySelector(".bl-sub-");
            var blSubright = contBl[i].querySelector(".bl-sub-.right");
            item.addEventListener("click", function () {
              contBl[i].classList.toggle("active");

              if (contBl[i].classList.contains("active")) {
                // blText.style.display = "block";
                // blText.style.marginBottom = "10px";
                // blText.style.padding = "0px 0px 15px";
                blText.style.padding = "0px";
                textDet.style.display = "block";
                var blTextHeight = blText.offsetHeight;
                console.log("blTextHeight : " + blTextHeight); // blSub.style.top = "50px";
                // blSub.style.top = "0px" + "15px";
                // blSub.style.top = "0px" + textDetHeight;

                blSub.style.top = blTextHeight + "px"; //??? не раб - ТРАВНИК - с transition стал выводить большую высоту(~ 40px). было норм

                console.log("blSub.style.top : " + blSub.style.top);
                blSub.style.left = "10%";
                blSub.style.marginTop = "15px";
                blSub.style.transform = "scale(1, 1)"; // blSubright.style.transform = "scale(-1, -1)";
                // blSub.style.transform = "scale(1, 1)";
                // !
                // blSub.style.cssText = "left: 35px; transform: scale(1, 1);";
                // !

                blSubright.style.left = "80%";
                blSubright.style.transform = "scale(-1, 1)"; // ??? не раб - не прописывается много свойств вместе
                // blSub.style.cssText = "top: 0%; left: 0%";
                // blSub.style = { top: "0%", left: "0%", transform: "scale(1, -1)" };
              } else {
                blText.style.cssText = "";
                textDet.style.cssText = "";
                blSub.style = {};
                blSubright.style = ""; // blSub.style = { top: "100%", left: "100%", transform: "scale(1, 1)" };
              }
            });
          });
        }

        clickToBlSub(); // // !
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

        /***/
      },

    /***/ "./test ES4/js/Сайт VDOH/devJS/effect.js":
      /*!***********************************************!*\
    !*** ./test ES4/js/Сайт VDOH/devJS/effect.js ***!
    \***********************************************/
      /***/ () => {
        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }

          return _typeof(obj);
        }

        function _createForOfIteratorHelper(o, allowArrayLike) {
          var it =
            (typeof Symbol !== "undefined" && o[Symbol.iterator]) ||
            o["@@iterator"];

          if (!it) {
            if (
              Array.isArray(o) ||
              (it = _unsupportedIterableToArray(o)) ||
              (allowArrayLike && o && typeof o.length === "number")
            ) {
              if (it) o = it;
              var i = 0;

              var F = function F() {};

              return {
                s: F,
                n: function n() {
                  if (i >= o.length)
                    return {
                      done: true,
                    };
                  return {
                    done: false,
                    value: o[i++],
                  };
                },
                e: function e(_e) {
                  throw _e;
                },
                f: F,
              };
            }

            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }

          var normalCompletion = true,
            didErr = false,
            err;
          return {
            s: function s() {
              it = it.call(o);
            },
            n: function n() {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function e(_e2) {
              didErr = true;
              err = _e2;
            },
            f: function f() {
              try {
                if (!normalCompletion && it["return"] != null) it["return"]();
              } finally {
                if (didErr) throw err;
              }
            },
          };
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;

          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }

          return arr2;
        } // !!! СВОЁ и не только
        // общий переменные

        var header = document.querySelector("header");
        var helloys = document.querySelector(".helloys");
        var centrCont = document.querySelector(".centr-cont-");
        var probB = document.querySelector(".probB");
        var footer = document.querySelector("footer"); // добавл к текущему положению Y

        function setScrollBy() {
          window.scrollBy(0, 50);
        } // scrollTo для header и holloys(у них изменяемые размеры в звисимости от скрола)

        function setScroll(block) {
          if (block == header) {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }

          if (block == helloys) {
            window.scrollTo({
              top: 100,
              behavior: "smooth",
            });
          }
        } // переход к переданому block с вычеслением header

        function setScrollTo(block) {
          // ??? не раб - всё раб. надо разобратся в логике
          // когда header сохращённый
          var heightHeader = document.querySelector("header").offsetHeight + 10; //~ 60
          // когда header полный

          var heightHeader2 =
            document.querySelector("header").offsetHeight - 80; //~ 70

          if (heightHeader < 100) {
            goToBlockValue(block, heightHeader);
            console.log("heightHeader : " + heightHeader); //~ 60

            console.log("heightHeader2- : " + heightHeader2); //~ -30
          } else {
            goToBlockValue(block, heightHeader2);
            console.log("heightHeader2 : " + heightHeader2); //~ 70

            console.log("heightHeader- : " + heightHeader); //~ 160
          }

          function goToBlockValue(block, heightHeader) {
            var goToBlockValuePar = // getBoundingClientRect() - `получить огранич. прямоуг. кл.` - получ. коорд относит окна просмотра и размеры
              // pageYOffset(scrollY) - кол-во прокруч пикселей
              block.getBoundingClientRect().top +
              window.pageYOffset -
              heightHeader;
            window.scrollTo({
              top: goToBlockValuePar,
              behavior: "smooth",
            });
          }
        } // переключает выкл scrollbar(полоса прокрутки)

        function setEnableDesableScroll() {
          document.body.classList.toggle("scroll-lock");
        } // ! нажатие на кнопки .mini-aside(мини меню с боку на скролах) - переход к разделу

        function clickMinAside() {
          var jsScroll = document.querySelectorAll(".ma-bl__js-scroll");
          jsScroll.forEach(function (btn) {
            btn.addEventListener("click", function () {
              var jScr1 = document.querySelector("#jScr1"); // шаг50

              var jScr2 = document.querySelector("#jScr2"); // header

              var jScr3 = document.querySelector("#jScr3"); // helloys

              var jScr4 = document.querySelector("#jScr4"); // centr-

              var jScr5 = document.querySelector("#jScr5"); // probB

              var jScr6 = document.querySelector("#jScr6"); // footer

              var jScr7 = document.querySelector("#jScr7"); // откл

              if (btn == jScr1) setScrollBy();
              if (btn == jScr2) setScroll(header);
              if (btn == jScr3) setScroll(helloys);
              if (btn == jScr4) setScrollTo(centrCont);
              if (btn == jScr5) setScrollTo(probB);
              if (btn == jScr6) setScrollTo(footer);
              if (btn == jScr7) setEnableDesableScroll();
            });
          });
        }

        clickMinAside(); // ! <scrolHeader(сокращ МЕНЮ при скроле вниз)>======================================================================

        function scrolHeader() {
          // !1
          var headerMenu = document.querySelector(".header-menu");
          var headerLogo = document.querySelector(".header-logo");
          var headerLogoSmail = document.querySelector(".header-logo-smail");
          var logoImg = document.querySelector(".logo-img");
          var logoUp = document.querySelector(".logo-up");
          var logoDown = document.querySelector(".logo-down");
          var headerLang = document.querySelector(".header-menu__icon");
          var headerBurger = document.querySelector(".header-burger");
          var headerMenuTop = document.querySelector(".menu__top");
          var headerMenuBottom = document.querySelector(".menu__bottom"); // !0
          // let itemsLinks = document.querySelectorAll(".items__link");
          // let itemsLinks = document.querySelector(".items__link");
          // const menulistitems = Array.from(document.querySelectorAll(".menu-list__items"));
          // const itemsLinks = Array.from(document.querySelectorAll(".items__link"));
          // const itemsLinks = document.querySelectorAll(".items__link");
          // const itemsLink = itemsLinks.map((i) => i.querySelector(".items__link"));
          // const itemsLink = itemsLinks.map((it)=> it.querySelector(".items__link"));
          // const itemsLinks = document.querySelectorAll('.items__link');
          // itemsLinks.forEach((itemsLink) => itemsLinks.addEventListener('click', (e) => e.preventDefault()));
          // for (let itemsLink of itemsLinks) {
          // itemsLink.addEventListener('click', (e) => e.preventDefault());
          // }

          var itemsLinks = document.querySelectorAll(".items__link"); // ,
          //   index
          // ,
          // itemsLink;
          // for (index = 0; index < itemsLinks.length; index++) {
          //   // itemsLink = itemsLinks[index];
          //   itemsLink = itemsLinks[index];
          //   // itemsLink.addEventListener('click', clickHandler);
          //   // itemsLink.addEventListener('dblclick', doubleClickHandler);
          // }

          var _iterator = _createForOfIteratorHelper(itemsLinks),
            _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              // alert(elem.innerHTML); // "тест", "пройден"
              var itemsLink = _step.value;
            } // !0
            // !1
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          var header = document.querySelector("header");
          var helloys = document.querySelector(".helloys");
          document.addEventListener("scroll", function () {
            var scrolled =
              window.pageYOffset || document.documentElement.scrollTop;

            if (scrolled >= 100) {
              console.log(0);
              header.classList.add("fixed_menu");
              header.style.cssText = "height : 50px; padding : 0px 3%;";
              header.style.boxShadow =
                "#000000 3px 3px 15px 0.5px inset, #000000 -3px -3px 15px 0.5px inset";
              headerLogoSmail.style.cssText = "width : 50px; height : 50px";
              logoUp.style.display = "none";
              logoDown.style.display = "none"; // logoImg.style.top = "0%";
              // logoImg.style.width = "42px";
              // logoImg.style.left = "0%";

              logoImg.style.cssText = "left: 0%; top: 0%; width: 42px";
              helloys.style.paddingTop = "140px"; // !0

              var _iterator2 = _createForOfIteratorHelper(itemsLinks),
                _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  var itemsLink = _step2.value; // itemsLink[index].style.fontSize = "0px";

                  itemsLink.style.cssText = "font-size : 0px; height : 10px;";
                } // !2
                // headerMenuTop.classList.add("done").appendChild(headerBurger)
                // let hedDon = headerMenuTop.classList.add("done");
                // hedDon.append(headerBurger);
                // headerMenuTop.classList.add("done").insertAdjacentHTML(headerBurger)
                // !2
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            } else {
              header.classList.remove("fixed_menu");
              header.style.cssText = ""; // header.style.height = "150px";
              // header.style.height = "";
              // header.style.padding = "25px 3%";
              // header.style.padding = "";
              // header.style.boxShadow = "#000000 5px 5px 30px 1.5px inset, #000000 -5px -5px 30px 1.5px inset";
              // header.style.boxShadow = "";
              // headerLogoSmail.style.width = "100px";

              headerLogoSmail.style.cssText = ""; // width = "";
              // headerLogoSmail.style.height = "100px";
              // headerLogoSmail.style.height = "";

              logoUp.style.display = "";
              logoDown.style.display = ""; // logoImg.style.left = "";
              // logoImg.style.top = "";
              // logoImg.style.width = "";
              // logoImg.style.cssText = "left: ; top: ; width: ";

              logoImg.style.cssText = "";
              helloys.style.paddingTop = ""; // !0

              var _iterator3 = _createForOfIteratorHelper(itemsLinks),
                _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  var _itemsLink = _step3.value; // itemsLink[index].style.fontSize = "0px";
                  // itemsLink.style.fontSize = "";

                  _itemsLink.style.cssText = "";
                } // itemsLink[index].style.fontSize = "";
                // itemsLinks[1].style.fontSize = "";
                // itemsLinks[it].style.fontSize = "";
                // itemsLinks.style.fontSize = "inherit";
                // itemsLinks.style.fontSize = "";
                // ??? не раб - передача объектом не действует
                // logoImg.style = { left: "22%", top: "22%", width: "48px" };
                // helloys.style = { paddingTop: "0px" };
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          });
        }

        scrolHeader(); // ! <replaceLinks(заменить ссылки у разной иерархии файлов)>===========================================================================

        function replaceLinks() {
          //^ завести переменные на эл. где есть ссылки, путей(старшей, средней, малой иерархии), titlов
          //^ прописать один общий файл для всех иерархий.
          //^ прописать в общем файле одинаковые пути( в основном без начальных "/" и ".").
          //^ логика. по клику на эл. со ссылкой на новый уровень иерархии, контаненировать нужную перем путей иерх с ссылку
          //^ е/и titl главная, то к прописаным путям, с помощью переменным путей, добавить переменные старшего пути;
          //^ е/и titl средний иерархии(Каталог, Игры и пр.) срастить пути со средними переменными пути; и т.д.
          //! попытка вызова всех Catalog - не перебирается for, вывод одного
          // let aLinkCatCatalog = document.querySelectorAll("a[href*='Catalog']");
          // console.log("aLinkCatCatalog : " + aLinkCatCatalog); //~ [object NodeList] //* object
          // const search = "Catalog";
          // const elem = Array.from(document.querySelectorAll("a")).find((el) =>
          //   el.href.includes(search)
          // ); // if(elem) elem.click();
          // console.log("elem : " + elem); //~ http://loc.../html/Catalog/Catalog.html
          //! попытка завести сокращ перем - document.querySelector
          // let dQS = document.querySelector; //??? не раб - не восприн сокращ doc.quSel
          // let hedA = dQS(".header-logo > a").href; //??? не раб - не восприн сокращ doc.quSel
          var thisTitl = document.title; //~ Главная - если на главной (Каталог)

          console.log("thisTitl : " + thisTitl);
          var hedImg = document.querySelector(".header-logo img").src; //~ http://localhost:8080/img/logo/%D0...Red.png //* string

          var hedA = document.querySelector(".header-logo a").href; //~ http://localhost:8080/index.html

          var aLinkMain = document.querySelector(
            "a.items__link[href*='index']"
          ).href; //~ http://loc.../index.html

          var aLinkCat = document.querySelector(
            "a.items__link[href*='Catalog']"
          ).href; //~ http://l../html/Catalog/Catalog.html

          var aLinkCatSpace = document.querySelector("a[href*='Space']").href; //~ http://l../html/Catalog/catalogs/dreamSpace.html
          // let hierarA = document.querySelectorAll("a[class^='hierar']").href; //~ undefined //* undefined

          var hierarA = document.querySelectorAll("a[class*='hierar']"); //~ [object NodeList] //* object

          console.log("hierarA : " + hierarA);
          console.log("hierarA : " + _typeof(hierarA)); // ??? не раб - на 2 еирарх ошб - Cannot read properties of null (reading 'href')
          // let hierar = document.querySelector("a[class^='hierar']").href; //~ http://l.../index.html //* object
          // console.log("hierar : " + hierar);
          // console.log("hierar : " + typeof hierar);
          //^ ч/з for
          // let elementToStr = ""; //~ -
          // console.log("elementToStr1 : " + elementToStr);
          // for (let index = 0; index < hierarA.length; index++) {
          //   let elementH = hierarA; //~ [object NodeList] //* object
          //   let elementI = index; //~ 1, //~ 2 //* number
          //   let elementA = hierarA[index]; //~ h.../index.html, //~ h.../Catalog.html //* object
          //   let elementToStr = elementA.toString(); //~ h.../index.html, //~ h.../Catalog.html //* string
          //   console.log("elementToStr2 : " + elementToStr);
          //   // return elementToStr;
          // }
          // console.log("elementToStr3 : " + elementToStr); //~ -
          //^ ч/з for2
          // ! НЕ ПРОБОВАЛ !!!
          // !!! https://question-it.com/questions/1048867/vernut-vse-znachenija-iz-tsikla-for-v-javascript
          // var collections = [];
          // for (var i = 0; i < dataSets.length; i++) {
          //     var result = _.filter(data, function(item){
          //       return _.contains(item, dataSets[i]);
          //     });
          //     collections[i] = [];
          //     for(x in result) collections[i].push(result[x].value);
          // }
          //^ ч/з forEach
          // !!! https://www.techiediaries.com/javascript-queryselectorall-nodelist-foreach/
          // [].forEach.call(hierarA, (e) => { //~ h.../index.html, //~ h.../Catalog.html //* object
          //   console.log("e : " + e);
          //   console.log("e : " + typeof e);
          // });
          //^ ч/з Array.from()
          // !!! javascript-queryselectorall-nodelist-foreach

          var hierarAArr = Array.from(hierarA); //~ h.../index.html,h.../Catalog.html,h.../Game.html //* object

          console.log("hierarAArr : " + hierarAArr);
          console.log("hierarAArr : " + _typeof(hierarAArr)); //^ ч/з fn()
          // !!! https://askdev.ru/q/vozvrat-znacheniy-iz-cikla-for-v-javascript-341945/

          var a = hierarAArr;
          console.log("a 1: " + a); // getId(hierarAArr);

          var result = ""; //~ -

          console.log("result -: " + result);

          function getId(a) {
            console.log("a 2: " + a);
            var result = ""; // var aL = a.length;
            // for(i = 0; i < aL; i++ ){

            for (i = 0; i < a.length; i++) {
              var aI = a[i];
              console.log("aI : " + aI);
              console.log("aI : " + _typeof(aI));
              console.log("i : " + i); //~ 0, ... //~ 3 //* number

              console.log("a.length : " + a.length); //~ 4

              console.log("result 1: " + result); //~ -, ... //~ 3

              result += a[i]; // result ++ //~ 4

              console.log("result 2: " + result); //~ 1, ... //~ 4
            }

            console.log("result 3: " + result); //~ 4 //* string

            return result;
          } // console.log("getId 1 : " + getId);
          // console.log("getId 1 : " + typeof getId);
          // console.log("getId 2--------------: " + getId(a)[2][2]); //~ undefined

          console.log("getId 2---------------: " + getId(a)[2]); //~ t

          console.log("getId 2----------------: " + getId(a)); //~ http://localhost:8080/index.htmlhttp://localhost:8080/index.htmlhttp://localhost:8080/html/Catalog/Catalog.htmlhttp://localhost:8080/html/Game/Game.html

          console.log("getId 2+++++++++++: " + _typeof(getId(a))); //* string

          console.log("result --: " + result); //~ -
          // const hierarAA = Array.from(document.querySelectorAll("a[class^='hierar']")); //~ http://l.../index.html //* object
          // console.log('hierarAA : ' + hierarAA.length);
          // const hierarAAA = hierarAA.map((item) => {
          //  let item1 = item.toString();
          //   console.log("item : " + item);
          //   console.log("item : " + typeof item);
          //   console.log("item1 : " + item1);
          //   console.log("item1 : " + typeof item1);
          // }); //~ h.../index.html //* object
          // console.log("hierarAAA2 : " + hierarAAA);
          // console.log("hierarAAA2 : " + typeof hierarAAA);
          //   // ! hierarA.map is not a function
          //   let hierarAF = hierarA.map((item) => {
          // //  return  hierarAА = hierarA.map((item) => {
          //     // item;
          //     console.log("item : " + item);
          //     console.log("item : " + typeof item);
          //   });
          // if (thisTitl == "Каталог") {
          //   addEventListener;
          // }
        } // replaceLinks();
        // ! <touch>========================================================================================
        // touch - определяет на каком устройстве открыта страница

        var ua = navigator.userAgent;
        var isMobile = {
          // ! touch 0.1
          TouchPC: function TouchPC() {
            // метод match() производит поиск по заданной строке с использованием регулярного выражения (глобальный объект RegExp) и возвращает массив, содержащий результаты этого поиска.
            // метод search() выполняет поиск первого соответствия (сопоставления) регулярному выражению (объект RegExp) внутри строки.
            return (
              ua.match(
                /(Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini)/i
              ) || // возможно не нужно 0.1
              ua.search(/mobile/i) > 0
            );
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
          any: function any() {
            return (
              // ! touch 0.2
              isMobile.TouchPC() // ! touch 0.2
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
        }; // ! <PC и TOUCH сост>========================================================================================
        // добав класс опред body е/и touchscreen(Сенсорный экран) или PC

        if (isMobile.any()) {
          document.body.classList.add("_touch");
          var itemsArrows = document.querySelectorAll(".items__arrow");

          if (itemsArrows.length > 0) {
            itemsArrows.forEach(function (e) {
              e.addEventListener("click", function () {
                e.parentElement.classList.toggle("_active");
              });
            });
          } // ??? не раб - Cannot read properties of undefined (reading 'parentElement')
          // for (let index = 0; index < itemsArrows.length; index++) {
          //   const itemsArrow = itemsArrows[index];
          //   itemsArrow = addEventListener("click", function () {
          //     itemsArrow.parentElement.classList.toggle("_active");
          //     // this.parentElement.classList.add("_active");
          //   });
          // }
        } else {
          document.body.classList.add("_pc");
        } // !!
        // function adaptive_header(w, h) {

        function adaptive_header() {
          console.log("adaptheader");
          var headerLogo = document.querySelector(".header-logo");
          var headerMenu = document.querySelector(".header-menu");
          var headerMenuTop = document.querySelector(".menu__top");
          var headerMenuBottom = document.querySelector(".menu__bottom");
          var headerLang = document.querySelector(".header-menu__icon");
          var headerBurger = document.querySelector(".header-burger");
          var scrolled =
            window.pageYOffset || document.documentElement.scrollTop;
          console.log(1);

          if (scrolled >= 75) {
            console.log(2); // е\и в языках нет класса done

            if (!headerMenuTop.classList.contains("done")) {
              console.log(3); // то блоку header-top-lang добавит класс "done" и добавить его в блок header-burger
              // headerLang.addClass("done").appendTo(headerBurger);
              // headerMenuTop.classList.add("done").insertAdjacentHTML(headerBurger)//.appendTo(headerBurger);

              headerMenuTop.classList.add("done").appendChild(headerBurger); //.appendTo(headerBurger);

              console.log(4);
            }

            console.log(5);
          } // else {
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
        } // adaptive_header();

        function adaptive_function() {
          var w = $(window).outerWidth();
          var h = $(window).outerHeight();
          adaptive_header(w, h);
        } // adaptive_function();

        /***/
      },

    /***/ "./test ES4/js/Сайт VDOH/devJS/themeModesSettings.js":
      /*!***********************************************************!*\
    !*** ./test ES4/js/Сайт VDOH/devJS/themeModesSettings.js ***!
    \***********************************************************/
      /***/ () => {
        // ! <настройки стиля-цвета(--theme:dark,neutral,light)>˅=======================================================================================˅
        function generalFunctionOfColorSchemes() {
          // ! https://webref.ru/dev/dark-mode
          // ! https://www.kooslooijesteijn.net/blog/add-dark-mode-to-website
          // Проверяем предпочтение тёмного режима на уровне ОС
          var prefDark = window.matchMedia("(prefers-color-scheme: dark)");
          var preflight = window.matchMedia("(prefers-color-scheme: light)");
          var prefNo = window.matchMedia(
            "(prefers-color-scheme: no-preference)"
          );
          var NoCurrentTheme = localStorage.getItem("--theme") == null;
          var theme;

          if (NoCurrentTheme) {
            if (prefDark) {
              // var theme = document.body.classList.contains("--theme-dark");
              // document.body.classList.contains("_-theme-dark");
              theme = "_dark"; // return "dark";
            }

            if (preflight) {
              theme = "_light";
            }

            if (prefNo) {
              theme = "_neutral";
            }

            localStorage.setItem("--theme", theme);
          } // Получаем предпочтение темы пользователя из локального хранилища, если оно доступно

          var currentTheme = localStorage.getItem("--theme"); // Если текущая тема в localStorage равна "neutral"

          if (currentTheme == "_dark") {
            document.body.classList.add("--theme_dark"); //  if (currentTheme == "neutral" || NoCurrentTheme) {
            // вкл класс .--theme_neutral для <body>
          } else if (currentTheme == "_neutral") {
            document.body.classList.add("--theme_neutral");
          } else if (currentTheme == "_light") {
            document.body.classList.add("--theme_light");
          } // Выбираем все кнопки на странице и получаем массив

          var swLabelAll = document.querySelectorAll(".sw3btn-label"); // Проходим по массиву

          swLabelAll.forEach(function (btn) {
            // заводим перем для позиций кнопок
            var swDark = document.querySelector(".sw3btn__dark");
            var swNeut = document.querySelector(".sw3btn__neutral");
            var swLight = document.querySelector(".sw3btn__light"); // Вешаем событие клик

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

        generalFunctionOfColorSchemes(); // ! </настройки стиля-цвета(--theme:dark,neutral,light)>˄=======================================================================================˄
        // ! <настройки стиля-размера(--size:big,mid,small,off)>˅=======================================================================================˅

        function generalFunctionOfReducedMotion() {
          var prefRebuce = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          );
          var prefNoPref = window.matchMedia(
            "(prefers-reduced-motion: no-preference)"
          );
          var NoCurrentTheme2 = localStorage.getItem("--size") == null;

          if (NoCurrentTheme2) {
            if (prefNoPref) {
              var size = "_mid";
            } else if (prefRebuce) {
              var size = "_off";
            }

            localStorage.setItem("--size", size);
          }

          var currentStyle = localStorage.getItem("--size");

          if (currentStyle == "_mid") {
            document.body.classList.add("--size_mid");
          } else if (currentStyle == "_big") {
            document.body.classList.add("--size_big");
          } else if (currentStyle == "_small") {
            document.body.classList.add("--size_small");
          } else if (currentStyle == "_off") {
            document.body.classList.add("--size_off");
          }

          var sw4btnLabelAll = document.querySelectorAll(".sw4btn-input"); // var sw4btnLabelAll = document.querySelectorAll(".sw4btn-label");

          sw4btnLabelAll.forEach(function (btn) {
            // const sw4btnLabBig = document.querySelector(".sw4-lab__big");
            // const sw4btnLabMid = document.querySelector(".sw4-lab__mid");
            // const sw4btnLabSmall = document.querySelector(".sw4-lab__small");
            // const sw4btnLabOff = document.querySelector(".sw4-lab__off");
            var sw4btnInpBig = document.querySelector(".sw4-inp__big");
            var sw4btnInpMid = document.querySelector(".sw4-inp__mid");
            var sw4btnInpSmall = document.querySelector(".sw4-inp__small");
            var sw4btnInpOff = document.querySelector(".sw4-inp__off");
            btn.addEventListener("click", function () {
              if (btn == sw4btnInpMid) {
                document.body.classList.remove("--size_big");
                document.body.classList.remove("--size_small");
                document.body.classList.remove("--size_off");
                document.body.classList.add("--size_mid");
                var size = "_mid";
              } // if (btn == sw4btnLabBig ) {

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

        generalFunctionOfReducedMotion(); // ! </настройки стиля-размера(--size:big,mid,small,off)>˄=======================================================================================˄
        // ! <сохран checked в localStorage(массив input[type=radio])>˅=======================================================================================˅

        function saveCheckedToLocalStorage(selector) {
          // ! https://qna.habr.com/q/555513
          // не дублируем код
          function save(data) {
            localStorage.setItem(selector, JSON.stringify(data));
          } // и не создаем тысячи функций в цикле а используем одну общую

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
          } // вместо ненужного создания массива обратимся напрямую к прототипу

          Array.prototype.forEach.call(elements, function (element) {
            var name = element.name,
              value = element.value;

            if (data[name] === value) {
              // если текущий элемент отмечен в сторадже то отметим и на странице
              element.checked = true;
            } // навесим созданый вне цикла хандлер на событие

            element.addEventListener("change", onChange);
          }); // ??? не раб - попытка вывести умолчание в localStorage. надо разобратся в коде
          // if (data[name] === "") {
          // localStorage.setItem("_size12", "0");
          // }
        }

        saveCheckedToLocalStorage("input[type=radio]"); // ! </сохран checked в localStorage(массив input[type=radio])>˄=======================================================================================˄

        /***/
      },

    /***/ "./node_modules/events/events.js":
      /*!***************************************!*\
    !*** ./node_modules/events/events.js ***!
    \***************************************/
      /***/ (module) => {
        "use strict";
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.

        var R = typeof Reflect === "object" ? Reflect : null;
        var ReflectApply =
          R && typeof R.apply === "function"
            ? R.apply
            : function ReflectApply(target, receiver, args) {
                return Function.prototype.apply.call(target, receiver, args);
              };

        var ReflectOwnKeys;
        if (R && typeof R.ownKeys === "function") {
          ReflectOwnKeys = R.ownKeys;
        } else if (Object.getOwnPropertySymbols) {
          ReflectOwnKeys = function ReflectOwnKeys(target) {
            return Object.getOwnPropertyNames(target).concat(
              Object.getOwnPropertySymbols(target)
            );
          };
        } else {
          ReflectOwnKeys = function ReflectOwnKeys(target) {
            return Object.getOwnPropertyNames(target);
          };
        }

        function ProcessEmitWarning(warning) {
          if (console && console.warn) console.warn(warning);
        }

        var NumberIsNaN =
          Number.isNaN ||
          function NumberIsNaN(value) {
            return value !== value;
          };

        function EventEmitter() {
          EventEmitter.init.call(this);
        }
        module.exports = EventEmitter;
        module.exports.once = once;

        // Backwards-compat with node 0.10.x
        EventEmitter.EventEmitter = EventEmitter;

        EventEmitter.prototype._events = undefined;
        EventEmitter.prototype._eventsCount = 0;
        EventEmitter.prototype._maxListeners = undefined;

        // By default EventEmitters will print a warning if more than 10 listeners are
        // added to it. This is a useful default which helps finding memory leaks.
        var defaultMaxListeners = 10;

        function checkListener(listener) {
          if (typeof listener !== "function") {
            throw new TypeError(
              'The "listener" argument must be of type Function. Received type ' +
                typeof listener
            );
          }
        }

        Object.defineProperty(EventEmitter, "defaultMaxListeners", {
          enumerable: true,
          get: function () {
            return defaultMaxListeners;
          },
          set: function (arg) {
            if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
              throw new RangeError(
                'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                  arg +
                  "."
              );
            }
            defaultMaxListeners = arg;
          },
        });

        EventEmitter.init = function () {
          if (
            this._events === undefined ||
            this._events === Object.getPrototypeOf(this)._events
          ) {
            this._events = Object.create(null);
            this._eventsCount = 0;
          }

          this._maxListeners = this._maxListeners || undefined;
        };

        // Obviously not all Emitters should be limited to 10. This function allows
        // that to be increased. Set to zero for unlimited.
        EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
          if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                n +
                "."
            );
          }
          this._maxListeners = n;
          return this;
        };

        function _getMaxListeners(that) {
          if (that._maxListeners === undefined)
            return EventEmitter.defaultMaxListeners;
          return that._maxListeners;
        }

        EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
          return _getMaxListeners(this);
        };

        EventEmitter.prototype.emit = function emit(type) {
          var args = [];
          for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
          var doError = type === "error";

          var events = this._events;
          if (events !== undefined)
            doError = doError && events.error === undefined;
          else if (!doError) return false;

          // If there is no 'error' event listener then throw.
          if (doError) {
            var er;
            if (args.length > 0) er = args[0];
            if (er instanceof Error) {
              // Note: The comments on the `throw` lines are intentional, they show
              // up in Node's output if this results in an unhandled exception.
              throw er; // Unhandled 'error' event
            }
            // At least give some kind of context to the user
            var err = new Error(
              "Unhandled error." + (er ? " (" + er.message + ")" : "")
            );
            err.context = er;
            throw err; // Unhandled 'error' event
          }

          var handler = events[type];

          if (handler === undefined) return false;

          if (typeof handler === "function") {
            ReflectApply(handler, this, args);
          } else {
            var len = handler.length;
            var listeners = arrayClone(handler, len);
            for (var i = 0; i < len; ++i)
              ReflectApply(listeners[i], this, args);
          }

          return true;
        };

        function _addListener(target, type, listener, prepend) {
          var m;
          var events;
          var existing;

          checkListener(listener);

          events = target._events;
          if (events === undefined) {
            events = target._events = Object.create(null);
            target._eventsCount = 0;
          } else {
            // To avoid recursion in the case that type === "newListener"! Before
            // adding it to the listeners, first emit "newListener".
            if (events.newListener !== undefined) {
              target.emit(
                "newListener",
                type,
                listener.listener ? listener.listener : listener
              );

              // Re-assign `events` because a newListener handler could have caused the
              // this._events to be assigned to a new object
              events = target._events;
            }
            existing = events[type];
          }

          if (existing === undefined) {
            // Optimize the case of one listener. Don't need the extra array object.
            existing = events[type] = listener;
            ++target._eventsCount;
          } else {
            if (typeof existing === "function") {
              // Adding the second element, need to change to array.
              existing = events[type] = prepend
                ? [listener, existing]
                : [existing, listener];
              // If we've already got an array, just append.
            } else if (prepend) {
              existing.unshift(listener);
            } else {
              existing.push(listener);
            }

            // Check for listener leak
            m = _getMaxListeners(target);
            if (m > 0 && existing.length > m && !existing.warned) {
              existing.warned = true;
              // No error code for this since it is a Warning
              // eslint-disable-next-line no-restricted-syntax
              var w = new Error(
                "Possible EventEmitter memory leak detected. " +
                  existing.length +
                  " " +
                  String(type) +
                  " listeners " +
                  "added. Use emitter.setMaxListeners() to " +
                  "increase limit"
              );
              w.name = "MaxListenersExceededWarning";
              w.emitter = target;
              w.type = type;
              w.count = existing.length;
              ProcessEmitWarning(w);
            }
          }

          return target;
        }

        EventEmitter.prototype.addListener = function addListener(
          type,
          listener
        ) {
          return _addListener(this, type, listener, false);
        };

        EventEmitter.prototype.on = EventEmitter.prototype.addListener;

        EventEmitter.prototype.prependListener = function prependListener(
          type,
          listener
        ) {
          return _addListener(this, type, listener, true);
        };

        function onceWrapper() {
          if (!this.fired) {
            this.target.removeListener(this.type, this.wrapFn);
            this.fired = true;
            if (arguments.length === 0) return this.listener.call(this.target);
            return this.listener.apply(this.target, arguments);
          }
        }

        function _onceWrap(target, type, listener) {
          var state = {
            fired: false,
            wrapFn: undefined,
            target: target,
            type: type,
            listener: listener,
          };
          var wrapped = onceWrapper.bind(state);
          wrapped.listener = listener;
          state.wrapFn = wrapped;
          return wrapped;
        }

        EventEmitter.prototype.once = function once(type, listener) {
          checkListener(listener);
          this.on(type, _onceWrap(this, type, listener));
          return this;
        };

        EventEmitter.prototype.prependOnceListener =
          function prependOnceListener(type, listener) {
            checkListener(listener);
            this.prependListener(type, _onceWrap(this, type, listener));
            return this;
          };

        // Emits a 'removeListener' event if and only if the listener was removed.
        EventEmitter.prototype.removeListener = function removeListener(
          type,
          listener
        ) {
          var list, events, position, i, originalListener;

          checkListener(listener);

          events = this._events;
          if (events === undefined) return this;

          list = events[type];
          if (list === undefined) return this;

          if (list === listener || list.listener === listener) {
            if (--this._eventsCount === 0) this._events = Object.create(null);
            else {
              delete events[type];
              if (events.removeListener)
                this.emit("removeListener", type, list.listener || listener);
            }
          } else if (typeof list !== "function") {
            position = -1;

            for (i = list.length - 1; i >= 0; i--) {
              if (list[i] === listener || list[i].listener === listener) {
                originalListener = list[i].listener;
                position = i;
                break;
              }
            }

            if (position < 0) return this;

            if (position === 0) list.shift();
            else {
              spliceOne(list, position);
            }

            if (list.length === 1) events[type] = list[0];

            if (events.removeListener !== undefined)
              this.emit("removeListener", type, originalListener || listener);
          }

          return this;
        };

        EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

        EventEmitter.prototype.removeAllListeners = function removeAllListeners(
          type
        ) {
          var listeners, events, i;

          events = this._events;
          if (events === undefined) return this;

          // not listening for removeListener, no need to emit
          if (events.removeListener === undefined) {
            if (arguments.length === 0) {
              this._events = Object.create(null);
              this._eventsCount = 0;
            } else if (events[type] !== undefined) {
              if (--this._eventsCount === 0) this._events = Object.create(null);
              else delete events[type];
            }
            return this;
          }

          // emit removeListener for all listeners on all events
          if (arguments.length === 0) {
            var keys = Object.keys(events);
            var key;
            for (i = 0; i < keys.length; ++i) {
              key = keys[i];
              if (key === "removeListener") continue;
              this.removeAllListeners(key);
            }
            this.removeAllListeners("removeListener");
            this._events = Object.create(null);
            this._eventsCount = 0;
            return this;
          }

          listeners = events[type];

          if (typeof listeners === "function") {
            this.removeListener(type, listeners);
          } else if (listeners !== undefined) {
            // LIFO order
            for (i = listeners.length - 1; i >= 0; i--) {
              this.removeListener(type, listeners[i]);
            }
          }

          return this;
        };

        function _listeners(target, type, unwrap) {
          var events = target._events;

          if (events === undefined) return [];

          var evlistener = events[type];
          if (evlistener === undefined) return [];

          if (typeof evlistener === "function")
            return unwrap ? [evlistener.listener || evlistener] : [evlistener];

          return unwrap
            ? unwrapListeners(evlistener)
            : arrayClone(evlistener, evlistener.length);
        }

        EventEmitter.prototype.listeners = function listeners(type) {
          return _listeners(this, type, true);
        };

        EventEmitter.prototype.rawListeners = function rawListeners(type) {
          return _listeners(this, type, false);
        };

        EventEmitter.listenerCount = function (emitter, type) {
          if (typeof emitter.listenerCount === "function") {
            return emitter.listenerCount(type);
          } else {
            return listenerCount.call(emitter, type);
          }
        };

        EventEmitter.prototype.listenerCount = listenerCount;
        function listenerCount(type) {
          var events = this._events;

          if (events !== undefined) {
            var evlistener = events[type];

            if (typeof evlistener === "function") {
              return 1;
            } else if (evlistener !== undefined) {
              return evlistener.length;
            }
          }

          return 0;
        }

        EventEmitter.prototype.eventNames = function eventNames() {
          return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
        };

        function arrayClone(arr, n) {
          var copy = new Array(n);
          for (var i = 0; i < n; ++i) copy[i] = arr[i];
          return copy;
        }

        function spliceOne(list, index) {
          for (; index + 1 < list.length; index++)
            list[index] = list[index + 1];
          list.pop();
        }

        function unwrapListeners(arr) {
          var ret = new Array(arr.length);
          for (var i = 0; i < ret.length; ++i) {
            ret[i] = arr[i].listener || arr[i];
          }
          return ret;
        }

        function once(emitter, name) {
          return new Promise(function (resolve, reject) {
            function errorListener(err) {
              emitter.removeListener(name, resolver);
              reject(err);
            }

            function resolver() {
              if (typeof emitter.removeListener === "function") {
                emitter.removeListener("error", errorListener);
              }
              resolve([].slice.call(arguments));
            }

            eventTargetAgnosticAddListener(emitter, name, resolver, {
              once: true,
            });
            if (name !== "error") {
              addErrorHandlerIfEventEmitter(emitter, errorListener, {
                once: true,
              });
            }
          });
        }

        function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
          if (typeof emitter.on === "function") {
            eventTargetAgnosticAddListener(emitter, "error", handler, flags);
          }
        }

        function eventTargetAgnosticAddListener(
          emitter,
          name,
          listener,
          flags
        ) {
          if (typeof emitter.on === "function") {
            if (flags.once) {
              emitter.once(name, listener);
            } else {
              emitter.on(name, listener);
            }
          } else if (typeof emitter.addEventListener === "function") {
            // EventTarget does not have `error` event semantics like Node
            // EventEmitters, we do not listen for `error` events here.
            emitter.addEventListener(name, function wrapListener(arg) {
              // IE does not have builtin `{ once: true }` support so we
              // have to do it manually.
              if (flags.once) {
                emitter.removeEventListener(name, wrapListener);
              }
              listener(arg);
            });
          } else {
            throw new TypeError(
              'The "emitter" argument must be of type EventEmitter. Received type ' +
                typeof emitter
            );
          }
        }

        /***/
      },

    /***/ "./node_modules/html-entities/lib/index.js":
      /*!*************************************************!*\
    !*** ./node_modules/html-entities/lib/index.js ***!
    \*************************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        "use strict";

        var __assign =
          (this && this.__assign) ||
          function () {
            __assign =
              Object.assign ||
              function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
              };
            return __assign.apply(this, arguments);
          };
        Object.defineProperty(exports, "__esModule", { value: true });
        var named_references_1 = __webpack_require__(
          /*! ./named-references */ "./node_modules/html-entities/lib/named-references.js"
        );
        var numeric_unicode_map_1 = __webpack_require__(
          /*! ./numeric-unicode-map */ "./node_modules/html-entities/lib/numeric-unicode-map.js"
        );
        var surrogate_pairs_1 = __webpack_require__(
          /*! ./surrogate-pairs */ "./node_modules/html-entities/lib/surrogate-pairs.js"
        );
        var allNamedReferences = __assign(
          __assign({}, named_references_1.namedReferences),
          { all: named_references_1.namedReferences.html5 }
        );
        var encodeRegExps = {
          specialChars: /[<>'"&]/g,
          nonAscii:
            /(?:[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
          nonAsciiPrintable:
            /(?:[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
          extensive:
            /(?:[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
        };
        var defaultEncodeOptions = {
          mode: "specialChars",
          level: "all",
          numeric: "decimal",
        };
        /** Encodes all the necessary (specified by `level`) characters in the text */
        function encode(text, _a) {
          var _b = _a === void 0 ? defaultEncodeOptions : _a,
            _c = _b.mode,
            mode = _c === void 0 ? "specialChars" : _c,
            _d = _b.numeric,
            numeric = _d === void 0 ? "decimal" : _d,
            _e = _b.level,
            level = _e === void 0 ? "all" : _e;
          if (!text) {
            return "";
          }
          var encodeRegExp = encodeRegExps[mode];
          var references = allNamedReferences[level].characters;
          var isHex = numeric === "hexadecimal";
          encodeRegExp.lastIndex = 0;
          var _b = encodeRegExp.exec(text);
          var _c;
          if (_b) {
            _c = "";
            var _d = 0;
            do {
              if (_d !== _b.index) {
                _c += text.substring(_d, _b.index);
              }
              var _e = _b[0];
              var result_1 = references[_e];
              if (!result_1) {
                var code_1 =
                  _e.length > 1
                    ? surrogate_pairs_1.getCodePoint(_e, 0)
                    : _e.charCodeAt(0);
                result_1 =
                  (isHex ? "&#x" + code_1.toString(16) : "&#" + code_1) + ";";
              }
              _c += result_1;
              _d = _b.index + _e.length;
            } while ((_b = encodeRegExp.exec(text)));
            if (_d !== text.length) {
              _c += text.substring(_d);
            }
          } else {
            _c = text;
          }
          return _c;
        }
        exports.encode = encode;
        var defaultDecodeOptions = {
          scope: "body",
          level: "all",
        };
        var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
        var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
        var baseDecodeRegExps = {
          xml: {
            strict: strict,
            attribute: attribute,
            body: named_references_1.bodyRegExps.xml,
          },
          html4: {
            strict: strict,
            attribute: attribute,
            body: named_references_1.bodyRegExps.html4,
          },
          html5: {
            strict: strict,
            attribute: attribute,
            body: named_references_1.bodyRegExps.html5,
          },
        };
        var decodeRegExps = __assign(__assign({}, baseDecodeRegExps), {
          all: baseDecodeRegExps.html5,
        });
        var fromCharCode = String.fromCharCode;
        var outOfBoundsChar = fromCharCode(65533);
        var defaultDecodeEntityOptions = {
          level: "all",
        };
        /** Decodes a single entity */
        function decodeEntity(entity, _a) {
          var _b = (_a === void 0 ? defaultDecodeEntityOptions : _a).level,
            level = _b === void 0 ? "all" : _b;
          if (!entity) {
            return "";
          }
          var _b = entity;
          var decodeEntityLastChar_1 = entity[entity.length - 1];
          if (false) {
          } else if (false) {
          } else {
            var decodeResultByReference_1 =
              allNamedReferences[level].entities[entity];
            if (decodeResultByReference_1) {
              _b = decodeResultByReference_1;
            } else if (entity[0] === "&" && entity[1] === "#") {
              var decodeSecondChar_1 = entity[2];
              var decodeCode_1 =
                decodeSecondChar_1 == "x" || decodeSecondChar_1 == "X"
                  ? parseInt(entity.substr(3), 16)
                  : parseInt(entity.substr(2));
              _b =
                decodeCode_1 >= 0x10ffff
                  ? outOfBoundsChar
                  : decodeCode_1 > 65535
                  ? surrogate_pairs_1.fromCodePoint(decodeCode_1)
                  : fromCharCode(
                      numeric_unicode_map_1.numericUnicodeMap[decodeCode_1] ||
                        decodeCode_1
                    );
            }
          }
          return _b;
        }
        exports.decodeEntity = decodeEntity;
        /** Decodes all entities in the text */
        function decode(text, _a) {
          var decodeSecondChar_1 = _a === void 0 ? defaultDecodeOptions : _a,
            decodeCode_1 = decodeSecondChar_1.level,
            level = decodeCode_1 === void 0 ? "all" : decodeCode_1,
            _b = decodeSecondChar_1.scope,
            scope = _b === void 0 ? (level === "xml" ? "strict" : "body") : _b;
          if (!text) {
            return "";
          }
          var decodeRegExp = decodeRegExps[level][scope];
          var references = allNamedReferences[level].entities;
          var isAttribute = scope === "attribute";
          var isStrict = scope === "strict";
          decodeRegExp.lastIndex = 0;
          var replaceMatch_1 = decodeRegExp.exec(text);
          var replaceResult_1;
          if (replaceMatch_1) {
            replaceResult_1 = "";
            var replaceLastIndex_1 = 0;
            do {
              if (replaceLastIndex_1 !== replaceMatch_1.index) {
                replaceResult_1 += text.substring(
                  replaceLastIndex_1,
                  replaceMatch_1.index
                );
              }
              var replaceInput_1 = replaceMatch_1[0];
              var decodeResult_1 = replaceInput_1;
              var decodeEntityLastChar_2 =
                replaceInput_1[replaceInput_1.length - 1];
              if (isAttribute && decodeEntityLastChar_2 === "=") {
                decodeResult_1 = replaceInput_1;
              } else if (isStrict && decodeEntityLastChar_2 !== ";") {
                decodeResult_1 = replaceInput_1;
              } else {
                var decodeResultByReference_2 = references[replaceInput_1];
                if (decodeResultByReference_2) {
                  decodeResult_1 = decodeResultByReference_2;
                } else if (
                  replaceInput_1[0] === "&" &&
                  replaceInput_1[1] === "#"
                ) {
                  var decodeSecondChar_2 = replaceInput_1[2];
                  var decodeCode_2 =
                    decodeSecondChar_2 == "x" || decodeSecondChar_2 == "X"
                      ? parseInt(replaceInput_1.substr(3), 16)
                      : parseInt(replaceInput_1.substr(2));
                  decodeResult_1 =
                    decodeCode_2 >= 0x10ffff
                      ? outOfBoundsChar
                      : decodeCode_2 > 65535
                      ? surrogate_pairs_1.fromCodePoint(decodeCode_2)
                      : fromCharCode(
                          numeric_unicode_map_1.numericUnicodeMap[
                            decodeCode_2
                          ] || decodeCode_2
                        );
                }
              }
              replaceResult_1 += decodeResult_1;
              replaceLastIndex_1 = replaceMatch_1.index + replaceInput_1.length;
            } while ((replaceMatch_1 = decodeRegExp.exec(text)));
            if (replaceLastIndex_1 !== text.length) {
              replaceResult_1 += text.substring(replaceLastIndex_1);
            }
          } else {
            replaceResult_1 = text;
          }
          return replaceResult_1;
        }
        exports.decode = decode;

        /***/
      },

    /***/ "./node_modules/html-entities/lib/named-references.js":
      /*!************************************************************!*\
    !*** ./node_modules/html-entities/lib/named-references.js ***!
    \************************************************************/
      /***/ (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.bodyRegExps = {
          xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
          html4:
            /&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
          html5:
            /&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
        };
        exports.namedReferences = {
          xml: {
            entities: {
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&apos;": "'",
              "&amp;": "&",
            },
            characters: {
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&apos;",
              "&": "&amp;",
            },
          },
          html4: {
            entities: {
              "&apos;": "'",
              "&nbsp": " ",
              "&nbsp;": " ",
              "&iexcl": "¡",
              "&iexcl;": "¡",
              "&cent": "¢",
              "&cent;": "¢",
              "&pound": "£",
              "&pound;": "£",
              "&curren": "¤",
              "&curren;": "¤",
              "&yen": "¥",
              "&yen;": "¥",
              "&brvbar": "¦",
              "&brvbar;": "¦",
              "&sect": "§",
              "&sect;": "§",
              "&uml": "¨",
              "&uml;": "¨",
              "&copy": "©",
              "&copy;": "©",
              "&ordf": "ª",
              "&ordf;": "ª",
              "&laquo": "«",
              "&laquo;": "«",
              "&not": "¬",
              "&not;": "¬",
              "&shy": "­",
              "&shy;": "­",
              "&reg": "®",
              "&reg;": "®",
              "&macr": "¯",
              "&macr;": "¯",
              "&deg": "°",
              "&deg;": "°",
              "&plusmn": "±",
              "&plusmn;": "±",
              "&sup2": "²",
              "&sup2;": "²",
              "&sup3": "³",
              "&sup3;": "³",
              "&acute": "´",
              "&acute;": "´",
              "&micro": "µ",
              "&micro;": "µ",
              "&para": "¶",
              "&para;": "¶",
              "&middot": "·",
              "&middot;": "·",
              "&cedil": "¸",
              "&cedil;": "¸",
              "&sup1": "¹",
              "&sup1;": "¹",
              "&ordm": "º",
              "&ordm;": "º",
              "&raquo": "»",
              "&raquo;": "»",
              "&frac14": "¼",
              "&frac14;": "¼",
              "&frac12": "½",
              "&frac12;": "½",
              "&frac34": "¾",
              "&frac34;": "¾",
              "&iquest": "¿",
              "&iquest;": "¿",
              "&Agrave": "À",
              "&Agrave;": "À",
              "&Aacute": "Á",
              "&Aacute;": "Á",
              "&Acirc": "Â",
              "&Acirc;": "Â",
              "&Atilde": "Ã",
              "&Atilde;": "Ã",
              "&Auml": "Ä",
              "&Auml;": "Ä",
              "&Aring": "Å",
              "&Aring;": "Å",
              "&AElig": "Æ",
              "&AElig;": "Æ",
              "&Ccedil": "Ç",
              "&Ccedil;": "Ç",
              "&Egrave": "È",
              "&Egrave;": "È",
              "&Eacute": "É",
              "&Eacute;": "É",
              "&Ecirc": "Ê",
              "&Ecirc;": "Ê",
              "&Euml": "Ë",
              "&Euml;": "Ë",
              "&Igrave": "Ì",
              "&Igrave;": "Ì",
              "&Iacute": "Í",
              "&Iacute;": "Í",
              "&Icirc": "Î",
              "&Icirc;": "Î",
              "&Iuml": "Ï",
              "&Iuml;": "Ï",
              "&ETH": "Ð",
              "&ETH;": "Ð",
              "&Ntilde": "Ñ",
              "&Ntilde;": "Ñ",
              "&Ograve": "Ò",
              "&Ograve;": "Ò",
              "&Oacute": "Ó",
              "&Oacute;": "Ó",
              "&Ocirc": "Ô",
              "&Ocirc;": "Ô",
              "&Otilde": "Õ",
              "&Otilde;": "Õ",
              "&Ouml": "Ö",
              "&Ouml;": "Ö",
              "&times": "×",
              "&times;": "×",
              "&Oslash": "Ø",
              "&Oslash;": "Ø",
              "&Ugrave": "Ù",
              "&Ugrave;": "Ù",
              "&Uacute": "Ú",
              "&Uacute;": "Ú",
              "&Ucirc": "Û",
              "&Ucirc;": "Û",
              "&Uuml": "Ü",
              "&Uuml;": "Ü",
              "&Yacute": "Ý",
              "&Yacute;": "Ý",
              "&THORN": "Þ",
              "&THORN;": "Þ",
              "&szlig": "ß",
              "&szlig;": "ß",
              "&agrave": "à",
              "&agrave;": "à",
              "&aacute": "á",
              "&aacute;": "á",
              "&acirc": "â",
              "&acirc;": "â",
              "&atilde": "ã",
              "&atilde;": "ã",
              "&auml": "ä",
              "&auml;": "ä",
              "&aring": "å",
              "&aring;": "å",
              "&aelig": "æ",
              "&aelig;": "æ",
              "&ccedil": "ç",
              "&ccedil;": "ç",
              "&egrave": "è",
              "&egrave;": "è",
              "&eacute": "é",
              "&eacute;": "é",
              "&ecirc": "ê",
              "&ecirc;": "ê",
              "&euml": "ë",
              "&euml;": "ë",
              "&igrave": "ì",
              "&igrave;": "ì",
              "&iacute": "í",
              "&iacute;": "í",
              "&icirc": "î",
              "&icirc;": "î",
              "&iuml": "ï",
              "&iuml;": "ï",
              "&eth": "ð",
              "&eth;": "ð",
              "&ntilde": "ñ",
              "&ntilde;": "ñ",
              "&ograve": "ò",
              "&ograve;": "ò",
              "&oacute": "ó",
              "&oacute;": "ó",
              "&ocirc": "ô",
              "&ocirc;": "ô",
              "&otilde": "õ",
              "&otilde;": "õ",
              "&ouml": "ö",
              "&ouml;": "ö",
              "&divide": "÷",
              "&divide;": "÷",
              "&oslash": "ø",
              "&oslash;": "ø",
              "&ugrave": "ù",
              "&ugrave;": "ù",
              "&uacute": "ú",
              "&uacute;": "ú",
              "&ucirc": "û",
              "&ucirc;": "û",
              "&uuml": "ü",
              "&uuml;": "ü",
              "&yacute": "ý",
              "&yacute;": "ý",
              "&thorn": "þ",
              "&thorn;": "þ",
              "&yuml": "ÿ",
              "&yuml;": "ÿ",
              "&quot": '"',
              "&quot;": '"',
              "&amp": "&",
              "&amp;": "&",
              "&lt": "<",
              "&lt;": "<",
              "&gt": ">",
              "&gt;": ">",
              "&OElig;": "Œ",
              "&oelig;": "œ",
              "&Scaron;": "Š",
              "&scaron;": "š",
              "&Yuml;": "Ÿ",
              "&circ;": "ˆ",
              "&tilde;": "˜",
              "&ensp;": " ",
              "&emsp;": " ",
              "&thinsp;": " ",
              "&zwnj;": "‌",
              "&zwj;": "‍",
              "&lrm;": "‎",
              "&rlm;": "‏",
              "&ndash;": "–",
              "&mdash;": "—",
              "&lsquo;": "‘",
              "&rsquo;": "’",
              "&sbquo;": "‚",
              "&ldquo;": "“",
              "&rdquo;": "”",
              "&bdquo;": "„",
              "&dagger;": "†",
              "&Dagger;": "‡",
              "&permil;": "‰",
              "&lsaquo;": "‹",
              "&rsaquo;": "›",
              "&euro;": "€",
              "&fnof;": "ƒ",
              "&Alpha;": "Α",
              "&Beta;": "Β",
              "&Gamma;": "Γ",
              "&Delta;": "Δ",
              "&Epsilon;": "Ε",
              "&Zeta;": "Ζ",
              "&Eta;": "Η",
              "&Theta;": "Θ",
              "&Iota;": "Ι",
              "&Kappa;": "Κ",
              "&Lambda;": "Λ",
              "&Mu;": "Μ",
              "&Nu;": "Ν",
              "&Xi;": "Ξ",
              "&Omicron;": "Ο",
              "&Pi;": "Π",
              "&Rho;": "Ρ",
              "&Sigma;": "Σ",
              "&Tau;": "Τ",
              "&Upsilon;": "Υ",
              "&Phi;": "Φ",
              "&Chi;": "Χ",
              "&Psi;": "Ψ",
              "&Omega;": "Ω",
              "&alpha;": "α",
              "&beta;": "β",
              "&gamma;": "γ",
              "&delta;": "δ",
              "&epsilon;": "ε",
              "&zeta;": "ζ",
              "&eta;": "η",
              "&theta;": "θ",
              "&iota;": "ι",
              "&kappa;": "κ",
              "&lambda;": "λ",
              "&mu;": "μ",
              "&nu;": "ν",
              "&xi;": "ξ",
              "&omicron;": "ο",
              "&pi;": "π",
              "&rho;": "ρ",
              "&sigmaf;": "ς",
              "&sigma;": "σ",
              "&tau;": "τ",
              "&upsilon;": "υ",
              "&phi;": "φ",
              "&chi;": "χ",
              "&psi;": "ψ",
              "&omega;": "ω",
              "&thetasym;": "ϑ",
              "&upsih;": "ϒ",
              "&piv;": "ϖ",
              "&bull;": "•",
              "&hellip;": "…",
              "&prime;": "′",
              "&Prime;": "″",
              "&oline;": "‾",
              "&frasl;": "⁄",
              "&weierp;": "℘",
              "&image;": "ℑ",
              "&real;": "ℜ",
              "&trade;": "™",
              "&alefsym;": "ℵ",
              "&larr;": "←",
              "&uarr;": "↑",
              "&rarr;": "→",
              "&darr;": "↓",
              "&harr;": "↔",
              "&crarr;": "↵",
              "&lArr;": "⇐",
              "&uArr;": "⇑",
              "&rArr;": "⇒",
              "&dArr;": "⇓",
              "&hArr;": "⇔",
              "&forall;": "∀",
              "&part;": "∂",
              "&exist;": "∃",
              "&empty;": "∅",
              "&nabla;": "∇",
              "&isin;": "∈",
              "&notin;": "∉",
              "&ni;": "∋",
              "&prod;": "∏",
              "&sum;": "∑",
              "&minus;": "−",
              "&lowast;": "∗",
              "&radic;": "√",
              "&prop;": "∝",
              "&infin;": "∞",
              "&ang;": "∠",
              "&and;": "∧",
              "&or;": "∨",
              "&cap;": "∩",
              "&cup;": "∪",
              "&int;": "∫",
              "&there4;": "∴",
              "&sim;": "∼",
              "&cong;": "≅",
              "&asymp;": "≈",
              "&ne;": "≠",
              "&equiv;": "≡",
              "&le;": "≤",
              "&ge;": "≥",
              "&sub;": "⊂",
              "&sup;": "⊃",
              "&nsub;": "⊄",
              "&sube;": "⊆",
              "&supe;": "⊇",
              "&oplus;": "⊕",
              "&otimes;": "⊗",
              "&perp;": "⊥",
              "&sdot;": "⋅",
              "&lceil;": "⌈",
              "&rceil;": "⌉",
              "&lfloor;": "⌊",
              "&rfloor;": "⌋",
              "&lang;": "〈",
              "&rang;": "〉",
              "&loz;": "◊",
              "&spades;": "♠",
              "&clubs;": "♣",
              "&hearts;": "♥",
              "&diams;": "♦",
            },
            characters: {
              "'": "&apos;",
              " ": "&nbsp;",
              "¡": "&iexcl;",
              "¢": "&cent;",
              "£": "&pound;",
              "¤": "&curren;",
              "¥": "&yen;",
              "¦": "&brvbar;",
              "§": "&sect;",
              "¨": "&uml;",
              "©": "&copy;",
              ª: "&ordf;",
              "«": "&laquo;",
              "¬": "&not;",
              "­": "&shy;",
              "®": "&reg;",
              "¯": "&macr;",
              "°": "&deg;",
              "±": "&plusmn;",
              "²": "&sup2;",
              "³": "&sup3;",
              "´": "&acute;",
              µ: "&micro;",
              "¶": "&para;",
              "·": "&middot;",
              "¸": "&cedil;",
              "¹": "&sup1;",
              º: "&ordm;",
              "»": "&raquo;",
              "¼": "&frac14;",
              "½": "&frac12;",
              "¾": "&frac34;",
              "¿": "&iquest;",
              À: "&Agrave;",
              Á: "&Aacute;",
              Â: "&Acirc;",
              Ã: "&Atilde;",
              Ä: "&Auml;",
              Å: "&Aring;",
              Æ: "&AElig;",
              Ç: "&Ccedil;",
              È: "&Egrave;",
              É: "&Eacute;",
              Ê: "&Ecirc;",
              Ë: "&Euml;",
              Ì: "&Igrave;",
              Í: "&Iacute;",
              Î: "&Icirc;",
              Ï: "&Iuml;",
              Ð: "&ETH;",
              Ñ: "&Ntilde;",
              Ò: "&Ograve;",
              Ó: "&Oacute;",
              Ô: "&Ocirc;",
              Õ: "&Otilde;",
              Ö: "&Ouml;",
              "×": "&times;",
              Ø: "&Oslash;",
              Ù: "&Ugrave;",
              Ú: "&Uacute;",
              Û: "&Ucirc;",
              Ü: "&Uuml;",
              Ý: "&Yacute;",
              Þ: "&THORN;",
              ß: "&szlig;",
              à: "&agrave;",
              á: "&aacute;",
              â: "&acirc;",
              ã: "&atilde;",
              ä: "&auml;",
              å: "&aring;",
              æ: "&aelig;",
              ç: "&ccedil;",
              è: "&egrave;",
              é: "&eacute;",
              ê: "&ecirc;",
              ë: "&euml;",
              ì: "&igrave;",
              í: "&iacute;",
              î: "&icirc;",
              ï: "&iuml;",
              ð: "&eth;",
              ñ: "&ntilde;",
              ò: "&ograve;",
              ó: "&oacute;",
              ô: "&ocirc;",
              õ: "&otilde;",
              ö: "&ouml;",
              "÷": "&divide;",
              ø: "&oslash;",
              ù: "&ugrave;",
              ú: "&uacute;",
              û: "&ucirc;",
              ü: "&uuml;",
              ý: "&yacute;",
              þ: "&thorn;",
              ÿ: "&yuml;",
              '"': "&quot;",
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              Œ: "&OElig;",
              œ: "&oelig;",
              Š: "&Scaron;",
              š: "&scaron;",
              Ÿ: "&Yuml;",
              ˆ: "&circ;",
              "˜": "&tilde;",
              " ": "&ensp;",
              " ": "&emsp;",
              " ": "&thinsp;",
              "‌": "&zwnj;",
              "‍": "&zwj;",
              "‎": "&lrm;",
              "‏": "&rlm;",
              "–": "&ndash;",
              "—": "&mdash;",
              "‘": "&lsquo;",
              "’": "&rsquo;",
              "‚": "&sbquo;",
              "“": "&ldquo;",
              "”": "&rdquo;",
              "„": "&bdquo;",
              "†": "&dagger;",
              "‡": "&Dagger;",
              "‰": "&permil;",
              "‹": "&lsaquo;",
              "›": "&rsaquo;",
              "€": "&euro;",
              ƒ: "&fnof;",
              Α: "&Alpha;",
              Β: "&Beta;",
              Γ: "&Gamma;",
              Δ: "&Delta;",
              Ε: "&Epsilon;",
              Ζ: "&Zeta;",
              Η: "&Eta;",
              Θ: "&Theta;",
              Ι: "&Iota;",
              Κ: "&Kappa;",
              Λ: "&Lambda;",
              Μ: "&Mu;",
              Ν: "&Nu;",
              Ξ: "&Xi;",
              Ο: "&Omicron;",
              Π: "&Pi;",
              Ρ: "&Rho;",
              Σ: "&Sigma;",
              Τ: "&Tau;",
              Υ: "&Upsilon;",
              Φ: "&Phi;",
              Χ: "&Chi;",
              Ψ: "&Psi;",
              Ω: "&Omega;",
              α: "&alpha;",
              β: "&beta;",
              γ: "&gamma;",
              δ: "&delta;",
              ε: "&epsilon;",
              ζ: "&zeta;",
              η: "&eta;",
              θ: "&theta;",
              ι: "&iota;",
              κ: "&kappa;",
              λ: "&lambda;",
              μ: "&mu;",
              ν: "&nu;",
              ξ: "&xi;",
              ο: "&omicron;",
              π: "&pi;",
              ρ: "&rho;",
              ς: "&sigmaf;",
              σ: "&sigma;",
              τ: "&tau;",
              υ: "&upsilon;",
              φ: "&phi;",
              χ: "&chi;",
              ψ: "&psi;",
              ω: "&omega;",
              ϑ: "&thetasym;",
              ϒ: "&upsih;",
              ϖ: "&piv;",
              "•": "&bull;",
              "…": "&hellip;",
              "′": "&prime;",
              "″": "&Prime;",
              "‾": "&oline;",
              "⁄": "&frasl;",
              "℘": "&weierp;",
              ℑ: "&image;",
              ℜ: "&real;",
              "™": "&trade;",
              ℵ: "&alefsym;",
              "←": "&larr;",
              "↑": "&uarr;",
              "→": "&rarr;",
              "↓": "&darr;",
              "↔": "&harr;",
              "↵": "&crarr;",
              "⇐": "&lArr;",
              "⇑": "&uArr;",
              "⇒": "&rArr;",
              "⇓": "&dArr;",
              "⇔": "&hArr;",
              "∀": "&forall;",
              "∂": "&part;",
              "∃": "&exist;",
              "∅": "&empty;",
              "∇": "&nabla;",
              "∈": "&isin;",
              "∉": "&notin;",
              "∋": "&ni;",
              "∏": "&prod;",
              "∑": "&sum;",
              "−": "&minus;",
              "∗": "&lowast;",
              "√": "&radic;",
              "∝": "&prop;",
              "∞": "&infin;",
              "∠": "&ang;",
              "∧": "&and;",
              "∨": "&or;",
              "∩": "&cap;",
              "∪": "&cup;",
              "∫": "&int;",
              "∴": "&there4;",
              "∼": "&sim;",
              "≅": "&cong;",
              "≈": "&asymp;",
              "≠": "&ne;",
              "≡": "&equiv;",
              "≤": "&le;",
              "≥": "&ge;",
              "⊂": "&sub;",
              "⊃": "&sup;",
              "⊄": "&nsub;",
              "⊆": "&sube;",
              "⊇": "&supe;",
              "⊕": "&oplus;",
              "⊗": "&otimes;",
              "⊥": "&perp;",
              "⋅": "&sdot;",
              "⌈": "&lceil;",
              "⌉": "&rceil;",
              "⌊": "&lfloor;",
              "⌋": "&rfloor;",
              "〈": "&lang;",
              "〉": "&rang;",
              "◊": "&loz;",
              "♠": "&spades;",
              "♣": "&clubs;",
              "♥": "&hearts;",
              "♦": "&diams;",
            },
          },
          html5: {
            entities: {
              "&AElig": "Æ",
              "&AElig;": "Æ",
              "&AMP": "&",
              "&AMP;": "&",
              "&Aacute": "Á",
              "&Aacute;": "Á",
              "&Abreve;": "Ă",
              "&Acirc": "Â",
              "&Acirc;": "Â",
              "&Acy;": "А",
              "&Afr;": "𝔄",
              "&Agrave": "À",
              "&Agrave;": "À",
              "&Alpha;": "Α",
              "&Amacr;": "Ā",
              "&And;": "⩓",
              "&Aogon;": "Ą",
              "&Aopf;": "𝔸",
              "&ApplyFunction;": "⁡",
              "&Aring": "Å",
              "&Aring;": "Å",
              "&Ascr;": "𝒜",
              "&Assign;": "≔",
              "&Atilde": "Ã",
              "&Atilde;": "Ã",
              "&Auml": "Ä",
              "&Auml;": "Ä",
              "&Backslash;": "∖",
              "&Barv;": "⫧",
              "&Barwed;": "⌆",
              "&Bcy;": "Б",
              "&Because;": "∵",
              "&Bernoullis;": "ℬ",
              "&Beta;": "Β",
              "&Bfr;": "𝔅",
              "&Bopf;": "𝔹",
              "&Breve;": "˘",
              "&Bscr;": "ℬ",
              "&Bumpeq;": "≎",
              "&CHcy;": "Ч",
              "&COPY": "©",
              "&COPY;": "©",
              "&Cacute;": "Ć",
              "&Cap;": "⋒",
              "&CapitalDifferentialD;": "ⅅ",
              "&Cayleys;": "ℭ",
              "&Ccaron;": "Č",
              "&Ccedil": "Ç",
              "&Ccedil;": "Ç",
              "&Ccirc;": "Ĉ",
              "&Cconint;": "∰",
              "&Cdot;": "Ċ",
              "&Cedilla;": "¸",
              "&CenterDot;": "·",
              "&Cfr;": "ℭ",
              "&Chi;": "Χ",
              "&CircleDot;": "⊙",
              "&CircleMinus;": "⊖",
              "&CirclePlus;": "⊕",
              "&CircleTimes;": "⊗",
              "&ClockwiseContourIntegral;": "∲",
              "&CloseCurlyDoubleQuote;": "”",
              "&CloseCurlyQuote;": "’",
              "&Colon;": "∷",
              "&Colone;": "⩴",
              "&Congruent;": "≡",
              "&Conint;": "∯",
              "&ContourIntegral;": "∮",
              "&Copf;": "ℂ",
              "&Coproduct;": "∐",
              "&CounterClockwiseContourIntegral;": "∳",
              "&Cross;": "⨯",
              "&Cscr;": "𝒞",
              "&Cup;": "⋓",
              "&CupCap;": "≍",
              "&DD;": "ⅅ",
              "&DDotrahd;": "⤑",
              "&DJcy;": "Ђ",
              "&DScy;": "Ѕ",
              "&DZcy;": "Џ",
              "&Dagger;": "‡",
              "&Darr;": "↡",
              "&Dashv;": "⫤",
              "&Dcaron;": "Ď",
              "&Dcy;": "Д",
              "&Del;": "∇",
              "&Delta;": "Δ",
              "&Dfr;": "𝔇",
              "&DiacriticalAcute;": "´",
              "&DiacriticalDot;": "˙",
              "&DiacriticalDoubleAcute;": "˝",
              "&DiacriticalGrave;": "`",
              "&DiacriticalTilde;": "˜",
              "&Diamond;": "⋄",
              "&DifferentialD;": "ⅆ",
              "&Dopf;": "𝔻",
              "&Dot;": "¨",
              "&DotDot;": "⃜",
              "&DotEqual;": "≐",
              "&DoubleContourIntegral;": "∯",
              "&DoubleDot;": "¨",
              "&DoubleDownArrow;": "⇓",
              "&DoubleLeftArrow;": "⇐",
              "&DoubleLeftRightArrow;": "⇔",
              "&DoubleLeftTee;": "⫤",
              "&DoubleLongLeftArrow;": "⟸",
              "&DoubleLongLeftRightArrow;": "⟺",
              "&DoubleLongRightArrow;": "⟹",
              "&DoubleRightArrow;": "⇒",
              "&DoubleRightTee;": "⊨",
              "&DoubleUpArrow;": "⇑",
              "&DoubleUpDownArrow;": "⇕",
              "&DoubleVerticalBar;": "∥",
              "&DownArrow;": "↓",
              "&DownArrowBar;": "⤓",
              "&DownArrowUpArrow;": "⇵",
              "&DownBreve;": "̑",
              "&DownLeftRightVector;": "⥐",
              "&DownLeftTeeVector;": "⥞",
              "&DownLeftVector;": "↽",
              "&DownLeftVectorBar;": "⥖",
              "&DownRightTeeVector;": "⥟",
              "&DownRightVector;": "⇁",
              "&DownRightVectorBar;": "⥗",
              "&DownTee;": "⊤",
              "&DownTeeArrow;": "↧",
              "&Downarrow;": "⇓",
              "&Dscr;": "𝒟",
              "&Dstrok;": "Đ",
              "&ENG;": "Ŋ",
              "&ETH": "Ð",
              "&ETH;": "Ð",
              "&Eacute": "É",
              "&Eacute;": "É",
              "&Ecaron;": "Ě",
              "&Ecirc": "Ê",
              "&Ecirc;": "Ê",
              "&Ecy;": "Э",
              "&Edot;": "Ė",
              "&Efr;": "𝔈",
              "&Egrave": "È",
              "&Egrave;": "È",
              "&Element;": "∈",
              "&Emacr;": "Ē",
              "&EmptySmallSquare;": "◻",
              "&EmptyVerySmallSquare;": "▫",
              "&Eogon;": "Ę",
              "&Eopf;": "𝔼",
              "&Epsilon;": "Ε",
              "&Equal;": "⩵",
              "&EqualTilde;": "≂",
              "&Equilibrium;": "⇌",
              "&Escr;": "ℰ",
              "&Esim;": "⩳",
              "&Eta;": "Η",
              "&Euml": "Ë",
              "&Euml;": "Ë",
              "&Exists;": "∃",
              "&ExponentialE;": "ⅇ",
              "&Fcy;": "Ф",
              "&Ffr;": "𝔉",
              "&FilledSmallSquare;": "◼",
              "&FilledVerySmallSquare;": "▪",
              "&Fopf;": "𝔽",
              "&ForAll;": "∀",
              "&Fouriertrf;": "ℱ",
              "&Fscr;": "ℱ",
              "&GJcy;": "Ѓ",
              "&GT": ">",
              "&GT;": ">",
              "&Gamma;": "Γ",
              "&Gammad;": "Ϝ",
              "&Gbreve;": "Ğ",
              "&Gcedil;": "Ģ",
              "&Gcirc;": "Ĝ",
              "&Gcy;": "Г",
              "&Gdot;": "Ġ",
              "&Gfr;": "𝔊",
              "&Gg;": "⋙",
              "&Gopf;": "𝔾",
              "&GreaterEqual;": "≥",
              "&GreaterEqualLess;": "⋛",
              "&GreaterFullEqual;": "≧",
              "&GreaterGreater;": "⪢",
              "&GreaterLess;": "≷",
              "&GreaterSlantEqual;": "⩾",
              "&GreaterTilde;": "≳",
              "&Gscr;": "𝒢",
              "&Gt;": "≫",
              "&HARDcy;": "Ъ",
              "&Hacek;": "ˇ",
              "&Hat;": "^",
              "&Hcirc;": "Ĥ",
              "&Hfr;": "ℌ",
              "&HilbertSpace;": "ℋ",
              "&Hopf;": "ℍ",
              "&HorizontalLine;": "─",
              "&Hscr;": "ℋ",
              "&Hstrok;": "Ħ",
              "&HumpDownHump;": "≎",
              "&HumpEqual;": "≏",
              "&IEcy;": "Е",
              "&IJlig;": "Ĳ",
              "&IOcy;": "Ё",
              "&Iacute": "Í",
              "&Iacute;": "Í",
              "&Icirc": "Î",
              "&Icirc;": "Î",
              "&Icy;": "И",
              "&Idot;": "İ",
              "&Ifr;": "ℑ",
              "&Igrave": "Ì",
              "&Igrave;": "Ì",
              "&Im;": "ℑ",
              "&Imacr;": "Ī",
              "&ImaginaryI;": "ⅈ",
              "&Implies;": "⇒",
              "&Int;": "∬",
              "&Integral;": "∫",
              "&Intersection;": "⋂",
              "&InvisibleComma;": "⁣",
              "&InvisibleTimes;": "⁢",
              "&Iogon;": "Į",
              "&Iopf;": "𝕀",
              "&Iota;": "Ι",
              "&Iscr;": "ℐ",
              "&Itilde;": "Ĩ",
              "&Iukcy;": "І",
              "&Iuml": "Ï",
              "&Iuml;": "Ï",
              "&Jcirc;": "Ĵ",
              "&Jcy;": "Й",
              "&Jfr;": "𝔍",
              "&Jopf;": "𝕁",
              "&Jscr;": "𝒥",
              "&Jsercy;": "Ј",
              "&Jukcy;": "Є",
              "&KHcy;": "Х",
              "&KJcy;": "Ќ",
              "&Kappa;": "Κ",
              "&Kcedil;": "Ķ",
              "&Kcy;": "К",
              "&Kfr;": "𝔎",
              "&Kopf;": "𝕂",
              "&Kscr;": "𝒦",
              "&LJcy;": "Љ",
              "&LT": "<",
              "&LT;": "<",
              "&Lacute;": "Ĺ",
              "&Lambda;": "Λ",
              "&Lang;": "⟪",
              "&Laplacetrf;": "ℒ",
              "&Larr;": "↞",
              "&Lcaron;": "Ľ",
              "&Lcedil;": "Ļ",
              "&Lcy;": "Л",
              "&LeftAngleBracket;": "⟨",
              "&LeftArrow;": "←",
              "&LeftArrowBar;": "⇤",
              "&LeftArrowRightArrow;": "⇆",
              "&LeftCeiling;": "⌈",
              "&LeftDoubleBracket;": "⟦",
              "&LeftDownTeeVector;": "⥡",
              "&LeftDownVector;": "⇃",
              "&LeftDownVectorBar;": "⥙",
              "&LeftFloor;": "⌊",
              "&LeftRightArrow;": "↔",
              "&LeftRightVector;": "⥎",
              "&LeftTee;": "⊣",
              "&LeftTeeArrow;": "↤",
              "&LeftTeeVector;": "⥚",
              "&LeftTriangle;": "⊲",
              "&LeftTriangleBar;": "⧏",
              "&LeftTriangleEqual;": "⊴",
              "&LeftUpDownVector;": "⥑",
              "&LeftUpTeeVector;": "⥠",
              "&LeftUpVector;": "↿",
              "&LeftUpVectorBar;": "⥘",
              "&LeftVector;": "↼",
              "&LeftVectorBar;": "⥒",
              "&Leftarrow;": "⇐",
              "&Leftrightarrow;": "⇔",
              "&LessEqualGreater;": "⋚",
              "&LessFullEqual;": "≦",
              "&LessGreater;": "≶",
              "&LessLess;": "⪡",
              "&LessSlantEqual;": "⩽",
              "&LessTilde;": "≲",
              "&Lfr;": "𝔏",
              "&Ll;": "⋘",
              "&Lleftarrow;": "⇚",
              "&Lmidot;": "Ŀ",
              "&LongLeftArrow;": "⟵",
              "&LongLeftRightArrow;": "⟷",
              "&LongRightArrow;": "⟶",
              "&Longleftarrow;": "⟸",
              "&Longleftrightarrow;": "⟺",
              "&Longrightarrow;": "⟹",
              "&Lopf;": "𝕃",
              "&LowerLeftArrow;": "↙",
              "&LowerRightArrow;": "↘",
              "&Lscr;": "ℒ",
              "&Lsh;": "↰",
              "&Lstrok;": "Ł",
              "&Lt;": "≪",
              "&Map;": "⤅",
              "&Mcy;": "М",
              "&MediumSpace;": " ",
              "&Mellintrf;": "ℳ",
              "&Mfr;": "𝔐",
              "&MinusPlus;": "∓",
              "&Mopf;": "𝕄",
              "&Mscr;": "ℳ",
              "&Mu;": "Μ",
              "&NJcy;": "Њ",
              "&Nacute;": "Ń",
              "&Ncaron;": "Ň",
              "&Ncedil;": "Ņ",
              "&Ncy;": "Н",
              "&NegativeMediumSpace;": "​",
              "&NegativeThickSpace;": "​",
              "&NegativeThinSpace;": "​",
              "&NegativeVeryThinSpace;": "​",
              "&NestedGreaterGreater;": "≫",
              "&NestedLessLess;": "≪",
              "&NewLine;": "\n",
              "&Nfr;": "𝔑",
              "&NoBreak;": "⁠",
              "&NonBreakingSpace;": " ",
              "&Nopf;": "ℕ",
              "&Not;": "⫬",
              "&NotCongruent;": "≢",
              "&NotCupCap;": "≭",
              "&NotDoubleVerticalBar;": "∦",
              "&NotElement;": "∉",
              "&NotEqual;": "≠",
              "&NotEqualTilde;": "≂̸",
              "&NotExists;": "∄",
              "&NotGreater;": "≯",
              "&NotGreaterEqual;": "≱",
              "&NotGreaterFullEqual;": "≧̸",
              "&NotGreaterGreater;": "≫̸",
              "&NotGreaterLess;": "≹",
              "&NotGreaterSlantEqual;": "⩾̸",
              "&NotGreaterTilde;": "≵",
              "&NotHumpDownHump;": "≎̸",
              "&NotHumpEqual;": "≏̸",
              "&NotLeftTriangle;": "⋪",
              "&NotLeftTriangleBar;": "⧏̸",
              "&NotLeftTriangleEqual;": "⋬",
              "&NotLess;": "≮",
              "&NotLessEqual;": "≰",
              "&NotLessGreater;": "≸",
              "&NotLessLess;": "≪̸",
              "&NotLessSlantEqual;": "⩽̸",
              "&NotLessTilde;": "≴",
              "&NotNestedGreaterGreater;": "⪢̸",
              "&NotNestedLessLess;": "⪡̸",
              "&NotPrecedes;": "⊀",
              "&NotPrecedesEqual;": "⪯̸",
              "&NotPrecedesSlantEqual;": "⋠",
              "&NotReverseElement;": "∌",
              "&NotRightTriangle;": "⋫",
              "&NotRightTriangleBar;": "⧐̸",
              "&NotRightTriangleEqual;": "⋭",
              "&NotSquareSubset;": "⊏̸",
              "&NotSquareSubsetEqual;": "⋢",
              "&NotSquareSuperset;": "⊐̸",
              "&NotSquareSupersetEqual;": "⋣",
              "&NotSubset;": "⊂⃒",
              "&NotSubsetEqual;": "⊈",
              "&NotSucceeds;": "⊁",
              "&NotSucceedsEqual;": "⪰̸",
              "&NotSucceedsSlantEqual;": "⋡",
              "&NotSucceedsTilde;": "≿̸",
              "&NotSuperset;": "⊃⃒",
              "&NotSupersetEqual;": "⊉",
              "&NotTilde;": "≁",
              "&NotTildeEqual;": "≄",
              "&NotTildeFullEqual;": "≇",
              "&NotTildeTilde;": "≉",
              "&NotVerticalBar;": "∤",
              "&Nscr;": "𝒩",
              "&Ntilde": "Ñ",
              "&Ntilde;": "Ñ",
              "&Nu;": "Ν",
              "&OElig;": "Œ",
              "&Oacute": "Ó",
              "&Oacute;": "Ó",
              "&Ocirc": "Ô",
              "&Ocirc;": "Ô",
              "&Ocy;": "О",
              "&Odblac;": "Ő",
              "&Ofr;": "𝔒",
              "&Ograve": "Ò",
              "&Ograve;": "Ò",
              "&Omacr;": "Ō",
              "&Omega;": "Ω",
              "&Omicron;": "Ο",
              "&Oopf;": "𝕆",
              "&OpenCurlyDoubleQuote;": "“",
              "&OpenCurlyQuote;": "‘",
              "&Or;": "⩔",
              "&Oscr;": "𝒪",
              "&Oslash": "Ø",
              "&Oslash;": "Ø",
              "&Otilde": "Õ",
              "&Otilde;": "Õ",
              "&Otimes;": "⨷",
              "&Ouml": "Ö",
              "&Ouml;": "Ö",
              "&OverBar;": "‾",
              "&OverBrace;": "⏞",
              "&OverBracket;": "⎴",
              "&OverParenthesis;": "⏜",
              "&PartialD;": "∂",
              "&Pcy;": "П",
              "&Pfr;": "𝔓",
              "&Phi;": "Φ",
              "&Pi;": "Π",
              "&PlusMinus;": "±",
              "&Poincareplane;": "ℌ",
              "&Popf;": "ℙ",
              "&Pr;": "⪻",
              "&Precedes;": "≺",
              "&PrecedesEqual;": "⪯",
              "&PrecedesSlantEqual;": "≼",
              "&PrecedesTilde;": "≾",
              "&Prime;": "″",
              "&Product;": "∏",
              "&Proportion;": "∷",
              "&Proportional;": "∝",
              "&Pscr;": "𝒫",
              "&Psi;": "Ψ",
              "&QUOT": '"',
              "&QUOT;": '"',
              "&Qfr;": "𝔔",
              "&Qopf;": "ℚ",
              "&Qscr;": "𝒬",
              "&RBarr;": "⤐",
              "&REG": "®",
              "&REG;": "®",
              "&Racute;": "Ŕ",
              "&Rang;": "⟫",
              "&Rarr;": "↠",
              "&Rarrtl;": "⤖",
              "&Rcaron;": "Ř",
              "&Rcedil;": "Ŗ",
              "&Rcy;": "Р",
              "&Re;": "ℜ",
              "&ReverseElement;": "∋",
              "&ReverseEquilibrium;": "⇋",
              "&ReverseUpEquilibrium;": "⥯",
              "&Rfr;": "ℜ",
              "&Rho;": "Ρ",
              "&RightAngleBracket;": "⟩",
              "&RightArrow;": "→",
              "&RightArrowBar;": "⇥",
              "&RightArrowLeftArrow;": "⇄",
              "&RightCeiling;": "⌉",
              "&RightDoubleBracket;": "⟧",
              "&RightDownTeeVector;": "⥝",
              "&RightDownVector;": "⇂",
              "&RightDownVectorBar;": "⥕",
              "&RightFloor;": "⌋",
              "&RightTee;": "⊢",
              "&RightTeeArrow;": "↦",
              "&RightTeeVector;": "⥛",
              "&RightTriangle;": "⊳",
              "&RightTriangleBar;": "⧐",
              "&RightTriangleEqual;": "⊵",
              "&RightUpDownVector;": "⥏",
              "&RightUpTeeVector;": "⥜",
              "&RightUpVector;": "↾",
              "&RightUpVectorBar;": "⥔",
              "&RightVector;": "⇀",
              "&RightVectorBar;": "⥓",
              "&Rightarrow;": "⇒",
              "&Ropf;": "ℝ",
              "&RoundImplies;": "⥰",
              "&Rrightarrow;": "⇛",
              "&Rscr;": "ℛ",
              "&Rsh;": "↱",
              "&RuleDelayed;": "⧴",
              "&SHCHcy;": "Щ",
              "&SHcy;": "Ш",
              "&SOFTcy;": "Ь",
              "&Sacute;": "Ś",
              "&Sc;": "⪼",
              "&Scaron;": "Š",
              "&Scedil;": "Ş",
              "&Scirc;": "Ŝ",
              "&Scy;": "С",
              "&Sfr;": "𝔖",
              "&ShortDownArrow;": "↓",
              "&ShortLeftArrow;": "←",
              "&ShortRightArrow;": "→",
              "&ShortUpArrow;": "↑",
              "&Sigma;": "Σ",
              "&SmallCircle;": "∘",
              "&Sopf;": "𝕊",
              "&Sqrt;": "√",
              "&Square;": "□",
              "&SquareIntersection;": "⊓",
              "&SquareSubset;": "⊏",
              "&SquareSubsetEqual;": "⊑",
              "&SquareSuperset;": "⊐",
              "&SquareSupersetEqual;": "⊒",
              "&SquareUnion;": "⊔",
              "&Sscr;": "𝒮",
              "&Star;": "⋆",
              "&Sub;": "⋐",
              "&Subset;": "⋐",
              "&SubsetEqual;": "⊆",
              "&Succeeds;": "≻",
              "&SucceedsEqual;": "⪰",
              "&SucceedsSlantEqual;": "≽",
              "&SucceedsTilde;": "≿",
              "&SuchThat;": "∋",
              "&Sum;": "∑",
              "&Sup;": "⋑",
              "&Superset;": "⊃",
              "&SupersetEqual;": "⊇",
              "&Supset;": "⋑",
              "&THORN": "Þ",
              "&THORN;": "Þ",
              "&TRADE;": "™",
              "&TSHcy;": "Ћ",
              "&TScy;": "Ц",
              "&Tab;": "\t",
              "&Tau;": "Τ",
              "&Tcaron;": "Ť",
              "&Tcedil;": "Ţ",
              "&Tcy;": "Т",
              "&Tfr;": "𝔗",
              "&Therefore;": "∴",
              "&Theta;": "Θ",
              "&ThickSpace;": "  ",
              "&ThinSpace;": " ",
              "&Tilde;": "∼",
              "&TildeEqual;": "≃",
              "&TildeFullEqual;": "≅",
              "&TildeTilde;": "≈",
              "&Topf;": "𝕋",
              "&TripleDot;": "⃛",
              "&Tscr;": "𝒯",
              "&Tstrok;": "Ŧ",
              "&Uacute": "Ú",
              "&Uacute;": "Ú",
              "&Uarr;": "↟",
              "&Uarrocir;": "⥉",
              "&Ubrcy;": "Ў",
              "&Ubreve;": "Ŭ",
              "&Ucirc": "Û",
              "&Ucirc;": "Û",
              "&Ucy;": "У",
              "&Udblac;": "Ű",
              "&Ufr;": "𝔘",
              "&Ugrave": "Ù",
              "&Ugrave;": "Ù",
              "&Umacr;": "Ū",
              "&UnderBar;": "_",
              "&UnderBrace;": "⏟",
              "&UnderBracket;": "⎵",
              "&UnderParenthesis;": "⏝",
              "&Union;": "⋃",
              "&UnionPlus;": "⊎",
              "&Uogon;": "Ų",
              "&Uopf;": "𝕌",
              "&UpArrow;": "↑",
              "&UpArrowBar;": "⤒",
              "&UpArrowDownArrow;": "⇅",
              "&UpDownArrow;": "↕",
              "&UpEquilibrium;": "⥮",
              "&UpTee;": "⊥",
              "&UpTeeArrow;": "↥",
              "&Uparrow;": "⇑",
              "&Updownarrow;": "⇕",
              "&UpperLeftArrow;": "↖",
              "&UpperRightArrow;": "↗",
              "&Upsi;": "ϒ",
              "&Upsilon;": "Υ",
              "&Uring;": "Ů",
              "&Uscr;": "𝒰",
              "&Utilde;": "Ũ",
              "&Uuml": "Ü",
              "&Uuml;": "Ü",
              "&VDash;": "⊫",
              "&Vbar;": "⫫",
              "&Vcy;": "В",
              "&Vdash;": "⊩",
              "&Vdashl;": "⫦",
              "&Vee;": "⋁",
              "&Verbar;": "‖",
              "&Vert;": "‖",
              "&VerticalBar;": "∣",
              "&VerticalLine;": "|",
              "&VerticalSeparator;": "❘",
              "&VerticalTilde;": "≀",
              "&VeryThinSpace;": " ",
              "&Vfr;": "𝔙",
              "&Vopf;": "𝕍",
              "&Vscr;": "𝒱",
              "&Vvdash;": "⊪",
              "&Wcirc;": "Ŵ",
              "&Wedge;": "⋀",
              "&Wfr;": "𝔚",
              "&Wopf;": "𝕎",
              "&Wscr;": "𝒲",
              "&Xfr;": "𝔛",
              "&Xi;": "Ξ",
              "&Xopf;": "𝕏",
              "&Xscr;": "𝒳",
              "&YAcy;": "Я",
              "&YIcy;": "Ї",
              "&YUcy;": "Ю",
              "&Yacute": "Ý",
              "&Yacute;": "Ý",
              "&Ycirc;": "Ŷ",
              "&Ycy;": "Ы",
              "&Yfr;": "𝔜",
              "&Yopf;": "𝕐",
              "&Yscr;": "𝒴",
              "&Yuml;": "Ÿ",
              "&ZHcy;": "Ж",
              "&Zacute;": "Ź",
              "&Zcaron;": "Ž",
              "&Zcy;": "З",
              "&Zdot;": "Ż",
              "&ZeroWidthSpace;": "​",
              "&Zeta;": "Ζ",
              "&Zfr;": "ℨ",
              "&Zopf;": "ℤ",
              "&Zscr;": "𝒵",
              "&aacute": "á",
              "&aacute;": "á",
              "&abreve;": "ă",
              "&ac;": "∾",
              "&acE;": "∾̳",
              "&acd;": "∿",
              "&acirc": "â",
              "&acirc;": "â",
              "&acute": "´",
              "&acute;": "´",
              "&acy;": "а",
              "&aelig": "æ",
              "&aelig;": "æ",
              "&af;": "⁡",
              "&afr;": "𝔞",
              "&agrave": "à",
              "&agrave;": "à",
              "&alefsym;": "ℵ",
              "&aleph;": "ℵ",
              "&alpha;": "α",
              "&amacr;": "ā",
              "&amalg;": "⨿",
              "&amp": "&",
              "&amp;": "&",
              "&and;": "∧",
              "&andand;": "⩕",
              "&andd;": "⩜",
              "&andslope;": "⩘",
              "&andv;": "⩚",
              "&ang;": "∠",
              "&ange;": "⦤",
              "&angle;": "∠",
              "&angmsd;": "∡",
              "&angmsdaa;": "⦨",
              "&angmsdab;": "⦩",
              "&angmsdac;": "⦪",
              "&angmsdad;": "⦫",
              "&angmsdae;": "⦬",
              "&angmsdaf;": "⦭",
              "&angmsdag;": "⦮",
              "&angmsdah;": "⦯",
              "&angrt;": "∟",
              "&angrtvb;": "⊾",
              "&angrtvbd;": "⦝",
              "&angsph;": "∢",
              "&angst;": "Å",
              "&angzarr;": "⍼",
              "&aogon;": "ą",
              "&aopf;": "𝕒",
              "&ap;": "≈",
              "&apE;": "⩰",
              "&apacir;": "⩯",
              "&ape;": "≊",
              "&apid;": "≋",
              "&apos;": "'",
              "&approx;": "≈",
              "&approxeq;": "≊",
              "&aring": "å",
              "&aring;": "å",
              "&ascr;": "𝒶",
              "&ast;": "*",
              "&asymp;": "≈",
              "&asympeq;": "≍",
              "&atilde": "ã",
              "&atilde;": "ã",
              "&auml": "ä",
              "&auml;": "ä",
              "&awconint;": "∳",
              "&awint;": "⨑",
              "&bNot;": "⫭",
              "&backcong;": "≌",
              "&backepsilon;": "϶",
              "&backprime;": "‵",
              "&backsim;": "∽",
              "&backsimeq;": "⋍",
              "&barvee;": "⊽",
              "&barwed;": "⌅",
              "&barwedge;": "⌅",
              "&bbrk;": "⎵",
              "&bbrktbrk;": "⎶",
              "&bcong;": "≌",
              "&bcy;": "б",
              "&bdquo;": "„",
              "&becaus;": "∵",
              "&because;": "∵",
              "&bemptyv;": "⦰",
              "&bepsi;": "϶",
              "&bernou;": "ℬ",
              "&beta;": "β",
              "&beth;": "ℶ",
              "&between;": "≬",
              "&bfr;": "𝔟",
              "&bigcap;": "⋂",
              "&bigcirc;": "◯",
              "&bigcup;": "⋃",
              "&bigodot;": "⨀",
              "&bigoplus;": "⨁",
              "&bigotimes;": "⨂",
              "&bigsqcup;": "⨆",
              "&bigstar;": "★",
              "&bigtriangledown;": "▽",
              "&bigtriangleup;": "△",
              "&biguplus;": "⨄",
              "&bigvee;": "⋁",
              "&bigwedge;": "⋀",
              "&bkarow;": "⤍",
              "&blacklozenge;": "⧫",
              "&blacksquare;": "▪",
              "&blacktriangle;": "▴",
              "&blacktriangledown;": "▾",
              "&blacktriangleleft;": "◂",
              "&blacktriangleright;": "▸",
              "&blank;": "␣",
              "&blk12;": "▒",
              "&blk14;": "░",
              "&blk34;": "▓",
              "&block;": "█",
              "&bne;": "=⃥",
              "&bnequiv;": "≡⃥",
              "&bnot;": "⌐",
              "&bopf;": "𝕓",
              "&bot;": "⊥",
              "&bottom;": "⊥",
              "&bowtie;": "⋈",
              "&boxDL;": "╗",
              "&boxDR;": "╔",
              "&boxDl;": "╖",
              "&boxDr;": "╓",
              "&boxH;": "═",
              "&boxHD;": "╦",
              "&boxHU;": "╩",
              "&boxHd;": "╤",
              "&boxHu;": "╧",
              "&boxUL;": "╝",
              "&boxUR;": "╚",
              "&boxUl;": "╜",
              "&boxUr;": "╙",
              "&boxV;": "║",
              "&boxVH;": "╬",
              "&boxVL;": "╣",
              "&boxVR;": "╠",
              "&boxVh;": "╫",
              "&boxVl;": "╢",
              "&boxVr;": "╟",
              "&boxbox;": "⧉",
              "&boxdL;": "╕",
              "&boxdR;": "╒",
              "&boxdl;": "┐",
              "&boxdr;": "┌",
              "&boxh;": "─",
              "&boxhD;": "╥",
              "&boxhU;": "╨",
              "&boxhd;": "┬",
              "&boxhu;": "┴",
              "&boxminus;": "⊟",
              "&boxplus;": "⊞",
              "&boxtimes;": "⊠",
              "&boxuL;": "╛",
              "&boxuR;": "╘",
              "&boxul;": "┘",
              "&boxur;": "└",
              "&boxv;": "│",
              "&boxvH;": "╪",
              "&boxvL;": "╡",
              "&boxvR;": "╞",
              "&boxvh;": "┼",
              "&boxvl;": "┤",
              "&boxvr;": "├",
              "&bprime;": "‵",
              "&breve;": "˘",
              "&brvbar": "¦",
              "&brvbar;": "¦",
              "&bscr;": "𝒷",
              "&bsemi;": "⁏",
              "&bsim;": "∽",
              "&bsime;": "⋍",
              "&bsol;": "\\",
              "&bsolb;": "⧅",
              "&bsolhsub;": "⟈",
              "&bull;": "•",
              "&bullet;": "•",
              "&bump;": "≎",
              "&bumpE;": "⪮",
              "&bumpe;": "≏",
              "&bumpeq;": "≏",
              "&cacute;": "ć",
              "&cap;": "∩",
              "&capand;": "⩄",
              "&capbrcup;": "⩉",
              "&capcap;": "⩋",
              "&capcup;": "⩇",
              "&capdot;": "⩀",
              "&caps;": "∩︀",
              "&caret;": "⁁",
              "&caron;": "ˇ",
              "&ccaps;": "⩍",
              "&ccaron;": "č",
              "&ccedil": "ç",
              "&ccedil;": "ç",
              "&ccirc;": "ĉ",
              "&ccups;": "⩌",
              "&ccupssm;": "⩐",
              "&cdot;": "ċ",
              "&cedil": "¸",
              "&cedil;": "¸",
              "&cemptyv;": "⦲",
              "&cent": "¢",
              "&cent;": "¢",
              "&centerdot;": "·",
              "&cfr;": "𝔠",
              "&chcy;": "ч",
              "&check;": "✓",
              "&checkmark;": "✓",
              "&chi;": "χ",
              "&cir;": "○",
              "&cirE;": "⧃",
              "&circ;": "ˆ",
              "&circeq;": "≗",
              "&circlearrowleft;": "↺",
              "&circlearrowright;": "↻",
              "&circledR;": "®",
              "&circledS;": "Ⓢ",
              "&circledast;": "⊛",
              "&circledcirc;": "⊚",
              "&circleddash;": "⊝",
              "&cire;": "≗",
              "&cirfnint;": "⨐",
              "&cirmid;": "⫯",
              "&cirscir;": "⧂",
              "&clubs;": "♣",
              "&clubsuit;": "♣",
              "&colon;": ":",
              "&colone;": "≔",
              "&coloneq;": "≔",
              "&comma;": ",",
              "&commat;": "@",
              "&comp;": "∁",
              "&compfn;": "∘",
              "&complement;": "∁",
              "&complexes;": "ℂ",
              "&cong;": "≅",
              "&congdot;": "⩭",
              "&conint;": "∮",
              "&copf;": "𝕔",
              "&coprod;": "∐",
              "&copy": "©",
              "&copy;": "©",
              "&copysr;": "℗",
              "&crarr;": "↵",
              "&cross;": "✗",
              "&cscr;": "𝒸",
              "&csub;": "⫏",
              "&csube;": "⫑",
              "&csup;": "⫐",
              "&csupe;": "⫒",
              "&ctdot;": "⋯",
              "&cudarrl;": "⤸",
              "&cudarrr;": "⤵",
              "&cuepr;": "⋞",
              "&cuesc;": "⋟",
              "&cularr;": "↶",
              "&cularrp;": "⤽",
              "&cup;": "∪",
              "&cupbrcap;": "⩈",
              "&cupcap;": "⩆",
              "&cupcup;": "⩊",
              "&cupdot;": "⊍",
              "&cupor;": "⩅",
              "&cups;": "∪︀",
              "&curarr;": "↷",
              "&curarrm;": "⤼",
              "&curlyeqprec;": "⋞",
              "&curlyeqsucc;": "⋟",
              "&curlyvee;": "⋎",
              "&curlywedge;": "⋏",
              "&curren": "¤",
              "&curren;": "¤",
              "&curvearrowleft;": "↶",
              "&curvearrowright;": "↷",
              "&cuvee;": "⋎",
              "&cuwed;": "⋏",
              "&cwconint;": "∲",
              "&cwint;": "∱",
              "&cylcty;": "⌭",
              "&dArr;": "⇓",
              "&dHar;": "⥥",
              "&dagger;": "†",
              "&daleth;": "ℸ",
              "&darr;": "↓",
              "&dash;": "‐",
              "&dashv;": "⊣",
              "&dbkarow;": "⤏",
              "&dblac;": "˝",
              "&dcaron;": "ď",
              "&dcy;": "д",
              "&dd;": "ⅆ",
              "&ddagger;": "‡",
              "&ddarr;": "⇊",
              "&ddotseq;": "⩷",
              "&deg": "°",
              "&deg;": "°",
              "&delta;": "δ",
              "&demptyv;": "⦱",
              "&dfisht;": "⥿",
              "&dfr;": "𝔡",
              "&dharl;": "⇃",
              "&dharr;": "⇂",
              "&diam;": "⋄",
              "&diamond;": "⋄",
              "&diamondsuit;": "♦",
              "&diams;": "♦",
              "&die;": "¨",
              "&digamma;": "ϝ",
              "&disin;": "⋲",
              "&div;": "÷",
              "&divide": "÷",
              "&divide;": "÷",
              "&divideontimes;": "⋇",
              "&divonx;": "⋇",
              "&djcy;": "ђ",
              "&dlcorn;": "⌞",
              "&dlcrop;": "⌍",
              "&dollar;": "$",
              "&dopf;": "𝕕",
              "&dot;": "˙",
              "&doteq;": "≐",
              "&doteqdot;": "≑",
              "&dotminus;": "∸",
              "&dotplus;": "∔",
              "&dotsquare;": "⊡",
              "&doublebarwedge;": "⌆",
              "&downarrow;": "↓",
              "&downdownarrows;": "⇊",
              "&downharpoonleft;": "⇃",
              "&downharpoonright;": "⇂",
              "&drbkarow;": "⤐",
              "&drcorn;": "⌟",
              "&drcrop;": "⌌",
              "&dscr;": "𝒹",
              "&dscy;": "ѕ",
              "&dsol;": "⧶",
              "&dstrok;": "đ",
              "&dtdot;": "⋱",
              "&dtri;": "▿",
              "&dtrif;": "▾",
              "&duarr;": "⇵",
              "&duhar;": "⥯",
              "&dwangle;": "⦦",
              "&dzcy;": "џ",
              "&dzigrarr;": "⟿",
              "&eDDot;": "⩷",
              "&eDot;": "≑",
              "&eacute": "é",
              "&eacute;": "é",
              "&easter;": "⩮",
              "&ecaron;": "ě",
              "&ecir;": "≖",
              "&ecirc": "ê",
              "&ecirc;": "ê",
              "&ecolon;": "≕",
              "&ecy;": "э",
              "&edot;": "ė",
              "&ee;": "ⅇ",
              "&efDot;": "≒",
              "&efr;": "𝔢",
              "&eg;": "⪚",
              "&egrave": "è",
              "&egrave;": "è",
              "&egs;": "⪖",
              "&egsdot;": "⪘",
              "&el;": "⪙",
              "&elinters;": "⏧",
              "&ell;": "ℓ",
              "&els;": "⪕",
              "&elsdot;": "⪗",
              "&emacr;": "ē",
              "&empty;": "∅",
              "&emptyset;": "∅",
              "&emptyv;": "∅",
              "&emsp13;": " ",
              "&emsp14;": " ",
              "&emsp;": " ",
              "&eng;": "ŋ",
              "&ensp;": " ",
              "&eogon;": "ę",
              "&eopf;": "𝕖",
              "&epar;": "⋕",
              "&eparsl;": "⧣",
              "&eplus;": "⩱",
              "&epsi;": "ε",
              "&epsilon;": "ε",
              "&epsiv;": "ϵ",
              "&eqcirc;": "≖",
              "&eqcolon;": "≕",
              "&eqsim;": "≂",
              "&eqslantgtr;": "⪖",
              "&eqslantless;": "⪕",
              "&equals;": "=",
              "&equest;": "≟",
              "&equiv;": "≡",
              "&equivDD;": "⩸",
              "&eqvparsl;": "⧥",
              "&erDot;": "≓",
              "&erarr;": "⥱",
              "&escr;": "ℯ",
              "&esdot;": "≐",
              "&esim;": "≂",
              "&eta;": "η",
              "&eth": "ð",
              "&eth;": "ð",
              "&euml": "ë",
              "&euml;": "ë",
              "&euro;": "€",
              "&excl;": "!",
              "&exist;": "∃",
              "&expectation;": "ℰ",
              "&exponentiale;": "ⅇ",
              "&fallingdotseq;": "≒",
              "&fcy;": "ф",
              "&female;": "♀",
              "&ffilig;": "ﬃ",
              "&fflig;": "ﬀ",
              "&ffllig;": "ﬄ",
              "&ffr;": "𝔣",
              "&filig;": "ﬁ",
              "&fjlig;": "fj",
              "&flat;": "♭",
              "&fllig;": "ﬂ",
              "&fltns;": "▱",
              "&fnof;": "ƒ",
              "&fopf;": "𝕗",
              "&forall;": "∀",
              "&fork;": "⋔",
              "&forkv;": "⫙",
              "&fpartint;": "⨍",
              "&frac12": "½",
              "&frac12;": "½",
              "&frac13;": "⅓",
              "&frac14": "¼",
              "&frac14;": "¼",
              "&frac15;": "⅕",
              "&frac16;": "⅙",
              "&frac18;": "⅛",
              "&frac23;": "⅔",
              "&frac25;": "⅖",
              "&frac34": "¾",
              "&frac34;": "¾",
              "&frac35;": "⅗",
              "&frac38;": "⅜",
              "&frac45;": "⅘",
              "&frac56;": "⅚",
              "&frac58;": "⅝",
              "&frac78;": "⅞",
              "&frasl;": "⁄",
              "&frown;": "⌢",
              "&fscr;": "𝒻",
              "&gE;": "≧",
              "&gEl;": "⪌",
              "&gacute;": "ǵ",
              "&gamma;": "γ",
              "&gammad;": "ϝ",
              "&gap;": "⪆",
              "&gbreve;": "ğ",
              "&gcirc;": "ĝ",
              "&gcy;": "г",
              "&gdot;": "ġ",
              "&ge;": "≥",
              "&gel;": "⋛",
              "&geq;": "≥",
              "&geqq;": "≧",
              "&geqslant;": "⩾",
              "&ges;": "⩾",
              "&gescc;": "⪩",
              "&gesdot;": "⪀",
              "&gesdoto;": "⪂",
              "&gesdotol;": "⪄",
              "&gesl;": "⋛︀",
              "&gesles;": "⪔",
              "&gfr;": "𝔤",
              "&gg;": "≫",
              "&ggg;": "⋙",
              "&gimel;": "ℷ",
              "&gjcy;": "ѓ",
              "&gl;": "≷",
              "&glE;": "⪒",
              "&gla;": "⪥",
              "&glj;": "⪤",
              "&gnE;": "≩",
              "&gnap;": "⪊",
              "&gnapprox;": "⪊",
              "&gne;": "⪈",
              "&gneq;": "⪈",
              "&gneqq;": "≩",
              "&gnsim;": "⋧",
              "&gopf;": "𝕘",
              "&grave;": "`",
              "&gscr;": "ℊ",
              "&gsim;": "≳",
              "&gsime;": "⪎",
              "&gsiml;": "⪐",
              "&gt": ">",
              "&gt;": ">",
              "&gtcc;": "⪧",
              "&gtcir;": "⩺",
              "&gtdot;": "⋗",
              "&gtlPar;": "⦕",
              "&gtquest;": "⩼",
              "&gtrapprox;": "⪆",
              "&gtrarr;": "⥸",
              "&gtrdot;": "⋗",
              "&gtreqless;": "⋛",
              "&gtreqqless;": "⪌",
              "&gtrless;": "≷",
              "&gtrsim;": "≳",
              "&gvertneqq;": "≩︀",
              "&gvnE;": "≩︀",
              "&hArr;": "⇔",
              "&hairsp;": " ",
              "&half;": "½",
              "&hamilt;": "ℋ",
              "&hardcy;": "ъ",
              "&harr;": "↔",
              "&harrcir;": "⥈",
              "&harrw;": "↭",
              "&hbar;": "ℏ",
              "&hcirc;": "ĥ",
              "&hearts;": "♥",
              "&heartsuit;": "♥",
              "&hellip;": "…",
              "&hercon;": "⊹",
              "&hfr;": "𝔥",
              "&hksearow;": "⤥",
              "&hkswarow;": "⤦",
              "&hoarr;": "⇿",
              "&homtht;": "∻",
              "&hookleftarrow;": "↩",
              "&hookrightarrow;": "↪",
              "&hopf;": "𝕙",
              "&horbar;": "―",
              "&hscr;": "𝒽",
              "&hslash;": "ℏ",
              "&hstrok;": "ħ",
              "&hybull;": "⁃",
              "&hyphen;": "‐",
              "&iacute": "í",
              "&iacute;": "í",
              "&ic;": "⁣",
              "&icirc": "î",
              "&icirc;": "î",
              "&icy;": "и",
              "&iecy;": "е",
              "&iexcl": "¡",
              "&iexcl;": "¡",
              "&iff;": "⇔",
              "&ifr;": "𝔦",
              "&igrave": "ì",
              "&igrave;": "ì",
              "&ii;": "ⅈ",
              "&iiiint;": "⨌",
              "&iiint;": "∭",
              "&iinfin;": "⧜",
              "&iiota;": "℩",
              "&ijlig;": "ĳ",
              "&imacr;": "ī",
              "&image;": "ℑ",
              "&imagline;": "ℐ",
              "&imagpart;": "ℑ",
              "&imath;": "ı",
              "&imof;": "⊷",
              "&imped;": "Ƶ",
              "&in;": "∈",
              "&incare;": "℅",
              "&infin;": "∞",
              "&infintie;": "⧝",
              "&inodot;": "ı",
              "&int;": "∫",
              "&intcal;": "⊺",
              "&integers;": "ℤ",
              "&intercal;": "⊺",
              "&intlarhk;": "⨗",
              "&intprod;": "⨼",
              "&iocy;": "ё",
              "&iogon;": "į",
              "&iopf;": "𝕚",
              "&iota;": "ι",
              "&iprod;": "⨼",
              "&iquest": "¿",
              "&iquest;": "¿",
              "&iscr;": "𝒾",
              "&isin;": "∈",
              "&isinE;": "⋹",
              "&isindot;": "⋵",
              "&isins;": "⋴",
              "&isinsv;": "⋳",
              "&isinv;": "∈",
              "&it;": "⁢",
              "&itilde;": "ĩ",
              "&iukcy;": "і",
              "&iuml": "ï",
              "&iuml;": "ï",
              "&jcirc;": "ĵ",
              "&jcy;": "й",
              "&jfr;": "𝔧",
              "&jmath;": "ȷ",
              "&jopf;": "𝕛",
              "&jscr;": "𝒿",
              "&jsercy;": "ј",
              "&jukcy;": "є",
              "&kappa;": "κ",
              "&kappav;": "ϰ",
              "&kcedil;": "ķ",
              "&kcy;": "к",
              "&kfr;": "𝔨",
              "&kgreen;": "ĸ",
              "&khcy;": "х",
              "&kjcy;": "ќ",
              "&kopf;": "𝕜",
              "&kscr;": "𝓀",
              "&lAarr;": "⇚",
              "&lArr;": "⇐",
              "&lAtail;": "⤛",
              "&lBarr;": "⤎",
              "&lE;": "≦",
              "&lEg;": "⪋",
              "&lHar;": "⥢",
              "&lacute;": "ĺ",
              "&laemptyv;": "⦴",
              "&lagran;": "ℒ",
              "&lambda;": "λ",
              "&lang;": "⟨",
              "&langd;": "⦑",
              "&langle;": "⟨",
              "&lap;": "⪅",
              "&laquo": "«",
              "&laquo;": "«",
              "&larr;": "←",
              "&larrb;": "⇤",
              "&larrbfs;": "⤟",
              "&larrfs;": "⤝",
              "&larrhk;": "↩",
              "&larrlp;": "↫",
              "&larrpl;": "⤹",
              "&larrsim;": "⥳",
              "&larrtl;": "↢",
              "&lat;": "⪫",
              "&latail;": "⤙",
              "&late;": "⪭",
              "&lates;": "⪭︀",
              "&lbarr;": "⤌",
              "&lbbrk;": "❲",
              "&lbrace;": "{",
              "&lbrack;": "[",
              "&lbrke;": "⦋",
              "&lbrksld;": "⦏",
              "&lbrkslu;": "⦍",
              "&lcaron;": "ľ",
              "&lcedil;": "ļ",
              "&lceil;": "⌈",
              "&lcub;": "{",
              "&lcy;": "л",
              "&ldca;": "⤶",
              "&ldquo;": "“",
              "&ldquor;": "„",
              "&ldrdhar;": "⥧",
              "&ldrushar;": "⥋",
              "&ldsh;": "↲",
              "&le;": "≤",
              "&leftarrow;": "←",
              "&leftarrowtail;": "↢",
              "&leftharpoondown;": "↽",
              "&leftharpoonup;": "↼",
              "&leftleftarrows;": "⇇",
              "&leftrightarrow;": "↔",
              "&leftrightarrows;": "⇆",
              "&leftrightharpoons;": "⇋",
              "&leftrightsquigarrow;": "↭",
              "&leftthreetimes;": "⋋",
              "&leg;": "⋚",
              "&leq;": "≤",
              "&leqq;": "≦",
              "&leqslant;": "⩽",
              "&les;": "⩽",
              "&lescc;": "⪨",
              "&lesdot;": "⩿",
              "&lesdoto;": "⪁",
              "&lesdotor;": "⪃",
              "&lesg;": "⋚︀",
              "&lesges;": "⪓",
              "&lessapprox;": "⪅",
              "&lessdot;": "⋖",
              "&lesseqgtr;": "⋚",
              "&lesseqqgtr;": "⪋",
              "&lessgtr;": "≶",
              "&lesssim;": "≲",
              "&lfisht;": "⥼",
              "&lfloor;": "⌊",
              "&lfr;": "𝔩",
              "&lg;": "≶",
              "&lgE;": "⪑",
              "&lhard;": "↽",
              "&lharu;": "↼",
              "&lharul;": "⥪",
              "&lhblk;": "▄",
              "&ljcy;": "љ",
              "&ll;": "≪",
              "&llarr;": "⇇",
              "&llcorner;": "⌞",
              "&llhard;": "⥫",
              "&lltri;": "◺",
              "&lmidot;": "ŀ",
              "&lmoust;": "⎰",
              "&lmoustache;": "⎰",
              "&lnE;": "≨",
              "&lnap;": "⪉",
              "&lnapprox;": "⪉",
              "&lne;": "⪇",
              "&lneq;": "⪇",
              "&lneqq;": "≨",
              "&lnsim;": "⋦",
              "&loang;": "⟬",
              "&loarr;": "⇽",
              "&lobrk;": "⟦",
              "&longleftarrow;": "⟵",
              "&longleftrightarrow;": "⟷",
              "&longmapsto;": "⟼",
              "&longrightarrow;": "⟶",
              "&looparrowleft;": "↫",
              "&looparrowright;": "↬",
              "&lopar;": "⦅",
              "&lopf;": "𝕝",
              "&loplus;": "⨭",
              "&lotimes;": "⨴",
              "&lowast;": "∗",
              "&lowbar;": "_",
              "&loz;": "◊",
              "&lozenge;": "◊",
              "&lozf;": "⧫",
              "&lpar;": "(",
              "&lparlt;": "⦓",
              "&lrarr;": "⇆",
              "&lrcorner;": "⌟",
              "&lrhar;": "⇋",
              "&lrhard;": "⥭",
              "&lrm;": "‎",
              "&lrtri;": "⊿",
              "&lsaquo;": "‹",
              "&lscr;": "𝓁",
              "&lsh;": "↰",
              "&lsim;": "≲",
              "&lsime;": "⪍",
              "&lsimg;": "⪏",
              "&lsqb;": "[",
              "&lsquo;": "‘",
              "&lsquor;": "‚",
              "&lstrok;": "ł",
              "&lt": "<",
              "&lt;": "<",
              "&ltcc;": "⪦",
              "&ltcir;": "⩹",
              "&ltdot;": "⋖",
              "&lthree;": "⋋",
              "&ltimes;": "⋉",
              "&ltlarr;": "⥶",
              "&ltquest;": "⩻",
              "&ltrPar;": "⦖",
              "&ltri;": "◃",
              "&ltrie;": "⊴",
              "&ltrif;": "◂",
              "&lurdshar;": "⥊",
              "&luruhar;": "⥦",
              "&lvertneqq;": "≨︀",
              "&lvnE;": "≨︀",
              "&mDDot;": "∺",
              "&macr": "¯",
              "&macr;": "¯",
              "&male;": "♂",
              "&malt;": "✠",
              "&maltese;": "✠",
              "&map;": "↦",
              "&mapsto;": "↦",
              "&mapstodown;": "↧",
              "&mapstoleft;": "↤",
              "&mapstoup;": "↥",
              "&marker;": "▮",
              "&mcomma;": "⨩",
              "&mcy;": "м",
              "&mdash;": "—",
              "&measuredangle;": "∡",
              "&mfr;": "𝔪",
              "&mho;": "℧",
              "&micro": "µ",
              "&micro;": "µ",
              "&mid;": "∣",
              "&midast;": "*",
              "&midcir;": "⫰",
              "&middot": "·",
              "&middot;": "·",
              "&minus;": "−",
              "&minusb;": "⊟",
              "&minusd;": "∸",
              "&minusdu;": "⨪",
              "&mlcp;": "⫛",
              "&mldr;": "…",
              "&mnplus;": "∓",
              "&models;": "⊧",
              "&mopf;": "𝕞",
              "&mp;": "∓",
              "&mscr;": "𝓂",
              "&mstpos;": "∾",
              "&mu;": "μ",
              "&multimap;": "⊸",
              "&mumap;": "⊸",
              "&nGg;": "⋙̸",
              "&nGt;": "≫⃒",
              "&nGtv;": "≫̸",
              "&nLeftarrow;": "⇍",
              "&nLeftrightarrow;": "⇎",
              "&nLl;": "⋘̸",
              "&nLt;": "≪⃒",
              "&nLtv;": "≪̸",
              "&nRightarrow;": "⇏",
              "&nVDash;": "⊯",
              "&nVdash;": "⊮",
              "&nabla;": "∇",
              "&nacute;": "ń",
              "&nang;": "∠⃒",
              "&nap;": "≉",
              "&napE;": "⩰̸",
              "&napid;": "≋̸",
              "&napos;": "ŉ",
              "&napprox;": "≉",
              "&natur;": "♮",
              "&natural;": "♮",
              "&naturals;": "ℕ",
              "&nbsp": " ",
              "&nbsp;": " ",
              "&nbump;": "≎̸",
              "&nbumpe;": "≏̸",
              "&ncap;": "⩃",
              "&ncaron;": "ň",
              "&ncedil;": "ņ",
              "&ncong;": "≇",
              "&ncongdot;": "⩭̸",
              "&ncup;": "⩂",
              "&ncy;": "н",
              "&ndash;": "–",
              "&ne;": "≠",
              "&neArr;": "⇗",
              "&nearhk;": "⤤",
              "&nearr;": "↗",
              "&nearrow;": "↗",
              "&nedot;": "≐̸",
              "&nequiv;": "≢",
              "&nesear;": "⤨",
              "&nesim;": "≂̸",
              "&nexist;": "∄",
              "&nexists;": "∄",
              "&nfr;": "𝔫",
              "&ngE;": "≧̸",
              "&nge;": "≱",
              "&ngeq;": "≱",
              "&ngeqq;": "≧̸",
              "&ngeqslant;": "⩾̸",
              "&nges;": "⩾̸",
              "&ngsim;": "≵",
              "&ngt;": "≯",
              "&ngtr;": "≯",
              "&nhArr;": "⇎",
              "&nharr;": "↮",
              "&nhpar;": "⫲",
              "&ni;": "∋",
              "&nis;": "⋼",
              "&nisd;": "⋺",
              "&niv;": "∋",
              "&njcy;": "њ",
              "&nlArr;": "⇍",
              "&nlE;": "≦̸",
              "&nlarr;": "↚",
              "&nldr;": "‥",
              "&nle;": "≰",
              "&nleftarrow;": "↚",
              "&nleftrightarrow;": "↮",
              "&nleq;": "≰",
              "&nleqq;": "≦̸",
              "&nleqslant;": "⩽̸",
              "&nles;": "⩽̸",
              "&nless;": "≮",
              "&nlsim;": "≴",
              "&nlt;": "≮",
              "&nltri;": "⋪",
              "&nltrie;": "⋬",
              "&nmid;": "∤",
              "&nopf;": "𝕟",
              "&not": "¬",
              "&not;": "¬",
              "&notin;": "∉",
              "&notinE;": "⋹̸",
              "&notindot;": "⋵̸",
              "&notinva;": "∉",
              "&notinvb;": "⋷",
              "&notinvc;": "⋶",
              "&notni;": "∌",
              "&notniva;": "∌",
              "&notnivb;": "⋾",
              "&notnivc;": "⋽",
              "&npar;": "∦",
              "&nparallel;": "∦",
              "&nparsl;": "⫽⃥",
              "&npart;": "∂̸",
              "&npolint;": "⨔",
              "&npr;": "⊀",
              "&nprcue;": "⋠",
              "&npre;": "⪯̸",
              "&nprec;": "⊀",
              "&npreceq;": "⪯̸",
              "&nrArr;": "⇏",
              "&nrarr;": "↛",
              "&nrarrc;": "⤳̸",
              "&nrarrw;": "↝̸",
              "&nrightarrow;": "↛",
              "&nrtri;": "⋫",
              "&nrtrie;": "⋭",
              "&nsc;": "⊁",
              "&nsccue;": "⋡",
              "&nsce;": "⪰̸",
              "&nscr;": "𝓃",
              "&nshortmid;": "∤",
              "&nshortparallel;": "∦",
              "&nsim;": "≁",
              "&nsime;": "≄",
              "&nsimeq;": "≄",
              "&nsmid;": "∤",
              "&nspar;": "∦",
              "&nsqsube;": "⋢",
              "&nsqsupe;": "⋣",
              "&nsub;": "⊄",
              "&nsubE;": "⫅̸",
              "&nsube;": "⊈",
              "&nsubset;": "⊂⃒",
              "&nsubseteq;": "⊈",
              "&nsubseteqq;": "⫅̸",
              "&nsucc;": "⊁",
              "&nsucceq;": "⪰̸",
              "&nsup;": "⊅",
              "&nsupE;": "⫆̸",
              "&nsupe;": "⊉",
              "&nsupset;": "⊃⃒",
              "&nsupseteq;": "⊉",
              "&nsupseteqq;": "⫆̸",
              "&ntgl;": "≹",
              "&ntilde": "ñ",
              "&ntilde;": "ñ",
              "&ntlg;": "≸",
              "&ntriangleleft;": "⋪",
              "&ntrianglelefteq;": "⋬",
              "&ntriangleright;": "⋫",
              "&ntrianglerighteq;": "⋭",
              "&nu;": "ν",
              "&num;": "#",
              "&numero;": "№",
              "&numsp;": " ",
              "&nvDash;": "⊭",
              "&nvHarr;": "⤄",
              "&nvap;": "≍⃒",
              "&nvdash;": "⊬",
              "&nvge;": "≥⃒",
              "&nvgt;": ">⃒",
              "&nvinfin;": "⧞",
              "&nvlArr;": "⤂",
              "&nvle;": "≤⃒",
              "&nvlt;": "<⃒",
              "&nvltrie;": "⊴⃒",
              "&nvrArr;": "⤃",
              "&nvrtrie;": "⊵⃒",
              "&nvsim;": "∼⃒",
              "&nwArr;": "⇖",
              "&nwarhk;": "⤣",
              "&nwarr;": "↖",
              "&nwarrow;": "↖",
              "&nwnear;": "⤧",
              "&oS;": "Ⓢ",
              "&oacute": "ó",
              "&oacute;": "ó",
              "&oast;": "⊛",
              "&ocir;": "⊚",
              "&ocirc": "ô",
              "&ocirc;": "ô",
              "&ocy;": "о",
              "&odash;": "⊝",
              "&odblac;": "ő",
              "&odiv;": "⨸",
              "&odot;": "⊙",
              "&odsold;": "⦼",
              "&oelig;": "œ",
              "&ofcir;": "⦿",
              "&ofr;": "𝔬",
              "&ogon;": "˛",
              "&ograve": "ò",
              "&ograve;": "ò",
              "&ogt;": "⧁",
              "&ohbar;": "⦵",
              "&ohm;": "Ω",
              "&oint;": "∮",
              "&olarr;": "↺",
              "&olcir;": "⦾",
              "&olcross;": "⦻",
              "&oline;": "‾",
              "&olt;": "⧀",
              "&omacr;": "ō",
              "&omega;": "ω",
              "&omicron;": "ο",
              "&omid;": "⦶",
              "&ominus;": "⊖",
              "&oopf;": "𝕠",
              "&opar;": "⦷",
              "&operp;": "⦹",
              "&oplus;": "⊕",
              "&or;": "∨",
              "&orarr;": "↻",
              "&ord;": "⩝",
              "&order;": "ℴ",
              "&orderof;": "ℴ",
              "&ordf": "ª",
              "&ordf;": "ª",
              "&ordm": "º",
              "&ordm;": "º",
              "&origof;": "⊶",
              "&oror;": "⩖",
              "&orslope;": "⩗",
              "&orv;": "⩛",
              "&oscr;": "ℴ",
              "&oslash": "ø",
              "&oslash;": "ø",
              "&osol;": "⊘",
              "&otilde": "õ",
              "&otilde;": "õ",
              "&otimes;": "⊗",
              "&otimesas;": "⨶",
              "&ouml": "ö",
              "&ouml;": "ö",
              "&ovbar;": "⌽",
              "&par;": "∥",
              "&para": "¶",
              "&para;": "¶",
              "&parallel;": "∥",
              "&parsim;": "⫳",
              "&parsl;": "⫽",
              "&part;": "∂",
              "&pcy;": "п",
              "&percnt;": "%",
              "&period;": ".",
              "&permil;": "‰",
              "&perp;": "⊥",
              "&pertenk;": "‱",
              "&pfr;": "𝔭",
              "&phi;": "φ",
              "&phiv;": "ϕ",
              "&phmmat;": "ℳ",
              "&phone;": "☎",
              "&pi;": "π",
              "&pitchfork;": "⋔",
              "&piv;": "ϖ",
              "&planck;": "ℏ",
              "&planckh;": "ℎ",
              "&plankv;": "ℏ",
              "&plus;": "+",
              "&plusacir;": "⨣",
              "&plusb;": "⊞",
              "&pluscir;": "⨢",
              "&plusdo;": "∔",
              "&plusdu;": "⨥",
              "&pluse;": "⩲",
              "&plusmn": "±",
              "&plusmn;": "±",
              "&plussim;": "⨦",
              "&plustwo;": "⨧",
              "&pm;": "±",
              "&pointint;": "⨕",
              "&popf;": "𝕡",
              "&pound": "£",
              "&pound;": "£",
              "&pr;": "≺",
              "&prE;": "⪳",
              "&prap;": "⪷",
              "&prcue;": "≼",
              "&pre;": "⪯",
              "&prec;": "≺",
              "&precapprox;": "⪷",
              "&preccurlyeq;": "≼",
              "&preceq;": "⪯",
              "&precnapprox;": "⪹",
              "&precneqq;": "⪵",
              "&precnsim;": "⋨",
              "&precsim;": "≾",
              "&prime;": "′",
              "&primes;": "ℙ",
              "&prnE;": "⪵",
              "&prnap;": "⪹",
              "&prnsim;": "⋨",
              "&prod;": "∏",
              "&profalar;": "⌮",
              "&profline;": "⌒",
              "&profsurf;": "⌓",
              "&prop;": "∝",
              "&propto;": "∝",
              "&prsim;": "≾",
              "&prurel;": "⊰",
              "&pscr;": "𝓅",
              "&psi;": "ψ",
              "&puncsp;": " ",
              "&qfr;": "𝔮",
              "&qint;": "⨌",
              "&qopf;": "𝕢",
              "&qprime;": "⁗",
              "&qscr;": "𝓆",
              "&quaternions;": "ℍ",
              "&quatint;": "⨖",
              "&quest;": "?",
              "&questeq;": "≟",
              "&quot": '"',
              "&quot;": '"',
              "&rAarr;": "⇛",
              "&rArr;": "⇒",
              "&rAtail;": "⤜",
              "&rBarr;": "⤏",
              "&rHar;": "⥤",
              "&race;": "∽̱",
              "&racute;": "ŕ",
              "&radic;": "√",
              "&raemptyv;": "⦳",
              "&rang;": "⟩",
              "&rangd;": "⦒",
              "&range;": "⦥",
              "&rangle;": "⟩",
              "&raquo": "»",
              "&raquo;": "»",
              "&rarr;": "→",
              "&rarrap;": "⥵",
              "&rarrb;": "⇥",
              "&rarrbfs;": "⤠",
              "&rarrc;": "⤳",
              "&rarrfs;": "⤞",
              "&rarrhk;": "↪",
              "&rarrlp;": "↬",
              "&rarrpl;": "⥅",
              "&rarrsim;": "⥴",
              "&rarrtl;": "↣",
              "&rarrw;": "↝",
              "&ratail;": "⤚",
              "&ratio;": "∶",
              "&rationals;": "ℚ",
              "&rbarr;": "⤍",
              "&rbbrk;": "❳",
              "&rbrace;": "}",
              "&rbrack;": "]",
              "&rbrke;": "⦌",
              "&rbrksld;": "⦎",
              "&rbrkslu;": "⦐",
              "&rcaron;": "ř",
              "&rcedil;": "ŗ",
              "&rceil;": "⌉",
              "&rcub;": "}",
              "&rcy;": "р",
              "&rdca;": "⤷",
              "&rdldhar;": "⥩",
              "&rdquo;": "”",
              "&rdquor;": "”",
              "&rdsh;": "↳",
              "&real;": "ℜ",
              "&realine;": "ℛ",
              "&realpart;": "ℜ",
              "&reals;": "ℝ",
              "&rect;": "▭",
              "&reg": "®",
              "&reg;": "®",
              "&rfisht;": "⥽",
              "&rfloor;": "⌋",
              "&rfr;": "𝔯",
              "&rhard;": "⇁",
              "&rharu;": "⇀",
              "&rharul;": "⥬",
              "&rho;": "ρ",
              "&rhov;": "ϱ",
              "&rightarrow;": "→",
              "&rightarrowtail;": "↣",
              "&rightharpoondown;": "⇁",
              "&rightharpoonup;": "⇀",
              "&rightleftarrows;": "⇄",
              "&rightleftharpoons;": "⇌",
              "&rightrightarrows;": "⇉",
              "&rightsquigarrow;": "↝",
              "&rightthreetimes;": "⋌",
              "&ring;": "˚",
              "&risingdotseq;": "≓",
              "&rlarr;": "⇄",
              "&rlhar;": "⇌",
              "&rlm;": "‏",
              "&rmoust;": "⎱",
              "&rmoustache;": "⎱",
              "&rnmid;": "⫮",
              "&roang;": "⟭",
              "&roarr;": "⇾",
              "&robrk;": "⟧",
              "&ropar;": "⦆",
              "&ropf;": "𝕣",
              "&roplus;": "⨮",
              "&rotimes;": "⨵",
              "&rpar;": ")",
              "&rpargt;": "⦔",
              "&rppolint;": "⨒",
              "&rrarr;": "⇉",
              "&rsaquo;": "›",
              "&rscr;": "𝓇",
              "&rsh;": "↱",
              "&rsqb;": "]",
              "&rsquo;": "’",
              "&rsquor;": "’",
              "&rthree;": "⋌",
              "&rtimes;": "⋊",
              "&rtri;": "▹",
              "&rtrie;": "⊵",
              "&rtrif;": "▸",
              "&rtriltri;": "⧎",
              "&ruluhar;": "⥨",
              "&rx;": "℞",
              "&sacute;": "ś",
              "&sbquo;": "‚",
              "&sc;": "≻",
              "&scE;": "⪴",
              "&scap;": "⪸",
              "&scaron;": "š",
              "&sccue;": "≽",
              "&sce;": "⪰",
              "&scedil;": "ş",
              "&scirc;": "ŝ",
              "&scnE;": "⪶",
              "&scnap;": "⪺",
              "&scnsim;": "⋩",
              "&scpolint;": "⨓",
              "&scsim;": "≿",
              "&scy;": "с",
              "&sdot;": "⋅",
              "&sdotb;": "⊡",
              "&sdote;": "⩦",
              "&seArr;": "⇘",
              "&searhk;": "⤥",
              "&searr;": "↘",
              "&searrow;": "↘",
              "&sect": "§",
              "&sect;": "§",
              "&semi;": ";",
              "&seswar;": "⤩",
              "&setminus;": "∖",
              "&setmn;": "∖",
              "&sext;": "✶",
              "&sfr;": "𝔰",
              "&sfrown;": "⌢",
              "&sharp;": "♯",
              "&shchcy;": "щ",
              "&shcy;": "ш",
              "&shortmid;": "∣",
              "&shortparallel;": "∥",
              "&shy": "­",
              "&shy;": "­",
              "&sigma;": "σ",
              "&sigmaf;": "ς",
              "&sigmav;": "ς",
              "&sim;": "∼",
              "&simdot;": "⩪",
              "&sime;": "≃",
              "&simeq;": "≃",
              "&simg;": "⪞",
              "&simgE;": "⪠",
              "&siml;": "⪝",
              "&simlE;": "⪟",
              "&simne;": "≆",
              "&simplus;": "⨤",
              "&simrarr;": "⥲",
              "&slarr;": "←",
              "&smallsetminus;": "∖",
              "&smashp;": "⨳",
              "&smeparsl;": "⧤",
              "&smid;": "∣",
              "&smile;": "⌣",
              "&smt;": "⪪",
              "&smte;": "⪬",
              "&smtes;": "⪬︀",
              "&softcy;": "ь",
              "&sol;": "/",
              "&solb;": "⧄",
              "&solbar;": "⌿",
              "&sopf;": "𝕤",
              "&spades;": "♠",
              "&spadesuit;": "♠",
              "&spar;": "∥",
              "&sqcap;": "⊓",
              "&sqcaps;": "⊓︀",
              "&sqcup;": "⊔",
              "&sqcups;": "⊔︀",
              "&sqsub;": "⊏",
              "&sqsube;": "⊑",
              "&sqsubset;": "⊏",
              "&sqsubseteq;": "⊑",
              "&sqsup;": "⊐",
              "&sqsupe;": "⊒",
              "&sqsupset;": "⊐",
              "&sqsupseteq;": "⊒",
              "&squ;": "□",
              "&square;": "□",
              "&squarf;": "▪",
              "&squf;": "▪",
              "&srarr;": "→",
              "&sscr;": "𝓈",
              "&ssetmn;": "∖",
              "&ssmile;": "⌣",
              "&sstarf;": "⋆",
              "&star;": "☆",
              "&starf;": "★",
              "&straightepsilon;": "ϵ",
              "&straightphi;": "ϕ",
              "&strns;": "¯",
              "&sub;": "⊂",
              "&subE;": "⫅",
              "&subdot;": "⪽",
              "&sube;": "⊆",
              "&subedot;": "⫃",
              "&submult;": "⫁",
              "&subnE;": "⫋",
              "&subne;": "⊊",
              "&subplus;": "⪿",
              "&subrarr;": "⥹",
              "&subset;": "⊂",
              "&subseteq;": "⊆",
              "&subseteqq;": "⫅",
              "&subsetneq;": "⊊",
              "&subsetneqq;": "⫋",
              "&subsim;": "⫇",
              "&subsub;": "⫕",
              "&subsup;": "⫓",
              "&succ;": "≻",
              "&succapprox;": "⪸",
              "&succcurlyeq;": "≽",
              "&succeq;": "⪰",
              "&succnapprox;": "⪺",
              "&succneqq;": "⪶",
              "&succnsim;": "⋩",
              "&succsim;": "≿",
              "&sum;": "∑",
              "&sung;": "♪",
              "&sup1": "¹",
              "&sup1;": "¹",
              "&sup2": "²",
              "&sup2;": "²",
              "&sup3": "³",
              "&sup3;": "³",
              "&sup;": "⊃",
              "&supE;": "⫆",
              "&supdot;": "⪾",
              "&supdsub;": "⫘",
              "&supe;": "⊇",
              "&supedot;": "⫄",
              "&suphsol;": "⟉",
              "&suphsub;": "⫗",
              "&suplarr;": "⥻",
              "&supmult;": "⫂",
              "&supnE;": "⫌",
              "&supne;": "⊋",
              "&supplus;": "⫀",
              "&supset;": "⊃",
              "&supseteq;": "⊇",
              "&supseteqq;": "⫆",
              "&supsetneq;": "⊋",
              "&supsetneqq;": "⫌",
              "&supsim;": "⫈",
              "&supsub;": "⫔",
              "&supsup;": "⫖",
              "&swArr;": "⇙",
              "&swarhk;": "⤦",
              "&swarr;": "↙",
              "&swarrow;": "↙",
              "&swnwar;": "⤪",
              "&szlig": "ß",
              "&szlig;": "ß",
              "&target;": "⌖",
              "&tau;": "τ",
              "&tbrk;": "⎴",
              "&tcaron;": "ť",
              "&tcedil;": "ţ",
              "&tcy;": "т",
              "&tdot;": "⃛",
              "&telrec;": "⌕",
              "&tfr;": "𝔱",
              "&there4;": "∴",
              "&therefore;": "∴",
              "&theta;": "θ",
              "&thetasym;": "ϑ",
              "&thetav;": "ϑ",
              "&thickapprox;": "≈",
              "&thicksim;": "∼",
              "&thinsp;": " ",
              "&thkap;": "≈",
              "&thksim;": "∼",
              "&thorn": "þ",
              "&thorn;": "þ",
              "&tilde;": "˜",
              "&times": "×",
              "&times;": "×",
              "&timesb;": "⊠",
              "&timesbar;": "⨱",
              "&timesd;": "⨰",
              "&tint;": "∭",
              "&toea;": "⤨",
              "&top;": "⊤",
              "&topbot;": "⌶",
              "&topcir;": "⫱",
              "&topf;": "𝕥",
              "&topfork;": "⫚",
              "&tosa;": "⤩",
              "&tprime;": "‴",
              "&trade;": "™",
              "&triangle;": "▵",
              "&triangledown;": "▿",
              "&triangleleft;": "◃",
              "&trianglelefteq;": "⊴",
              "&triangleq;": "≜",
              "&triangleright;": "▹",
              "&trianglerighteq;": "⊵",
              "&tridot;": "◬",
              "&trie;": "≜",
              "&triminus;": "⨺",
              "&triplus;": "⨹",
              "&trisb;": "⧍",
              "&tritime;": "⨻",
              "&trpezium;": "⏢",
              "&tscr;": "𝓉",
              "&tscy;": "ц",
              "&tshcy;": "ћ",
              "&tstrok;": "ŧ",
              "&twixt;": "≬",
              "&twoheadleftarrow;": "↞",
              "&twoheadrightarrow;": "↠",
              "&uArr;": "⇑",
              "&uHar;": "⥣",
              "&uacute": "ú",
              "&uacute;": "ú",
              "&uarr;": "↑",
              "&ubrcy;": "ў",
              "&ubreve;": "ŭ",
              "&ucirc": "û",
              "&ucirc;": "û",
              "&ucy;": "у",
              "&udarr;": "⇅",
              "&udblac;": "ű",
              "&udhar;": "⥮",
              "&ufisht;": "⥾",
              "&ufr;": "𝔲",
              "&ugrave": "ù",
              "&ugrave;": "ù",
              "&uharl;": "↿",
              "&uharr;": "↾",
              "&uhblk;": "▀",
              "&ulcorn;": "⌜",
              "&ulcorner;": "⌜",
              "&ulcrop;": "⌏",
              "&ultri;": "◸",
              "&umacr;": "ū",
              "&uml": "¨",
              "&uml;": "¨",
              "&uogon;": "ų",
              "&uopf;": "𝕦",
              "&uparrow;": "↑",
              "&updownarrow;": "↕",
              "&upharpoonleft;": "↿",
              "&upharpoonright;": "↾",
              "&uplus;": "⊎",
              "&upsi;": "υ",
              "&upsih;": "ϒ",
              "&upsilon;": "υ",
              "&upuparrows;": "⇈",
              "&urcorn;": "⌝",
              "&urcorner;": "⌝",
              "&urcrop;": "⌎",
              "&uring;": "ů",
              "&urtri;": "◹",
              "&uscr;": "𝓊",
              "&utdot;": "⋰",
              "&utilde;": "ũ",
              "&utri;": "▵",
              "&utrif;": "▴",
              "&uuarr;": "⇈",
              "&uuml": "ü",
              "&uuml;": "ü",
              "&uwangle;": "⦧",
              "&vArr;": "⇕",
              "&vBar;": "⫨",
              "&vBarv;": "⫩",
              "&vDash;": "⊨",
              "&vangrt;": "⦜",
              "&varepsilon;": "ϵ",
              "&varkappa;": "ϰ",
              "&varnothing;": "∅",
              "&varphi;": "ϕ",
              "&varpi;": "ϖ",
              "&varpropto;": "∝",
              "&varr;": "↕",
              "&varrho;": "ϱ",
              "&varsigma;": "ς",
              "&varsubsetneq;": "⊊︀",
              "&varsubsetneqq;": "⫋︀",
              "&varsupsetneq;": "⊋︀",
              "&varsupsetneqq;": "⫌︀",
              "&vartheta;": "ϑ",
              "&vartriangleleft;": "⊲",
              "&vartriangleright;": "⊳",
              "&vcy;": "в",
              "&vdash;": "⊢",
              "&vee;": "∨",
              "&veebar;": "⊻",
              "&veeeq;": "≚",
              "&vellip;": "⋮",
              "&verbar;": "|",
              "&vert;": "|",
              "&vfr;": "𝔳",
              "&vltri;": "⊲",
              "&vnsub;": "⊂⃒",
              "&vnsup;": "⊃⃒",
              "&vopf;": "𝕧",
              "&vprop;": "∝",
              "&vrtri;": "⊳",
              "&vscr;": "𝓋",
              "&vsubnE;": "⫋︀",
              "&vsubne;": "⊊︀",
              "&vsupnE;": "⫌︀",
              "&vsupne;": "⊋︀",
              "&vzigzag;": "⦚",
              "&wcirc;": "ŵ",
              "&wedbar;": "⩟",
              "&wedge;": "∧",
              "&wedgeq;": "≙",
              "&weierp;": "℘",
              "&wfr;": "𝔴",
              "&wopf;": "𝕨",
              "&wp;": "℘",
              "&wr;": "≀",
              "&wreath;": "≀",
              "&wscr;": "𝓌",
              "&xcap;": "⋂",
              "&xcirc;": "◯",
              "&xcup;": "⋃",
              "&xdtri;": "▽",
              "&xfr;": "𝔵",
              "&xhArr;": "⟺",
              "&xharr;": "⟷",
              "&xi;": "ξ",
              "&xlArr;": "⟸",
              "&xlarr;": "⟵",
              "&xmap;": "⟼",
              "&xnis;": "⋻",
              "&xodot;": "⨀",
              "&xopf;": "𝕩",
              "&xoplus;": "⨁",
              "&xotime;": "⨂",
              "&xrArr;": "⟹",
              "&xrarr;": "⟶",
              "&xscr;": "𝓍",
              "&xsqcup;": "⨆",
              "&xuplus;": "⨄",
              "&xutri;": "△",
              "&xvee;": "⋁",
              "&xwedge;": "⋀",
              "&yacute": "ý",
              "&yacute;": "ý",
              "&yacy;": "я",
              "&ycirc;": "ŷ",
              "&ycy;": "ы",
              "&yen": "¥",
              "&yen;": "¥",
              "&yfr;": "𝔶",
              "&yicy;": "ї",
              "&yopf;": "𝕪",
              "&yscr;": "𝓎",
              "&yucy;": "ю",
              "&yuml": "ÿ",
              "&yuml;": "ÿ",
              "&zacute;": "ź",
              "&zcaron;": "ž",
              "&zcy;": "з",
              "&zdot;": "ż",
              "&zeetrf;": "ℨ",
              "&zeta;": "ζ",
              "&zfr;": "𝔷",
              "&zhcy;": "ж",
              "&zigrarr;": "⇝",
              "&zopf;": "𝕫",
              "&zscr;": "𝓏",
              "&zwj;": "‍",
              "&zwnj;": "‌",
            },
            characters: {
              Æ: "&AElig;",
              "&": "&amp;",
              Á: "&Aacute;",
              Ă: "&Abreve;",
              Â: "&Acirc;",
              А: "&Acy;",
              "𝔄": "&Afr;",
              À: "&Agrave;",
              Α: "&Alpha;",
              Ā: "&Amacr;",
              "⩓": "&And;",
              Ą: "&Aogon;",
              "𝔸": "&Aopf;",
              "⁡": "&af;",
              Å: "&angst;",
              "𝒜": "&Ascr;",
              "≔": "&coloneq;",
              Ã: "&Atilde;",
              Ä: "&Auml;",
              "∖": "&ssetmn;",
              "⫧": "&Barv;",
              "⌆": "&doublebarwedge;",
              Б: "&Bcy;",
              "∵": "&because;",
              ℬ: "&bernou;",
              Β: "&Beta;",
              "𝔅": "&Bfr;",
              "𝔹": "&Bopf;",
              "˘": "&breve;",
              "≎": "&bump;",
              Ч: "&CHcy;",
              "©": "&copy;",
              Ć: "&Cacute;",
              "⋒": "&Cap;",
              ⅅ: "&DD;",
              ℭ: "&Cfr;",
              Č: "&Ccaron;",
              Ç: "&Ccedil;",
              Ĉ: "&Ccirc;",
              "∰": "&Cconint;",
              Ċ: "&Cdot;",
              "¸": "&cedil;",
              "·": "&middot;",
              Χ: "&Chi;",
              "⊙": "&odot;",
              "⊖": "&ominus;",
              "⊕": "&oplus;",
              "⊗": "&otimes;",
              "∲": "&cwconint;",
              "”": "&rdquor;",
              "’": "&rsquor;",
              "∷": "&Proportion;",
              "⩴": "&Colone;",
              "≡": "&equiv;",
              "∯": "&DoubleContourIntegral;",
              "∮": "&oint;",
              ℂ: "&complexes;",
              "∐": "&coprod;",
              "∳": "&awconint;",
              "⨯": "&Cross;",
              "𝒞": "&Cscr;",
              "⋓": "&Cup;",
              "≍": "&asympeq;",
              "⤑": "&DDotrahd;",
              Ђ: "&DJcy;",
              Ѕ: "&DScy;",
              Џ: "&DZcy;",
              "‡": "&ddagger;",
              "↡": "&Darr;",
              "⫤": "&DoubleLeftTee;",
              Ď: "&Dcaron;",
              Д: "&Dcy;",
              "∇": "&nabla;",
              Δ: "&Delta;",
              "𝔇": "&Dfr;",
              "´": "&acute;",
              "˙": "&dot;",
              "˝": "&dblac;",
              "`": "&grave;",
              "˜": "&tilde;",
              "⋄": "&diamond;",
              ⅆ: "&dd;",
              "𝔻": "&Dopf;",
              "¨": "&uml;",
              "⃜": "&DotDot;",
              "≐": "&esdot;",
              "⇓": "&dArr;",
              "⇐": "&lArr;",
              "⇔": "&iff;",
              "⟸": "&xlArr;",
              "⟺": "&xhArr;",
              "⟹": "&xrArr;",
              "⇒": "&rArr;",
              "⊨": "&vDash;",
              "⇑": "&uArr;",
              "⇕": "&vArr;",
              "∥": "&spar;",
              "↓": "&downarrow;",
              "⤓": "&DownArrowBar;",
              "⇵": "&duarr;",
              "̑": "&DownBreve;",
              "⥐": "&DownLeftRightVector;",
              "⥞": "&DownLeftTeeVector;",
              "↽": "&lhard;",
              "⥖": "&DownLeftVectorBar;",
              "⥟": "&DownRightTeeVector;",
              "⇁": "&rightharpoondown;",
              "⥗": "&DownRightVectorBar;",
              "⊤": "&top;",
              "↧": "&mapstodown;",
              "𝒟": "&Dscr;",
              Đ: "&Dstrok;",
              Ŋ: "&ENG;",
              Ð: "&ETH;",
              É: "&Eacute;",
              Ě: "&Ecaron;",
              Ê: "&Ecirc;",
              Э: "&Ecy;",
              Ė: "&Edot;",
              "𝔈": "&Efr;",
              È: "&Egrave;",
              "∈": "&isinv;",
              Ē: "&Emacr;",
              "◻": "&EmptySmallSquare;",
              "▫": "&EmptyVerySmallSquare;",
              Ę: "&Eogon;",
              "𝔼": "&Eopf;",
              Ε: "&Epsilon;",
              "⩵": "&Equal;",
              "≂": "&esim;",
              "⇌": "&rlhar;",
              ℰ: "&expectation;",
              "⩳": "&Esim;",
              Η: "&Eta;",
              Ë: "&Euml;",
              "∃": "&exist;",
              ⅇ: "&exponentiale;",
              Ф: "&Fcy;",
              "𝔉": "&Ffr;",
              "◼": "&FilledSmallSquare;",
              "▪": "&squf;",
              "𝔽": "&Fopf;",
              "∀": "&forall;",
              ℱ: "&Fscr;",
              Ѓ: "&GJcy;",
              ">": "&gt;",
              Γ: "&Gamma;",
              Ϝ: "&Gammad;",
              Ğ: "&Gbreve;",
              Ģ: "&Gcedil;",
              Ĝ: "&Gcirc;",
              Г: "&Gcy;",
              Ġ: "&Gdot;",
              "𝔊": "&Gfr;",
              "⋙": "&ggg;",
              "𝔾": "&Gopf;",
              "≥": "&geq;",
              "⋛": "&gtreqless;",
              "≧": "&geqq;",
              "⪢": "&GreaterGreater;",
              "≷": "&gtrless;",
              "⩾": "&ges;",
              "≳": "&gtrsim;",
              "𝒢": "&Gscr;",
              "≫": "&gg;",
              Ъ: "&HARDcy;",
              ˇ: "&caron;",
              "^": "&Hat;",
              Ĥ: "&Hcirc;",
              ℌ: "&Poincareplane;",
              ℋ: "&hamilt;",
              ℍ: "&quaternions;",
              "─": "&boxh;",
              Ħ: "&Hstrok;",
              "≏": "&bumpeq;",
              Е: "&IEcy;",
              Ĳ: "&IJlig;",
              Ё: "&IOcy;",
              Í: "&Iacute;",
              Î: "&Icirc;",
              И: "&Icy;",
              İ: "&Idot;",
              ℑ: "&imagpart;",
              Ì: "&Igrave;",
              Ī: "&Imacr;",
              ⅈ: "&ii;",
              "∬": "&Int;",
              "∫": "&int;",
              "⋂": "&xcap;",
              "⁣": "&ic;",
              "⁢": "&it;",
              Į: "&Iogon;",
              "𝕀": "&Iopf;",
              Ι: "&Iota;",
              ℐ: "&imagline;",
              Ĩ: "&Itilde;",
              І: "&Iukcy;",
              Ï: "&Iuml;",
              Ĵ: "&Jcirc;",
              Й: "&Jcy;",
              "𝔍": "&Jfr;",
              "𝕁": "&Jopf;",
              "𝒥": "&Jscr;",
              Ј: "&Jsercy;",
              Є: "&Jukcy;",
              Х: "&KHcy;",
              Ќ: "&KJcy;",
              Κ: "&Kappa;",
              Ķ: "&Kcedil;",
              К: "&Kcy;",
              "𝔎": "&Kfr;",
              "𝕂": "&Kopf;",
              "𝒦": "&Kscr;",
              Љ: "&LJcy;",
              "<": "&lt;",
              Ĺ: "&Lacute;",
              Λ: "&Lambda;",
              "⟪": "&Lang;",
              ℒ: "&lagran;",
              "↞": "&twoheadleftarrow;",
              Ľ: "&Lcaron;",
              Ļ: "&Lcedil;",
              Л: "&Lcy;",
              "⟨": "&langle;",
              "←": "&slarr;",
              "⇤": "&larrb;",
              "⇆": "&lrarr;",
              "⌈": "&lceil;",
              "⟦": "&lobrk;",
              "⥡": "&LeftDownTeeVector;",
              "⇃": "&downharpoonleft;",
              "⥙": "&LeftDownVectorBar;",
              "⌊": "&lfloor;",
              "↔": "&leftrightarrow;",
              "⥎": "&LeftRightVector;",
              "⊣": "&dashv;",
              "↤": "&mapstoleft;",
              "⥚": "&LeftTeeVector;",
              "⊲": "&vltri;",
              "⧏": "&LeftTriangleBar;",
              "⊴": "&trianglelefteq;",
              "⥑": "&LeftUpDownVector;",
              "⥠": "&LeftUpTeeVector;",
              "↿": "&upharpoonleft;",
              "⥘": "&LeftUpVectorBar;",
              "↼": "&lharu;",
              "⥒": "&LeftVectorBar;",
              "⋚": "&lesseqgtr;",
              "≦": "&leqq;",
              "≶": "&lg;",
              "⪡": "&LessLess;",
              "⩽": "&les;",
              "≲": "&lsim;",
              "𝔏": "&Lfr;",
              "⋘": "&Ll;",
              "⇚": "&lAarr;",
              Ŀ: "&Lmidot;",
              "⟵": "&xlarr;",
              "⟷": "&xharr;",
              "⟶": "&xrarr;",
              "𝕃": "&Lopf;",
              "↙": "&swarrow;",
              "↘": "&searrow;",
              "↰": "&lsh;",
              Ł: "&Lstrok;",
              "≪": "&ll;",
              "⤅": "&Map;",
              М: "&Mcy;",
              " ": "&MediumSpace;",
              ℳ: "&phmmat;",
              "𝔐": "&Mfr;",
              "∓": "&mp;",
              "𝕄": "&Mopf;",
              Μ: "&Mu;",
              Њ: "&NJcy;",
              Ń: "&Nacute;",
              Ň: "&Ncaron;",
              Ņ: "&Ncedil;",
              Н: "&Ncy;",
              "​": "&ZeroWidthSpace;",
              "\n": "&NewLine;",
              "𝔑": "&Nfr;",
              "⁠": "&NoBreak;",
              " ": "&nbsp;",
              ℕ: "&naturals;",
              "⫬": "&Not;",
              "≢": "&nequiv;",
              "≭": "&NotCupCap;",
              "∦": "&nspar;",
              "∉": "&notinva;",
              "≠": "&ne;",
              "≂̸": "&nesim;",
              "∄": "&nexists;",
              "≯": "&ngtr;",
              "≱": "&ngeq;",
              "≧̸": "&ngeqq;",
              "≫̸": "&nGtv;",
              "≹": "&ntgl;",
              "⩾̸": "&nges;",
              "≵": "&ngsim;",
              "≎̸": "&nbump;",
              "≏̸": "&nbumpe;",
              "⋪": "&ntriangleleft;",
              "⧏̸": "&NotLeftTriangleBar;",
              "⋬": "&ntrianglelefteq;",
              "≮": "&nlt;",
              "≰": "&nleq;",
              "≸": "&ntlg;",
              "≪̸": "&nLtv;",
              "⩽̸": "&nles;",
              "≴": "&nlsim;",
              "⪢̸": "&NotNestedGreaterGreater;",
              "⪡̸": "&NotNestedLessLess;",
              "⊀": "&nprec;",
              "⪯̸": "&npreceq;",
              "⋠": "&nprcue;",
              "∌": "&notniva;",
              "⋫": "&ntriangleright;",
              "⧐̸": "&NotRightTriangleBar;",
              "⋭": "&ntrianglerighteq;",
              "⊏̸": "&NotSquareSubset;",
              "⋢": "&nsqsube;",
              "⊐̸": "&NotSquareSuperset;",
              "⋣": "&nsqsupe;",
              "⊂⃒": "&vnsub;",
              "⊈": "&nsubseteq;",
              "⊁": "&nsucc;",
              "⪰̸": "&nsucceq;",
              "⋡": "&nsccue;",
              "≿̸": "&NotSucceedsTilde;",
              "⊃⃒": "&vnsup;",
              "⊉": "&nsupseteq;",
              "≁": "&nsim;",
              "≄": "&nsimeq;",
              "≇": "&ncong;",
              "≉": "&napprox;",
              "∤": "&nsmid;",
              "𝒩": "&Nscr;",
              Ñ: "&Ntilde;",
              Ν: "&Nu;",
              Œ: "&OElig;",
              Ó: "&Oacute;",
              Ô: "&Ocirc;",
              О: "&Ocy;",
              Ő: "&Odblac;",
              "𝔒": "&Ofr;",
              Ò: "&Ograve;",
              Ō: "&Omacr;",
              Ω: "&ohm;",
              Ο: "&Omicron;",
              "𝕆": "&Oopf;",
              "“": "&ldquo;",
              "‘": "&lsquo;",
              "⩔": "&Or;",
              "𝒪": "&Oscr;",
              Ø: "&Oslash;",
              Õ: "&Otilde;",
              "⨷": "&Otimes;",
              Ö: "&Ouml;",
              "‾": "&oline;",
              "⏞": "&OverBrace;",
              "⎴": "&tbrk;",
              "⏜": "&OverParenthesis;",
              "∂": "&part;",
              П: "&Pcy;",
              "𝔓": "&Pfr;",
              Φ: "&Phi;",
              Π: "&Pi;",
              "±": "&pm;",
              ℙ: "&primes;",
              "⪻": "&Pr;",
              "≺": "&prec;",
              "⪯": "&preceq;",
              "≼": "&preccurlyeq;",
              "≾": "&prsim;",
              "″": "&Prime;",
              "∏": "&prod;",
              "∝": "&vprop;",
              "𝒫": "&Pscr;",
              Ψ: "&Psi;",
              '"': "&quot;",
              "𝔔": "&Qfr;",
              ℚ: "&rationals;",
              "𝒬": "&Qscr;",
              "⤐": "&drbkarow;",
              "®": "&reg;",
              Ŕ: "&Racute;",
              "⟫": "&Rang;",
              "↠": "&twoheadrightarrow;",
              "⤖": "&Rarrtl;",
              Ř: "&Rcaron;",
              Ŗ: "&Rcedil;",
              Р: "&Rcy;",
              ℜ: "&realpart;",
              "∋": "&niv;",
              "⇋": "&lrhar;",
              "⥯": "&duhar;",
              Ρ: "&Rho;",
              "⟩": "&rangle;",
              "→": "&srarr;",
              "⇥": "&rarrb;",
              "⇄": "&rlarr;",
              "⌉": "&rceil;",
              "⟧": "&robrk;",
              "⥝": "&RightDownTeeVector;",
              "⇂": "&downharpoonright;",
              "⥕": "&RightDownVectorBar;",
              "⌋": "&rfloor;",
              "⊢": "&vdash;",
              "↦": "&mapsto;",
              "⥛": "&RightTeeVector;",
              "⊳": "&vrtri;",
              "⧐": "&RightTriangleBar;",
              "⊵": "&trianglerighteq;",
              "⥏": "&RightUpDownVector;",
              "⥜": "&RightUpTeeVector;",
              "↾": "&upharpoonright;",
              "⥔": "&RightUpVectorBar;",
              "⇀": "&rightharpoonup;",
              "⥓": "&RightVectorBar;",
              ℝ: "&reals;",
              "⥰": "&RoundImplies;",
              "⇛": "&rAarr;",
              ℛ: "&realine;",
              "↱": "&rsh;",
              "⧴": "&RuleDelayed;",
              Щ: "&SHCHcy;",
              Ш: "&SHcy;",
              Ь: "&SOFTcy;",
              Ś: "&Sacute;",
              "⪼": "&Sc;",
              Š: "&Scaron;",
              Ş: "&Scedil;",
              Ŝ: "&Scirc;",
              С: "&Scy;",
              "𝔖": "&Sfr;",
              "↑": "&uparrow;",
              Σ: "&Sigma;",
              "∘": "&compfn;",
              "𝕊": "&Sopf;",
              "√": "&radic;",
              "□": "&square;",
              "⊓": "&sqcap;",
              "⊏": "&sqsubset;",
              "⊑": "&sqsubseteq;",
              "⊐": "&sqsupset;",
              "⊒": "&sqsupseteq;",
              "⊔": "&sqcup;",
              "𝒮": "&Sscr;",
              "⋆": "&sstarf;",
              "⋐": "&Subset;",
              "⊆": "&subseteq;",
              "≻": "&succ;",
              "⪰": "&succeq;",
              "≽": "&succcurlyeq;",
              "≿": "&succsim;",
              "∑": "&sum;",
              "⋑": "&Supset;",
              "⊃": "&supset;",
              "⊇": "&supseteq;",
              Þ: "&THORN;",
              "™": "&trade;",
              Ћ: "&TSHcy;",
              Ц: "&TScy;",
              "\t": "&Tab;",
              Τ: "&Tau;",
              Ť: "&Tcaron;",
              Ţ: "&Tcedil;",
              Т: "&Tcy;",
              "𝔗": "&Tfr;",
              "∴": "&therefore;",
              Θ: "&Theta;",
              "  ": "&ThickSpace;",
              " ": "&thinsp;",
              "∼": "&thksim;",
              "≃": "&simeq;",
              "≅": "&cong;",
              "≈": "&thkap;",
              "𝕋": "&Topf;",
              "⃛": "&tdot;",
              "𝒯": "&Tscr;",
              Ŧ: "&Tstrok;",
              Ú: "&Uacute;",
              "↟": "&Uarr;",
              "⥉": "&Uarrocir;",
              Ў: "&Ubrcy;",
              Ŭ: "&Ubreve;",
              Û: "&Ucirc;",
              У: "&Ucy;",
              Ű: "&Udblac;",
              "𝔘": "&Ufr;",
              Ù: "&Ugrave;",
              Ū: "&Umacr;",
              _: "&lowbar;",
              "⏟": "&UnderBrace;",
              "⎵": "&bbrk;",
              "⏝": "&UnderParenthesis;",
              "⋃": "&xcup;",
              "⊎": "&uplus;",
              Ų: "&Uogon;",
              "𝕌": "&Uopf;",
              "⤒": "&UpArrowBar;",
              "⇅": "&udarr;",
              "↕": "&varr;",
              "⥮": "&udhar;",
              "⊥": "&perp;",
              "↥": "&mapstoup;",
              "↖": "&nwarrow;",
              "↗": "&nearrow;",
              ϒ: "&upsih;",
              Υ: "&Upsilon;",
              Ů: "&Uring;",
              "𝒰": "&Uscr;",
              Ũ: "&Utilde;",
              Ü: "&Uuml;",
              "⊫": "&VDash;",
              "⫫": "&Vbar;",
              В: "&Vcy;",
              "⊩": "&Vdash;",
              "⫦": "&Vdashl;",
              "⋁": "&xvee;",
              "‖": "&Vert;",
              "∣": "&smid;",
              "|": "&vert;",
              "❘": "&VerticalSeparator;",
              "≀": "&wreath;",
              " ": "&hairsp;",
              "𝔙": "&Vfr;",
              "𝕍": "&Vopf;",
              "𝒱": "&Vscr;",
              "⊪": "&Vvdash;",
              Ŵ: "&Wcirc;",
              "⋀": "&xwedge;",
              "𝔚": "&Wfr;",
              "𝕎": "&Wopf;",
              "𝒲": "&Wscr;",
              "𝔛": "&Xfr;",
              Ξ: "&Xi;",
              "𝕏": "&Xopf;",
              "𝒳": "&Xscr;",
              Я: "&YAcy;",
              Ї: "&YIcy;",
              Ю: "&YUcy;",
              Ý: "&Yacute;",
              Ŷ: "&Ycirc;",
              Ы: "&Ycy;",
              "𝔜": "&Yfr;",
              "𝕐": "&Yopf;",
              "𝒴": "&Yscr;",
              Ÿ: "&Yuml;",
              Ж: "&ZHcy;",
              Ź: "&Zacute;",
              Ž: "&Zcaron;",
              З: "&Zcy;",
              Ż: "&Zdot;",
              Ζ: "&Zeta;",
              ℨ: "&zeetrf;",
              ℤ: "&integers;",
              "𝒵": "&Zscr;",
              á: "&aacute;",
              ă: "&abreve;",
              "∾": "&mstpos;",
              "∾̳": "&acE;",
              "∿": "&acd;",
              â: "&acirc;",
              а: "&acy;",
              æ: "&aelig;",
              "𝔞": "&afr;",
              à: "&agrave;",
              ℵ: "&aleph;",
              α: "&alpha;",
              ā: "&amacr;",
              "⨿": "&amalg;",
              "∧": "&wedge;",
              "⩕": "&andand;",
              "⩜": "&andd;",
              "⩘": "&andslope;",
              "⩚": "&andv;",
              "∠": "&angle;",
              "⦤": "&ange;",
              "∡": "&measuredangle;",
              "⦨": "&angmsdaa;",
              "⦩": "&angmsdab;",
              "⦪": "&angmsdac;",
              "⦫": "&angmsdad;",
              "⦬": "&angmsdae;",
              "⦭": "&angmsdaf;",
              "⦮": "&angmsdag;",
              "⦯": "&angmsdah;",
              "∟": "&angrt;",
              "⊾": "&angrtvb;",
              "⦝": "&angrtvbd;",
              "∢": "&angsph;",
              "⍼": "&angzarr;",
              ą: "&aogon;",
              "𝕒": "&aopf;",
              "⩰": "&apE;",
              "⩯": "&apacir;",
              "≊": "&approxeq;",
              "≋": "&apid;",
              "'": "&apos;",
              å: "&aring;",
              "𝒶": "&ascr;",
              "*": "&midast;",
              ã: "&atilde;",
              ä: "&auml;",
              "⨑": "&awint;",
              "⫭": "&bNot;",
              "≌": "&bcong;",
              "϶": "&bepsi;",
              "‵": "&bprime;",
              "∽": "&bsim;",
              "⋍": "&bsime;",
              "⊽": "&barvee;",
              "⌅": "&barwedge;",
              "⎶": "&bbrktbrk;",
              б: "&bcy;",
              "„": "&ldquor;",
              "⦰": "&bemptyv;",
              β: "&beta;",
              ℶ: "&beth;",
              "≬": "&twixt;",
              "𝔟": "&bfr;",
              "◯": "&xcirc;",
              "⨀": "&xodot;",
              "⨁": "&xoplus;",
              "⨂": "&xotime;",
              "⨆": "&xsqcup;",
              "★": "&starf;",
              "▽": "&xdtri;",
              "△": "&xutri;",
              "⨄": "&xuplus;",
              "⤍": "&rbarr;",
              "⧫": "&lozf;",
              "▴": "&utrif;",
              "▾": "&dtrif;",
              "◂": "&ltrif;",
              "▸": "&rtrif;",
              "␣": "&blank;",
              "▒": "&blk12;",
              "░": "&blk14;",
              "▓": "&blk34;",
              "█": "&block;",
              "=⃥": "&bne;",
              "≡⃥": "&bnequiv;",
              "⌐": "&bnot;",
              "𝕓": "&bopf;",
              "⋈": "&bowtie;",
              "╗": "&boxDL;",
              "╔": "&boxDR;",
              "╖": "&boxDl;",
              "╓": "&boxDr;",
              "═": "&boxH;",
              "╦": "&boxHD;",
              "╩": "&boxHU;",
              "╤": "&boxHd;",
              "╧": "&boxHu;",
              "╝": "&boxUL;",
              "╚": "&boxUR;",
              "╜": "&boxUl;",
              "╙": "&boxUr;",
              "║": "&boxV;",
              "╬": "&boxVH;",
              "╣": "&boxVL;",
              "╠": "&boxVR;",
              "╫": "&boxVh;",
              "╢": "&boxVl;",
              "╟": "&boxVr;",
              "⧉": "&boxbox;",
              "╕": "&boxdL;",
              "╒": "&boxdR;",
              "┐": "&boxdl;",
              "┌": "&boxdr;",
              "╥": "&boxhD;",
              "╨": "&boxhU;",
              "┬": "&boxhd;",
              "┴": "&boxhu;",
              "⊟": "&minusb;",
              "⊞": "&plusb;",
              "⊠": "&timesb;",
              "╛": "&boxuL;",
              "╘": "&boxuR;",
              "┘": "&boxul;",
              "└": "&boxur;",
              "│": "&boxv;",
              "╪": "&boxvH;",
              "╡": "&boxvL;",
              "╞": "&boxvR;",
              "┼": "&boxvh;",
              "┤": "&boxvl;",
              "├": "&boxvr;",
              "¦": "&brvbar;",
              "𝒷": "&bscr;",
              "⁏": "&bsemi;",
              "\\": "&bsol;",
              "⧅": "&bsolb;",
              "⟈": "&bsolhsub;",
              "•": "&bullet;",
              "⪮": "&bumpE;",
              ć: "&cacute;",
              "∩": "&cap;",
              "⩄": "&capand;",
              "⩉": "&capbrcup;",
              "⩋": "&capcap;",
              "⩇": "&capcup;",
              "⩀": "&capdot;",
              "∩︀": "&caps;",
              "⁁": "&caret;",
              "⩍": "&ccaps;",
              č: "&ccaron;",
              ç: "&ccedil;",
              ĉ: "&ccirc;",
              "⩌": "&ccups;",
              "⩐": "&ccupssm;",
              ċ: "&cdot;",
              "⦲": "&cemptyv;",
              "¢": "&cent;",
              "𝔠": "&cfr;",
              ч: "&chcy;",
              "✓": "&checkmark;",
              χ: "&chi;",
              "○": "&cir;",
              "⧃": "&cirE;",
              ˆ: "&circ;",
              "≗": "&cire;",
              "↺": "&olarr;",
              "↻": "&orarr;",
              "Ⓢ": "&oS;",
              "⊛": "&oast;",
              "⊚": "&ocir;",
              "⊝": "&odash;",
              "⨐": "&cirfnint;",
              "⫯": "&cirmid;",
              "⧂": "&cirscir;",
              "♣": "&clubsuit;",
              ":": "&colon;",
              ",": "&comma;",
              "@": "&commat;",
              "∁": "&complement;",
              "⩭": "&congdot;",
              "𝕔": "&copf;",
              "℗": "&copysr;",
              "↵": "&crarr;",
              "✗": "&cross;",
              "𝒸": "&cscr;",
              "⫏": "&csub;",
              "⫑": "&csube;",
              "⫐": "&csup;",
              "⫒": "&csupe;",
              "⋯": "&ctdot;",
              "⤸": "&cudarrl;",
              "⤵": "&cudarrr;",
              "⋞": "&curlyeqprec;",
              "⋟": "&curlyeqsucc;",
              "↶": "&curvearrowleft;",
              "⤽": "&cularrp;",
              "∪": "&cup;",
              "⩈": "&cupbrcap;",
              "⩆": "&cupcap;",
              "⩊": "&cupcup;",
              "⊍": "&cupdot;",
              "⩅": "&cupor;",
              "∪︀": "&cups;",
              "↷": "&curvearrowright;",
              "⤼": "&curarrm;",
              "⋎": "&cuvee;",
              "⋏": "&cuwed;",
              "¤": "&curren;",
              "∱": "&cwint;",
              "⌭": "&cylcty;",
              "⥥": "&dHar;",
              "†": "&dagger;",
              ℸ: "&daleth;",
              "‐": "&hyphen;",
              "⤏": "&rBarr;",
              ď: "&dcaron;",
              д: "&dcy;",
              "⇊": "&downdownarrows;",
              "⩷": "&eDDot;",
              "°": "&deg;",
              δ: "&delta;",
              "⦱": "&demptyv;",
              "⥿": "&dfisht;",
              "𝔡": "&dfr;",
              "♦": "&diams;",
              ϝ: "&gammad;",
              "⋲": "&disin;",
              "÷": "&divide;",
              "⋇": "&divonx;",
              ђ: "&djcy;",
              "⌞": "&llcorner;",
              "⌍": "&dlcrop;",
              $: "&dollar;",
              "𝕕": "&dopf;",
              "≑": "&eDot;",
              "∸": "&minusd;",
              "∔": "&plusdo;",
              "⊡": "&sdotb;",
              "⌟": "&lrcorner;",
              "⌌": "&drcrop;",
              "𝒹": "&dscr;",
              ѕ: "&dscy;",
              "⧶": "&dsol;",
              đ: "&dstrok;",
              "⋱": "&dtdot;",
              "▿": "&triangledown;",
              "⦦": "&dwangle;",
              џ: "&dzcy;",
              "⟿": "&dzigrarr;",
              é: "&eacute;",
              "⩮": "&easter;",
              ě: "&ecaron;",
              "≖": "&eqcirc;",
              ê: "&ecirc;",
              "≕": "&eqcolon;",
              э: "&ecy;",
              ė: "&edot;",
              "≒": "&fallingdotseq;",
              "𝔢": "&efr;",
              "⪚": "&eg;",
              è: "&egrave;",
              "⪖": "&eqslantgtr;",
              "⪘": "&egsdot;",
              "⪙": "&el;",
              "⏧": "&elinters;",
              ℓ: "&ell;",
              "⪕": "&eqslantless;",
              "⪗": "&elsdot;",
              ē: "&emacr;",
              "∅": "&varnothing;",
              " ": "&emsp13;",
              " ": "&emsp14;",
              " ": "&emsp;",
              ŋ: "&eng;",
              " ": "&ensp;",
              ę: "&eogon;",
              "𝕖": "&eopf;",
              "⋕": "&epar;",
              "⧣": "&eparsl;",
              "⩱": "&eplus;",
              ε: "&epsilon;",
              ϵ: "&varepsilon;",
              "=": "&equals;",
              "≟": "&questeq;",
              "⩸": "&equivDD;",
              "⧥": "&eqvparsl;",
              "≓": "&risingdotseq;",
              "⥱": "&erarr;",
              ℯ: "&escr;",
              η: "&eta;",
              ð: "&eth;",
              ë: "&euml;",
              "€": "&euro;",
              "!": "&excl;",
              ф: "&fcy;",
              "♀": "&female;",
              ﬃ: "&ffilig;",
              ﬀ: "&fflig;",
              ﬄ: "&ffllig;",
              "𝔣": "&ffr;",
              ﬁ: "&filig;",
              fj: "&fjlig;",
              "♭": "&flat;",
              ﬂ: "&fllig;",
              "▱": "&fltns;",
              ƒ: "&fnof;",
              "𝕗": "&fopf;",
              "⋔": "&pitchfork;",
              "⫙": "&forkv;",
              "⨍": "&fpartint;",
              "½": "&half;",
              "⅓": "&frac13;",
              "¼": "&frac14;",
              "⅕": "&frac15;",
              "⅙": "&frac16;",
              "⅛": "&frac18;",
              "⅔": "&frac23;",
              "⅖": "&frac25;",
              "¾": "&frac34;",
              "⅗": "&frac35;",
              "⅜": "&frac38;",
              "⅘": "&frac45;",
              "⅚": "&frac56;",
              "⅝": "&frac58;",
              "⅞": "&frac78;",
              "⁄": "&frasl;",
              "⌢": "&sfrown;",
              "𝒻": "&fscr;",
              "⪌": "&gtreqqless;",
              ǵ: "&gacute;",
              γ: "&gamma;",
              "⪆": "&gtrapprox;",
              ğ: "&gbreve;",
              ĝ: "&gcirc;",
              г: "&gcy;",
              ġ: "&gdot;",
              "⪩": "&gescc;",
              "⪀": "&gesdot;",
              "⪂": "&gesdoto;",
              "⪄": "&gesdotol;",
              "⋛︀": "&gesl;",
              "⪔": "&gesles;",
              "𝔤": "&gfr;",
              ℷ: "&gimel;",
              ѓ: "&gjcy;",
              "⪒": "&glE;",
              "⪥": "&gla;",
              "⪤": "&glj;",
              "≩": "&gneqq;",
              "⪊": "&gnapprox;",
              "⪈": "&gneq;",
              "⋧": "&gnsim;",
              "𝕘": "&gopf;",
              ℊ: "&gscr;",
              "⪎": "&gsime;",
              "⪐": "&gsiml;",
              "⪧": "&gtcc;",
              "⩺": "&gtcir;",
              "⋗": "&gtrdot;",
              "⦕": "&gtlPar;",
              "⩼": "&gtquest;",
              "⥸": "&gtrarr;",
              "≩︀": "&gvnE;",
              ъ: "&hardcy;",
              "⥈": "&harrcir;",
              "↭": "&leftrightsquigarrow;",
              ℏ: "&plankv;",
              ĥ: "&hcirc;",
              "♥": "&heartsuit;",
              "…": "&mldr;",
              "⊹": "&hercon;",
              "𝔥": "&hfr;",
              "⤥": "&searhk;",
              "⤦": "&swarhk;",
              "⇿": "&hoarr;",
              "∻": "&homtht;",
              "↩": "&larrhk;",
              "↪": "&rarrhk;",
              "𝕙": "&hopf;",
              "―": "&horbar;",
              "𝒽": "&hscr;",
              ħ: "&hstrok;",
              "⁃": "&hybull;",
              í: "&iacute;",
              î: "&icirc;",
              и: "&icy;",
              е: "&iecy;",
              "¡": "&iexcl;",
              "𝔦": "&ifr;",
              ì: "&igrave;",
              "⨌": "&qint;",
              "∭": "&tint;",
              "⧜": "&iinfin;",
              "℩": "&iiota;",
              ĳ: "&ijlig;",
              ī: "&imacr;",
              ı: "&inodot;",
              "⊷": "&imof;",
              Ƶ: "&imped;",
              "℅": "&incare;",
              "∞": "&infin;",
              "⧝": "&infintie;",
              "⊺": "&intercal;",
              "⨗": "&intlarhk;",
              "⨼": "&iprod;",
              ё: "&iocy;",
              į: "&iogon;",
              "𝕚": "&iopf;",
              ι: "&iota;",
              "¿": "&iquest;",
              "𝒾": "&iscr;",
              "⋹": "&isinE;",
              "⋵": "&isindot;",
              "⋴": "&isins;",
              "⋳": "&isinsv;",
              ĩ: "&itilde;",
              і: "&iukcy;",
              ï: "&iuml;",
              ĵ: "&jcirc;",
              й: "&jcy;",
              "𝔧": "&jfr;",
              ȷ: "&jmath;",
              "𝕛": "&jopf;",
              "𝒿": "&jscr;",
              ј: "&jsercy;",
              є: "&jukcy;",
              κ: "&kappa;",
              ϰ: "&varkappa;",
              ķ: "&kcedil;",
              к: "&kcy;",
              "𝔨": "&kfr;",
              ĸ: "&kgreen;",
              х: "&khcy;",
              ќ: "&kjcy;",
              "𝕜": "&kopf;",
              "𝓀": "&kscr;",
              "⤛": "&lAtail;",
              "⤎": "&lBarr;",
              "⪋": "&lesseqqgtr;",
              "⥢": "&lHar;",
              ĺ: "&lacute;",
              "⦴": "&laemptyv;",
              λ: "&lambda;",
              "⦑": "&langd;",
              "⪅": "&lessapprox;",
              "«": "&laquo;",
              "⤟": "&larrbfs;",
              "⤝": "&larrfs;",
              "↫": "&looparrowleft;",
              "⤹": "&larrpl;",
              "⥳": "&larrsim;",
              "↢": "&leftarrowtail;",
              "⪫": "&lat;",
              "⤙": "&latail;",
              "⪭": "&late;",
              "⪭︀": "&lates;",
              "⤌": "&lbarr;",
              "❲": "&lbbrk;",
              "{": "&lcub;",
              "[": "&lsqb;",
              "⦋": "&lbrke;",
              "⦏": "&lbrksld;",
              "⦍": "&lbrkslu;",
              ľ: "&lcaron;",
              ļ: "&lcedil;",
              л: "&lcy;",
              "⤶": "&ldca;",
              "⥧": "&ldrdhar;",
              "⥋": "&ldrushar;",
              "↲": "&ldsh;",
              "≤": "&leq;",
              "⇇": "&llarr;",
              "⋋": "&lthree;",
              "⪨": "&lescc;",
              "⩿": "&lesdot;",
              "⪁": "&lesdoto;",
              "⪃": "&lesdotor;",
              "⋚︀": "&lesg;",
              "⪓": "&lesges;",
              "⋖": "&ltdot;",
              "⥼": "&lfisht;",
              "𝔩": "&lfr;",
              "⪑": "&lgE;",
              "⥪": "&lharul;",
              "▄": "&lhblk;",
              љ: "&ljcy;",
              "⥫": "&llhard;",
              "◺": "&lltri;",
              ŀ: "&lmidot;",
              "⎰": "&lmoustache;",
              "≨": "&lneqq;",
              "⪉": "&lnapprox;",
              "⪇": "&lneq;",
              "⋦": "&lnsim;",
              "⟬": "&loang;",
              "⇽": "&loarr;",
              "⟼": "&xmap;",
              "↬": "&rarrlp;",
              "⦅": "&lopar;",
              "𝕝": "&lopf;",
              "⨭": "&loplus;",
              "⨴": "&lotimes;",
              "∗": "&lowast;",
              "◊": "&lozenge;",
              "(": "&lpar;",
              "⦓": "&lparlt;",
              "⥭": "&lrhard;",
              "‎": "&lrm;",
              "⊿": "&lrtri;",
              "‹": "&lsaquo;",
              "𝓁": "&lscr;",
              "⪍": "&lsime;",
              "⪏": "&lsimg;",
              "‚": "&sbquo;",
              ł: "&lstrok;",
              "⪦": "&ltcc;",
              "⩹": "&ltcir;",
              "⋉": "&ltimes;",
              "⥶": "&ltlarr;",
              "⩻": "&ltquest;",
              "⦖": "&ltrPar;",
              "◃": "&triangleleft;",
              "⥊": "&lurdshar;",
              "⥦": "&luruhar;",
              "≨︀": "&lvnE;",
              "∺": "&mDDot;",
              "¯": "&strns;",
              "♂": "&male;",
              "✠": "&maltese;",
              "▮": "&marker;",
              "⨩": "&mcomma;",
              м: "&mcy;",
              "—": "&mdash;",
              "𝔪": "&mfr;",
              "℧": "&mho;",
              µ: "&micro;",
              "⫰": "&midcir;",
              "−": "&minus;",
              "⨪": "&minusdu;",
              "⫛": "&mlcp;",
              "⊧": "&models;",
              "𝕞": "&mopf;",
              "𝓂": "&mscr;",
              μ: "&mu;",
              "⊸": "&mumap;",
              "⋙̸": "&nGg;",
              "≫⃒": "&nGt;",
              "⇍": "&nlArr;",
              "⇎": "&nhArr;",
              "⋘̸": "&nLl;",
              "≪⃒": "&nLt;",
              "⇏": "&nrArr;",
              "⊯": "&nVDash;",
              "⊮": "&nVdash;",
              ń: "&nacute;",
              "∠⃒": "&nang;",
              "⩰̸": "&napE;",
              "≋̸": "&napid;",
              ŉ: "&napos;",
              "♮": "&natural;",
              "⩃": "&ncap;",
              ň: "&ncaron;",
              ņ: "&ncedil;",
              "⩭̸": "&ncongdot;",
              "⩂": "&ncup;",
              н: "&ncy;",
              "–": "&ndash;",
              "⇗": "&neArr;",
              "⤤": "&nearhk;",
              "≐̸": "&nedot;",
              "⤨": "&toea;",
              "𝔫": "&nfr;",
              "↮": "&nleftrightarrow;",
              "⫲": "&nhpar;",
              "⋼": "&nis;",
              "⋺": "&nisd;",
              њ: "&njcy;",
              "≦̸": "&nleqq;",
              "↚": "&nleftarrow;",
              "‥": "&nldr;",
              "𝕟": "&nopf;",
              "¬": "&not;",
              "⋹̸": "&notinE;",
              "⋵̸": "&notindot;",
              "⋷": "&notinvb;",
              "⋶": "&notinvc;",
              "⋾": "&notnivb;",
              "⋽": "&notnivc;",
              "⫽⃥": "&nparsl;",
              "∂̸": "&npart;",
              "⨔": "&npolint;",
              "↛": "&nrightarrow;",
              "⤳̸": "&nrarrc;",
              "↝̸": "&nrarrw;",
              "𝓃": "&nscr;",
              "⊄": "&nsub;",
              "⫅̸": "&nsubseteqq;",
              "⊅": "&nsup;",
              "⫆̸": "&nsupseteqq;",
              ñ: "&ntilde;",
              ν: "&nu;",
              "#": "&num;",
              "№": "&numero;",
              " ": "&numsp;",
              "⊭": "&nvDash;",
              "⤄": "&nvHarr;",
              "≍⃒": "&nvap;",
              "⊬": "&nvdash;",
              "≥⃒": "&nvge;",
              ">⃒": "&nvgt;",
              "⧞": "&nvinfin;",
              "⤂": "&nvlArr;",
              "≤⃒": "&nvle;",
              "<⃒": "&nvlt;",
              "⊴⃒": "&nvltrie;",
              "⤃": "&nvrArr;",
              "⊵⃒": "&nvrtrie;",
              "∼⃒": "&nvsim;",
              "⇖": "&nwArr;",
              "⤣": "&nwarhk;",
              "⤧": "&nwnear;",
              ó: "&oacute;",
              ô: "&ocirc;",
              о: "&ocy;",
              ő: "&odblac;",
              "⨸": "&odiv;",
              "⦼": "&odsold;",
              œ: "&oelig;",
              "⦿": "&ofcir;",
              "𝔬": "&ofr;",
              "˛": "&ogon;",
              ò: "&ograve;",
              "⧁": "&ogt;",
              "⦵": "&ohbar;",
              "⦾": "&olcir;",
              "⦻": "&olcross;",
              "⧀": "&olt;",
              ō: "&omacr;",
              ω: "&omega;",
              ο: "&omicron;",
              "⦶": "&omid;",
              "𝕠": "&oopf;",
              "⦷": "&opar;",
              "⦹": "&operp;",
              "∨": "&vee;",
              "⩝": "&ord;",
              ℴ: "&oscr;",
              ª: "&ordf;",
              º: "&ordm;",
              "⊶": "&origof;",
              "⩖": "&oror;",
              "⩗": "&orslope;",
              "⩛": "&orv;",
              ø: "&oslash;",
              "⊘": "&osol;",
              õ: "&otilde;",
              "⨶": "&otimesas;",
              ö: "&ouml;",
              "⌽": "&ovbar;",
              "¶": "&para;",
              "⫳": "&parsim;",
              "⫽": "&parsl;",
              п: "&pcy;",
              "%": "&percnt;",
              ".": "&period;",
              "‰": "&permil;",
              "‱": "&pertenk;",
              "𝔭": "&pfr;",
              φ: "&phi;",
              ϕ: "&varphi;",
              "☎": "&phone;",
              π: "&pi;",
              ϖ: "&varpi;",
              ℎ: "&planckh;",
              "+": "&plus;",
              "⨣": "&plusacir;",
              "⨢": "&pluscir;",
              "⨥": "&plusdu;",
              "⩲": "&pluse;",
              "⨦": "&plussim;",
              "⨧": "&plustwo;",
              "⨕": "&pointint;",
              "𝕡": "&popf;",
              "£": "&pound;",
              "⪳": "&prE;",
              "⪷": "&precapprox;",
              "⪹": "&prnap;",
              "⪵": "&prnE;",
              "⋨": "&prnsim;",
              "′": "&prime;",
              "⌮": "&profalar;",
              "⌒": "&profline;",
              "⌓": "&profsurf;",
              "⊰": "&prurel;",
              "𝓅": "&pscr;",
              ψ: "&psi;",
              " ": "&puncsp;",
              "𝔮": "&qfr;",
              "𝕢": "&qopf;",
              "⁗": "&qprime;",
              "𝓆": "&qscr;",
              "⨖": "&quatint;",
              "?": "&quest;",
              "⤜": "&rAtail;",
              "⥤": "&rHar;",
              "∽̱": "&race;",
              ŕ: "&racute;",
              "⦳": "&raemptyv;",
              "⦒": "&rangd;",
              "⦥": "&range;",
              "»": "&raquo;",
              "⥵": "&rarrap;",
              "⤠": "&rarrbfs;",
              "⤳": "&rarrc;",
              "⤞": "&rarrfs;",
              "⥅": "&rarrpl;",
              "⥴": "&rarrsim;",
              "↣": "&rightarrowtail;",
              "↝": "&rightsquigarrow;",
              "⤚": "&ratail;",
              "∶": "&ratio;",
              "❳": "&rbbrk;",
              "}": "&rcub;",
              "]": "&rsqb;",
              "⦌": "&rbrke;",
              "⦎": "&rbrksld;",
              "⦐": "&rbrkslu;",
              ř: "&rcaron;",
              ŗ: "&rcedil;",
              р: "&rcy;",
              "⤷": "&rdca;",
              "⥩": "&rdldhar;",
              "↳": "&rdsh;",
              "▭": "&rect;",
              "⥽": "&rfisht;",
              "𝔯": "&rfr;",
              "⥬": "&rharul;",
              ρ: "&rho;",
              ϱ: "&varrho;",
              "⇉": "&rrarr;",
              "⋌": "&rthree;",
              "˚": "&ring;",
              "‏": "&rlm;",
              "⎱": "&rmoustache;",
              "⫮": "&rnmid;",
              "⟭": "&roang;",
              "⇾": "&roarr;",
              "⦆": "&ropar;",
              "𝕣": "&ropf;",
              "⨮": "&roplus;",
              "⨵": "&rotimes;",
              ")": "&rpar;",
              "⦔": "&rpargt;",
              "⨒": "&rppolint;",
              "›": "&rsaquo;",
              "𝓇": "&rscr;",
              "⋊": "&rtimes;",
              "▹": "&triangleright;",
              "⧎": "&rtriltri;",
              "⥨": "&ruluhar;",
              "℞": "&rx;",
              ś: "&sacute;",
              "⪴": "&scE;",
              "⪸": "&succapprox;",
              š: "&scaron;",
              ş: "&scedil;",
              ŝ: "&scirc;",
              "⪶": "&succneqq;",
              "⪺": "&succnapprox;",
              "⋩": "&succnsim;",
              "⨓": "&scpolint;",
              с: "&scy;",
              "⋅": "&sdot;",
              "⩦": "&sdote;",
              "⇘": "&seArr;",
              "§": "&sect;",
              ";": "&semi;",
              "⤩": "&tosa;",
              "✶": "&sext;",
              "𝔰": "&sfr;",
              "♯": "&sharp;",
              щ: "&shchcy;",
              ш: "&shcy;",
              "­": "&shy;",
              σ: "&sigma;",
              ς: "&varsigma;",
              "⩪": "&simdot;",
              "⪞": "&simg;",
              "⪠": "&simgE;",
              "⪝": "&siml;",
              "⪟": "&simlE;",
              "≆": "&simne;",
              "⨤": "&simplus;",
              "⥲": "&simrarr;",
              "⨳": "&smashp;",
              "⧤": "&smeparsl;",
              "⌣": "&ssmile;",
              "⪪": "&smt;",
              "⪬": "&smte;",
              "⪬︀": "&smtes;",
              ь: "&softcy;",
              "/": "&sol;",
              "⧄": "&solb;",
              "⌿": "&solbar;",
              "𝕤": "&sopf;",
              "♠": "&spadesuit;",
              "⊓︀": "&sqcaps;",
              "⊔︀": "&sqcups;",
              "𝓈": "&sscr;",
              "☆": "&star;",
              "⊂": "&subset;",
              "⫅": "&subseteqq;",
              "⪽": "&subdot;",
              "⫃": "&subedot;",
              "⫁": "&submult;",
              "⫋": "&subsetneqq;",
              "⊊": "&subsetneq;",
              "⪿": "&subplus;",
              "⥹": "&subrarr;",
              "⫇": "&subsim;",
              "⫕": "&subsub;",
              "⫓": "&subsup;",
              "♪": "&sung;",
              "¹": "&sup1;",
              "²": "&sup2;",
              "³": "&sup3;",
              "⫆": "&supseteqq;",
              "⪾": "&supdot;",
              "⫘": "&supdsub;",
              "⫄": "&supedot;",
              "⟉": "&suphsol;",
              "⫗": "&suphsub;",
              "⥻": "&suplarr;",
              "⫂": "&supmult;",
              "⫌": "&supsetneqq;",
              "⊋": "&supsetneq;",
              "⫀": "&supplus;",
              "⫈": "&supsim;",
              "⫔": "&supsub;",
              "⫖": "&supsup;",
              "⇙": "&swArr;",
              "⤪": "&swnwar;",
              ß: "&szlig;",
              "⌖": "&target;",
              τ: "&tau;",
              ť: "&tcaron;",
              ţ: "&tcedil;",
              т: "&tcy;",
              "⌕": "&telrec;",
              "𝔱": "&tfr;",
              θ: "&theta;",
              ϑ: "&vartheta;",
              þ: "&thorn;",
              "×": "&times;",
              "⨱": "&timesbar;",
              "⨰": "&timesd;",
              "⌶": "&topbot;",
              "⫱": "&topcir;",
              "𝕥": "&topf;",
              "⫚": "&topfork;",
              "‴": "&tprime;",
              "▵": "&utri;",
              "≜": "&trie;",
              "◬": "&tridot;",
              "⨺": "&triminus;",
              "⨹": "&triplus;",
              "⧍": "&trisb;",
              "⨻": "&tritime;",
              "⏢": "&trpezium;",
              "𝓉": "&tscr;",
              ц: "&tscy;",
              ћ: "&tshcy;",
              ŧ: "&tstrok;",
              "⥣": "&uHar;",
              ú: "&uacute;",
              ў: "&ubrcy;",
              ŭ: "&ubreve;",
              û: "&ucirc;",
              у: "&ucy;",
              ű: "&udblac;",
              "⥾": "&ufisht;",
              "𝔲": "&ufr;",
              ù: "&ugrave;",
              "▀": "&uhblk;",
              "⌜": "&ulcorner;",
              "⌏": "&ulcrop;",
              "◸": "&ultri;",
              ū: "&umacr;",
              ų: "&uogon;",
              "𝕦": "&uopf;",
              υ: "&upsilon;",
              "⇈": "&uuarr;",
              "⌝": "&urcorner;",
              "⌎": "&urcrop;",
              ů: "&uring;",
              "◹": "&urtri;",
              "𝓊": "&uscr;",
              "⋰": "&utdot;",
              ũ: "&utilde;",
              ü: "&uuml;",
              "⦧": "&uwangle;",
              "⫨": "&vBar;",
              "⫩": "&vBarv;",
              "⦜": "&vangrt;",
              "⊊︀": "&vsubne;",
              "⫋︀": "&vsubnE;",
              "⊋︀": "&vsupne;",
              "⫌︀": "&vsupnE;",
              в: "&vcy;",
              "⊻": "&veebar;",
              "≚": "&veeeq;",
              "⋮": "&vellip;",
              "𝔳": "&vfr;",
              "𝕧": "&vopf;",
              "𝓋": "&vscr;",
              "⦚": "&vzigzag;",
              ŵ: "&wcirc;",
              "⩟": "&wedbar;",
              "≙": "&wedgeq;",
              "℘": "&wp;",
              "𝔴": "&wfr;",
              "𝕨": "&wopf;",
              "𝓌": "&wscr;",
              "𝔵": "&xfr;",
              ξ: "&xi;",
              "⋻": "&xnis;",
              "𝕩": "&xopf;",
              "𝓍": "&xscr;",
              ý: "&yacute;",
              я: "&yacy;",
              ŷ: "&ycirc;",
              ы: "&ycy;",
              "¥": "&yen;",
              "𝔶": "&yfr;",
              ї: "&yicy;",
              "𝕪": "&yopf;",
              "𝓎": "&yscr;",
              ю: "&yucy;",
              ÿ: "&yuml;",
              ź: "&zacute;",
              ž: "&zcaron;",
              з: "&zcy;",
              ż: "&zdot;",
              ζ: "&zeta;",
              "𝔷": "&zfr;",
              ж: "&zhcy;",
              "⇝": "&zigrarr;",
              "𝕫": "&zopf;",
              "𝓏": "&zscr;",
              "‍": "&zwj;",
              "‌": "&zwnj;",
            },
          },
        };

        /***/
      },

    /***/ "./node_modules/html-entities/lib/numeric-unicode-map.js":
      /*!***************************************************************!*\
    !*** ./node_modules/html-entities/lib/numeric-unicode-map.js ***!
    \***************************************************************/
      /***/ (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.numericUnicodeMap = {
          0: 65533,
          128: 8364,
          130: 8218,
          131: 402,
          132: 8222,
          133: 8230,
          134: 8224,
          135: 8225,
          136: 710,
          137: 8240,
          138: 352,
          139: 8249,
          140: 338,
          142: 381,
          145: 8216,
          146: 8217,
          147: 8220,
          148: 8221,
          149: 8226,
          150: 8211,
          151: 8212,
          152: 732,
          153: 8482,
          154: 353,
          155: 8250,
          156: 339,
          158: 382,
          159: 376,
        };

        /***/
      },

    /***/ "./node_modules/html-entities/lib/surrogate-pairs.js":
      /*!***********************************************************!*\
    !*** ./node_modules/html-entities/lib/surrogate-pairs.js ***!
    \***********************************************************/
      /***/ (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.fromCodePoint =
          String.fromCodePoint ||
          function (astralCodePoint) {
            return String.fromCharCode(
              Math.floor((astralCodePoint - 65536) / 1024) + 55296,
              ((astralCodePoint - 65536) % 1024) + 56320
            );
          };
        exports.getCodePoint = String.prototype.codePointAt
          ? function (input, position) {
              return input.codePointAt(position);
            }
          : function (input, position) {
              return (
                (input.charCodeAt(position) - 55296) * 1024 +
                input.charCodeAt(position + 1) -
                56320 +
                65536
              );
            };
        exports.highSurrogateFrom = 55296;
        exports.highSurrogateTo = 56319;

        /***/
      },

    /***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
      /*!*******************************************************************************!*\
    !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
    \*******************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";

        /* eslint-env browser */

        /*
    eslint-disable
    no-console,
    func-names
  */
        var normalizeUrl = __webpack_require__(
          /*! ./normalize-url */ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js"
        );

        var srcByModuleId = Object.create(null);
        var noDocument = typeof document === "undefined";
        var forEach = Array.prototype.forEach;

        function debounce(fn, time) {
          var timeout = 0;
          return function () {
            var self = this; // eslint-disable-next-line prefer-rest-params

            var args = arguments;

            var functionCall = function functionCall() {
              return fn.apply(self, args);
            };

            clearTimeout(timeout);
            timeout = setTimeout(functionCall, time);
          };
        }

        function noop() {}

        function getCurrentScriptUrl(moduleId) {
          var src = srcByModuleId[moduleId];

          if (!src) {
            if (document.currentScript) {
              src = document.currentScript.src;
            } else {
              var scripts = document.getElementsByTagName("script");
              var lastScriptTag = scripts[scripts.length - 1];

              if (lastScriptTag) {
                src = lastScriptTag.src;
              }
            }

            srcByModuleId[moduleId] = src;
          }

          return function (fileMap) {
            if (!src) {
              return null;
            }

            var splitResult = src.split(/([^\\/]+)\.js$/);
            var filename = splitResult && splitResult[1];

            if (!filename) {
              return [src.replace(".js", ".css")];
            }

            if (!fileMap) {
              return [src.replace(".js", ".css")];
            }

            return fileMap.split(",").map(function (mapRule) {
              var reg = new RegExp("".concat(filename, "\\.js$"), "g");
              return normalizeUrl(
                src.replace(
                  reg,
                  "".concat(mapRule.replace(/{fileName}/g, filename), ".css")
                )
              );
            });
          };
        }

        function updateCss(el, url) {
          if (!url) {
            if (!el.href) {
              return;
            } // eslint-disable-next-line

            url = el.href.split("?")[0];
          }

          if (!isUrlRequest(url)) {
            return;
          }

          if (el.isLoaded === false) {
            // We seem to be about to replace a css link that hasn't loaded yet.
            // We're probably changing the same file more than once.
            return;
          }

          if (!url || !(url.indexOf(".css") > -1)) {
            return;
          } // eslint-disable-next-line no-param-reassign

          el.visited = true;
          var newEl = el.cloneNode();
          newEl.isLoaded = false;
          newEl.addEventListener("load", function () {
            if (newEl.isLoaded) {
              return;
            }

            newEl.isLoaded = true;
            el.parentNode.removeChild(el);
          });
          newEl.addEventListener("error", function () {
            if (newEl.isLoaded) {
              return;
            }

            newEl.isLoaded = true;
            el.parentNode.removeChild(el);
          });
          newEl.href = "".concat(url, "?").concat(Date.now());

          if (el.nextSibling) {
            el.parentNode.insertBefore(newEl, el.nextSibling);
          } else {
            el.parentNode.appendChild(newEl);
          }
        }

        function getReloadUrl(href, src) {
          var ret; // eslint-disable-next-line no-param-reassign

          href = normalizeUrl(href, {
            stripWWW: false,
          }); // eslint-disable-next-line array-callback-return

          src.some(function (url) {
            if (href.indexOf(src) > -1) {
              ret = url;
            }
          });
          return ret;
        }

        function reloadStyle(src) {
          if (!src) {
            return false;
          }

          var elements = document.querySelectorAll("link");
          var loaded = false;
          forEach.call(elements, function (el) {
            if (!el.href) {
              return;
            }

            var url = getReloadUrl(el.href, src);

            if (!isUrlRequest(url)) {
              return;
            }

            if (el.visited === true) {
              return;
            }

            if (url) {
              updateCss(el, url);
              loaded = true;
            }
          });
          return loaded;
        }

        function reloadAll() {
          var elements = document.querySelectorAll("link");
          forEach.call(elements, function (el) {
            if (el.visited === true) {
              return;
            }

            updateCss(el);
          });
        }

        function isUrlRequest(url) {
          // An URL is not an request if
          // It is not http or https
          if (!/^https?:/i.test(url)) {
            return false;
          }

          return true;
        }

        module.exports = function (moduleId, options) {
          if (noDocument) {
            console.log("no window.document found, will not HMR CSS");
            return noop;
          }

          var getScriptSrc = getCurrentScriptUrl(moduleId);

          function update() {
            var src = getScriptSrc(options.filename);
            var reloaded = reloadStyle(src);

            if (options.locals) {
              console.log("[HMR] Detected local css modules. Reload all css");
              reloadAll();
              return;
            }

            if (reloaded) {
              console.log("[HMR] css reload %s", src.join(" "));
            } else {
              console.log("[HMR] Reload all css");
              reloadAll();
            }
          }

          return debounce(update, 50);
        };

        /***/
      },

    /***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
      /*!************************************************************************!*\
    !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
    \************************************************************************/
      /***/ (module) => {
        "use strict";

        /* eslint-disable */
        function normalizeUrl(pathComponents) {
          return pathComponents
            .reduce(function (accumulator, item) {
              switch (item) {
                case "..":
                  accumulator.pop();
                  break;

                case ".":
                  break;

                default:
                  accumulator.push(item);
              }

              return accumulator;
            }, [])
            .join("/");
        }

        module.exports = function (urlString) {
          urlString = urlString.trim();

          if (/^data:/i.test(urlString)) {
            return urlString;
          }

          var protocol =
            urlString.indexOf("//") !== -1
              ? urlString.split("//")[0] + "//"
              : "";
          var components = urlString
            .replace(new RegExp(protocol, "i"), "")
            .split("/");
          var host = components[0].toLowerCase().replace(/\.$/, "");
          components[0] = "";
          var path = normalizeUrl(components);
          return protocol + host + path;
        };

        /***/
      },

    /***/ "./test ES4/styles/scss/styles.scss":
      /*!******************************************!*\
    !*** ./test ES4/styles/scss/styles.scss ***!
    \******************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        // extracted by mini-css-extract-plugin

        if (true) {
          // 1672093260404
          var cssReload = __webpack_require__(
            /*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js"
          )(module.id, { locals: false });
          module.hot.dispose(cssReload);
          module.hot.accept(undefined, cssReload);
        }

        /***/
      },

    /***/ "./node_modules/querystring/decode.js":
      /*!********************************************!*\
    !*** ./node_modules/querystring/decode.js ***!
    \********************************************/
      /***/ (module) => {
        "use strict";
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.

        // If obj.hasOwnProperty has been overridden, then calling
        // obj.hasOwnProperty(prop) will break.
        // See: https://github.com/joyent/node/issues/1707
        function hasOwnProperty(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        }

        module.exports = function (qs, sep, eq, options) {
          sep = sep || "&";
          eq = eq || "=";
          var obj = {};

          if (typeof qs !== "string" || qs.length === 0) {
            return obj;
          }

          var regexp = /\+/g;
          qs = qs.split(sep);

          var maxKeys = 1000;
          if (options && typeof options.maxKeys === "number") {
            maxKeys = options.maxKeys;
          }

          var len = qs.length;
          // maxKeys <= 0 means that we should not limit keys count
          if (maxKeys > 0 && len > maxKeys) {
            len = maxKeys;
          }

          for (var i = 0; i < len; ++i) {
            var x = qs[i].replace(regexp, "%20"),
              idx = x.indexOf(eq),
              kstr,
              vstr,
              k,
              v;

            if (idx >= 0) {
              kstr = x.substr(0, idx);
              vstr = x.substr(idx + 1);
            } else {
              kstr = x;
              vstr = "";
            }

            k = decodeURIComponent(kstr);
            v = decodeURIComponent(vstr);

            if (!hasOwnProperty(obj, k)) {
              obj[k] = v;
            } else if (Array.isArray(obj[k])) {
              obj[k].push(v);
            } else {
              obj[k] = [obj[k], v];
            }
          }

          return obj;
        };

        /***/
      },

    /***/ "./node_modules/querystring/encode.js":
      /*!********************************************!*\
    !*** ./node_modules/querystring/encode.js ***!
    \********************************************/
      /***/ (module) => {
        "use strict";
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.

        var stringifyPrimitive = function (v) {
          switch (typeof v) {
            case "string":
              return v;

            case "boolean":
              return v ? "true" : "false";

            case "number":
              return isFinite(v) ? v : "";

            default:
              return "";
          }
        };

        module.exports = function (obj, sep, eq, name) {
          sep = sep || "&";
          eq = eq || "=";
          if (obj === null) {
            obj = undefined;
          }

          if (typeof obj === "object") {
            return Object.keys(obj)
              .map(function (k) {
                var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
                if (Array.isArray(obj[k])) {
                  return obj[k]
                    .map(function (v) {
                      return ks + encodeURIComponent(stringifyPrimitive(v));
                    })
                    .join(sep);
                } else {
                  return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
                }
              })
              .join(sep);
          }

          if (!name) return "";
          return (
            encodeURIComponent(stringifyPrimitive(name)) +
            eq +
            encodeURIComponent(stringifyPrimitive(obj))
          );
        };

        /***/
      },

    /***/ "./node_modules/querystring/index.js":
      /*!*******************************************!*\
    !*** ./node_modules/querystring/index.js ***!
    \*******************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";

        exports.decode = exports.parse = __webpack_require__(
          /*! ./decode */ "./node_modules/querystring/decode.js"
        );
        exports.encode = exports.stringify = __webpack_require__(
          /*! ./encode */ "./node_modules/querystring/encode.js"
        );

        /***/
      },

    /***/ "./node_modules/url/node_modules/punycode/punycode.js":
      /*!************************************************************!*\
    !*** ./node_modules/url/node_modules/punycode/punycode.js ***!
    \************************************************************/
      /***/ function (module, exports, __webpack_require__) {
        /* module decorator */ module = __webpack_require__.nmd(module);
        var __WEBPACK_AMD_DEFINE_RESULT__; /*! https://mths.be/punycode v1.3.2 by @mathias */
        (function (root) {
          /** Detect free variables */
          var freeExports = true && exports && !exports.nodeType && exports;
          var freeModule = true && module && !module.nodeType && module;
          var freeGlobal =
            typeof __webpack_require__.g == "object" && __webpack_require__.g;
          if (
            freeGlobal.global === freeGlobal ||
            freeGlobal.window === freeGlobal ||
            freeGlobal.self === freeGlobal
          ) {
            root = freeGlobal;
          }

          /**
           * The `punycode` object.
           * @name punycode
           * @type Object
           */
          var punycode,
            /** Highest positive signed 32-bit float value */
            maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1
            /** Bootstring parameters */
            base = 36,
            tMin = 1,
            tMax = 26,
            skew = 38,
            damp = 700,
            initialBias = 72,
            initialN = 128, // 0x80
            delimiter = "-", // '\x2D'
            /** Regular expressions */
            regexPunycode = /^xn--/,
            regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
            regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators
            /** Error messages */
            errors = {
              overflow: "Overflow: input needs wider integers to process",
              "not-basic": "Illegal input >= 0x80 (not a basic code point)",
              "invalid-input": "Invalid input",
            },
            /** Convenience shortcuts */
            baseMinusTMin = base - tMin,
            floor = Math.floor,
            stringFromCharCode = String.fromCharCode,
            /** Temporary variable */
            key;

          /*--------------------------------------------------------------------------*/

          /**
           * A generic error utility function.
           * @private
           * @param {String} type The error type.
           * @returns {Error} Throws a `RangeError` with the applicable error message.
           */
          function error(type) {
            throw RangeError(errors[type]);
          }

          /**
           * A generic `Array#map` utility function.
           * @private
           * @param {Array} array The array to iterate over.
           * @param {Function} callback The function that gets called for every array
           * item.
           * @returns {Array} A new array of values returned by the callback function.
           */
          function map(array, fn) {
            var length = array.length;
            var result = [];
            while (length--) {
              result[length] = fn(array[length]);
            }
            return result;
          }

          /**
           * A simple `Array#map`-like wrapper to work with domain name strings or email
           * addresses.
           * @private
           * @param {String} domain The domain name or email address.
           * @param {Function} callback The function that gets called for every
           * character.
           * @returns {Array} A new string of characters returned by the callback
           * function.
           */
          function mapDomain(string, fn) {
            var parts = string.split("@");
            var result = "";
            if (parts.length > 1) {
              // In email addresses, only the domain name should be punycoded. Leave
              // the local part (i.e. everything up to `@`) intact.
              result = parts[0] + "@";
              string = parts[1];
            }
            // Avoid `split(regex)` for IE8 compatibility. See #17.
            string = string.replace(regexSeparators, "\x2E");
            var labels = string.split(".");
            var encoded = map(labels, fn).join(".");
            return result + encoded;
          }

          /**
           * Creates an array containing the numeric code points of each Unicode
           * character in the string. While JavaScript uses UCS-2 internally,
           * this function will convert a pair of surrogate halves (each of which
           * UCS-2 exposes as separate characters) into a single code point,
           * matching UTF-16.
           * @see `punycode.ucs2.encode`
           * @see <https://mathiasbynens.be/notes/javascript-encoding>
           * @memberOf punycode.ucs2
           * @name decode
           * @param {String} string The Unicode input string (UCS-2).
           * @returns {Array} The new array of code points.
           */
          function ucs2decode(string) {
            var output = [],
              counter = 0,
              length = string.length,
              value,
              extra;
            while (counter < length) {
              value = string.charCodeAt(counter++);
              if (value >= 0xd800 && value <= 0xdbff && counter < length) {
                // high surrogate, and there is a next character
                extra = string.charCodeAt(counter++);
                if ((extra & 0xfc00) == 0xdc00) {
                  // low surrogate
                  output.push(
                    ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000
                  );
                } else {
                  // unmatched surrogate; only append this code unit, in case the next
                  // code unit is the high surrogate of a surrogate pair
                  output.push(value);
                  counter--;
                }
              } else {
                output.push(value);
              }
            }
            return output;
          }

          /**
           * Creates a string based on an array of numeric code points.
           * @see `punycode.ucs2.decode`
           * @memberOf punycode.ucs2
           * @name encode
           * @param {Array} codePoints The array of numeric code points.
           * @returns {String} The new Unicode string (UCS-2).
           */
          function ucs2encode(array) {
            return map(array, function (value) {
              var output = "";
              if (value > 0xffff) {
                value -= 0x10000;
                output += stringFromCharCode(((value >>> 10) & 0x3ff) | 0xd800);
                value = 0xdc00 | (value & 0x3ff);
              }
              output += stringFromCharCode(value);
              return output;
            }).join("");
          }

          /**
           * Converts a basic code point into a digit/integer.
           * @see `digitToBasic()`
           * @private
           * @param {Number} codePoint The basic numeric code point value.
           * @returns {Number} The numeric value of a basic code point (for use in
           * representing integers) in the range `0` to `base - 1`, or `base` if
           * the code point does not represent a value.
           */
          function basicToDigit(codePoint) {
            if (codePoint - 48 < 10) {
              return codePoint - 22;
            }
            if (codePoint - 65 < 26) {
              return codePoint - 65;
            }
            if (codePoint - 97 < 26) {
              return codePoint - 97;
            }
            return base;
          }

          /**
           * Converts a digit/integer into a basic code point.
           * @see `basicToDigit()`
           * @private
           * @param {Number} digit The numeric value of a basic code point.
           * @returns {Number} The basic code point whose value (when used for
           * representing integers) is `digit`, which needs to be in the range
           * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
           * used; else, the lowercase form is used. The behavior is undefined
           * if `flag` is non-zero and `digit` has no uppercase form.
           */
          function digitToBasic(digit, flag) {
            //  0..25 map to ASCII a..z or A..Z
            // 26..35 map to ASCII 0..9
            return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
          }

          /**
           * Bias adaptation function as per section 3.4 of RFC 3492.
           * http://tools.ietf.org/html/rfc3492#section-3.4
           * @private
           */
          function adapt(delta, numPoints, firstTime) {
            var k = 0;
            delta = firstTime ? floor(delta / damp) : delta >> 1;
            delta += floor(delta / numPoints);
            for (
              ;
              /* no initialization */ delta > (baseMinusTMin * tMax) >> 1;
              k += base
            ) {
              delta = floor(delta / baseMinusTMin);
            }
            return floor(k + ((baseMinusTMin + 1) * delta) / (delta + skew));
          }

          /**
           * Converts a Punycode string of ASCII-only symbols to a string of Unicode
           * symbols.
           * @memberOf punycode
           * @param {String} input The Punycode string of ASCII-only symbols.
           * @returns {String} The resulting string of Unicode symbols.
           */
          function decode(input) {
            // Don't use UCS-2
            var output = [],
              inputLength = input.length,
              out,
              i = 0,
              n = initialN,
              bias = initialBias,
              basic,
              j,
              index,
              oldi,
              w,
              k,
              digit,
              t,
              /** Cached calculation results */
              baseMinusT;

            // Handle the basic code points: let `basic` be the number of input code
            // points before the last delimiter, or `0` if there is none, then copy
            // the first basic code points to the output.

            basic = input.lastIndexOf(delimiter);
            if (basic < 0) {
              basic = 0;
            }

            for (j = 0; j < basic; ++j) {
              // if it's not a basic code point
              if (input.charCodeAt(j) >= 0x80) {
                error("not-basic");
              }
              output.push(input.charCodeAt(j));
            }

            // Main decoding loop: start just after the last delimiter if any basic code
            // points were copied; start at the beginning otherwise.

            for (
              index = basic > 0 ? basic + 1 : 0;
              index < inputLength /* no final expression */;

            ) {
              // `index` is the index of the next character to be consumed.
              // Decode a generalized variable-length integer into `delta`,
              // which gets added to `i`. The overflow checking is easier
              // if we increase `i` as we go, then subtract off its starting
              // value at the end to obtain `delta`.
              for (oldi = i, w = 1, k = base /* no condition */; ; k += base) {
                if (index >= inputLength) {
                  error("invalid-input");
                }

                digit = basicToDigit(input.charCodeAt(index++));

                if (digit >= base || digit > floor((maxInt - i) / w)) {
                  error("overflow");
                }

                i += digit * w;
                t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

                if (digit < t) {
                  break;
                }

                baseMinusT = base - t;
                if (w > floor(maxInt / baseMinusT)) {
                  error("overflow");
                }

                w *= baseMinusT;
              }

              out = output.length + 1;
              bias = adapt(i - oldi, out, oldi == 0);

              // `i` was supposed to wrap around from `out` to `0`,
              // incrementing `n` each time, so we'll fix that now:
              if (floor(i / out) > maxInt - n) {
                error("overflow");
              }

              n += floor(i / out);
              i %= out;

              // Insert `n` at position `i` of the output
              output.splice(i++, 0, n);
            }

            return ucs2encode(output);
          }

          /**
           * Converts a string of Unicode symbols (e.g. a domain name label) to a
           * Punycode string of ASCII-only symbols.
           * @memberOf punycode
           * @param {String} input The string of Unicode symbols.
           * @returns {String} The resulting Punycode string of ASCII-only symbols.
           */
          function encode(input) {
            var n,
              delta,
              handledCPCount,
              basicLength,
              bias,
              j,
              m,
              q,
              k,
              t,
              currentValue,
              output = [],
              /** `inputLength` will hold the number of code points in `input`. */
              inputLength,
              /** Cached calculation results */
              handledCPCountPlusOne,
              baseMinusT,
              qMinusT;

            // Convert the input in UCS-2 to Unicode
            input = ucs2decode(input);

            // Cache the length
            inputLength = input.length;

            // Initialize the state
            n = initialN;
            delta = 0;
            bias = initialBias;

            // Handle the basic code points
            for (j = 0; j < inputLength; ++j) {
              currentValue = input[j];
              if (currentValue < 0x80) {
                output.push(stringFromCharCode(currentValue));
              }
            }

            handledCPCount = basicLength = output.length;

            // `handledCPCount` is the number of code points that have been handled;
            // `basicLength` is the number of basic code points.

            // Finish the basic string - if it is not empty - with a delimiter
            if (basicLength) {
              output.push(delimiter);
            }

            // Main encoding loop:
            while (handledCPCount < inputLength) {
              // All non-basic code points < n have been handled already. Find the next
              // larger one:
              for (m = maxInt, j = 0; j < inputLength; ++j) {
                currentValue = input[j];
                if (currentValue >= n && currentValue < m) {
                  m = currentValue;
                }
              }

              // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
              // but guard against overflow
              handledCPCountPlusOne = handledCPCount + 1;
              if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
                error("overflow");
              }

              delta += (m - n) * handledCPCountPlusOne;
              n = m;

              for (j = 0; j < inputLength; ++j) {
                currentValue = input[j];

                if (currentValue < n && ++delta > maxInt) {
                  error("overflow");
                }

                if (currentValue == n) {
                  // Represent delta as a generalized variable-length integer
                  for (q = delta, k = base /* no condition */; ; k += base) {
                    t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                    if (q < t) {
                      break;
                    }
                    qMinusT = q - t;
                    baseMinusT = base - t;
                    output.push(
                      stringFromCharCode(
                        digitToBasic(t + (qMinusT % baseMinusT), 0)
                      )
                    );
                    q = floor(qMinusT / baseMinusT);
                  }

                  output.push(stringFromCharCode(digitToBasic(q, 0)));
                  bias = adapt(
                    delta,
                    handledCPCountPlusOne,
                    handledCPCount == basicLength
                  );
                  delta = 0;
                  ++handledCPCount;
                }
              }

              ++delta;
              ++n;
            }
            return output.join("");
          }

          /**
           * Converts a Punycode string representing a domain name or an email address
           * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
           * it doesn't matter if you call it on a string that has already been
           * converted to Unicode.
           * @memberOf punycode
           * @param {String} input The Punycoded domain name or email address to
           * convert to Unicode.
           * @returns {String} The Unicode representation of the given Punycode
           * string.
           */
          function toUnicode(input) {
            return mapDomain(input, function (string) {
              return regexPunycode.test(string)
                ? decode(string.slice(4).toLowerCase())
                : string;
            });
          }

          /**
           * Converts a Unicode string representing a domain name or an email address to
           * Punycode. Only the non-ASCII parts of the domain name will be converted,
           * i.e. it doesn't matter if you call it with a domain that's already in
           * ASCII.
           * @memberOf punycode
           * @param {String} input The domain name or email address to convert, as a
           * Unicode string.
           * @returns {String} The Punycode representation of the given domain name or
           * email address.
           */
          function toASCII(input) {
            return mapDomain(input, function (string) {
              return regexNonASCII.test(string)
                ? "xn--" + encode(string)
                : string;
            });
          }

          /*--------------------------------------------------------------------------*/

          /** Define the public API */
          punycode = {
            /**
             * A string representing the current Punycode.js version number.
             * @memberOf punycode
             * @type String
             */
            version: "1.3.2",
            /**
             * An object of methods to convert from JavaScript's internal character
             * representation (UCS-2) to Unicode code points, and back.
             * @see <https://mathiasbynens.be/notes/javascript-encoding>
             * @memberOf punycode
             * @type Object
             */
            ucs2: {
              decode: ucs2decode,
              encode: ucs2encode,
            },
            decode: decode,
            encode: encode,
            toASCII: toASCII,
            toUnicode: toUnicode,
          };

          /** Expose `punycode` */
          // Some AMD build optimizers, like r.js, check for specific condition patterns
          // like the following:
          if (true) {
            !((__WEBPACK_AMD_DEFINE_RESULT__ = function () {
              return punycode;
            }.call(exports, __webpack_require__, exports, module)),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(this);

        /***/
      },

    /***/ "./node_modules/url/url.js":
      /*!*********************************!*\
    !*** ./node_modules/url/url.js ***!
    \*********************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.

        var punycode = __webpack_require__(
          /*! punycode */ "./node_modules/url/node_modules/punycode/punycode.js"
        );
        var util = __webpack_require__(
          /*! ./util */ "./node_modules/url/util.js"
        );

        exports.parse = urlParse;
        exports.resolve = urlResolve;
        exports.resolveObject = urlResolveObject;
        exports.format = urlFormat;

        exports.Url = Url;

        function Url() {
          this.protocol = null;
          this.slashes = null;
          this.auth = null;
          this.host = null;
          this.port = null;
          this.hostname = null;
          this.hash = null;
          this.search = null;
          this.query = null;
          this.pathname = null;
          this.path = null;
          this.href = null;
        }

        // Reference: RFC 3986, RFC 1808, RFC 2396

        // define these here so at least they only have to be
        // compiled once on the first module load.
        var protocolPattern = /^([a-z0-9.+-]+:)/i,
          portPattern = /:[0-9]*$/,
          // Special case for a simple path URL
          simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
          // RFC 2396: characters reserved for delimiting URLs.
          // We actually just auto-escape these.
          delims = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
          // RFC 2396: characters not allowed for various reasons.
          unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims),
          // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
          autoEscape = ["'"].concat(unwise),
          // Characters that are never ever allowed in a hostname.
          // Note that any invalid chars are also handled, but these
          // are the ones that are *expected* to be seen, so we fast-path
          // them.
          nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape),
          hostEndingChars = ["/", "?", "#"],
          hostnameMaxLen = 255,
          hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
          hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
          // protocols that can allow "unsafe" and "unwise" chars.
          unsafeProtocol = {
            javascript: true,
            "javascript:": true,
          },
          // protocols that never have a hostname.
          hostlessProtocol = {
            javascript: true,
            "javascript:": true,
          },
          // protocols that always contain a // bit.
          slashedProtocol = {
            http: true,
            https: true,
            ftp: true,
            gopher: true,
            file: true,
            "http:": true,
            "https:": true,
            "ftp:": true,
            "gopher:": true,
            "file:": true,
          },
          querystring = __webpack_require__(
            /*! querystring */ "./node_modules/querystring/index.js"
          );

        function urlParse(url, parseQueryString, slashesDenoteHost) {
          if (url && util.isObject(url) && url instanceof Url) return url;

          var u = new Url();
          u.parse(url, parseQueryString, slashesDenoteHost);
          return u;
        }

        Url.prototype.parse = function (
          url,
          parseQueryString,
          slashesDenoteHost
        ) {
          if (!util.isString(url)) {
            throw new TypeError(
              "Parameter 'url' must be a string, not " + typeof url
            );
          }

          // Copy chrome, IE, opera backslash-handling behavior.
          // Back slashes before the query string get converted to forward slashes
          // See: https://code.google.com/p/chromium/issues/detail?id=25916
          var queryIndex = url.indexOf("?"),
            splitter =
              queryIndex !== -1 && queryIndex < url.indexOf("#") ? "?" : "#",
            uSplit = url.split(splitter),
            slashRegex = /\\/g;
          uSplit[0] = uSplit[0].replace(slashRegex, "/");
          url = uSplit.join(splitter);

          var rest = url;

          // trim before proceeding.
          // This is to support parse stuff like "  http://foo.com  \n"
          rest = rest.trim();

          if (!slashesDenoteHost && url.split("#").length === 1) {
            // Try fast path regexp
            var simplePath = simplePathPattern.exec(rest);
            if (simplePath) {
              this.path = rest;
              this.href = rest;
              this.pathname = simplePath[1];
              if (simplePath[2]) {
                this.search = simplePath[2];
                if (parseQueryString) {
                  this.query = querystring.parse(this.search.substr(1));
                } else {
                  this.query = this.search.substr(1);
                }
              } else if (parseQueryString) {
                this.search = "";
                this.query = {};
              }
              return this;
            }
          }

          var proto = protocolPattern.exec(rest);
          if (proto) {
            proto = proto[0];
            var lowerProto = proto.toLowerCase();
            this.protocol = lowerProto;
            rest = rest.substr(proto.length);
          }

          // figure out if it's got a host
          // user@server is *always* interpreted as a hostname, and url
          // resolution will treat //foo/bar as host=foo,path=bar because that's
          // how the browser resolves relative URLs.
          if (
            slashesDenoteHost ||
            proto ||
            rest.match(/^\/\/[^@\/]+@[^@\/]+/)
          ) {
            var slashes = rest.substr(0, 2) === "//";
            if (slashes && !(proto && hostlessProtocol[proto])) {
              rest = rest.substr(2);
              this.slashes = true;
            }
          }

          if (
            !hostlessProtocol[proto] &&
            (slashes || (proto && !slashedProtocol[proto]))
          ) {
            // there's a hostname.
            // the first instance of /, ?, ;, or # ends the host.
            //
            // If there is an @ in the hostname, then non-host chars *are* allowed
            // to the left of the last @ sign, unless some host-ending character
            // comes *before* the @-sign.
            // URLs are obnoxious.
            //
            // ex:
            // http://a@b@c/ => user:a@b host:c
            // http://a@b?@c => user:a host:c path:/?@c

            // v0.12 TODO(isaacs): This is not quite how Chrome does things.
            // Review our test case against browsers more comprehensively.

            // find the first instance of any hostEndingChars
            var hostEnd = -1;
            for (var i = 0; i < hostEndingChars.length; i++) {
              var hec = rest.indexOf(hostEndingChars[i]);
              if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
                hostEnd = hec;
            }

            // at this point, either we have an explicit point where the
            // auth portion cannot go past, or the last @ char is the decider.
            var auth, atSign;
            if (hostEnd === -1) {
              // atSign can be anywhere.
              atSign = rest.lastIndexOf("@");
            } else {
              // atSign must be in auth portion.
              // http://a@b/c@d => host:b auth:a path:/c@d
              atSign = rest.lastIndexOf("@", hostEnd);
            }

            // Now we have a portion which is definitely the auth.
            // Pull that off.
            if (atSign !== -1) {
              auth = rest.slice(0, atSign);
              rest = rest.slice(atSign + 1);
              this.auth = decodeURIComponent(auth);
            }

            // the host is the remaining to the left of the first non-host char
            hostEnd = -1;
            for (var i = 0; i < nonHostChars.length; i++) {
              var hec = rest.indexOf(nonHostChars[i]);
              if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
                hostEnd = hec;
            }
            // if we still have not hit it, then the entire thing is a host.
            if (hostEnd === -1) hostEnd = rest.length;

            this.host = rest.slice(0, hostEnd);
            rest = rest.slice(hostEnd);

            // pull out port.
            this.parseHost();

            // we've indicated that there is a hostname,
            // so even if it's empty, it has to be present.
            this.hostname = this.hostname || "";

            // if hostname begins with [ and ends with ]
            // assume that it's an IPv6 address.
            var ipv6Hostname =
              this.hostname[0] === "[" &&
              this.hostname[this.hostname.length - 1] === "]";

            // validate a little.
            if (!ipv6Hostname) {
              var hostparts = this.hostname.split(/\./);
              for (var i = 0, l = hostparts.length; i < l; i++) {
                var part = hostparts[i];
                if (!part) continue;
                if (!part.match(hostnamePartPattern)) {
                  var newpart = "";
                  for (var j = 0, k = part.length; j < k; j++) {
                    if (part.charCodeAt(j) > 127) {
                      // we replace non-ASCII char with a temporary placeholder
                      // we need this to make sure size of hostname is not
                      // broken by replacing non-ASCII by nothing
                      newpart += "x";
                    } else {
                      newpart += part[j];
                    }
                  }
                  // we test again with ASCII char only
                  if (!newpart.match(hostnamePartPattern)) {
                    var validParts = hostparts.slice(0, i);
                    var notHost = hostparts.slice(i + 1);
                    var bit = part.match(hostnamePartStart);
                    if (bit) {
                      validParts.push(bit[1]);
                      notHost.unshift(bit[2]);
                    }
                    if (notHost.length) {
                      rest = "/" + notHost.join(".") + rest;
                    }
                    this.hostname = validParts.join(".");
                    break;
                  }
                }
              }
            }

            if (this.hostname.length > hostnameMaxLen) {
              this.hostname = "";
            } else {
              // hostnames are always lower case.
              this.hostname = this.hostname.toLowerCase();
            }

            if (!ipv6Hostname) {
              // IDNA Support: Returns a punycoded representation of "domain".
              // It only converts parts of the domain name that
              // have non-ASCII characters, i.e. it doesn't matter if
              // you call it with a domain that already is ASCII-only.
              this.hostname = punycode.toASCII(this.hostname);
            }

            var p = this.port ? ":" + this.port : "";
            var h = this.hostname || "";
            this.host = h + p;
            this.href += this.host;

            // strip [ and ] from the hostname
            // the host field still retains them, though
            if (ipv6Hostname) {
              this.hostname = this.hostname.substr(1, this.hostname.length - 2);
              if (rest[0] !== "/") {
                rest = "/" + rest;
              }
            }
          }

          // now rest is set to the post-host stuff.
          // chop off any delim chars.
          if (!unsafeProtocol[lowerProto]) {
            // First, make 100% sure that any "autoEscape" chars get
            // escaped, even if encodeURIComponent doesn't think they
            // need to be.
            for (var i = 0, l = autoEscape.length; i < l; i++) {
              var ae = autoEscape[i];
              if (rest.indexOf(ae) === -1) continue;
              var esc = encodeURIComponent(ae);
              if (esc === ae) {
                esc = escape(ae);
              }
              rest = rest.split(ae).join(esc);
            }
          }

          // chop off from the tail first.
          var hash = rest.indexOf("#");
          if (hash !== -1) {
            // got a fragment string.
            this.hash = rest.substr(hash);
            rest = rest.slice(0, hash);
          }
          var qm = rest.indexOf("?");
          if (qm !== -1) {
            this.search = rest.substr(qm);
            this.query = rest.substr(qm + 1);
            if (parseQueryString) {
              this.query = querystring.parse(this.query);
            }
            rest = rest.slice(0, qm);
          } else if (parseQueryString) {
            // no query string, but parseQueryString still requested
            this.search = "";
            this.query = {};
          }
          if (rest) this.pathname = rest;
          if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
            this.pathname = "/";
          }

          //to support http.request
          if (this.pathname || this.search) {
            var p = this.pathname || "";
            var s = this.search || "";
            this.path = p + s;
          }

          // finally, reconstruct the href based on what has been validated.
          this.href = this.format();
          return this;
        };

        // format a parsed object into a url string
        function urlFormat(obj) {
          // ensure it's an object, and not a string url.
          // If it's an obj, this is a no-op.
          // this way, you can call url_format() on strings
          // to clean up potentially wonky urls.
          if (util.isString(obj)) obj = urlParse(obj);
          if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
          return obj.format();
        }

        Url.prototype.format = function () {
          var auth = this.auth || "";
          if (auth) {
            auth = encodeURIComponent(auth);
            auth = auth.replace(/%3A/i, ":");
            auth += "@";
          }

          var protocol = this.protocol || "",
            pathname = this.pathname || "",
            hash = this.hash || "",
            host = false,
            query = "";

          if (this.host) {
            host = auth + this.host;
          } else if (this.hostname) {
            host =
              auth +
              (this.hostname.indexOf(":") === -1
                ? this.hostname
                : "[" + this.hostname + "]");
            if (this.port) {
              host += ":" + this.port;
            }
          }

          if (
            this.query &&
            util.isObject(this.query) &&
            Object.keys(this.query).length
          ) {
            query = querystring.stringify(this.query);
          }

          var search = this.search || (query && "?" + query) || "";

          if (protocol && protocol.substr(-1) !== ":") protocol += ":";

          // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
          // unless they had them to begin with.
          if (
            this.slashes ||
            ((!protocol || slashedProtocol[protocol]) && host !== false)
          ) {
            host = "//" + (host || "");
            if (pathname && pathname.charAt(0) !== "/")
              pathname = "/" + pathname;
          } else if (!host) {
            host = "";
          }

          if (hash && hash.charAt(0) !== "#") hash = "#" + hash;
          if (search && search.charAt(0) !== "?") search = "?" + search;

          pathname = pathname.replace(/[?#]/g, function (match) {
            return encodeURIComponent(match);
          });
          search = search.replace("#", "%23");

          return protocol + host + pathname + search + hash;
        };

        function urlResolve(source, relative) {
          return urlParse(source, false, true).resolve(relative);
        }

        Url.prototype.resolve = function (relative) {
          return this.resolveObject(urlParse(relative, false, true)).format();
        };

        function urlResolveObject(source, relative) {
          if (!source) return relative;
          return urlParse(source, false, true).resolveObject(relative);
        }

        Url.prototype.resolveObject = function (relative) {
          if (util.isString(relative)) {
            var rel = new Url();
            rel.parse(relative, false, true);
            relative = rel;
          }

          var result = new Url();
          var tkeys = Object.keys(this);
          for (var tk = 0; tk < tkeys.length; tk++) {
            var tkey = tkeys[tk];
            result[tkey] = this[tkey];
          }

          // hash is always overridden, no matter what.
          // even href="" will remove it.
          result.hash = relative.hash;

          // if the relative url is empty, then there's nothing left to do here.
          if (relative.href === "") {
            result.href = result.format();
            return result;
          }

          // hrefs like //foo/bar always cut to the protocol.
          if (relative.slashes && !relative.protocol) {
            // take everything except the protocol from relative
            var rkeys = Object.keys(relative);
            for (var rk = 0; rk < rkeys.length; rk++) {
              var rkey = rkeys[rk];
              if (rkey !== "protocol") result[rkey] = relative[rkey];
            }

            //urlParse appends trailing / to urls like http://www.example.com
            if (
              slashedProtocol[result.protocol] &&
              result.hostname &&
              !result.pathname
            ) {
              result.path = result.pathname = "/";
            }

            result.href = result.format();
            return result;
          }

          if (relative.protocol && relative.protocol !== result.protocol) {
            // if it's a known url protocol, then changing
            // the protocol does weird things
            // first, if it's not file:, then we MUST have a host,
            // and if there was a path
            // to begin with, then we MUST have a path.
            // if it is file:, then the host is dropped,
            // because that's known to be hostless.
            // anything else is assumed to be absolute.
            if (!slashedProtocol[relative.protocol]) {
              var keys = Object.keys(relative);
              for (var v = 0; v < keys.length; v++) {
                var k = keys[v];
                result[k] = relative[k];
              }
              result.href = result.format();
              return result;
            }

            result.protocol = relative.protocol;
            if (!relative.host && !hostlessProtocol[relative.protocol]) {
              var relPath = (relative.pathname || "").split("/");
              while (relPath.length && !(relative.host = relPath.shift()));
              if (!relative.host) relative.host = "";
              if (!relative.hostname) relative.hostname = "";
              if (relPath[0] !== "") relPath.unshift("");
              if (relPath.length < 2) relPath.unshift("");
              result.pathname = relPath.join("/");
            } else {
              result.pathname = relative.pathname;
            }
            result.search = relative.search;
            result.query = relative.query;
            result.host = relative.host || "";
            result.auth = relative.auth;
            result.hostname = relative.hostname || relative.host;
            result.port = relative.port;
            // to support http.request
            if (result.pathname || result.search) {
              var p = result.pathname || "";
              var s = result.search || "";
              result.path = p + s;
            }
            result.slashes = result.slashes || relative.slashes;
            result.href = result.format();
            return result;
          }

          var isSourceAbs =
              result.pathname && result.pathname.charAt(0) === "/",
            isRelAbs =
              relative.host ||
              (relative.pathname && relative.pathname.charAt(0) === "/"),
            mustEndAbs =
              isRelAbs || isSourceAbs || (result.host && relative.pathname),
            removeAllDots = mustEndAbs,
            srcPath = (result.pathname && result.pathname.split("/")) || [],
            relPath = (relative.pathname && relative.pathname.split("/")) || [],
            psychotic = result.protocol && !slashedProtocol[result.protocol];

          // if the url is a non-slashed url, then relative
          // links like ../.. should be able
          // to crawl up to the hostname, as well.  This is strange.
          // result.protocol has already been set by now.
          // Later on, put the first path part into the host field.
          if (psychotic) {
            result.hostname = "";
            result.port = null;
            if (result.host) {
              if (srcPath[0] === "") srcPath[0] = result.host;
              else srcPath.unshift(result.host);
            }
            result.host = "";
            if (relative.protocol) {
              relative.hostname = null;
              relative.port = null;
              if (relative.host) {
                if (relPath[0] === "") relPath[0] = relative.host;
                else relPath.unshift(relative.host);
              }
              relative.host = null;
            }
            mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
          }

          if (isRelAbs) {
            // it's absolute.
            result.host =
              relative.host || relative.host === ""
                ? relative.host
                : result.host;
            result.hostname =
              relative.hostname || relative.hostname === ""
                ? relative.hostname
                : result.hostname;
            result.search = relative.search;
            result.query = relative.query;
            srcPath = relPath;
            // fall through to the dot-handling below.
          } else if (relPath.length) {
            // it's relative
            // throw away the existing file, and take the new path instead.
            if (!srcPath) srcPath = [];
            srcPath.pop();
            srcPath = srcPath.concat(relPath);
            result.search = relative.search;
            result.query = relative.query;
          } else if (!util.isNullOrUndefined(relative.search)) {
            // just pull out the search.
            // like href='?foo'.
            // Put this after the other two cases because it simplifies the booleans
            if (psychotic) {
              result.hostname = result.host = srcPath.shift();
              //occationaly the auth can get stuck only in host
              //this especially happens in cases like
              //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
              var authInHost =
                result.host && result.host.indexOf("@") > 0
                  ? result.host.split("@")
                  : false;
              if (authInHost) {
                result.auth = authInHost.shift();
                result.host = result.hostname = authInHost.shift();
              }
            }
            result.search = relative.search;
            result.query = relative.query;
            //to support http.request
            if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
              result.path =
                (result.pathname ? result.pathname : "") +
                (result.search ? result.search : "");
            }
            result.href = result.format();
            return result;
          }

          if (!srcPath.length) {
            // no path at all.  easy.
            // we've already handled the other stuff above.
            result.pathname = null;
            //to support http.request
            if (result.search) {
              result.path = "/" + result.search;
            } else {
              result.path = null;
            }
            result.href = result.format();
            return result;
          }

          // if a url ENDs in . or .., then it must get a trailing slash.
          // however, if it ends in anything else non-slashy,
          // then it must NOT get a trailing slash.
          var last = srcPath.slice(-1)[0];
          var hasTrailingSlash =
            ((result.host || relative.host || srcPath.length > 1) &&
              (last === "." || last === "..")) ||
            last === "";

          // strip single dots, resolve double dots to parent dir
          // if the path tries to go above the root, `up` ends up > 0
          var up = 0;
          for (var i = srcPath.length; i >= 0; i--) {
            last = srcPath[i];
            if (last === ".") {
              srcPath.splice(i, 1);
            } else if (last === "..") {
              srcPath.splice(i, 1);
              up++;
            } else if (up) {
              srcPath.splice(i, 1);
              up--;
            }
          }

          // if the path is allowed to go above the root, restore leading ..s
          if (!mustEndAbs && !removeAllDots) {
            for (; up--; up) {
              srcPath.unshift("..");
            }
          }

          if (
            mustEndAbs &&
            srcPath[0] !== "" &&
            (!srcPath[0] || srcPath[0].charAt(0) !== "/")
          ) {
            srcPath.unshift("");
          }

          if (hasTrailingSlash && srcPath.join("/").substr(-1) !== "/") {
            srcPath.push("");
          }

          var isAbsolute =
            srcPath[0] === "" || (srcPath[0] && srcPath[0].charAt(0) === "/");

          // put the host back
          if (psychotic) {
            result.hostname = result.host = isAbsolute
              ? ""
              : srcPath.length
              ? srcPath.shift()
              : "";
            //occationaly the auth can get stuck only in host
            //this especially happens in cases like
            //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
            var authInHost =
              result.host && result.host.indexOf("@") > 0
                ? result.host.split("@")
                : false;
            if (authInHost) {
              result.auth = authInHost.shift();
              result.host = result.hostname = authInHost.shift();
            }
          }

          mustEndAbs = mustEndAbs || (result.host && srcPath.length);

          if (mustEndAbs && !isAbsolute) {
            srcPath.unshift("");
          }

          if (!srcPath.length) {
            result.pathname = null;
            result.path = null;
          } else {
            result.pathname = srcPath.join("/");
          }

          //to support request.http
          if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
            result.path =
              (result.pathname ? result.pathname : "") +
              (result.search ? result.search : "");
          }
          result.auth = relative.auth || result.auth;
          result.slashes = result.slashes || relative.slashes;
          result.href = result.format();
          return result;
        };

        Url.prototype.parseHost = function () {
          var host = this.host;
          var port = portPattern.exec(host);
          if (port) {
            port = port[0];
            if (port !== ":") {
              this.port = port.substr(1);
            }
            host = host.substr(0, host.length - port.length);
          }
          if (host) this.hostname = host;
        };

        /***/
      },

    /***/ "./node_modules/url/util.js":
      /*!**********************************!*\
    !*** ./node_modules/url/util.js ***!
    \**********************************/
      /***/ (module) => {
        "use strict";

        module.exports = {
          isString: function (arg) {
            return typeof arg === "string";
          },
          isObject: function (arg) {
            return typeof arg === "object" && arg !== null;
          },
          isNull: function (arg) {
            return arg === null;
          },
          isNullOrUndefined: function (arg) {
            return arg == null;
          },
        };

        /***/
      },

    /***/ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js":
      /*!***************************************************************************!*\
    !*** ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js ***!
    \***************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ WebSocketClient,
          /* harmony export */
        });
        /* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js"
          );
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        var WebSocketClient = /*#__PURE__*/ (function () {
          function WebSocketClient(url) {
            _classCallCheck(this, WebSocketClient);

            this.client = new WebSocket(url);

            this.client.onerror = function (error) {
              _utils_log_js__WEBPACK_IMPORTED_MODULE_0__.log.error(error);
            };
          }

          _createClass(WebSocketClient, [
            {
              key: "onOpen",
              value: function onOpen(f) {
                this.client.onopen = f;
              },
            },
            {
              key: "onClose",
              value: function onClose(f) {
                this.client.onclose = f;
              }, // call f with the message string as the first argument
            },
            {
              key: "onMessage",
              value: function onMessage(f) {
                this.client.onmessage = function (e) {
                  f(e.data);
                };
              },
            },
          ]);

          return WebSocketClient;
        })();

        /***/
      },

    /***/ "./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info":
      /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info ***!
    \*******************************************************************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        var __resourceQuery =
          "?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! webpack/hot/log.js */ "./node_modules/webpack/hot/log.js"
          );
        /* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _modules_strip_ansi_index_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./modules/strip-ansi/index.js */ "./node_modules/webpack-dev-server/client/modules/strip-ansi/index.js"
          );
        /* harmony import */ var _modules_strip_ansi_index_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _modules_strip_ansi_index_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./utils/parseURL.js */ "./node_modules/webpack-dev-server/client/utils/parseURL.js"
          );
        /* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./socket.js */ "./node_modules/webpack-dev-server/client/socket.js"
          );
        /* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./overlay.js */ "./node_modules/webpack-dev-server/client/overlay.js"
          );
        /* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js"
          );
        /* harmony import */ var _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./utils/sendMessage.js */ "./node_modules/webpack-dev-server/client/utils/sendMessage.js"
          );
        /* harmony import */ var _utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./utils/reloadApp.js */ "./node_modules/webpack-dev-server/client/utils/reloadApp.js"
          );
        /* harmony import */ var _utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./utils/createSocketURL.js */ "./node_modules/webpack-dev-server/client/utils/createSocketURL.js"
          );
        /* global __resourceQuery, __webpack_hash__ */

        var status = {
          isUnloading: false,
          // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement
          // eslint-disable-next-line camelcase
          currentHash: true ? __webpack_require__.h() : 0,
        }; // console.log(__webpack_hash__);

        var options = {
          hot: false,
          liveReload: false,
          progress: false,
          overlay: false,
        };
        var parsedResourceQuery = (0,
        _utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__.default)(
          __resourceQuery
        );

        if (parsedResourceQuery.hot === "true") {
          options.hot = true;
          _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(
            "Hot Module Replacement enabled."
          );
        }

        if (parsedResourceQuery["live-reload"] === "true") {
          options.liveReload = true;
          _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(
            "Live Reloading enabled."
          );
        }

        if (parsedResourceQuery.logging) {
          options.logging = parsedResourceQuery.logging;
        }

        function setAllLogLevel(level) {
          // This is needed because the HMR logger operate separately from dev server logger
          webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default().setLogLevel(
            level === "verbose" || level === "log" ? "info" : level
          );
          (0, _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.setLogLevel)(level);
        }

        if (options.logging) {
          setAllLogLevel(options.logging);
        }

        self.addEventListener("beforeunload", function () {
          status.isUnloading = true;
        });
        var onSocketMessage = {
          hot: function hot() {
            if (parsedResourceQuery.hot === "false") {
              return;
            }

            options.hot = true;
            _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(
              "Hot Module Replacement enabled."
            );
          },
          liveReload: function liveReload() {
            if (parsedResourceQuery["live-reload"] === "false") {
              return;
            }

            options.liveReload = true;
            _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(
              "Live Reloading enabled."
            );
          },
          invalid: function invalid() {
            _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(
              "App updated. Recompiling..."
            ); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.

            if (options.overlay) {
              (0, _overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
            }

            (0, _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__.default)(
              "Invalid"
            );
          },
          hash: function hash(_hash) {
            status.previousHash = status.currentHash;
            status.currentHash = _hash;
          },
          logging: setAllLogLevel,
          overlay: function overlay(value) {
            if (typeof document === "undefined") {
              return;
            }

            options.overlay = value;
          },
          progress: function progress(_progress) {
            options.progress = _progress;
          },
          "progress-update": function progressUpdate(data) {
            if (options.progress) {
              _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(
                ""
                  .concat(
                    data.pluginName ? "[".concat(data.pluginName, "] ") : ""
                  )
                  .concat(data.percent, "% - ")
                  .concat(data.msg, ".")
              );
            }

            (0, _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__.default)(
              "Progress",
              data
            );
          },
          "still-ok": function stillOk() {
            _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(
              "Nothing changed."
            );

            if (options.overlay) {
              (0, _overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
            }

            (0, _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__.default)(
              "StillOk"
            );
          },
          ok: function ok() {
            (0, _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__.default)(
              "Ok"
            );

            if (options.overlay) {
              (0, _overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
            }

            (0, _utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__.default)(
              options,
              status
            );
          },
          // TODO: remove in v5 in favor of 'static-changed'
          "content-changed": function contentChanged(file) {
            _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(
              "".concat(
                file ? '"'.concat(file, '"') : "Content",
                " from static directory was changed. Reloading..."
              )
            );
            self.location.reload();
          },
          "static-changed": function staticChanged(file) {
            _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(
              "".concat(
                file ? '"'.concat(file, '"') : "Content",
                " from static directory was changed. Reloading..."
              )
            );
            self.location.reload();
          },
          warnings: function warnings(_warnings) {
            _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn(
              "Warnings while compiling."
            );

            var printableWarnings = _warnings.map(function (error) {
              var _formatProblem = (0,
                _overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)(
                  "warning",
                  error
                ),
                header = _formatProblem.header,
                body = _formatProblem.body;

              return ""
                .concat(header, "\n")
                .concat(
                  _modules_strip_ansi_index_js__WEBPACK_IMPORTED_MODULE_1___default()(
                    body
                  )
                );
            });

            (0, _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__.default)(
              "Warnings",
              printableWarnings
            );

            for (var i = 0; i < printableWarnings.length; i++) {
              _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn(
                printableWarnings[i]
              );
            }

            var needShowOverlayForWarnings =
              typeof options.overlay === "boolean"
                ? options.overlay
                : options.overlay && options.overlay.warnings;

            if (needShowOverlayForWarnings) {
              (0, _overlay_js__WEBPACK_IMPORTED_MODULE_4__.show)(
                "warning",
                _warnings
              );
            }

            (0, _utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__.default)(
              options,
              status
            );
          },
          errors: function errors(_errors) {
            _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(
              "Errors while compiling. Reload prevented."
            );

            var printableErrors = _errors.map(function (error) {
              var _formatProblem2 = (0,
                _overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)(
                  "error",
                  error
                ),
                header = _formatProblem2.header,
                body = _formatProblem2.body;

              return ""
                .concat(header, "\n")
                .concat(
                  _modules_strip_ansi_index_js__WEBPACK_IMPORTED_MODULE_1___default()(
                    body
                  )
                );
            });

            (0, _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__.default)(
              "Errors",
              printableErrors
            );

            for (var i = 0; i < printableErrors.length; i++) {
              _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(
                printableErrors[i]
              );
            }

            var needShowOverlayForErrors =
              typeof options.overlay === "boolean"
                ? options.overlay
                : options.overlay && options.overlay.errors;

            if (needShowOverlayForErrors) {
              (0, _overlay_js__WEBPACK_IMPORTED_MODULE_4__.show)(
                "error",
                _errors
              );
            }
          },
          error: function error(_error) {
            _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(_error);
          },
          close: function close() {
            _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(
              "Disconnected!"
            );

            if (options.overlay) {
              (0, _overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
            }

            (0, _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__.default)(
              "Close"
            );
          },
        };
        var socketURL = (0,
        _utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__.default)(
          parsedResourceQuery
        );
        (0, _socket_js__WEBPACK_IMPORTED_MODULE_3__.default)(
          socketURL,
          onSocketMessage
        );

        /***/
      },

    /***/ "./node_modules/webpack-dev-server/client/modules/logger/index.js":
      /*!************************************************************************!*\
    !*** ./node_modules/webpack-dev-server/client/modules/logger/index.js ***!
    \************************************************************************/
      /***/ (__unused_webpack_module, exports) => {
        /******/ (function () {
          // webpackBootstrap
          /******/ "use strict";
          /******/ var __webpack_modules__ = {
            /***/ "./client-src/modules/logger/SyncBailHookFake.js":
              /*!*******************************************************!*\
    !*** ./client-src/modules/logger/SyncBailHookFake.js ***!
    \*******************************************************/
              /***/ function (module) {
                /**
                 * Client stub for tapable SyncBailHook
                 */

                module.exports = function clientTapableSyncBailHook() {
                  return {
                    call: function call() {},
                  };
                };

                /***/
              },

            /***/ "./node_modules/webpack/lib/logging/Logger.js":
              /*!****************************************************!*\
    !*** ./node_modules/webpack/lib/logging/Logger.js ***!
    \****************************************************/
              /***/ function (__unused_webpack_module, exports) {
                /*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
  */

                function _toConsumableArray(arr) {
                  return (
                    _arrayWithoutHoles(arr) ||
                    _iterableToArray(arr) ||
                    _unsupportedIterableToArray(arr) ||
                    _nonIterableSpread()
                  );
                }

                function _nonIterableSpread() {
                  throw new TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                }

                function _unsupportedIterableToArray(o, minLen) {
                  if (!o) return;
                  if (typeof o === "string")
                    return _arrayLikeToArray(o, minLen);
                  var n = Object.prototype.toString.call(o).slice(8, -1);
                  if (n === "Object" && o.constructor) n = o.constructor.name;
                  if (n === "Map" || n === "Set") return Array.from(o);
                  if (
                    n === "Arguments" ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return _arrayLikeToArray(o, minLen);
                }

                function _iterableToArray(iter) {
                  if (
                    (typeof (typeof Symbol !== "undefined"
                      ? Symbol
                      : function (i) {
                          return i;
                        }) !== "undefined" &&
                      iter[
                        (typeof Symbol !== "undefined"
                          ? Symbol
                          : function (i) {
                              return i;
                            }
                        ).iterator
                      ] != null) ||
                    iter["@@iterator"] != null
                  )
                    return Array.from(iter);
                }

                function _arrayWithoutHoles(arr) {
                  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
                }

                function _arrayLikeToArray(arr, len) {
                  if (len == null || len > arr.length) len = arr.length;

                  for (var i = 0, arr2 = new Array(len); i < len; i++) {
                    arr2[i] = arr[i];
                  }

                  return arr2;
                }

                function _classCallCheck(instance, Constructor) {
                  if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                  }
                }

                function _defineProperties(target, props) {
                  for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                  }
                }

                function _createClass(Constructor, protoProps, staticProps) {
                  if (protoProps)
                    _defineProperties(Constructor.prototype, protoProps);
                  if (staticProps) _defineProperties(Constructor, staticProps);
                  return Constructor;
                }

                var LogType = Object.freeze({
                  error: "error",
                  // message, c style arguments
                  warn: "warn",
                  // message, c style arguments
                  info: "info",
                  // message, c style arguments
                  log: "log",
                  // message, c style arguments
                  debug: "debug",
                  // message, c style arguments
                  trace: "trace",
                  // no arguments
                  group: "group",
                  // [label]
                  groupCollapsed: "groupCollapsed",
                  // [label]
                  groupEnd: "groupEnd",
                  // [label]
                  profile: "profile",
                  // [profileName]
                  profileEnd: "profileEnd",
                  // [profileName]
                  time: "time",
                  // name, time as [seconds, nanoseconds]
                  clear: "clear",
                  // no arguments
                  status: "status", // message, arguments
                });
                exports.LogType = LogType;
                /** @typedef {typeof LogType[keyof typeof LogType]} LogTypeEnum */

                var LOG_SYMBOL = (
                  typeof Symbol !== "undefined"
                    ? Symbol
                    : function (i) {
                        return i;
                      }
                )("webpack logger raw log method");
                var TIMERS_SYMBOL = (
                  typeof Symbol !== "undefined"
                    ? Symbol
                    : function (i) {
                        return i;
                      }
                )("webpack logger times");
                var TIMERS_AGGREGATES_SYMBOL = (
                  typeof Symbol !== "undefined"
                    ? Symbol
                    : function (i) {
                        return i;
                      }
                )("webpack logger aggregated times");

                var WebpackLogger = /*#__PURE__*/ (function () {
                  /**
                   * @param {function(LogTypeEnum, any[]=): void} log log function
                   * @param {function(string | function(): string): WebpackLogger} getChildLogger function to create child logger
                   */
                  function WebpackLogger(log, getChildLogger) {
                    _classCallCheck(this, WebpackLogger);

                    this[LOG_SYMBOL] = log;
                    this.getChildLogger = getChildLogger;
                  }

                  _createClass(WebpackLogger, [
                    {
                      key: "error",
                      value: function error() {
                        for (
                          var _len = arguments.length,
                            args = new Array(_len),
                            _key = 0;
                          _key < _len;
                          _key++
                        ) {
                          args[_key] = arguments[_key];
                        }

                        this[LOG_SYMBOL](LogType.error, args);
                      },
                    },
                    {
                      key: "warn",
                      value: function warn() {
                        for (
                          var _len2 = arguments.length,
                            args = new Array(_len2),
                            _key2 = 0;
                          _key2 < _len2;
                          _key2++
                        ) {
                          args[_key2] = arguments[_key2];
                        }

                        this[LOG_SYMBOL](LogType.warn, args);
                      },
                    },
                    {
                      key: "info",
                      value: function info() {
                        for (
                          var _len3 = arguments.length,
                            args = new Array(_len3),
                            _key3 = 0;
                          _key3 < _len3;
                          _key3++
                        ) {
                          args[_key3] = arguments[_key3];
                        }

                        this[LOG_SYMBOL](LogType.info, args);
                      },
                    },
                    {
                      key: "log",
                      value: function log() {
                        for (
                          var _len4 = arguments.length,
                            args = new Array(_len4),
                            _key4 = 0;
                          _key4 < _len4;
                          _key4++
                        ) {
                          args[_key4] = arguments[_key4];
                        }

                        this[LOG_SYMBOL](LogType.log, args);
                      },
                    },
                    {
                      key: "debug",
                      value: function debug() {
                        for (
                          var _len5 = arguments.length,
                            args = new Array(_len5),
                            _key5 = 0;
                          _key5 < _len5;
                          _key5++
                        ) {
                          args[_key5] = arguments[_key5];
                        }

                        this[LOG_SYMBOL](LogType.debug, args);
                      },
                    },
                    {
                      key: "assert",
                      value: function assert(assertion) {
                        if (!assertion) {
                          for (
                            var _len6 = arguments.length,
                              args = new Array(_len6 > 1 ? _len6 - 1 : 0),
                              _key6 = 1;
                            _key6 < _len6;
                            _key6++
                          ) {
                            args[_key6 - 1] = arguments[_key6];
                          }

                          this[LOG_SYMBOL](LogType.error, args);
                        }
                      },
                    },
                    {
                      key: "trace",
                      value: function trace() {
                        this[LOG_SYMBOL](LogType.trace, ["Trace"]);
                      },
                    },
                    {
                      key: "clear",
                      value: function clear() {
                        this[LOG_SYMBOL](LogType.clear);
                      },
                    },
                    {
                      key: "status",
                      value: function status() {
                        for (
                          var _len7 = arguments.length,
                            args = new Array(_len7),
                            _key7 = 0;
                          _key7 < _len7;
                          _key7++
                        ) {
                          args[_key7] = arguments[_key7];
                        }

                        this[LOG_SYMBOL](LogType.status, args);
                      },
                    },
                    {
                      key: "group",
                      value: function group() {
                        for (
                          var _len8 = arguments.length,
                            args = new Array(_len8),
                            _key8 = 0;
                          _key8 < _len8;
                          _key8++
                        ) {
                          args[_key8] = arguments[_key8];
                        }

                        this[LOG_SYMBOL](LogType.group, args);
                      },
                    },
                    {
                      key: "groupCollapsed",
                      value: function groupCollapsed() {
                        for (
                          var _len9 = arguments.length,
                            args = new Array(_len9),
                            _key9 = 0;
                          _key9 < _len9;
                          _key9++
                        ) {
                          args[_key9] = arguments[_key9];
                        }

                        this[LOG_SYMBOL](LogType.groupCollapsed, args);
                      },
                    },
                    {
                      key: "groupEnd",
                      value: function groupEnd() {
                        for (
                          var _len10 = arguments.length,
                            args = new Array(_len10),
                            _key10 = 0;
                          _key10 < _len10;
                          _key10++
                        ) {
                          args[_key10] = arguments[_key10];
                        }

                        this[LOG_SYMBOL](LogType.groupEnd, args);
                      },
                    },
                    {
                      key: "profile",
                      value: function profile(label) {
                        this[LOG_SYMBOL](LogType.profile, [label]);
                      },
                    },
                    {
                      key: "profileEnd",
                      value: function profileEnd(label) {
                        this[LOG_SYMBOL](LogType.profileEnd, [label]);
                      },
                    },
                    {
                      key: "time",
                      value: function time(label) {
                        this[TIMERS_SYMBOL] = this[TIMERS_SYMBOL] || new Map();
                        this[TIMERS_SYMBOL].set(label, process.hrtime());
                      },
                    },
                    {
                      key: "timeLog",
                      value: function timeLog(label) {
                        var prev =
                          this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);

                        if (!prev) {
                          throw new Error(
                            "No such label '".concat(
                              label,
                              "' for WebpackLogger.timeLog()"
                            )
                          );
                        }

                        var time = process.hrtime(prev);
                        this[LOG_SYMBOL](
                          LogType.time,
                          [label].concat(_toConsumableArray(time))
                        );
                      },
                    },
                    {
                      key: "timeEnd",
                      value: function timeEnd(label) {
                        var prev =
                          this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);

                        if (!prev) {
                          throw new Error(
                            "No such label '".concat(
                              label,
                              "' for WebpackLogger.timeEnd()"
                            )
                          );
                        }

                        var time = process.hrtime(prev);
                        this[TIMERS_SYMBOL].delete(label);
                        this[LOG_SYMBOL](
                          LogType.time,
                          [label].concat(_toConsumableArray(time))
                        );
                      },
                    },
                    {
                      key: "timeAggregate",
                      value: function timeAggregate(label) {
                        var prev =
                          this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);

                        if (!prev) {
                          throw new Error(
                            "No such label '".concat(
                              label,
                              "' for WebpackLogger.timeAggregate()"
                            )
                          );
                        }

                        var time = process.hrtime(prev);
                        this[TIMERS_SYMBOL].delete(label);
                        this[TIMERS_AGGREGATES_SYMBOL] =
                          this[TIMERS_AGGREGATES_SYMBOL] || new Map();
                        var current = this[TIMERS_AGGREGATES_SYMBOL].get(label);

                        if (current !== undefined) {
                          if (time[1] + current[1] > 1e9) {
                            time[0] += current[0] + 1;
                            time[1] = time[1] - 1e9 + current[1];
                          } else {
                            time[0] += current[0];
                            time[1] += current[1];
                          }
                        }

                        this[TIMERS_AGGREGATES_SYMBOL].set(label, time);
                      },
                    },
                    {
                      key: "timeAggregateEnd",
                      value: function timeAggregateEnd(label) {
                        if (this[TIMERS_AGGREGATES_SYMBOL] === undefined)
                          return;
                        var time = this[TIMERS_AGGREGATES_SYMBOL].get(label);
                        if (time === undefined) return;
                        this[LOG_SYMBOL](
                          LogType.time,
                          [label].concat(_toConsumableArray(time))
                        );
                      },
                    },
                  ]);

                  return WebpackLogger;
                })();

                exports.Logger = WebpackLogger;

                /***/
              },

            /***/ "./node_modules/webpack/lib/logging/createConsoleLogger.js":
              /*!*****************************************************************!*\
    !*** ./node_modules/webpack/lib/logging/createConsoleLogger.js ***!
    \*****************************************************************/
              /***/ function (
                module,
                __unused_webpack_exports,
                __nested_webpack_require_10262__
              ) {
                /*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
  */

                function _toConsumableArray(arr) {
                  return (
                    _arrayWithoutHoles(arr) ||
                    _iterableToArray(arr) ||
                    _unsupportedIterableToArray(arr) ||
                    _nonIterableSpread()
                  );
                }

                function _nonIterableSpread() {
                  throw new TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                }

                function _unsupportedIterableToArray(o, minLen) {
                  if (!o) return;
                  if (typeof o === "string")
                    return _arrayLikeToArray(o, minLen);
                  var n = Object.prototype.toString.call(o).slice(8, -1);
                  if (n === "Object" && o.constructor) n = o.constructor.name;
                  if (n === "Map" || n === "Set") return Array.from(o);
                  if (
                    n === "Arguments" ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return _arrayLikeToArray(o, minLen);
                }

                function _iterableToArray(iter) {
                  if (
                    (typeof (typeof Symbol !== "undefined"
                      ? Symbol
                      : function (i) {
                          return i;
                        }) !== "undefined" &&
                      iter[
                        (typeof Symbol !== "undefined"
                          ? Symbol
                          : function (i) {
                              return i;
                            }
                        ).iterator
                      ] != null) ||
                    iter["@@iterator"] != null
                  )
                    return Array.from(iter);
                }

                function _arrayWithoutHoles(arr) {
                  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
                }

                function _arrayLikeToArray(arr, len) {
                  if (len == null || len > arr.length) len = arr.length;

                  for (var i = 0, arr2 = new Array(len); i < len; i++) {
                    arr2[i] = arr[i];
                  }

                  return arr2;
                }

                var _require = __nested_webpack_require_10262__(
                    /*! ./Logger */ "./node_modules/webpack/lib/logging/Logger.js"
                  ),
                  LogType = _require.LogType;
                /** @typedef {import("../../declarations/WebpackOptions").FilterItemTypes} FilterItemTypes */

                /** @typedef {import("../../declarations/WebpackOptions").FilterTypes} FilterTypes */

                /** @typedef {import("./Logger").LogTypeEnum} LogTypeEnum */

                /** @typedef {function(string): boolean} FilterFunction */

                /**
                 * @typedef {Object} LoggerConsole
                 * @property {function(): void} clear
                 * @property {function(): void} trace
                 * @property {(...args: any[]) => void} info
                 * @property {(...args: any[]) => void} log
                 * @property {(...args: any[]) => void} warn
                 * @property {(...args: any[]) => void} error
                 * @property {(...args: any[]) => void=} debug
                 * @property {(...args: any[]) => void=} group
                 * @property {(...args: any[]) => void=} groupCollapsed
                 * @property {(...args: any[]) => void=} groupEnd
                 * @property {(...args: any[]) => void=} status
                 * @property {(...args: any[]) => void=} profile
                 * @property {(...args: any[]) => void=} profileEnd
                 * @property {(...args: any[]) => void=} logTime
                 */

                /**
                 * @typedef {Object} LoggerOptions
                 * @property {false|true|"none"|"error"|"warn"|"info"|"log"|"verbose"} level loglevel
                 * @property {FilterTypes|boolean} debug filter for debug logging
                 * @property {LoggerConsole} console the console to log to
                 */

                /**
                 * @param {FilterItemTypes} item an input item
                 * @returns {FilterFunction} filter function
                 */

                var filterToFunction = function filterToFunction(item) {
                  if (typeof item === "string") {
                    var regExp = new RegExp(
                      "[\\\\/]".concat(
                        item.replace(
                          // eslint-disable-next-line no-useless-escape
                          /[-[\]{}()*+?.\\^$|]/g,
                          "\\$&"
                        ),
                        "([\\\\/]|$|!|\\?)"
                      )
                    );
                    return function (ident) {
                      return regExp.test(ident);
                    };
                  }

                  if (
                    item &&
                    typeof item === "object" &&
                    typeof item.test === "function"
                  ) {
                    return function (ident) {
                      return item.test(ident);
                    };
                  }

                  if (typeof item === "function") {
                    return item;
                  }

                  if (typeof item === "boolean") {
                    return function () {
                      return item;
                    };
                  }
                };
                /**
                 * @enum {number}
                 */

                var LogLevel = {
                  none: 6,
                  false: 6,
                  error: 5,
                  warn: 4,
                  info: 3,
                  log: 2,
                  true: 2,
                  verbose: 1,
                };
                /**
                 * @param {LoggerOptions} options options object
                 * @returns {function(string, LogTypeEnum, any[]): void} logging function
                 */

                module.exports = function (_ref) {
                  var _ref$level = _ref.level,
                    level = _ref$level === void 0 ? "info" : _ref$level,
                    _ref$debug = _ref.debug,
                    debug = _ref$debug === void 0 ? false : _ref$debug,
                    console = _ref.console;
                  var debugFilters =
                    typeof debug === "boolean"
                      ? [
                          function () {
                            return debug;
                          },
                        ]
                      : /** @type {FilterItemTypes[]} */
                        [].concat(debug).map(filterToFunction);
                  /** @type {number} */

                  var loglevel = LogLevel["".concat(level)] || 0;
                  /**
                   * @param {string} name name of the logger
                   * @param {LogTypeEnum} type type of the log entry
                   * @param {any[]} args arguments of the log entry
                   * @returns {void}
                   */

                  var logger = function logger(name, type, args) {
                    var labeledArgs = function labeledArgs() {
                      if (Array.isArray(args)) {
                        if (args.length > 0 && typeof args[0] === "string") {
                          return [
                            "[".concat(name, "] ").concat(args[0]),
                          ].concat(_toConsumableArray(args.slice(1)));
                        } else {
                          return ["[".concat(name, "]")].concat(
                            _toConsumableArray(args)
                          );
                        }
                      } else {
                        return [];
                      }
                    };

                    var debug = debugFilters.some(function (f) {
                      return f(name);
                    });

                    switch (type) {
                      case LogType.debug:
                        if (!debug) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

                        if (typeof console.debug === "function") {
                          // eslint-disable-next-line node/no-unsupported-features/node-builtins
                          console.debug.apply(
                            console,
                            _toConsumableArray(labeledArgs())
                          );
                        } else {
                          console.log.apply(
                            console,
                            _toConsumableArray(labeledArgs())
                          );
                        }

                        break;

                      case LogType.log:
                        if (!debug && loglevel > LogLevel.log) return;
                        console.log.apply(
                          console,
                          _toConsumableArray(labeledArgs())
                        );
                        break;

                      case LogType.info:
                        if (!debug && loglevel > LogLevel.info) return;
                        console.info.apply(
                          console,
                          _toConsumableArray(labeledArgs())
                        );
                        break;

                      case LogType.warn:
                        if (!debug && loglevel > LogLevel.warn) return;
                        console.warn.apply(
                          console,
                          _toConsumableArray(labeledArgs())
                        );
                        break;

                      case LogType.error:
                        if (!debug && loglevel > LogLevel.error) return;
                        console.error.apply(
                          console,
                          _toConsumableArray(labeledArgs())
                        );
                        break;

                      case LogType.trace:
                        if (!debug) return;
                        console.trace();
                        break;

                      case LogType.groupCollapsed:
                        if (!debug && loglevel > LogLevel.log) return;

                        if (!debug && loglevel > LogLevel.verbose) {
                          // eslint-disable-next-line node/no-unsupported-features/node-builtins
                          if (typeof console.groupCollapsed === "function") {
                            // eslint-disable-next-line node/no-unsupported-features/node-builtins
                            console.groupCollapsed.apply(
                              console,
                              _toConsumableArray(labeledArgs())
                            );
                          } else {
                            console.log.apply(
                              console,
                              _toConsumableArray(labeledArgs())
                            );
                          }

                          break;
                        }

                      // falls through

                      case LogType.group:
                        if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

                        if (typeof console.group === "function") {
                          // eslint-disable-next-line node/no-unsupported-features/node-builtins
                          console.group.apply(
                            console,
                            _toConsumableArray(labeledArgs())
                          );
                        } else {
                          console.log.apply(
                            console,
                            _toConsumableArray(labeledArgs())
                          );
                        }

                        break;

                      case LogType.groupEnd:
                        if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

                        if (typeof console.groupEnd === "function") {
                          // eslint-disable-next-line node/no-unsupported-features/node-builtins
                          console.groupEnd();
                        }

                        break;

                      case LogType.time: {
                        if (!debug && loglevel > LogLevel.log) return;
                        var ms = args[1] * 1000 + args[2] / 1000000;
                        var msg = "["
                          .concat(name, "] ")
                          .concat(args[0], ": ")
                          .concat(ms, " ms");

                        if (typeof console.logTime === "function") {
                          console.logTime(msg);
                        } else {
                          console.log(msg);
                        }

                        break;
                      }

                      case LogType.profile:
                        // eslint-disable-next-line node/no-unsupported-features/node-builtins
                        if (typeof console.profile === "function") {
                          // eslint-disable-next-line node/no-unsupported-features/node-builtins
                          console.profile.apply(
                            console,
                            _toConsumableArray(labeledArgs())
                          );
                        }

                        break;

                      case LogType.profileEnd:
                        // eslint-disable-next-line node/no-unsupported-features/node-builtins
                        if (typeof console.profileEnd === "function") {
                          // eslint-disable-next-line node/no-unsupported-features/node-builtins
                          console.profileEnd.apply(
                            console,
                            _toConsumableArray(labeledArgs())
                          );
                        }

                        break;

                      case LogType.clear:
                        if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

                        if (typeof console.clear === "function") {
                          // eslint-disable-next-line node/no-unsupported-features/node-builtins
                          console.clear();
                        }

                        break;

                      case LogType.status:
                        if (!debug && loglevel > LogLevel.info) return;

                        if (typeof console.status === "function") {
                          if (args.length === 0) {
                            console.status();
                          } else {
                            console.status.apply(
                              console,
                              _toConsumableArray(labeledArgs())
                            );
                          }
                        } else {
                          if (args.length !== 0) {
                            console.info.apply(
                              console,
                              _toConsumableArray(labeledArgs())
                            );
                          }
                        }

                        break;

                      default:
                        throw new Error("Unexpected LogType ".concat(type));
                    }
                  };

                  return logger;
                };

                /***/
              },

            /***/ "./node_modules/webpack/lib/logging/runtime.js":
              /*!*****************************************************!*\
    !*** ./node_modules/webpack/lib/logging/runtime.js ***!
    \*****************************************************/
              /***/ function (
                __unused_webpack_module,
                exports,
                __nested_webpack_require_20349__
              ) {
                /*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
  */

                function _extends() {
                  _extends =
                    Object.assign ||
                    function (target) {
                      for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];

                        for (var key in source) {
                          if (
                            Object.prototype.hasOwnProperty.call(source, key)
                          ) {
                            target[key] = source[key];
                          }
                        }
                      }

                      return target;
                    };

                  return _extends.apply(this, arguments);
                }

                var SyncBailHook = __nested_webpack_require_20349__(
                  /*! tapable/lib/SyncBailHook */ "./client-src/modules/logger/SyncBailHookFake.js"
                );

                var _require = __nested_webpack_require_20349__(
                    /*! ./Logger */ "./node_modules/webpack/lib/logging/Logger.js"
                  ),
                  Logger = _require.Logger;

                var createConsoleLogger = __nested_webpack_require_20349__(
                  /*! ./createConsoleLogger */ "./node_modules/webpack/lib/logging/createConsoleLogger.js"
                );
                /** @type {createConsoleLogger.LoggerOptions} */

                var currentDefaultLoggerOptions = {
                  level: "info",
                  debug: false,
                  console: console,
                };
                var currentDefaultLogger = createConsoleLogger(
                  currentDefaultLoggerOptions
                );
                /**
                 * @param {string} name name of the logger
                 * @returns {Logger} a logger
                 */

                exports.getLogger = function (name) {
                  return new Logger(
                    function (type, args) {
                      if (
                        exports.hooks.log.call(name, type, args) === undefined
                      ) {
                        currentDefaultLogger(name, type, args);
                      }
                    },
                    function (childName) {
                      return exports.getLogger(
                        "".concat(name, "/").concat(childName)
                      );
                    }
                  );
                };
                /**
                 * @param {createConsoleLogger.LoggerOptions} options new options, merge with old options
                 * @returns {void}
                 */

                exports.configureDefaultLogger = function (options) {
                  _extends(currentDefaultLoggerOptions, options);

                  currentDefaultLogger = createConsoleLogger(
                    currentDefaultLoggerOptions
                  );
                };

                exports.hooks = {
                  log: new SyncBailHook(["origin", "type", "args"]),
                };

                /***/
              },

            /******/
          };
          /************************************************************************/
          /******/ // The module cache
          /******/ var __webpack_module_cache__ = {};
          /******/
          /******/ // The require function
          /******/ function __nested_webpack_require_22465__(moduleId) {
            /******/ // Check if module is in cache
            /******/ var cachedModule = __webpack_module_cache__[moduleId];
            /******/ if (cachedModule !== undefined) {
              /******/ return cachedModule.exports;
              /******/
            }
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = (__webpack_module_cache__[moduleId] = {
              /******/ // no module.id needed
              /******/ // no module.loaded needed
              /******/ exports: {},
              /******/
            });
            /******/
            /******/ // Execute the module function
            /******/ __webpack_modules__[moduleId](
              module,
              module.exports,
              __nested_webpack_require_22465__
            );
            /******/
            /******/ // Return the exports of the module
            /******/ return module.exports;
            /******/
          }
          /******/
          /************************************************************************/
          /******/ /* webpack/runtime/define property getters */
          /******/ !(function () {
            /******/ // define getter functions for harmony exports
            /******/ __nested_webpack_require_22465__.d = function (
              exports,
              definition
            ) {
              /******/ for (var key in definition) {
                /******/ if (
                  __nested_webpack_require_22465__.o(definition, key) &&
                  !__nested_webpack_require_22465__.o(exports, key)
                ) {
                  /******/ Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: definition[key],
                  });
                  /******/
                }
                /******/
              }
              /******/
            };
            /******/
          })();
          /******/
          /******/ /* webpack/runtime/hasOwnProperty shorthand */
          /******/ !(function () {
            /******/ __nested_webpack_require_22465__.o = function (obj, prop) {
              return Object.prototype.hasOwnProperty.call(obj, prop);
            };
            /******/
          })();
          /******/
          /******/ /* webpack/runtime/make namespace object */
          /******/ !(function () {
            /******/ // define __esModule on exports
            /******/ __nested_webpack_require_22465__.r = function (exports) {
              /******/ if (
                typeof Symbol !== "undefined" &&
                Symbol.toStringTag
              ) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                  value: "Module",
                });
                /******/
              }
              /******/ Object.defineProperty(exports, "__esModule", {
                value: true,
              });
              /******/
            };
            /******/
          })();
          /******/
          /************************************************************************/
          var __webpack_exports__ = {};
          // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
          !(function () {
            /*!********************************************!*\
    !*** ./client-src/modules/logger/index.js ***!
    \********************************************/
            __nested_webpack_require_22465__.r(__webpack_exports__);
            /* harmony export */ __nested_webpack_require_22465__.d(
              __webpack_exports__,
              {
                /* harmony export */ default: function () {
                  return /* reexport default export from named module */ webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__;
                },
                /* harmony export */
              }
            );
            /* harmony import */ var webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__ =
              __nested_webpack_require_22465__(
                /*! webpack/lib/logging/runtime.js */ "./node_modules/webpack/lib/logging/runtime.js"
              );
          })();
          var __webpack_export_target__ = exports;
          for (var i in __webpack_exports__)
            __webpack_export_target__[i] = __webpack_exports__[i];
          if (__webpack_exports__.__esModule)
            Object.defineProperty(__webpack_export_target__, "__esModule", {
              value: true,
            });
          /******/
        })();

        /***/
      },

    /***/ "./node_modules/webpack-dev-server/client/modules/strip-ansi/index.js":
      /*!****************************************************************************!*\
    !*** ./node_modules/webpack-dev-server/client/modules/strip-ansi/index.js ***!
    \****************************************************************************/
      /***/ (__unused_webpack_module, exports) => {
        /******/ (function () {
          // webpackBootstrap
          /******/ "use strict";
          /******/ var __webpack_modules__ = {
            /***/ "./node_modules/strip-ansi/index.js":
              /*!******************************************!*\
    !*** ./node_modules/strip-ansi/index.js ***!
    \******************************************/
              /***/ function (
                __unused_webpack___webpack_module__,
                __webpack_exports__,
                __nested_webpack_require_368__
              ) {
                __nested_webpack_require_368__.r(__webpack_exports__);
                /* harmony export */ __nested_webpack_require_368__.d(
                  __webpack_exports__,
                  {
                    /* harmony export */ default: function () {
                      return /* binding */ stripAnsi;
                    },
                    /* harmony export */
                  }
                );
                /* harmony import */ var ansi_regex__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_368__(
                    /*! ansi-regex */ "./node_modules/strip-ansi/node_modules/ansi-regex/index.js"
                  );

                function stripAnsi(string) {
                  if (typeof string !== "string") {
                    throw new TypeError(
                      "Expected a `string`, got `".concat(typeof string, "`")
                    );
                  }

                  return string.replace(
                    (0, ansi_regex__WEBPACK_IMPORTED_MODULE_0__["default"])(),
                    ""
                  );
                }

                /***/
              },

            /***/ "./node_modules/strip-ansi/node_modules/ansi-regex/index.js":
              /*!******************************************************************!*\
    !*** ./node_modules/strip-ansi/node_modules/ansi-regex/index.js ***!
    \******************************************************************/
              /***/ function (
                __unused_webpack___webpack_module__,
                __webpack_exports__,
                __nested_webpack_require_1387__
              ) {
                __nested_webpack_require_1387__.r(__webpack_exports__);
                /* harmony export */ __nested_webpack_require_1387__.d(
                  __webpack_exports__,
                  {
                    /* harmony export */ default: function () {
                      return /* binding */ ansiRegex;
                    },
                    /* harmony export */
                  }
                );
                function ansiRegex() {
                  var _ref =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : {},
                    _ref$onlyFirst = _ref.onlyFirst,
                    onlyFirst =
                      _ref$onlyFirst === void 0 ? false : _ref$onlyFirst;

                  var pattern = [
                    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
                    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
                  ].join("|");
                  return new RegExp(pattern, onlyFirst ? undefined : "g");
                }

                /***/
              },

            /******/
          };
          /************************************************************************/
          /******/ // The module cache
          /******/ var __webpack_module_cache__ = {};
          /******/
          /******/ // The require function
          /******/ function __nested_webpack_require_2352__(moduleId) {
            /******/ // Check if module is in cache
            /******/ var cachedModule = __webpack_module_cache__[moduleId];
            /******/ if (cachedModule !== undefined) {
              /******/ return cachedModule.exports;
              /******/
            }
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = (__webpack_module_cache__[moduleId] = {
              /******/ // no module.id needed
              /******/ // no module.loaded needed
              /******/ exports: {},
              /******/
            });
            /******/
            /******/ // Execute the module function
            /******/ __webpack_modules__[moduleId](
              module,
              module.exports,
              __nested_webpack_require_2352__
            );
            /******/
            /******/ // Return the exports of the module
            /******/ return module.exports;
            /******/
          }
          /******/
          /************************************************************************/
          /******/ /* webpack/runtime/define property getters */
          /******/ !(function () {
            /******/ // define getter functions for harmony exports
            /******/ __nested_webpack_require_2352__.d = function (
              exports,
              definition
            ) {
              /******/ for (var key in definition) {
                /******/ if (
                  __nested_webpack_require_2352__.o(definition, key) &&
                  !__nested_webpack_require_2352__.o(exports, key)
                ) {
                  /******/ Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: definition[key],
                  });
                  /******/
                }
                /******/
              }
              /******/
            };
            /******/
          })();
          /******/
          /******/ /* webpack/runtime/hasOwnProperty shorthand */
          /******/ !(function () {
            /******/ __nested_webpack_require_2352__.o = function (obj, prop) {
              return Object.prototype.hasOwnProperty.call(obj, prop);
            };
            /******/
          })();
          /******/
          /******/ /* webpack/runtime/make namespace object */
          /******/ !(function () {
            /******/ // define __esModule on exports
            /******/ __nested_webpack_require_2352__.r = function (exports) {
              /******/ if (
                typeof Symbol !== "undefined" &&
                Symbol.toStringTag
              ) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                  value: "Module",
                });
                /******/
              }
              /******/ Object.defineProperty(exports, "__esModule", {
                value: true,
              });
              /******/
            };
            /******/
          })();
          /******/
          /************************************************************************/
          var __webpack_exports__ = {};
          // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
          !(function () {
            /*!************************************************!*\
    !*** ./client-src/modules/strip-ansi/index.js ***!
    \************************************************/
            __nested_webpack_require_2352__.r(__webpack_exports__);
            /* harmony import */ var strip_ansi__WEBPACK_IMPORTED_MODULE_0__ =
              __nested_webpack_require_2352__(
                /*! strip-ansi */ "./node_modules/strip-ansi/index.js"
              );

            /* harmony default export */ __webpack_exports__["default"] =
              strip_ansi__WEBPACK_IMPORTED_MODULE_0__["default"];
          })();
          var __webpack_export_target__ = exports;
          for (var i in __webpack_exports__)
            __webpack_export_target__[i] = __webpack_exports__[i];
          if (__webpack_exports__.__esModule)
            Object.defineProperty(__webpack_export_target__, "__esModule", {
              value: true,
            });
          /******/
        })();

        /***/
      },

    /***/ "./node_modules/webpack-dev-server/client/overlay.js":
      /*!***********************************************************!*\
    !*** ./node_modules/webpack-dev-server/client/overlay.js ***!
    \***********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ formatProblem: () => /* binding */ formatProblem,
          /* harmony export */ show: () => /* binding */ show,
          /* harmony export */ hide: () => /* binding */ hide,
          /* harmony export */
        });
        /* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ansi-html-community */ "./node_modules/ansi-html-community/index.js"
          );
        /* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            ansi_html_community__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! html-entities */ "./node_modules/html-entities/lib/index.js"
          );
        /* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            html_entities__WEBPACK_IMPORTED_MODULE_1__
          );
        // The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)
        // They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).

        var colors = {
          reset: ["transparent", "transparent"],
          black: "181818",
          red: "E36049",
          green: "B3CB74",
          yellow: "FFD080",
          blue: "7CAFC2",
          magenta: "7FACCA",
          cyan: "C3C2EF",
          lightgrey: "EBE7E3",
          darkgrey: "6D7891",
        };
        var iframeContainerElement;
        var containerElement;
        var onLoadQueue = [];
        ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default().setColors(
          colors
        );

        function createContainer() {
          iframeContainerElement = document.createElement("iframe");
          iframeContainerElement.id = "webpack-dev-server-client-overlay";
          iframeContainerElement.src = "about:blank";
          iframeContainerElement.style.position = "fixed";
          iframeContainerElement.style.left = 0;
          iframeContainerElement.style.top = 0;
          iframeContainerElement.style.right = 0;
          iframeContainerElement.style.bottom = 0;
          iframeContainerElement.style.width = "100vw";
          iframeContainerElement.style.height = "100vh";
          iframeContainerElement.style.border = "none";
          iframeContainerElement.style.zIndex = 9999999999;

          iframeContainerElement.onload = function () {
            containerElement =
              iframeContainerElement.contentDocument.createElement("div");
            containerElement.id = "webpack-dev-server-client-overlay-div";
            containerElement.style.position = "fixed";
            containerElement.style.boxSizing = "border-box";
            containerElement.style.left = 0;
            containerElement.style.top = 0;
            containerElement.style.right = 0;
            containerElement.style.bottom = 0;
            containerElement.style.width = "100vw";
            containerElement.style.height = "100vh";
            containerElement.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
            containerElement.style.color = "#E8E8E8";
            containerElement.style.fontFamily = "Menlo, Consolas, monospace";
            containerElement.style.fontSize = "large";
            containerElement.style.padding = "2rem";
            containerElement.style.lineHeight = "1.2";
            containerElement.style.whiteSpace = "pre-wrap";
            containerElement.style.overflow = "auto";
            var headerElement = document.createElement("span");
            headerElement.innerText = "Compiled with problems:";
            var closeButtonElement = document.createElement("button");
            closeButtonElement.innerText = "X";
            closeButtonElement.style.background = "transparent";
            closeButtonElement.style.border = "none";
            closeButtonElement.style.fontSize = "20px";
            closeButtonElement.style.fontWeight = "bold";
            closeButtonElement.style.color = "white";
            closeButtonElement.style.cursor = "pointer";
            closeButtonElement.style.cssFloat = "right";
            closeButtonElement.style.styleFloat = "right";
            closeButtonElement.addEventListener("click", function () {
              hide();
            });
            containerElement.appendChild(headerElement);
            containerElement.appendChild(closeButtonElement);
            containerElement.appendChild(document.createElement("br"));
            containerElement.appendChild(document.createElement("br"));
            iframeContainerElement.contentDocument.body.appendChild(
              containerElement
            );
            onLoadQueue.forEach(function (onLoad) {
              onLoad(containerElement);
            });
            onLoadQueue = [];
            iframeContainerElement.onload = null;
          };

          document.body.appendChild(iframeContainerElement);
        }

        function ensureOverlayExists(callback) {
          if (containerElement) {
            // Everything is ready, call the callback right away.
            callback(containerElement);
            return;
          }

          onLoadQueue.push(callback);

          if (iframeContainerElement) {
            return;
          }

          createContainer();
        } // Successful compilation.

        function hide() {
          if (!iframeContainerElement) {
            return;
          } // Clean up and reset internal state.

          document.body.removeChild(iframeContainerElement);
          iframeContainerElement = null;
          containerElement = null;
        }

        function formatProblem(type, item) {
          var header = type === "warning" ? "WARNING" : "ERROR";
          var body = "";

          if (typeof item === "string") {
            body += item;
          } else {
            var file = item.file || ""; // eslint-disable-next-line no-nested-ternary

            var moduleName = item.moduleName
              ? item.moduleName.indexOf("!") !== -1
                ? ""
                    .concat(item.moduleName.replace(/^(\s|\S)*!/, ""), " (")
                    .concat(item.moduleName, ")")
                : "".concat(item.moduleName)
              : "";
            var loc = item.loc;
            header += "".concat(
              moduleName || file
                ? " in "
                    .concat(
                      moduleName
                        ? ""
                            .concat(moduleName)
                            .concat(file ? " (".concat(file, ")") : "")
                        : file
                    )
                    .concat(loc ? " ".concat(loc) : "")
                : ""
            );
            body += item.message || "";
          }

          return {
            header: header,
            body: body,
          };
        } // Compilation with errors (e.g. syntax error or missing modules).

        function show(type, messages) {
          ensureOverlayExists(function () {
            messages.forEach(function (message) {
              var entryElement = document.createElement("div");
              var typeElement = document.createElement("span");

              var _formatProblem = formatProblem(type, message),
                header = _formatProblem.header,
                body = _formatProblem.body;

              typeElement.innerText = header;
              typeElement.style.color = "#".concat(colors.red); // Make it look similar to our terminal.

              var text =
                ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default()(
                  (0, html_entities__WEBPACK_IMPORTED_MODULE_1__.encode)(body)
                );
              var messageTextNode = document.createElement("div");
              messageTextNode.innerHTML = text;
              entryElement.appendChild(typeElement);
              entryElement.appendChild(document.createElement("br"));
              entryElement.appendChild(document.createElement("br"));
              entryElement.appendChild(messageTextNode);
              entryElement.appendChild(document.createElement("br"));
              entryElement.appendChild(document.createElement("br"));
              containerElement.appendChild(entryElement);
            });
          });
        }

        /***/
      },

    /***/ "./node_modules/webpack-dev-server/client/socket.js":
      /*!**********************************************************!*\
    !*** ./node_modules/webpack-dev-server/client/socket.js ***!
    \**********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./clients/WebSocketClient.js */ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js"
          );
        /* provided dependency */ var __webpack_dev_server_client__ =
          __webpack_require__(
            /*! ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js */ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js"
          );
        /* global __webpack_dev_server_client__ */
        // this WebsocketClient is here as a default fallback, in case the client is not injected

        /* eslint-disable camelcase */

        var Client = // eslint-disable-next-line camelcase, no-nested-ternary
          typeof __webpack_dev_server_client__ !== "undefined" // eslint-disable-next-line camelcase
            ? typeof __webpack_dev_server_client__.default !== "undefined"
              ? __webpack_dev_server_client__.default
              : __webpack_dev_server_client__
            : _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__.default;
        /* eslint-enable camelcase */

        var retries = 0;
        var client = null;

        var socket = function initSocket(url, handlers) {
          client = new Client(url);
          client.onOpen(function () {
            retries = 0;
          });
          client.onClose(function () {
            if (retries === 0) {
              handlers.close();
            } // Try to reconnect.

            client = null; // After 10 retries stop trying, to prevent logspam.

            if (retries <= 10) {
              // Exponentially increase timeout to reconnect.
              // Respectfully copied from the package `got`.
              // eslint-disable-next-line no-mixed-operators, no-restricted-properties
              var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;
              retries += 1;
              setTimeout(function () {
                socket(url, handlers);
              }, retryInMs);
            }
          });
          client.onMessage(function (data) {
            var message = JSON.parse(data);

            if (handlers[message.type]) {
              handlers[message.type](message.data);
            }
          });
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = socket;

        /***/
      },

    /***/ "./node_modules/webpack-dev-server/client/utils/createSocketURL.js":
      /*!*************************************************************************!*\
    !*** ./node_modules/webpack-dev-server/client/utils/createSocketURL.js ***!
    \*************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! url */ "./node_modules/url/url.js");
        // We handle legacy API that is Node.js specific, and a newer API that implements the same WHATWG URL Standard used by web browsers
        // Please look at https://nodejs.org/api/url.html#url_url_strings_and_url_objects

        function createSocketURL(parsedURL) {
          var hostname = parsedURL.hostname; // Node.js module parses it as `::`
          // `new URL(urlString, [baseURLstring])` parses it as '[::]'

          var isInAddrAny =
            hostname === "0.0.0.0" || hostname === "::" || hostname === "[::]"; // why do we need this check?
          // hostname n/a for file protocol (example, when using electron, ionic)
          // see: https://github.com/webpack/webpack-dev-server/pull/384

          if (
            isInAddrAny &&
            self.location.hostname &&
            self.location.protocol.indexOf("http") === 0
          ) {
            hostname = self.location.hostname;
          }

          var socketURLProtocol = parsedURL.protocol || self.location.protocol; // When https is used in the app, secure web sockets are always necessary because the browser doesn't accept non-secure web sockets.

          if (
            socketURLProtocol === "auto:" ||
            (hostname && isInAddrAny && self.location.protocol === "https:")
          ) {
            socketURLProtocol = self.location.protocol;
          }

          socketURLProtocol = socketURLProtocol.replace(
            /^(?:http|.+-extension|file)/i,
            "ws"
          );
          var socketURLAuth = ""; // `new URL(urlString, [baseURLstring])` doesn't have `auth` property
          // Parse authentication credentials in case we need them

          if (parsedURL.username) {
            socketURLAuth = parsedURL.username; // Since HTTP basic authentication does not allow empty username,
            // we only include password if the username is not empty.

            if (parsedURL.password) {
              // Result: <username>:<password>
              socketURLAuth = socketURLAuth.concat(":", parsedURL.password);
            }
          } // In case the host is a raw IPv6 address, it can be enclosed in
          // the brackets as the brackets are needed in the final URL string.
          // Need to remove those as url.format blindly adds its own set of brackets
          // if the host string contains colons. That would lead to non-working
          // double brackets (e.g. [[::]]) host
          //
          // All of these web socket url params are optionally passed in through resourceQuery,
          // so we need to fall back to the default if they are not provided

          var socketURLHostname = (
            hostname ||
            self.location.hostname ||
            "localhost"
          ).replace(/^\[(.*)\]$/, "$1");
          var socketURLPort = parsedURL.port;

          if (!socketURLPort || socketURLPort === "0") {
            socketURLPort = self.location.port;
          } // If path is provided it'll be passed in via the resourceQuery as a
          // query param so it has to be parsed out of the querystring in order for the
          // client to open the socket to the correct location.

          var socketURLPathname = "/ws";

          if (parsedURL.pathname && !parsedURL.fromCurrentScript) {
            socketURLPathname = parsedURL.pathname;
          }

          return url__WEBPACK_IMPORTED_MODULE_0__.format({
            protocol: socketURLProtocol,
            auth: socketURLAuth,
            hostname: socketURLHostname,
            port: socketURLPort,
            pathname: socketURLPathname,
            slashes: true,
          });
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          createSocketURL;

        /***/
      },

    /***/ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js":
      /*!********************************************************************************!*\
    !*** ./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js ***!
    \********************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        function getCurrentScriptSource() {
          // `document.currentScript` is the most accurate way to find the current script,
          // but is not supported in all browsers.
          if (document.currentScript) {
            return document.currentScript.getAttribute("src");
          } // Fallback to getting all scripts running in the document.

          var scriptElements = document.scripts || [];
          var scriptElementsWithSrc = Array.prototype.filter.call(
            scriptElements,
            function (element) {
              return element.getAttribute("src");
            }
          );

          if (scriptElementsWithSrc.length > 0) {
            var currentScript =
              scriptElementsWithSrc[scriptElementsWithSrc.length - 1];
            return currentScript.getAttribute("src");
          } // Fail as there was no script to use.

          throw new Error(
            "[webpack-dev-server] Failed to get current script source."
          );
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          getCurrentScriptSource;

        /***/
      },

    /***/ "./node_modules/webpack-dev-server/client/utils/log.js":
      /*!*************************************************************!*\
    !*** ./node_modules/webpack-dev-server/client/utils/log.js ***!
    \*************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ log: () => /* binding */ log,
          /* harmony export */ setLogLevel: () => /* binding */ setLogLevel,
          /* harmony export */
        });
        /* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../modules/logger/index.js */ "./node_modules/webpack-dev-server/client/modules/logger/index.js"
          );
        /* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__
          );

        var name = "webpack-dev-server"; // default level is set on the client side, so it does not need
        // to be set by the CLI or API

        var defaultLevel = "info";

        function setLogLevel(level) {
          _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().configureDefaultLogger(
            {
              level: level,
            }
          );
        }

        setLogLevel(defaultLevel);
        var log =
          _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().getLogger(
            name
          );

        /***/
      },

    /***/ "./node_modules/webpack-dev-server/client/utils/parseURL.js":
      /*!******************************************************************!*\
    !*** ./node_modules/webpack-dev-server/client/utils/parseURL.js ***!
    \******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! url */ "./node_modules/url/url.js");
        /* harmony import */ var _getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./getCurrentScriptSource.js */ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js"
          );

        function parseURL(resourceQuery) {
          var options = {};

          if (typeof resourceQuery === "string" && resourceQuery !== "") {
            var searchParams = resourceQuery.substr(1).split("&");

            for (var i = 0; i < searchParams.length; i++) {
              var pair = searchParams[i].split("=");
              options[pair[0]] = decodeURIComponent(pair[1]);
            }
          } else {
            // Else, get the url from the <script> this file was called with.
            var scriptSource = (0,
            _getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_1__.default)();

            if (scriptSource) {
              var scriptSourceURL;

              try {
                // The placeholder `baseURL` with `window.location.href`,
                // is to allow parsing of path-relative or protocol-relative URLs,
                // and will have no effect if `scriptSource` is a fully valid URL.
                scriptSourceURL = new URL(scriptSource, self.location.href);
              } catch (error) {
                // URL parsing failed, do nothing.
                // We will still proceed to see if we can recover using `resourceQuery`
              }

              if (scriptSourceURL) {
                options = scriptSourceURL;
                options.fromCurrentScript = true;
              }
            } else {
              options = url__WEBPACK_IMPORTED_MODULE_0__.parse(
                self.location.href,
                true,
                true
              );
              options.fromCurrentScript = true;
            }
          }

          return options;
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          parseURL;

        /***/
      },

    /***/ "./node_modules/webpack-dev-server/client/utils/reloadApp.js":
      /*!*******************************************************************!*\
    !*** ./node_modules/webpack-dev-server/client/utils/reloadApp.js ***!
    \*******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! webpack/hot/emitter.js */ "./node_modules/webpack/hot/emitter.js"
          );
        /* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./log.js */ "./node_modules/webpack-dev-server/client/utils/log.js"
          );
        /* global __webpack_hash__ */

        function reloadApp(_ref, status) {
          var hot = _ref.hot,
            liveReload = _ref.liveReload;

          if (status.isUnloading) {
            return;
          }

          var currentHash = status.currentHash,
            previousHash = status.previousHash;
          var isInitial = currentHash.indexOf(previousHash) >= 0;

          if (isInitial) {
            return;
          }

          function applyReload(rootWindow, intervalId) {
            clearInterval(intervalId);
            _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info(
              "App updated. Reloading..."
            );
            rootWindow.location.reload();
          }

          var search = self.location.search.toLowerCase();
          var allowToHot =
            search.indexOf("webpack-dev-server-hot=false") === -1;
          var allowToLiveReload =
            search.indexOf("webpack-dev-server-live-reload=false") === -1;

          if (hot && allowToHot) {
            _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("App hot update...");
            webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default().emit(
              "webpackHotUpdate",
              status.currentHash
            );

            if (typeof self !== "undefined" && self.window) {
              // broadcast update to window
              self.postMessage(
                "webpackHotUpdate".concat(status.currentHash),
                "*"
              );
            }
          } // allow refreshing the page only if liveReload isn't disabled
          else if (liveReload && allowToLiveReload) {
            var rootWindow = self; // use parent window for reload (in case we're in an iframe with no valid src)

            var intervalId = self.setInterval(function () {
              if (rootWindow.location.protocol !== "about:") {
                // reload immediately if protocol is valid
                applyReload(rootWindow, intervalId);
              } else {
                rootWindow = rootWindow.parent;

                if (rootWindow.parent === rootWindow) {
                  // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways
                  applyReload(rootWindow, intervalId);
                }
              }
            });
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          reloadApp;

        /***/
      },

    /***/ "./node_modules/webpack-dev-server/client/utils/sendMessage.js":
      /*!*********************************************************************!*\
    !*** ./node_modules/webpack-dev-server/client/utils/sendMessage.js ***!
    \*********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* global __resourceQuery WorkerGlobalScope */
        // Send messages to the outside, so plugins can consume it.
        function sendMsg(type, data) {
          if (
            typeof self !== "undefined" &&
            (typeof WorkerGlobalScope === "undefined" ||
              !(self instanceof WorkerGlobalScope))
          ) {
            self.postMessage(
              {
                type: "webpack".concat(type),
                data: data,
              },
              "*"
            );
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = sendMsg;

        /***/
      },

    /***/ "./node_modules/webpack/hot/dev-server.js":
      /*!************************************************!*\
    !*** ./node_modules/webpack/hot/dev-server.js ***!
    \************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
  */
        /* globals __webpack_hash__ */
        if (true) {
          var lastHash;
          var upToDate = function upToDate() {
            return lastHash.indexOf(__webpack_require__.h()) >= 0;
          };
          var log = __webpack_require__(
            /*! ./log */ "./node_modules/webpack/hot/log.js"
          );
          var check = function check() {
            module.hot
              .check(true)
              .then(function (updatedModules) {
                if (!updatedModules) {
                  log(
                    "warning",
                    "[HMR] Cannot find update. Need to do a full reload!"
                  );
                  log(
                    "warning",
                    "[HMR] (Probably because of restarting the webpack-dev-server)"
                  );
                  window.location.reload();
                  return;
                }

                if (!upToDate()) {
                  check();
                }

                __webpack_require__(
                  /*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js"
                )(updatedModules, updatedModules);

                if (upToDate()) {
                  log("info", "[HMR] App is up to date.");
                }
              })
              .catch(function (err) {
                var status = module.hot.status();
                if (["abort", "fail"].indexOf(status) >= 0) {
                  log(
                    "warning",
                    "[HMR] Cannot apply update. Need to do a full reload!"
                  );
                  log("warning", "[HMR] " + log.formatError(err));
                  window.location.reload();
                } else {
                  log(
                    "warning",
                    "[HMR] Update failed: " + log.formatError(err)
                  );
                }
              });
          };
          var hotEmitter = __webpack_require__(
            /*! ./emitter */ "./node_modules/webpack/hot/emitter.js"
          );
          hotEmitter.on("webpackHotUpdate", function (currentHash) {
            lastHash = currentHash;
            if (!upToDate() && module.hot.status() === "idle") {
              log("info", "[HMR] Checking for updates on the server...");
              check();
            }
          });
          log("info", "[HMR] Waiting for update signal from WDS...");
        } else {
        }

        /***/
      },

    /***/ "./node_modules/webpack/hot/emitter.js":
      /*!*********************************************!*\
    !*** ./node_modules/webpack/hot/emitter.js ***!
    \*********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        var EventEmitter = __webpack_require__(
          /*! events */ "./node_modules/events/events.js"
        );
        module.exports = new EventEmitter();

        /***/
      },

    /***/ "./node_modules/webpack/hot/log-apply-result.js":
      /*!******************************************************!*\
    !*** ./node_modules/webpack/hot/log-apply-result.js ***!
    \******************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
  */
        module.exports = function (updatedModules, renewedModules) {
          var unacceptedModules = updatedModules.filter(function (moduleId) {
            return renewedModules && renewedModules.indexOf(moduleId) < 0;
          });
          var log = __webpack_require__(
            /*! ./log */ "./node_modules/webpack/hot/log.js"
          );

          if (unacceptedModules.length > 0) {
            log(
              "warning",
              "[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"
            );
            unacceptedModules.forEach(function (moduleId) {
              log("warning", "[HMR]  - " + moduleId);
            });
          }

          if (!renewedModules || renewedModules.length === 0) {
            log("info", "[HMR] Nothing hot updated.");
          } else {
            log("info", "[HMR] Updated modules:");
            renewedModules.forEach(function (moduleId) {
              if (
                typeof moduleId === "string" &&
                moduleId.indexOf("!") !== -1
              ) {
                var parts = moduleId.split("!");
                log.groupCollapsed("info", "[HMR]  - " + parts.pop());
                log("info", "[HMR]  - " + moduleId);
                log.groupEnd("info");
              } else {
                log("info", "[HMR]  - " + moduleId);
              }
            });
            var numberIds = renewedModules.every(function (moduleId) {
              return typeof moduleId === "number";
            });
            if (numberIds)
              log(
                "info",
                '[HMR] Consider using the optimization.moduleIds: "named" for module names.'
              );
          }
        };

        /***/
      },

    /***/ "./node_modules/webpack/hot/log.js":
      /*!*****************************************!*\
    !*** ./node_modules/webpack/hot/log.js ***!
    \*****************************************/
      /***/ (module) => {
        var logLevel = "info";

        function dummy() {}

        function shouldLog(level) {
          var shouldLog =
            (logLevel === "info" && level === "info") ||
            (["info", "warning"].indexOf(logLevel) >= 0 &&
              level === "warning") ||
            (["info", "warning", "error"].indexOf(logLevel) >= 0 &&
              level === "error");
          return shouldLog;
        }

        function logGroup(logFn) {
          return function (level, msg) {
            if (shouldLog(level)) {
              logFn(msg);
            }
          };
        }

        module.exports = function (level, msg) {
          if (shouldLog(level)) {
            if (level === "info") {
              console.log(msg);
            } else if (level === "warning") {
              console.warn(msg);
            } else if (level === "error") {
              console.error(msg);
            }
          }
        };

        /* eslint-disable node/no-unsupported-features/node-builtins */
        var group = console.group || dummy;
        var groupCollapsed = console.groupCollapsed || dummy;
        var groupEnd = console.groupEnd || dummy;
        /* eslint-enable node/no-unsupported-features/node-builtins */

        module.exports.group = logGroup(group);

        module.exports.groupCollapsed = logGroup(groupCollapsed);

        module.exports.groupEnd = logGroup(groupEnd);

        module.exports.setLogLevel = function (level) {
          logLevel = level;
        };

        module.exports.formatError = function (err) {
          var message = err.message;
          var stack = err.stack;
          if (!stack) {
            return message;
          } else if (stack.indexOf(message) < 0) {
            return message + "\n" + stack;
          } else {
            return stack;
          }
        };

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ if (cachedModule.error !== undefined) throw cachedModule.error;
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ loaded: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ try {
      /******/ var execOptions = {
        id: moduleId,
        module: module,
        factory: __webpack_modules__[moduleId],
        require: __webpack_require__,
      };
      /******/ __webpack_require__.i.forEach(function (handler) {
        handler(execOptions);
      });
      /******/ module = execOptions.module;
      /******/ execOptions.factory.call(
        module.exports,
        module,
        module.exports,
        execOptions.require
      );
      /******/
    } catch (e) {
      /******/ module.error = e;
      /******/ throw e;
      /******/
    }
    /******/
    /******/ // Flag the module as loaded
    /******/ module.loaded = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = __webpack_module_cache__;
  /******/
  /******/ // expose the module execution interceptor
  /******/ __webpack_require__.i = [];
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/get javascript update chunk filename */
  /******/ (() => {
    /******/ // This function allow to reference all chunks
    /******/ __webpack_require__.hu = (chunkId) => {
      /******/ // return url for filenames based on template
      /******/ return (
        "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js"
      );
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/get mini-css chunk filename */
  /******/ (() => {
    /******/ // This function allow to reference all chunks
    /******/ __webpack_require__.miniCssF = (chunkId) => {
      /******/ // return url for filenames based on template
      /******/ return undefined;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/get update manifest filename */
  /******/ (() => {
    /******/ __webpack_require__.hmrF = () =>
      "main." + __webpack_require__.h() + ".hot-update.json";
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/getFullHash */
  /******/ (() => {
    /******/ __webpack_require__.h = () => "d0ded750e95f937a680e";
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/load script */
  /******/ (() => {
    /******/ var inProgress = {};
    /******/ var dataWebpackPrefix = "ezhesvet4:";
    /******/ // loadScript function to load a script via script tag
    /******/ __webpack_require__.l = (url, done, key, chunkId) => {
      /******/ if (inProgress[url]) {
        inProgress[url].push(done);
        return;
      }
      /******/ var script, needAttach;
      /******/ if (key !== undefined) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ for (var i = 0; i < scripts.length; i++) {
          /******/ var s = scripts[i];
          /******/ if (
            s.getAttribute("src") == url ||
            s.getAttribute("data-webpack") == dataWebpackPrefix + key
          ) {
            script = s;
            break;
          }
          /******/
        }
        /******/
      }
      /******/ if (!script) {
        /******/ needAttach = true;
        /******/ script = document.createElement("script");
        /******/
        /******/ script.charset = "utf-8";
        /******/ script.timeout = 120;
        /******/ if (__webpack_require__.nc) {
          /******/ script.setAttribute("nonce", __webpack_require__.nc);
          /******/
        }
        /******/ script.setAttribute("data-webpack", dataWebpackPrefix + key);
        /******/ script.src = url;
        /******/
      }
      /******/ inProgress[url] = [done];
      /******/ var onScriptComplete = (prev, event) => {
        /******/ // avoid mem leaks in IE.
        /******/ script.onerror = script.onload = null;
        /******/ clearTimeout(timeout);
        /******/ var doneFns = inProgress[url];
        /******/ delete inProgress[url];
        /******/ script.parentNode && script.parentNode.removeChild(script);
        /******/ doneFns && doneFns.forEach((fn) => fn(event));
        /******/ if (prev) return prev(event);
        /******/
      };
      /******/ /******/ var timeout = setTimeout(
        onScriptComplete.bind(null, undefined, {
          type: "timeout",
          target: script,
        }),
        120000
      );
      /******/ script.onerror = onScriptComplete.bind(null, script.onerror);
      /******/ script.onload = onScriptComplete.bind(null, script.onload);
      /******/ needAttach && document.head.appendChild(script);
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/node module decorator */
  /******/ (() => {
    /******/ __webpack_require__.nmd = (module) => {
      /******/ module.paths = [];
      /******/ if (!module.children) module.children = [];
      /******/ return module;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hot module replacement */
  /******/ (() => {
    /******/ var currentModuleData = {};
    /******/ var installedModules = __webpack_require__.c;
    /******/
    /******/ // module and require creation
    /******/ var currentChildModule;
    /******/ var currentParents = [];
    /******/
    /******/ // status
    /******/ var registeredStatusHandlers = [];
    /******/ var currentStatus = "idle";
    /******/
    /******/ // while downloading
    /******/ var blockingPromises;
    /******/
    /******/ // The update info
    /******/ var currentUpdateApplyHandlers;
    /******/ var queuedInvalidatedModules;
    /******/
    /******/ // eslint-disable-next-line no-unused-vars
    /******/ __webpack_require__.hmrD = currentModuleData;
    /******/
    /******/ __webpack_require__.i.push(function (options) {
      /******/ var module = options.module;
      /******/ var require = createRequire(options.require, options.id);
      /******/ module.hot = createModuleHotObject(options.id, module);
      /******/ module.parents = currentParents;
      /******/ module.children = [];
      /******/ currentParents = [];
      /******/ options.require = require;
      /******/
    });
    /******/
    /******/ __webpack_require__.hmrC = {};
    /******/ __webpack_require__.hmrI = {};
    /******/
    /******/ function createRequire(require, moduleId) {
      /******/ var me = installedModules[moduleId];
      /******/ if (!me) return require;
      /******/ var fn = function (request) {
        /******/ if (me.hot.active) {
          /******/ if (installedModules[request]) {
            /******/ var parents = installedModules[request].parents;
            /******/ if (parents.indexOf(moduleId) === -1) {
              /******/ parents.push(moduleId);
              /******/
            }
            /******/
          } else {
            /******/ currentParents = [moduleId];
            /******/ currentChildModule = request;
            /******/
          }
          /******/ if (me.children.indexOf(request) === -1) {
            /******/ me.children.push(request);
            /******/
          }
          /******/
        } else {
          /******/ console.warn(
            /******/ "[HMR] unexpected require(" +
              /******/ request +
              /******/ ") from disposed module " +
              /******/ moduleId
            /******/
          );
          /******/ currentParents = [];
          /******/
        }
        /******/ return require(request);
        /******/
      };
      /******/ var createPropertyDescriptor = function (name) {
        /******/ return {
          /******/ configurable: true,
          /******/ enumerable: true,
          /******/ get: function () {
            /******/ return require[name];
            /******/
          },
          /******/ set: function (value) {
            /******/ require[name] = value;
            /******/
          },
          /******/
        };
        /******/
      };
      /******/ for (var name in require) {
        /******/ if (
          Object.prototype.hasOwnProperty.call(require, name) &&
          name !== "e"
        ) {
          /******/ Object.defineProperty(
            fn,
            name,
            createPropertyDescriptor(name)
          );
          /******/
        }
        /******/
      }
      /******/ fn.e = function (chunkId) {
        /******/ return trackBlockingPromise(require.e(chunkId));
        /******/
      };
      /******/ return fn;
      /******/
    }
    /******/
    /******/ function createModuleHotObject(moduleId, me) {
      /******/ var _main = currentChildModule !== moduleId;
      /******/ var hot = {
        /******/ // private stuff
        /******/ _acceptedDependencies: {},
        /******/ _acceptedErrorHandlers: {},
        /******/ _declinedDependencies: {},
        /******/ _selfAccepted: false,
        /******/ _selfDeclined: false,
        /******/ _selfInvalidated: false,
        /******/ _disposeHandlers: [],
        /******/ _main: _main,
        /******/ _requireSelf: function () {
          /******/ currentParents = me.parents.slice();
          /******/ currentChildModule = _main ? undefined : moduleId;
          /******/ __webpack_require__(moduleId);
          /******/
        },
        /******/
        /******/ // Module API
        /******/ active: true,
        /******/ accept: function (dep, callback, errorHandler) {
          /******/ if (dep === undefined) hot._selfAccepted = true;
          /******/ else if (typeof dep === "function") hot._selfAccepted = dep;
          /******/ else if (typeof dep === "object" && dep !== null) {
            /******/ for (var i = 0; i < dep.length; i++) {
              /******/ hot._acceptedDependencies[dep[i]] =
                callback || function () {};
              /******/ hot._acceptedErrorHandlers[dep[i]] = errorHandler;
              /******/
            }
            /******/
          } else {
            /******/ hot._acceptedDependencies[dep] =
              callback || function () {};
            /******/ hot._acceptedErrorHandlers[dep] = errorHandler;
            /******/
          }
          /******/
        },
        /******/ decline: function (dep) {
          /******/ if (dep === undefined) hot._selfDeclined = true;
          /******/ else if (typeof dep === "object" && dep !== null)
            /******/ for (var i = 0; i < dep.length; i++)
              /******/ hot._declinedDependencies[dep[i]] = true;
          /******/ else hot._declinedDependencies[dep] = true;
          /******/
        },
        /******/ dispose: function (callback) {
          /******/ hot._disposeHandlers.push(callback);
          /******/
        },
        /******/ addDisposeHandler: function (callback) {
          /******/ hot._disposeHandlers.push(callback);
          /******/
        },
        /******/ removeDisposeHandler: function (callback) {
          /******/ var idx = hot._disposeHandlers.indexOf(callback);
          /******/ if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
          /******/
        },
        /******/ invalidate: function () {
          /******/ this._selfInvalidated = true;
          /******/ switch (currentStatus) {
            /******/ case "idle":
              /******/ currentUpdateApplyHandlers = [];
              /******/ Object.keys(__webpack_require__.hmrI).forEach(function (
                key
              ) {
                /******/ __webpack_require__.hmrI[key](
                  /******/ moduleId,
                  /******/ currentUpdateApplyHandlers
                  /******/
                );
                /******/
              });
              /******/ setStatus("ready");
              /******/ break;
            /******/ case "ready":
              /******/ Object.keys(__webpack_require__.hmrI).forEach(function (
                key
              ) {
                /******/ __webpack_require__.hmrI[key](
                  /******/ moduleId,
                  /******/ currentUpdateApplyHandlers
                  /******/
                );
                /******/
              });
              /******/ break;
            /******/ case "prepare":
            /******/ case "check":
            /******/ case "dispose":
            /******/ case "apply":
              /******/ (queuedInvalidatedModules =
                queuedInvalidatedModules || []).push(
                /******/ moduleId
                /******/
              );
              /******/ break;
            /******/ default: // ignore requests in error states
              /******/ /******/ break;
            /******/
          }
          /******/
        },
        /******/
        /******/ // Management API
        /******/ check: hotCheck,
        /******/ apply: hotApply,
        /******/ status: function (l) {
          /******/ if (!l) return currentStatus;
          /******/ registeredStatusHandlers.push(l);
          /******/
        },
        /******/ addStatusHandler: function (l) {
          /******/ registeredStatusHandlers.push(l);
          /******/
        },
        /******/ removeStatusHandler: function (l) {
          /******/ var idx = registeredStatusHandlers.indexOf(l);
          /******/ if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
          /******/
        },
        /******/
        /******/ //inherit from previous dispose call
        /******/ data: currentModuleData[moduleId],
        /******/
      };
      /******/ currentChildModule = undefined;
      /******/ return hot;
      /******/
    }
    /******/
    /******/ function setStatus(newStatus) {
      /******/ currentStatus = newStatus;
      /******/ var results = [];
      /******/
      /******/ for (var i = 0; i < registeredStatusHandlers.length; i++)
        /******/ results[i] = registeredStatusHandlers[i].call(null, newStatus);
      /******/
      /******/ return Promise.all(results);
      /******/
    }
    /******/
    /******/ function trackBlockingPromise(promise) {
      /******/ switch (currentStatus) {
        /******/ case "ready":
          /******/ setStatus("prepare");
          /******/ blockingPromises.push(promise);
          /******/ waitForBlockingPromises(function () {
            /******/ return setStatus("ready");
            /******/
          });
          /******/ return promise;
        /******/ case "prepare":
          /******/ blockingPromises.push(promise);
          /******/ return promise;
        /******/ default:
          /******/ return promise;
        /******/
      }
      /******/
    }
    /******/
    /******/ function waitForBlockingPromises(fn) {
      /******/ if (blockingPromises.length === 0) return fn();
      /******/ var blocker = blockingPromises;
      /******/ blockingPromises = [];
      /******/ return Promise.all(blocker).then(function () {
        /******/ return waitForBlockingPromises(fn);
        /******/
      });
      /******/
    }
    /******/
    /******/ function hotCheck(applyOnUpdate) {
      /******/ if (currentStatus !== "idle") {
        /******/ throw new Error("check() is only allowed in idle status");
        /******/
      }
      /******/ return setStatus("check")
        /******/ .then(__webpack_require__.hmrM)
        /******/ .then(function (update) {
          /******/ if (!update) {
            /******/ return setStatus(
              applyInvalidatedModules() ? "ready" : "idle"
            );
            /******/
          }
          /******/
          /******/ return setStatus("prepare").then(function () {
            /******/ var updatedModules = [];
            /******/ blockingPromises = [];
            /******/ currentUpdateApplyHandlers = [];
            /******/
            /******/ return Promise.all(
              /******/ Object.keys(__webpack_require__.hmrC).reduce(
                function (
                  /******/ promises,
                  /******/ key
                  /******/
                ) {
                  /******/ __webpack_require__.hmrC[key](
                    /******/ update.c,
                    /******/ update.r,
                    /******/ update.m,
                    /******/ promises,
                    /******/ currentUpdateApplyHandlers,
                    /******/ updatedModules
                    /******/
                  );
                  /******/ return promises;
                  /******/
                },
                /******/ []
              )
              /******/
            ).then(function () {
              /******/ return waitForBlockingPromises(function () {
                /******/ if (applyOnUpdate) {
                  /******/ return internalApply(applyOnUpdate);
                  /******/
                } else {
                  /******/ return setStatus("ready").then(function () {
                    /******/ return updatedModules;
                    /******/
                  });
                  /******/
                }
                /******/
              });
              /******/
            });
            /******/
          });
          /******/
        });
      /******/
    }
    /******/
    /******/ function hotApply(options) {
      /******/ if (currentStatus !== "ready") {
        /******/ return Promise.resolve().then(function () {
          /******/ throw new Error("apply() is only allowed in ready status");
          /******/
        });
        /******/
      }
      /******/ return internalApply(options);
      /******/
    }
    /******/
    /******/ function internalApply(options) {
      /******/ options = options || {};
      /******/
      /******/ applyInvalidatedModules();
      /******/
      /******/ var results = currentUpdateApplyHandlers.map(function (handler) {
        /******/ return handler(options);
        /******/
      });
      /******/ currentUpdateApplyHandlers = undefined;
      /******/
      /******/ var errors = results
        /******/ .map(function (r) {
          /******/ return r.error;
          /******/
        })
        /******/ .filter(Boolean);
      /******/
      /******/ if (errors.length > 0) {
        /******/ return setStatus("abort").then(function () {
          /******/ throw errors[0];
          /******/
        });
        /******/
      }
      /******/
      /******/ // Now in "dispose" phase
      /******/ var disposePromise = setStatus("dispose");
      /******/
      /******/ results.forEach(function (result) {
        /******/ if (result.dispose) result.dispose();
        /******/
      });
      /******/
      /******/ // Now in "apply" phase
      /******/ var applyPromise = setStatus("apply");
      /******/
      /******/ var error;
      /******/ var reportError = function (err) {
        /******/ if (!error) error = err;
        /******/
      };
      /******/
      /******/ var outdatedModules = [];
      /******/ results.forEach(function (result) {
        /******/ if (result.apply) {
          /******/ var modules = result.apply(reportError);
          /******/ if (modules) {
            /******/ for (var i = 0; i < modules.length; i++) {
              /******/ outdatedModules.push(modules[i]);
              /******/
            }
            /******/
          }
          /******/
        }
        /******/
      });
      /******/
      /******/ return Promise.all([disposePromise, applyPromise]).then(
        function () {
          /******/ // handle errors in accept handlers and self accepted module load
          /******/ if (error) {
            /******/ return setStatus("fail").then(function () {
              /******/ throw error;
              /******/
            });
            /******/
          }
          /******/
          /******/ if (queuedInvalidatedModules) {
            /******/ return internalApply(options).then(function (list) {
              /******/ outdatedModules.forEach(function (moduleId) {
                /******/ if (list.indexOf(moduleId) < 0) list.push(moduleId);
                /******/
              });
              /******/ return list;
              /******/
            });
            /******/
          }
          /******/
          /******/ return setStatus("idle").then(function () {
            /******/ return outdatedModules;
            /******/
          });
          /******/
        }
      );
      /******/
    }
    /******/
    /******/ function applyInvalidatedModules() {
      /******/ if (queuedInvalidatedModules) {
        /******/ if (!currentUpdateApplyHandlers)
          currentUpdateApplyHandlers = [];
        /******/ Object.keys(__webpack_require__.hmrI).forEach(function (key) {
          /******/ queuedInvalidatedModules.forEach(function (moduleId) {
            /******/ __webpack_require__.hmrI[key](
              /******/ moduleId,
              /******/ currentUpdateApplyHandlers
              /******/
            );
            /******/
          });
          /******/
        });
        /******/ queuedInvalidatedModules = undefined;
        /******/ return true;
        /******/
      }
      /******/
    }
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length)
          scriptUrl = scripts[scripts.length - 1].src;
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl + "../";
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/css loading */
  /******/ (() => {
    /******/ var createStylesheet = (chunkId, fullhref, resolve, reject) => {
      /******/ var linkTag = document.createElement("link");
      /******/
      /******/ linkTag.rel = "stylesheet";
      /******/ linkTag.type = "text/css";
      /******/ var onLinkComplete = (event) => {
        /******/ // avoid mem leaks.
        /******/ linkTag.onerror = linkTag.onload = null;
        /******/ if (event.type === "load") {
          /******/ resolve();
          /******/
        } else {
          /******/ var errorType =
            event && (event.type === "load" ? "missing" : event.type);
          /******/ var realHref =
            (event && event.target && event.target.href) || fullhref;
          /******/ var err = new Error(
            "Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")"
          );
          /******/ err.code = "CSS_CHUNK_LOAD_FAILED";
          /******/ err.type = errorType;
          /******/ err.request = realHref;
          /******/ linkTag.parentNode.removeChild(linkTag);
          /******/ reject(err);
          /******/
        }
        /******/
      };
      /******/ linkTag.onerror = linkTag.onload = onLinkComplete;
      /******/ linkTag.href = fullhref;
      /******/
      /******/ document.head.appendChild(linkTag);
      /******/ return linkTag;
      /******/
    };
    /******/ var findStylesheet = (href, fullhref) => {
      /******/ var existingLinkTags = document.getElementsByTagName("link");
      /******/ for (var i = 0; i < existingLinkTags.length; i++) {
        /******/ var tag = existingLinkTags[i];
        /******/ var dataHref =
          tag.getAttribute("data-href") || tag.getAttribute("href");
        /******/ if (
          tag.rel === "stylesheet" &&
          (dataHref === href || dataHref === fullhref)
        )
          return tag;
        /******/
      }
      /******/ var existingStyleTags = document.getElementsByTagName("style");
      /******/ for (var i = 0; i < existingStyleTags.length; i++) {
        /******/ var tag = existingStyleTags[i];
        /******/ var dataHref = tag.getAttribute("data-href");
        /******/ if (dataHref === href || dataHref === fullhref) return tag;
        /******/
      }
      /******/
    };
    /******/ var loadStylesheet = (chunkId) => {
      /******/ return new Promise((resolve, reject) => {
        /******/ var href = __webpack_require__.miniCssF(chunkId);
        /******/ var fullhref = __webpack_require__.p + href;
        /******/ if (findStylesheet(href, fullhref)) return resolve();
        /******/ createStylesheet(chunkId, fullhref, resolve, reject);
        /******/
      });
      /******/
    };
    /******/ // no chunk loading
    /******/
    /******/ var oldTags = [];
    /******/ var newTags = [];
    /******/ var applyHandler = (options) => {
      /******/ return {
        dispose: () => {
          /******/ for (var i = 0; i < oldTags.length; i++) {
            /******/ var oldTag = oldTags[i];
            /******/ if (oldTag.parentNode)
              oldTag.parentNode.removeChild(oldTag);
            /******/
          }
          /******/ oldTags.length = 0;
          /******/
        },
        apply: () => {
          /******/ for (var i = 0; i < newTags.length; i++)
            newTags[i].rel = "stylesheet";
          /******/ newTags.length = 0;
          /******/
        },
      };
      /******/
    };
    /******/ __webpack_require__.hmrC.miniCss = (
      chunkIds,
      removedChunks,
      removedModules,
      promises,
      applyHandlers,
      updatedModulesList
    ) => {
      /******/ applyHandlers.push(applyHandler);
      /******/ chunkIds.forEach((chunkId) => {
        /******/ var href = __webpack_require__.miniCssF(chunkId);
        /******/ var fullhref = __webpack_require__.p + href;
        /******/ var oldTag = findStylesheet(href, fullhref);
        /******/ if (!oldTag) return;
        /******/ promises.push(
          new Promise((resolve, reject) => {
            /******/ var tag = createStylesheet(
              chunkId,
              fullhref,
              () => {
                /******/ tag.as = "style";
                /******/ tag.rel = "preload";
                /******/ resolve();
                /******/
              },
              reject
            );
            /******/ oldTags.push(oldTag);
            /******/ newTags.push(tag);
            /******/
          })
        );
        /******/
      });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ // no baseURI
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ main: 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ var currentUpdatedModulesList;
    /******/ var waitingUpdateResolves = {};
    /******/ function loadUpdateChunk(chunkId) {
      /******/ return new Promise((resolve, reject) => {
        /******/ waitingUpdateResolves[chunkId] = resolve;
        /******/ // start update chunk loading
        /******/ var url =
          __webpack_require__.p + __webpack_require__.hu(chunkId);
        /******/ // create error before stack unwound to get useful stacktrace later
        /******/ var error = new Error();
        /******/ var loadingEnded = (event) => {
          /******/ if (waitingUpdateResolves[chunkId]) {
            /******/ waitingUpdateResolves[chunkId] = undefined;
            /******/ var errorType =
              event && (event.type === "load" ? "missing" : event.type);
            /******/ var realSrc = event && event.target && event.target.src;
            /******/ error.message =
              "Loading hot update chunk " +
              chunkId +
              " failed.\n(" +
              errorType +
              ": " +
              realSrc +
              ")";
            /******/ error.name = "ChunkLoadError";
            /******/ error.type = errorType;
            /******/ error.request = realSrc;
            /******/ reject(error);
            /******/
          }
          /******/
        };
        /******/ __webpack_require__.l(url, loadingEnded);
        /******/
      });
      /******/
    }
    /******/
    /******/ self["webpackHotUpdateezhesvet4"] = (
      chunkId,
      moreModules,
      runtime
    ) => {
      /******/ for (var moduleId in moreModules) {
        /******/ if (__webpack_require__.o(moreModules, moduleId)) {
          /******/ currentUpdate[moduleId] = moreModules[moduleId];
          /******/ if (currentUpdatedModulesList)
            currentUpdatedModulesList.push(moduleId);
          /******/
        }
        /******/
      }
      /******/ if (runtime) currentUpdateRuntime.push(runtime);
      /******/ if (waitingUpdateResolves[chunkId]) {
        /******/ waitingUpdateResolves[chunkId]();
        /******/ waitingUpdateResolves[chunkId] = undefined;
        /******/
      }
      /******/
    };
    /******/
    /******/ var currentUpdateChunks;
    /******/ var currentUpdate;
    /******/ var currentUpdateRemovedChunks;
    /******/ var currentUpdateRuntime;
    /******/ function applyHandler(options) {
      /******/ if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
      /******/ currentUpdateChunks = undefined;
      /******/ function getAffectedModuleEffects(updateModuleId) {
        /******/ var outdatedModules = [updateModuleId];
        /******/ var outdatedDependencies = {};
        /******/
        /******/ var queue = outdatedModules.map(function (id) {
          /******/ return {
            /******/ chain: [id],
            /******/ id: id,
            /******/
          };
          /******/
        });
        /******/ while (queue.length > 0) {
          /******/ var queueItem = queue.pop();
          /******/ var moduleId = queueItem.id;
          /******/ var chain = queueItem.chain;
          /******/ var module = __webpack_require__.c[moduleId];
          /******/ if (
            /******/ !module ||
            /******/ (module.hot._selfAccepted && !module.hot._selfInvalidated)
            /******/
          )
            /******/ continue;
          /******/ if (module.hot._selfDeclined) {
            /******/ return {
              /******/ type: "self-declined",
              /******/ chain: chain,
              /******/ moduleId: moduleId,
              /******/
            };
            /******/
          }
          /******/ if (module.hot._main) {
            /******/ return {
              /******/ type: "unaccepted",
              /******/ chain: chain,
              /******/ moduleId: moduleId,
              /******/
            };
            /******/
          }
          /******/ for (var i = 0; i < module.parents.length; i++) {
            /******/ var parentId = module.parents[i];
            /******/ var parent = __webpack_require__.c[parentId];
            /******/ if (!parent) continue;
            /******/ if (parent.hot._declinedDependencies[moduleId]) {
              /******/ return {
                /******/ type: "declined",
                /******/ chain: chain.concat([parentId]),
                /******/ moduleId: moduleId,
                /******/ parentId: parentId,
                /******/
              };
              /******/
            }
            /******/ if (outdatedModules.indexOf(parentId) !== -1) continue;
            /******/ if (parent.hot._acceptedDependencies[moduleId]) {
              /******/ if (!outdatedDependencies[parentId])
                /******/ outdatedDependencies[parentId] = [];
              /******/ addAllToSet(outdatedDependencies[parentId], [moduleId]);
              /******/ continue;
              /******/
            }
            /******/ delete outdatedDependencies[parentId];
            /******/ outdatedModules.push(parentId);
            /******/ queue.push({
              /******/ chain: chain.concat([parentId]),
              /******/ id: parentId,
              /******/
            });
            /******/
          }
          /******/
        }
        /******/
        /******/ return {
          /******/ type: "accepted",
          /******/ moduleId: updateModuleId,
          /******/ outdatedModules: outdatedModules,
          /******/ outdatedDependencies: outdatedDependencies,
          /******/
        };
        /******/
      }
      /******/
      /******/ function addAllToSet(a, b) {
        /******/ for (var i = 0; i < b.length; i++) {
          /******/ var item = b[i];
          /******/ if (a.indexOf(item) === -1) a.push(item);
          /******/
        }
        /******/
      }
      /******/
      /******/ // at begin all updates modules are outdated
      /******/ // the "outdated" status can propagate to parents if they don't accept the children
      /******/ var outdatedDependencies = {};
      /******/ var outdatedModules = [];
      /******/ var appliedUpdate = {};
      /******/
      /******/ var warnUnexpectedRequire = function warnUnexpectedRequire(
        module
      ) {
        /******/ console.warn(
          /******/ "[HMR] unexpected require(" +
            module.id +
            ") to disposed module"
          /******/
        );
        /******/
      };
      /******/
      /******/ for (var moduleId in currentUpdate) {
        /******/ if (__webpack_require__.o(currentUpdate, moduleId)) {
          /******/ var newModuleFactory = currentUpdate[moduleId];
          /******/ /** @type {TODO} */
          /******/ var result;
          /******/ if (newModuleFactory) {
            /******/ result = getAffectedModuleEffects(moduleId);
            /******/
          } else {
            /******/ result = {
              /******/ type: "disposed",
              /******/ moduleId: moduleId,
              /******/
            };
            /******/
          }
          /******/ /** @type {Error|false} */
          /******/ var abortError = false;
          /******/ var doApply = false;
          /******/ var doDispose = false;
          /******/ var chainInfo = "";
          /******/ if (result.chain) {
            /******/ chainInfo =
              "\nUpdate propagation: " + result.chain.join(" -> ");
            /******/
          }
          /******/ switch (result.type) {
            /******/ case "self-declined":
              /******/ if (options.onDeclined) options.onDeclined(result);
              /******/ if (!options.ignoreDeclined)
                /******/ abortError = new Error(
                  /******/ "Aborted because of self decline: " +
                    /******/ result.moduleId +
                    /******/ chainInfo
                  /******/
                );
              /******/ break;
            /******/ case "declined":
              /******/ if (options.onDeclined) options.onDeclined(result);
              /******/ if (!options.ignoreDeclined)
                /******/ abortError = new Error(
                  /******/ "Aborted because of declined dependency: " +
                    /******/ result.moduleId +
                    /******/ " in " +
                    /******/ result.parentId +
                    /******/ chainInfo
                  /******/
                );
              /******/ break;
            /******/ case "unaccepted":
              /******/ if (options.onUnaccepted) options.onUnaccepted(result);
              /******/ if (!options.ignoreUnaccepted)
                /******/ abortError = new Error(
                  /******/ "Aborted because " +
                    moduleId +
                    " is not accepted" +
                    chainInfo
                  /******/
                );
              /******/ break;
            /******/ case "accepted":
              /******/ if (options.onAccepted) options.onAccepted(result);
              /******/ doApply = true;
              /******/ break;
            /******/ case "disposed":
              /******/ if (options.onDisposed) options.onDisposed(result);
              /******/ doDispose = true;
              /******/ break;
            /******/ default:
              /******/ throw new Error("Unexception type " + result.type);
            /******/
          }
          /******/ if (abortError) {
            /******/ return {
              /******/ error: abortError,
              /******/
            };
            /******/
          }
          /******/ if (doApply) {
            /******/ appliedUpdate[moduleId] = newModuleFactory;
            /******/ addAllToSet(outdatedModules, result.outdatedModules);
            /******/ for (moduleId in result.outdatedDependencies) {
              /******/ if (
                __webpack_require__.o(result.outdatedDependencies, moduleId)
              ) {
                /******/ if (!outdatedDependencies[moduleId])
                  /******/ outdatedDependencies[moduleId] = [];
                /******/ addAllToSet(
                  /******/ outdatedDependencies[moduleId],
                  /******/ result.outdatedDependencies[moduleId]
                  /******/
                );
                /******/
              }
              /******/
            }
            /******/
          }
          /******/ if (doDispose) {
            /******/ addAllToSet(outdatedModules, [result.moduleId]);
            /******/ appliedUpdate[moduleId] = warnUnexpectedRequire;
            /******/
          }
          /******/
        }
        /******/
      }
      /******/ currentUpdate = undefined;
      /******/
      /******/ // Store self accepted outdated modules to require them later by the module system
      /******/ var outdatedSelfAcceptedModules = [];
      /******/ for (var j = 0; j < outdatedModules.length; j++) {
        /******/ var outdatedModuleId = outdatedModules[j];
        /******/ var module = __webpack_require__.c[outdatedModuleId];
        /******/ if (
          /******/ module &&
          /******/ (module.hot._selfAccepted || module.hot._main) &&
          /******/ // removed self-accepted modules should not be required
          /******/ appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
          /******/ // when called invalidate self-accepting is not possible
          /******/ !module.hot._selfInvalidated
          /******/
        ) {
          /******/ outdatedSelfAcceptedModules.push({
            /******/ module: outdatedModuleId,
            /******/ require: module.hot._requireSelf,
            /******/ errorHandler: module.hot._selfAccepted,
            /******/
          });
          /******/
        }
        /******/
      }
      /******/
      /******/ var moduleOutdatedDependencies;
      /******/
      /******/ return {
        /******/ dispose: function () {
          /******/ currentUpdateRemovedChunks.forEach(function (chunkId) {
            /******/ delete installedChunks[chunkId];
            /******/
          });
          /******/ currentUpdateRemovedChunks = undefined;
          /******/
          /******/ var idx;
          /******/ var queue = outdatedModules.slice();
          /******/ while (queue.length > 0) {
            /******/ var moduleId = queue.pop();
            /******/ var module = __webpack_require__.c[moduleId];
            /******/ if (!module) continue;
            /******/
            /******/ var data = {};
            /******/
            /******/ // Call dispose handlers
            /******/ var disposeHandlers = module.hot._disposeHandlers;
            /******/ for (j = 0; j < disposeHandlers.length; j++) {
              /******/ disposeHandlers[j].call(null, data);
              /******/
            }
            /******/ __webpack_require__.hmrD[moduleId] = data;
            /******/
            /******/ // disable module (this disables requires from this module)
            /******/ module.hot.active = false;
            /******/
            /******/ // remove module from cache
            /******/ delete __webpack_require__.c[moduleId];
            /******/
            /******/ // when disposing there is no need to call dispose handler
            /******/ delete outdatedDependencies[moduleId];
            /******/
            /******/ // remove "parents" references from all children
            /******/ for (j = 0; j < module.children.length; j++) {
              /******/ var child = __webpack_require__.c[module.children[j]];
              /******/ if (!child) continue;
              /******/ idx = child.parents.indexOf(moduleId);
              /******/ if (idx >= 0) {
                /******/ child.parents.splice(idx, 1);
                /******/
              }
              /******/
            }
            /******/
          }
          /******/
          /******/ // remove outdated dependency from module children
          /******/ var dependency;
          /******/ for (var outdatedModuleId in outdatedDependencies) {
            /******/ if (
              __webpack_require__.o(outdatedDependencies, outdatedModuleId)
            ) {
              /******/ module = __webpack_require__.c[outdatedModuleId];
              /******/ if (module) {
                /******/ moduleOutdatedDependencies =
                  /******/ outdatedDependencies[outdatedModuleId];
                /******/ for (
                  j = 0;
                  j < moduleOutdatedDependencies.length;
                  j++
                ) {
                  /******/ dependency = moduleOutdatedDependencies[j];
                  /******/ idx = module.children.indexOf(dependency);
                  /******/ if (idx >= 0) module.children.splice(idx, 1);
                  /******/
                }
                /******/
              }
              /******/
            }
            /******/
          }
          /******/
        },
        /******/ apply: function (reportError) {
          /******/ // insert new code
          /******/ for (var updateModuleId in appliedUpdate) {
            /******/ if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
              /******/ __webpack_require__.m[updateModuleId] =
                appliedUpdate[updateModuleId];
              /******/
            }
            /******/
          }
          /******/
          /******/ // run new runtime modules
          /******/ for (var i = 0; i < currentUpdateRuntime.length; i++) {
            /******/ currentUpdateRuntime[i](__webpack_require__);
            /******/
          }
          /******/
          /******/ // call accept handlers
          /******/ for (var outdatedModuleId in outdatedDependencies) {
            /******/ if (
              __webpack_require__.o(outdatedDependencies, outdatedModuleId)
            ) {
              /******/ var module = __webpack_require__.c[outdatedModuleId];
              /******/ if (module) {
                /******/ moduleOutdatedDependencies =
                  /******/ outdatedDependencies[outdatedModuleId];
                /******/ var callbacks = [];
                /******/ var errorHandlers = [];
                /******/ var dependenciesForCallbacks = [];
                /******/ for (
                  var j = 0;
                  j < moduleOutdatedDependencies.length;
                  j++
                ) {
                  /******/ var dependency = moduleOutdatedDependencies[j];
                  /******/ var acceptCallback =
                    /******/ module.hot._acceptedDependencies[dependency];
                  /******/ var errorHandler =
                    /******/ module.hot._acceptedErrorHandlers[dependency];
                  /******/ if (acceptCallback) {
                    /******/ if (callbacks.indexOf(acceptCallback) !== -1)
                      continue;
                    /******/ callbacks.push(acceptCallback);
                    /******/ errorHandlers.push(errorHandler);
                    /******/ dependenciesForCallbacks.push(dependency);
                    /******/
                  }
                  /******/
                }
                /******/ for (var k = 0; k < callbacks.length; k++) {
                  /******/ try {
                    /******/ callbacks[k].call(
                      null,
                      moduleOutdatedDependencies
                    );
                    /******/
                  } catch (err) {
                    /******/ if (typeof errorHandlers[k] === "function") {
                      /******/ try {
                        /******/ errorHandlers[k](err, {
                          /******/ moduleId: outdatedModuleId,
                          /******/ dependencyId: dependenciesForCallbacks[k],
                          /******/
                        });
                        /******/
                      } catch (err2) {
                        /******/ if (options.onErrored) {
                          /******/ options.onErrored({
                            /******/ type: "accept-error-handler-errored",
                            /******/ moduleId: outdatedModuleId,
                            /******/ dependencyId: dependenciesForCallbacks[k],
                            /******/ error: err2,
                            /******/ originalError: err,
                            /******/
                          });
                          /******/
                        }
                        /******/ if (!options.ignoreErrored) {
                          /******/ reportError(err2);
                          /******/ reportError(err);
                          /******/
                        }
                        /******/
                      }
                      /******/
                    } else {
                      /******/ if (options.onErrored) {
                        /******/ options.onErrored({
                          /******/ type: "accept-errored",
                          /******/ moduleId: outdatedModuleId,
                          /******/ dependencyId: dependenciesForCallbacks[k],
                          /******/ error: err,
                          /******/
                        });
                        /******/
                      }
                      /******/ if (!options.ignoreErrored) {
                        /******/ reportError(err);
                        /******/
                      }
                      /******/
                    }
                    /******/
                  }
                  /******/
                }
                /******/
              }
              /******/
            }
            /******/
          }
          /******/
          /******/ // Load self accepted modules
          /******/ for (
            var o = 0;
            o < outdatedSelfAcceptedModules.length;
            o++
          ) {
            /******/ var item = outdatedSelfAcceptedModules[o];
            /******/ var moduleId = item.module;
            /******/ try {
              /******/ item.require(moduleId);
              /******/
            } catch (err) {
              /******/ if (typeof item.errorHandler === "function") {
                /******/ try {
                  /******/ item.errorHandler(err, {
                    /******/ moduleId: moduleId,
                    /******/ module: __webpack_require__.c[moduleId],
                    /******/
                  });
                  /******/
                } catch (err2) {
                  /******/ if (options.onErrored) {
                    /******/ options.onErrored({
                      /******/ type: "self-accept-error-handler-errored",
                      /******/ moduleId: moduleId,
                      /******/ error: err2,
                      /******/ originalError: err,
                      /******/
                    });
                    /******/
                  }
                  /******/ if (!options.ignoreErrored) {
                    /******/ reportError(err2);
                    /******/ reportError(err);
                    /******/
                  }
                  /******/
                }
                /******/
              } else {
                /******/ if (options.onErrored) {
                  /******/ options.onErrored({
                    /******/ type: "self-accept-errored",
                    /******/ moduleId: moduleId,
                    /******/ error: err,
                    /******/
                  });
                  /******/
                }
                /******/ if (!options.ignoreErrored) {
                  /******/ reportError(err);
                  /******/
                }
                /******/
              }
              /******/
            }
            /******/
          }
          /******/
          /******/ return outdatedModules;
          /******/
        },
        /******/
      };
      /******/
    }
    /******/ __webpack_require__.hmrI.jsonp = function (
      moduleId,
      applyHandlers
    ) {
      /******/ if (!currentUpdate) {
        /******/ currentUpdate = {};
        /******/ currentUpdateRuntime = [];
        /******/ currentUpdateRemovedChunks = [];
        /******/ applyHandlers.push(applyHandler);
        /******/
      }
      /******/ if (!__webpack_require__.o(currentUpdate, moduleId)) {
        /******/ currentUpdate[moduleId] = __webpack_require__.m[moduleId];
        /******/
      }
      /******/
    };
    /******/ __webpack_require__.hmrC.jsonp = function (
      /******/ chunkIds,
      /******/ removedChunks,
      /******/ removedModules,
      /******/ promises,
      /******/ applyHandlers,
      /******/ updatedModulesList
      /******/
    ) {
      /******/ applyHandlers.push(applyHandler);
      /******/ currentUpdateChunks = {};
      /******/ currentUpdateRemovedChunks = removedChunks;
      /******/ currentUpdate = removedModules.reduce(function (obj, key) {
        /******/ obj[key] = false;
        /******/ return obj;
        /******/
      }, {});
      /******/ currentUpdateRuntime = [];
      /******/ chunkIds.forEach(function (chunkId) {
        /******/ if (
          /******/ __webpack_require__.o(installedChunks, chunkId) &&
          /******/ installedChunks[chunkId] !== undefined
          /******/
        ) {
          /******/ promises.push(loadUpdateChunk(chunkId, updatedModulesList));
          /******/ currentUpdateChunks[chunkId] = true;
          /******/
        }
        /******/
      });
      /******/ if (__webpack_require__.f) {
        /******/ __webpack_require__.f.jsonpHmr = function (chunkId, promises) {
          /******/ if (
            /******/ currentUpdateChunks &&
            /******/ !__webpack_require__.o(currentUpdateChunks, chunkId) &&
            /******/ __webpack_require__.o(installedChunks, chunkId) &&
            /******/ installedChunks[chunkId] !== undefined
            /******/
          ) {
            /******/ promises.push(loadUpdateChunk(chunkId));
            /******/ currentUpdateChunks[chunkId] = true;
            /******/
          }
          /******/
        };
        /******/
      }
      /******/
    };
    /******/
    /******/ __webpack_require__.hmrM = () => {
      /******/ if (typeof fetch === "undefined")
        throw new Error("No browser support: need fetch API");
      /******/ return fetch(
        __webpack_require__.p + __webpack_require__.hmrF()
      ).then((response) => {
        /******/ if (response.status === 404) return; // no update available
        /******/ if (!response.ok)
          throw new Error(
            "Failed to fetch update manifest " + response.statusText
          );
        /******/ return response.json();
        /******/
      });
      /******/
    };
    /******/
    /******/ // no on chunks loaded
    /******/
    /******/ // no jsonp function
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // module cache are used so entry inlining is disabled
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ __webpack_require__(
    "./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info"
  );
  /******/ __webpack_require__("./node_modules/webpack/hot/dev-server.js");
  /******/ var __webpack_exports__ = __webpack_require__("./test ES4/index.js");
  /******/
  /******/
})();
//# sourceMappingURL=main.js.map
