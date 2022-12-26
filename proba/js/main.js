
/*!*************************************************************************************************************************************************************************************************!*\
  !*** css ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./node_modules/sass-loader/dist/cjs.js!./test ES4/styles/scss/styles.scss ***!
  \*************************************************************************************************************************************************************************************************/
// @charset "UTF-8";
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

aside,
nav,
footer,
header,
section {
  display: block;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  min-width: 320px;
  position: relative;
  width: 100%;
  color: #000;
}

body {
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body.lock {
  overflow: hidden;
}
@media (max-width: 768px) {
  body.lock {
    width: 100%;
    position: fixed;
    overflow: hidden;
  }
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
}

.wrapper {
  width: 100%;
  min-height: 100%;
  overflow: hidden;
}

.container {
  max-width: 1345px;
  margin: 0 auto;
  width: 100%;
}
@media (max-width: 1345px) {
  .container {
    max-width: 1200px;
  }
}
@media (max-width: 1200px) {
  .container {
    max-width: 970px;
  }
}
@media (max-width: 992.98px) {
  .container {
    max-width: 750px;
  }
}
@media (max-width: 767.98px) {
  .container {
    max-width: none;
    padding: 0 10px;
  }
}

/*
  
  .menu__top a:hover::before {
    content: "!!!";
    color: #000;
  }
  
  .menu__top a:hover::after {
    content: "!!!";
    color: #000000;
  }
  
  .menu__top a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  
  .menu__top a:link {
    color: $DarkRed;
  }
  
  .menu__top a:visited {
    color: #800080;
  }
  
  .menu__top a:hover {
    color: #1400d4;
  }
  
  .menu__top a:active {
    color: #000000;
  }
  */
header {
  height: 150px;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  padding: 25px 3%;
  background-color: #8b0000;
  box-shadow: #000000 5px 5px 30px 1.5px inset,
    #000000 -5px -5px 30px 1.5px inset;
}
header .header__container {
  max-width: 1200px;
  max-width: 1345px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}

.fixed_menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10;
}

.header-logo .header-logo-smail {
  position: relative;
  width: 100px;
  height: 100px;
  background-color: #ccc;
  border: 4px solid #fad201;
  float: left;
  border-style: ridge;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.header-logo .header-logo-smail .logo-img {
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  left: 22%;
  top: 22%;
  width: 50px;
}
.header-logo .header-logo-smail .logo-down {
  text-align: right;
}
.header-logo .header-logo-smail .logo-up {
  text-align: left;
}
.header-logo .header-logo-smail p {
  color: #8b0000;
}

@media (min-width: 767.98px) {
  .header-menu {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    position: relative;
  }

  .menu__top .menu-list {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  .menu__top .menu-list .items__sub {
    transform: translate(0px, 10%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease 0s;
    pointer-events: none;
  }

  .menu__bottom .menu-set {
    display: flex;
    justify-content: flex-end;
  }
}
body._pc .menu-list__items:hover .items__sub {
  opacity: 1;
  visibility: visible;
  transform: translate(0px, 0px);
  pointer-events: all;
}

body._touch .menu-list__items {
  display: flex;
  align-items: center;
}
body._touch .items__link {
  flex: 1 1 auto;
}
body._touch .items__arrow {
  position: absolute;
  right: 4px;
  display: block;
  width: 0;
  height: 0;
  margin: 0 0 0 5px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid #000;
  transition: transform 0.3s ease 0s;
}
body._touch .menu-list__items._active .items__sub {
  opacity: 1;
  visibility: visible;
  transform: translate(0px, 0px);
  pointer-events: all;
}
body._touch .menu-list__items._active .items__arrow {
  transform: rotate(-180deg);
}

.menu__top .menu-list:hover li:not(:hover) {
  opacity: 0.7;
}
.menu__top .menu-list__items {
  position: relative;
}
.menu__top .menu-list__items:hover {
  z-index: 6;
}
.menu__top .menu-list__items:not(:first-child) {
  margin: 0 0 0px 10px;
}
.menu__top .menu-list__items .items__link {
  position: relative;
  color: #8b0000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  font-size: 25px;
  font-weight: 700;
  font-style: italic;
  list-style-type: none;
  border-radius: 10px;
  border: 2px solid #000;
  box-shadow: -1px -1px 3px #000 inset, 1px 1px 3px black;
}
.menu__top .menu-list__items .items__link:hover {
  color: #000;
  box-shadow: 0 0 3px #555555 inset, 0px 0px 10px black;
}
.menu__top .menu-list__items .items__link:hover::before {
  content: "!";
}
.menu__top .menu-list__items .items__link:hover:after {
  content: "!";
}
.menu__top .menu-list__items:nth-child(1) .items__link {
  background-color: #fad201;
}
.menu__top .menu-list__items:nth-child(2) .items__link {
  background-color: #ff0000;
}
.menu__top .menu-list__items:nth-child(3) .items__link {
  background-color: #0000ff;
}
.menu__top .menu-list__items:nth-child(4) .items__link {
  background-color: #ffa500;
}
.menu__top .menu-list__items:nth-child(5) .items__link {
  background-color: #42aaff;
}
.menu__top .menu-list__items:nth-child(6) .items__link {
  background-color: #00ba00;
}
.menu__top .menu-list__items:nth-child(7) .items__link {
  background-color: #8b00ff;
}
.menu__top .menu-list__items:nth-child(8) a.items__link {
  background-color: #ffffff;
  color: #000;
}
.menu__top .menu-list__items:nth-child(9) a.items__link {
  background-color: #000000;
  color: #fff;
}
.menu__top .menu-list__items:nth-child(9) .items__arrow {
  border-top: 10px solid #fff;
}
.menu__top .menu-list .items__sub {
  position: absolute;
  top: 100%;
  font-style: italic;
  font-size: 16px;
  font-weight: 900;
  text-align: center;
  width: 120px;
  padding: 1px 3px 3px;
  list-style-type: none;
  border: 2px solid #000;
  background: #ccc;
  border-radius: 10px;
}
.menu__top .menu-list .items__sub .sub__li {
  top: 25px;
  margin-top: 3px;
  background: #a3a3a3;
  border: 1px solid #f00;
}
.menu__top .menu-list .items__sub .sub__li .sub__li-a {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu__top .menu-list .items__sub .sub__li .sub__li-a:hover {
  text-decoration: underline;
  color: #000000;
}
.menu__top .menu-list .items__sub .sub__li .sub__li-a:hover::before {
  content: ">";
}
.menu__top .menu-list .items__sub .sub__li .sub__li-a:hover:hover::after {
  content: "<";
}

.items__arrow {
  display: none;
}

.menu__bottom {
  z-index: 5;
}

footer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 120px;
  color: #707070;
  background: #000;
  align-items: center;
}
footer p {
  font-size: 18px;
  color: #fff;
}
.mini-aside {
  position: fixed;
  left: calc(100% - 20px);
  top: 50%;
  top: calc(50% - -27px);
  width: 20px;
  font-size: 12px;
  cursor: pointer;
  opacity: 0.5;
  text-align: center;
  background: #8b0000;
  background: #8b0000;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  transition-duration: 0.1s;
}
.mini-aside:hover {
  width: 40px;
  transition-duration: 0.1s;
  left: calc(100% - 40px);
  opacity: 1;
}
.mini-aside .obol {
  background: #8b0000;
  padding: 5px 0 5px 5px;
}
.mini-aside div.m-a__bl:hover:first-child .ma-bl__js-scroll {
  border-top-left-radius: 10px;
}
.mini-aside div.m-a__bl:hover:last-child .ma-bl__js-scroll {
  border-bottom-left-radius: 10px;
}
.mini-aside div.m-a__bl:hover .ma-bl__js-scroll {
  display: block;
  background-color: red;
}
.mini-aside div.m-a__bl:hover .ma-bl__cont {
  display: none;
}
.mini-aside div.m-a__bl .ma-bl__js-scroll {
  display: none;
}
.mini-aside div.m-a__bl .ma-bl__cont {
  display: block;
  padding: 2px 0;
}

body.scroll-lock {
  overflow: hidden;
}

body {
  background-color: #e8e8e8;
  background-color: #cccccc;
}

body {
  display: block;
}

.content {
  background-color: #cccccc;
}

* {
  scrollbar-width: thin;
  scrollbar-color: #8b0000 #333333;
}
* ::-webkit-scrollbar {
  height: 12px;
  width: 12px;
}
* ::-webkit-scrollbar-button {
  background-image: url("https://yraaa.ru/_pu/24/59610063.png");
  background-color: #ffcb17;
  background-color: #555555;
  background-position: center;
  background-repeat: no-repeat;
  content: "";
}
* ::-webkit-scrollbar-track {
  background-color: #333333;
  box-shadow: 0px 0px 3px #000 inset;
}
* ::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #ffcb17;
  background-color: #8b0000;
  box-shadow: 0px 1px 1px #fff inset;
  background-image: url("https://yraaa.ru/_pu/24/59610063.png");
  background-position: center;
  background-repeat: no-repeat;
}
* ::-webkit-resizer {
  background-image: url("");
  background-repeat: no-repeat;
  width: 7px;
  height: 7px;
}

hr {
  display: block;
  unicode-bidi: -webkit-isolate;
  unicode-bidi: -moz-isolate;
  unicode-bidi: isolate;
  -webkit-margin-before: 7px;
  margin-block-start: 7px;
  -webkit-margin-after: 7px;
  margin-block-end: 7px;
  -webkit-margin-start: auto;
  margin-inline-start: auto;
  -webkit-margin-end: auto;
  margin-inline-end: auto;
  overflow: hidden;
  border-style: groove;
  border-style: ridge;
  border-color: #8b0000;
  border-width: 1px;
  clear: both;
}

a {
  color: #8b0000;
}

p {
  font-size: 14px;
}

h1 {
  padding: 10px 3%;
}

h2,
h3,
h4,
h5,
h6 {
  display: inline-block;
}

.mc0 {
  margin: 0px 3%;
}

.mc1 {
  margin: 10px 3%;
}

.pc0 {
  padding: 0px 3%;
}

.pc1 {
  padding: 10px 3%;
}

.mp0 {
  margin: 0px 0%;
}

.mp1 {
  margin: 10px 0%;
}

.pp0 {
  padding: 0px 0%;
}

.pp1 {
  padding: 10px 0%;
}

.catalog-block,
.game-block,
.manual-block {
  display: flex;
  max-width: 1308px;
  font-size: 0;
  flex-flow: row wrap;
  justify-content: space-between;
}

.helloys,
.block-side {
  color: #8b0000;
  font-family: cursive;
  margin: 0px 0px;
}
.helloys h1,
.helloys h1.b-s_title,
.block-side h1,
.block-side h1.b-s_title {
  font-size: 30px;
  background: yellow;
}
.helloys h2,
.helloys h2.hel-title,
.helloys h2.b-s_title,
.block-side h2,
.block-side h2.hel-title,
.block-side h2.b-s_title {
  display: none;
  font-size: 25px;
  margin: 0 0 10px;
  background: yellow;
}
.helloys h3,
.helloys h3.hel-title,
.helloys h3.b-s_title,
.block-side h3,
.block-side h3.hel-title,
.block-side h3.b-s_title {
  font-size: 20px;
  margin: 0 0 10px;
  background: yellow;
}
.helloys p,
.helloys p.hel-text,
.helloys p.b-s_text,
.block-side p,
.block-side p.hel-text,
.block-side p.b-s_text {
  flex: 1 1 auto;
  padding: 10px 3%;
  line-height: 16px;
  font-size: 15px;
  font-weight: 400;
  word-spacing: 2px;
  letter-spacing: 2px;
}
.helloys p::first-letter,
.helloys p.hel-text::first-letter,
.helloys p.b-s_text::first-letter,
.block-side p::first-letter,
.block-side p.hel-text::first-letter,
.block-side p.b-s_text::first-letter {
  font-size: 30px;
}

.kup #kup,
.kup,
#kup {
  grid-area: kup;
  border-radius: 1px;
  width: 250px;
  height: 57px;
  background-color: #fc0101;
  font-family: fantasy;
  font-size: 30px;
  border: 10px double yellow;
  text-transform: capitalize;
}
.kup #kup h1,
.kup h1,
#kup h1 {
  font-size: 30px;
  margin: 0 0 10px;
  min-height: 50px;
  padding: 10px 0px;
  vertical-align: bottom;
  text-align: left;
  background: yellow;
  color: #8b0000;
  font-family: cursive;
  margin: 0px 0px;
  overflow: hidden;
  background: yellow;
}

#kup:hover {
  color: yellow;
  border-style: ridge;
  border-color: red;
  background: black;
}

#kup:active {
  color: red;
}

.kup {
  background: yellow;
}
.kup h1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #8b0000;
  font-family: cursive;
  font-size: 30px;
  padding: 0px 3%;
}

.block-body,
.centr-text {
  min-height: 200px;
  height: auto;
  padding: 10px 0px;
  font-family: monospace;
  font-family: cursive;
  font-weight: 400;
  color: #707070;
  color: #ccc;
  letter-spacing: 1px;
  word-spacing: 1px;
  word-break: break-all;
  font-weight: 400;
  line-height: 1.2;
}
.block-body h3,
.centr-text h3 {
  padding: 0px 0px;
  font-size: 18px;
  font-family: monospace;
  font-weight: 400;
  font-family: cursive;
}
.block-body p,
.centr-text p {
  font-size: 18px;
  font-family: monospace;
  font-family: cursive;
}

.catalog-block .block-img,
.catalog-block .block-img2,
.catalog-block .block-img3,
.catalog-block .block-img4 {
  flex: 0 1 15%;
  width: 100%;
  height: 100%;
  margin: 0px 0px 2% 2%;
  padding: 5px;
  outline: 3px dashed red;
}
.catalog-block .block-img:first-child,
.catalog-block .block-img2:first-child,
.catalog-block .block-img3:first-child,
.catalog-block .block-img4:first-child {
  margin: 0px 0px 0px 0px;
}
.catalog-block .block-img a.block-img__link,
.catalog-block .block-img2 a.block-img__link,
.catalog-block .block-img3 a.block-img__link,
.catalog-block .block-img4 a.block-img__link {
  display: block;
  padding: 0px 0px 100% 0px;
}
.catalog-block .block-img a.block-img__link--,
.catalog-block .block-img2 a.block-img__link--,
.catalog-block .block-img3 a.block-img__link--,
.catalog-block .block-img4 a.block-img__link-- {
  display: block;
  padding: 5px;
  outline: 3px dashed red;
}
.catalog-block .block-img:hover,
.catalog-block .block-img2:hover,
.catalog-block .block-img3:hover,
.catalog-block .block-img4:hover {
  outline: 3px solid red;
}
.catalog-block .block-img:hover a.block-img__link,
.catalog-block .block-img2:hover a.block-img__link,
.catalog-block .block-img3:hover a.block-img__link,
.catalog-block .block-img4:hover a.block-img__link {
  outline: 3px solid #ff0;
}
@media (max-width: 993px) {
  .catalog-block .block-img,
  .catalog-block .block-img2,
  .catalog-block .block-img3,
  .catalog-block .block-img4 {
    flex: 0 1 20%;
  }
  .catalog-block .block-img:nth-last-child(-n + 2),
  .catalog-block .block-img2:nth-last-child(-n + 2),
  .catalog-block .block-img3:nth-last-child(-n + 2),
  .catalog-block .block-img4:nth-last-child(-n + 2) {
    margin: inherit;
    margin: 2% 0px 0px 0px;
  }
}

.centr-cont- .cont-block- {
  clear: both;
  margin: 10px 0;
}
.centr-cont- .cont-block-:nth-child(n) .block-img- {
  shape-margin: 10px;
  shape-image-threshold: 0.5;
  background-repeat: no-repeat;
  width: 250px;
  height: 250px;
}
.centr-cont- .cont-block-:nth-child(even) .block-img- {
  float: left;
}
.centr-cont- .cont-block-:nth-child(even) .block-text- {
  color: green;
}
.centr-cont- .cont-block-:nth-child(odd) .block-img- {
  float: right;
}
.centr-cont- .cont-block-:nth-child(odd) .block-text- {
  color: red;
}
.centr-cont- .cont-block-:nth-child(odd) .bl-sub- {
  left: 0;
  transform: scale(-1, 1);
}
.centr-cont- .cont-block-:nth-child(1) .block-img- {
  shape-outside: url(../01b76173e4d717090471.png);
  background-image: url(../01b76173e4d717090471.png);
}
.centr-cont- .cont-block-:nth-child(2) .block-img- {
  shape-outside: url(../4c733c8ed0c53b97053c.png);
  background-image: url(../4c733c8ed0c53b97053c.png);
}
.centr-cont- .cont-block-:nth-child(3) .block-img- {
  shape-outside: url(../07197d3a9ac354daa2e0.png);
  background-image: url(../07197d3a9ac354daa2e0.png);
}
.centr-cont- .cont-block-:nth-child(4) .block-img- {
  shape-outside: url(../9a4bbccede2cabeea2c8.png);
  background-image: url(../9a4bbccede2cabeea2c8.png);
}
.centr-cont- .cont-block-:last-child {
  margin: 0 0 25px;
}
.centr-cont- .cont-block- .block-img- {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.centr-cont- .cont-block- .block-img- .ibg- {
  font-family: inherit;
}
.centr-cont- .cont-block- .block-img- .bl-sub- {
  position: absolute;
  content: "";
  right: 35px;
  width: 15px;
  height: 15px;
  background: yellow;
  border-radius: 10px;
  transform: scale(1, -1);
}
.centr-cont- .cont-block- .block-img- .bl-sub-.right {
  transform: scale(-1, -1);
}
.centr-cont- .cont-block- .block-img- .bl-sub-::after {
  content: url(../13b0a3d93494681494f0.png);
  position: absolute;
  bottom: 0;
}
.centr-cont- .cont-block- .block-img- .bl-sub- .sub- {
  width: inherit;
  height: inherit;
  background: none;
  font-size: 0;
}
.centr-cont- .cont-block- .block-text- {
  display: block;
  padding-top: 7%;
  line-height: 1.2;
  letter-spacing: 2px;
  word-spacing: 2px;
  word-break: break-all;
  word-wrap: break-word;
  font-weight: bold;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.centr-cont- .cont-block- .block-text-:first-child {
  color: blue;
}
.centr-cont- .cont-block- .block-text- h3 {
  font-size: 20px;
  padding-bottom: 15px;
}
.centr-cont- .cont-block- .block-text- p {
  font-size: 17px;
  padding-bottom: 10px;
}
.centr-cont- .cont-block- .block-text- .text-short- {
  text-align: center;
}
.centr-cont- .cont-block- .block-text- .text-detail- {
  display: none;
}

.button {
  display: inline-block;
  border-radius: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: manipulation;
  position: relative;
  max-width: 270px;
  padding: 0.35em 1em;
  font-weight: 400;
  font-size: 16px;
  line-height: inherit;
  vertical-align: middle;
  text-align: center;
  white-space: normal;
  word-wrap: normal;
  background-color: #302683;
  border: 3px solid #302683;
}

.row:after {
  display: block;
  content: "";
  clear: both;
}

.rub:after {
  content: "₽";
}

.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

ol.counter {
  list-style-type: none;
  counter-reset: item;
}
ol.counter li {
  position: relative;
  padding: 0px 0px 0px 45px;
}
ol.counter li:before {
  counter-increment: item;
  content: counter(item);
  position: absolute;
  left: 0;
  top: 0;
  color: #818181;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  line-height: 26px;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  border: 1px solid #4274bb;
}

.ellipsis {
  display: block;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.es {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.table {
  display: table;
  font-size: 0;
  width: 100%;
  table-layout: fixed;
}

.trow {
  display: table-row;
}

.cell {
  display: table-cell;
}
.cell.full {
  width: 100%;
}

.ibg {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.ibg img {
  display: none;
}

.video {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 56.25%;
}
.video video,
.video iframe,
.video object,
.video embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.videobg video,
.videobg iframe,
.videobg object,
.videobg embed {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  transform: translateX(-50%) translateY(-50%);
  background-size: cover;
}

.moretext {
  overflow: hidden;
}

.moretext__more {
  cursor: pointer;
}
.moretext__more i {
  font-style: normal;
}
.moretext__more i:first-child {
  display: block;
}
.moretext__more i:last-child {
  display: none;
}
.moretext__more.active i {
  font-style: normal;
}
.moretext__more.active i:first-child {
  display: none;
}
.moretext__more.active i:last-child {
  display: block;
}

.graystyle {
  transition: all 0.8s ease 0s;
  filter: grayscale(1);
  -webkit-filter: grayscale(1);
  -moz-filter: grayscale(1);
  -o-filter: grayscale(1);
}

.graystyleoff {
  filter: grayscale(0);
  -webkit-filter: grayscale(0);
  -moz-filter: grayscale(0);
  -o-filter: grayscale(0);
}

.slick-slider {
  position: relative;
}
.slick-slider .slick-track,
.slick-slider .slick-list {
  transform: translate3d(0, 0, 0);
}
.slick-slider .slick-list {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.slick-slider .slick-track {
  position: relative;
  width: 100%;
}
.slick-slider .slick-slide {
  overflow: hidden;
  float: left;
  position: relative;
}

.tab__item {
  display: none;
}
.tab__item.active {
  display: block;
}

.mirror {
  transform: scale(-1, 1);
}

.nicescroll-rails {
  z-index: 1000 !important;
}

.gm-style-iw-t {
  opacity: 0;
}

.baloon {
  opacity: 1;
  right: -7px !important;
  bottom: 80px !important;
}
.baloon button {
  display: none !important;
}
.baloon:after {
  display: none !important;
}

.baloon-style {
  display: none;
}

.baloon-content.gm-style-iw {
  opacity: 1;
  border-radius: 0px !important;
  max-width: 300px !important;
  padding: 0 !important;
  left: 0 !important;
  width: 100% !important;
  overflow: visible !important;
}
.baloon-content.gm-style-iw > .gm-style-iw-d {
  overflow: hidden !important;
  max-width: none !important;
}
.baloon-content.gm-style-iw:after {
  display: none !important;
}

.baloon-close {
  top: 18px !important;
}

.menu__bottom .menu-set__items {
  width: 100px;
  height: 30px;
}
.menu__bottom .menu-set__items:not(:first-child) {
  margin: 0 0 0px 30px;
}
.menu__bottom .menu-set__items:last-child {
  width: 30px;
  margin: 0 12px 0px 42px;
}
.menu__bottom .menu-set__items:first-child,
.menu__bottom .menu-set__items:nth-child(2),
.menu__bottom .menu-set__items:nth-child(3),
.menu__bottom .menu-set__items:nth-child(4),
.menu__bottom .menu-set__items:nth-child(5) {
  display: none;
}

.m-s-switcher-0 *,
.m-s-switcher-0 *:before,
.m-s-switcher-0 *:after {
  transition: 0.25s ease-in-out;
}
.m-s-switcher-0 h1 {
  font-size: 30px;
  text-align: center;
  padding: 0 0 25px 0;
  color: #606060;
}
.m-s-switcher-0 .checkbox-label {
  display: block;
  position: relative;
  height: 20px;
  width: 72px;
  margin: 2px 0 0 0;
  border-radius: 50px;
  background: #f3f3f3;
  box-shadow: 0 0 0 2px #dddddd;
}
.m-s-switcher-0 .checkbox-label .on {
  display: block;
  position: absolute;
  z-index: 0;
  left: 0;
  min-width: 300px;
  line-height: 50px;
  display: block;
  position: absolute;
  top: -25px;
  opacity: 0;
  color: #13bf11;
  color: #13bf11;
}
.m-s-switcher-0 .checkbox-label .off {
  display: block;
  position: absolute;
  z-index: 0;
  right: 100px;
  text-align: right;
  opacity: 1;
  min-width: 300px;
  line-height: 50px;
  opacity: 1;
  color: #bbbbbb;
}
.m-s-switcher-0 .checkbox-label:before {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  border-radius: 50px;
  height: 20px;
  width: 40px;
  background: white;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2), 0 0 0 2px #dddddd;
}
.m-s-switcher-0 .checkbox {
  position: absolute;
  left: -5000px;
}
.m-s-switcher-0 .checkbox:checked + .checkbox-label {
  background: #13bf11;
  box-shadow: 0 0 0 2px #13bf11;
}
.m-s-switcher-0 .checkbox:checked + .checkbox-label .on {
  left: 100px;
  opacity: 1;
}
.m-s-switcher-0 .checkbox:checked + .checkbox-label .off {
  right: 0px;
  opacity: 0;
}
.m-s-switcher-0 .checkbox:checked + .checkbox-label:before {
  left: 36px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2), 0 0 0 2px #13bf11;
}
.m-s-switcher-0 .checkbox.blue {
  position: absolute;
  left: -5000px;
}
.m-s-switcher-0 .checkbox.blue + .checkbox-label .on {
  color: #1fc1c8;
}
.m-s-switcher-0 .checkbox.blue:checked + .checkbox-label {
  background: #1fc1c8;
  box-shadow: 0 0 0 2px #1fc1c8;
}
.m-s-switcher-0 .checkbox.blue:checked + .checkbox-label .on {
  left: 100px;
  opacity: 1;
}
.m-s-switcher-0 .checkbox.blue:checked + .checkbox-label .off {
  right: 0px;
  opacity: 0;
}
.m-s-switcher-0 .checkbox.blue:checked + .checkbox-label:before {
  left: 30px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2), 0 0 0 2px #1fc1c8;
}

.m-s-switcher-1 {
  /* $activeColor: #c0392b; //red */
  /* $background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/13460/dark_wall.png'); */
  background: #333;
  position: relative;
  border-radius: 50px;
  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5),
    0px 1px 0px rgba(255, 255, 255, 0.2);
}
.m-s-switcher-1:after {
  content: "OFF";
  color: #000;
  position: absolute;
  right: 5px;
  top: 12%;
  z-index: 0;
  font: 17px/26px Arial, sans-serif;
  font-weight: bold;
  text-shadow: 2px 2px 0px rgba(255, 255, 255, 0.15);
}
.m-s-switcher-1:before {
  content: "ON";
  color: #27ae60;
  position: absolute;
  left: 5px;
  top: 12%;
  z-index: 0;
  font: 17px/26px Arial, sans-serif;
  font-weight: bold;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.75);
}
.m-s-switcher-1 label {
  display: block;
  width: 54px;
  height: 28px;
  cursor: pointer;
  position: absolute;
  top: 2px;
  left: 3px;
  z-index: 1;
  background: #fcfff4;
  background: linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
  border-radius: 50px;
  transition: all 0.4s ease;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
}
.m-s-switcher-1 input[type="checkbox"] {
  visibility: hidden;
}
.m-s-switcher-1 input[type="checkbox"]:checked + label {
  left: 44px;
}

.sw-blwh {
  display: flex;
  height: inherit;
}
.sw-blwh .swblwh {
  position: relative;
  width: 100%;
  height: 30px;
  height: inherit;
  border-radius: 25px;
}
.sw-blwh .swblwh input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  width: 100%;
  height: 30px;
  height: inherit;
  border-radius: 25px;
  background-color: #1e1e1e;
  outline: none;
  font-family: "Oswald", sans-serif;
  font: 17px/26px Arial, sans-serif;
  line-height: 2;
  font-weight: bold;
}
.sw-blwh .swblwh input:before,
.sw-blwh .swblwh input:after {
  z-index: 2;
  position: absolute;
  top: 52%;
  transform: translateY(-50%);
}
.sw-blwh .swblwh input:before {
  content: "ON";
  left: 10px;
  text-shadow: 0px 0px 15px #cccccc;
  text-shadow: 0px 0px 7px #707070;
}
.sw-blwh .swblwh input:after {
  content: "OFF";
  right: 10px;
  color: #ffffff;
  transition: color 0.5s 0.2s;
  text-shadow: 0px 0px 10px white;
}
.sw-blwh .swblwh label {
  z-index: 1;
  position: absolute;
  top: 2px;
  bottom: 2px;
  border-radius: 20px;
}
.sw-blwh .swblwh-2 input {
  transition: 0.25s -0.1s;
}
.sw-blwh .swblwh-2 input:checked {
  background: #333;
  background-color: #ffffff;
}
.sw-blwh .swblwh-2 input:checked:before {
  color: #ffffff;
  transition: color 0.5s 0.2s;
  text-shadow: 0px 0px 10px white;
}
.sw-blwh .swblwh-2 input:checked:after {
  color: #ffffff;
  transition: color 0.5s;
  text-shadow: 0px 0px 10px #cccccc;
}
.sw-blwh .swblwh-2 input:checked + label {
  left: 2px;
  right: 56px;
  right: 46px;
  background: #1e1e1e;
  transition: left 0.5s, right 0.4s 0.2s;
}
.sw-blwh .swblwh-2 input:not(:checked) {
  background: #1e1e1e;
  transition: background 0.5s -0.1s;
}
.sw-blwh .swblwh-2 input:not(:checked):before {
  color: #1e1e1e;
  color: #1a1a1a;
  transition: color 0.5s;
}
.sw-blwh .swblwh-2 input:not(:checked):after {
  color: #1e1e1e;
  transition: color 0.5s 0.2s;
  text-shadow: 1px 1px 0px #cccccc;
  text-shadow: 2px 1px 2px #888;
}
.sw-blwh .swblwh-2 input:not(:checked) + label {
  left: 46px;
  right: 2px;
  background: #ffffff;
  transition: left 0.4s 0.2s, right 0.5s, background 0.35s -0.1s;
}
.sw-blwh .swblwh-3 {
  overflow: hidden;
}
.sw-blwh .swblwh-3 input {
  transition: background-color 0s 0.5s;
}
.sw-blwh .swblwh-3 input:before {
  color: #1e1e1e;
}
.sw-blwh .swblwh-3 input:after {
  color: #ffffff;
}
.sw-blwh .swblwh-3 input:checked {
  background-color: #ffffff;
}
.sw-blwh .swblwh-3 input:checked:before {
  transition: color 0.5s 0.2s;
  text-shadow: 0px 0px 10px #555555;
  text-shadow: 1px 1px 0px #cccccc;
}
.sw-blwh .swblwh-3 input:checked:after {
  color: #ffffff;
  transition: color 0.5s 0.2s;
  text-shadow: 0px 0px 10px #cccccc;
}
.sw-blwh .swblwh-3 input:checked + label {
  background: #ffffff;
  -webkit-animation: turn-on 0.5s ease-out;
  animation: turn-on 0.5s ease-out;
}
@-webkit-keyframes turn-on {
  0% {
    left: 100%;
  }
  100% {
    left: 0%;
  }
}
@keyframes turn-on {
  0% {
    left: 100%;
  }
  100% {
    left: 0%;
  }
}
.sw-blwh .swblwh-3 input:not(:checked) {
  background: #1e1e1e;
}
.sw-blwh .swblwh-3 input:not(:checked) + label {
  background: #1e1e1e;
  -webkit-animation: turn-off 0.5s ease-out;
  animation: turn-off 0.5s ease-out;
  -webkit-animation: turn-off 0.5s ease;
  animation: turn-off 0.5s ease;
}
@-webkit-keyframes turn-off {
  0% {
    right: 100%;
  }
  100% {
    right: 0%;
  }
}
@keyframes turn-off {
  0% {
    right: 100%;
  }
  100% {
    right: 0%;
  }
}
.sw-blwh .swblwh-3 label {
  top: 0px !important;
  width: 100px;
  height: 30px;
  border-radius: 20px;
}

.m-s-switcher-4 {
  /*
     * Toggle button variables
     */
  /*
     * Toggle button styles
     */
}
.m-s-switcher-4 .toggle-button {
  position: relative;
  display: inline-block;
  color: #fff;
}
.m-s-switcher-4 .toggle-button label {
  display: inline-block;
  text-transform: uppercase;
  cursor: pointer;
  text-align: left;
}
.m-s-switcher-4 .toggle-button input {
  display: none;
}
.m-s-switcher-4 .toggle-button__icon {
  cursor: pointer;
  pointer-events: none;
}
.m-s-switcher-4 .toggle-button__icon:before,
.m-s-switcher-4 .toggle-button__icon:after {
  content: "";
  position: absolute;
  top: 45%;
  left: 35%;
  transition: 0.2s ease-out;
}
.m-s-switcher-4 .toggle-button--aava label {
  height: 35px;
  line-height: 35px;
  transition: all 0.2s;
  border-radius: 2rem;
}
.m-s-switcher-4 .toggle-button--aava label:before,
.m-s-switcher-4 .toggle-button--aava label:after {
  position: absolute;
  right: 1.5rem;
  transition: all 0.2s 0.1s ease-out;
}
.m-s-switcher-4 .toggle-button--aava label:before {
  content: attr(data-on-text);
}
.m-s-switcher-4 .toggle-button--aava label:after {
  content: attr(data-off-text);
}
.m-s-switcher-4 .toggle-button--aava input[type="checkbox"] + label {
  width: 100px;
  background: #ff5335;
}
.m-s-switcher-4 .toggle-button--aava input[type="checkbox"] + label:before {
  opacity: 0;
  transform: translate(0, 20px);
}
.m-s-switcher-4 .toggle-button--aava input[type="checkbox"] + label:after {
  opacity: 1;
  transform: translate(0, 0);
}
.m-s-switcher-4 .toggle-button--aava input[type="checkbox"]:checked ~ label {
  width: 100px;
  background: #61b136;
}
.m-s-switcher-4
  .toggle-button--aava
  input[type="checkbox"]:checked
  ~ label:before {
  opacity: 1;
  transform: translate(0, 0);
}
.m-s-switcher-4
  .toggle-button--aava
  input[type="checkbox"]:checked
  ~ label:after {
  opacity: 0;
  transform: translate(0, -20px);
}
.m-s-switcher-4
  .toggle-button--aava
  input[type="checkbox"]:checked
  ~ .toggle-button__icon:before {
  transform: translate(-10%, 100%) rotate(45deg);
  width: 16.66667px;
}
.m-s-switcher-4
  .toggle-button--aava
  input[type="checkbox"]:checked
  ~ .toggle-button__icon:after {
  transform: translate(30%) rotate(-45deg);
}
.m-s-switcher-4 .toggle-button--aava .toggle-button__icon {
  position: absolute;
  left: 0;
  top: 0;
  height: 35px;
  width: 35px;
}
.m-s-switcher-4 .toggle-button--aava .toggle-button__icon:before,
.m-s-switcher-4 .toggle-button--aava .toggle-button__icon:after {
  height: 3px;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
}
.m-s-switcher-4 .toggle-button--aava .toggle-button__icon:before {
  width: 25px;
  transform: rotate(45deg);
}
.m-s-switcher-4 .toggle-button--aava .toggle-button__icon:after {
  width: 25px;
  transform: rotate(-45deg);
}

.sw-3btn .sw3btn {
  position: relative;
  display: inline-block;
  height: 40px;
  width: 100%;
  z-index: 1;
}
.sw-3btn .sw3btn__dark {
  left: 3px;
  width: 33%;
  height: 100%;
}
.sw-3btn .sw3btn__neutral {
  left: 31%;
  width: 33%;
  height: 100%;
}
.sw-3btn .sw3btn__light {
  right: 3px;
  width: 33%;
  height: 100%;
}
.sw-3btn .sw3btn-label {
  position: absolute;
  /* text-indent: -9999px; */
  /* z-index: 2; */
  display: flex;
  /* left: 5px; */
  align-items: center;
  justify-content: center;
}
.sw-3btn .sw3btn input {
  visibility: hidden;
  position: absolute;
}
.sw-3btn .sw3btn-slider {
  height: 100%;
  width: 100%;
  border-radius: 25px;
  box-shadow: 0 0 3px #555555 inset, 0 0 10px black;
  transition: background-color 0.2s linear 0s;
  transition: all 0.3s ease 0s;
  display: flex;
  align-items: center;
}
.sw-3btn .sw3btn-slider:before {
  content: "🌑";
  position: absolute;
  font-size: 25px;
  transition: left 0.2s linear 0s, right 0.2s linear 0s;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition: all 0.5s cubic-bezier(0, 0.55, 0.45, 1);
  transition: all 0.3s ease 0s;
}
.sw-3btn .sw3btn-radio__light:checked ~ .sw3btn-slider {
  background-color: #ddd;
}
.sw-3btn .sw3btn-radio__neutral:checked ~ .sw3btn-slider {
  background: #fad201;
}
.sw-3btn .sw3btn-radio__dark:checked ~ .sw3btn-slider {
  background-color: #b40000;
}
.sw-3btn .sw3btn-radio__dark ~ .sw3btn-slider {
  background-color: #b40000;
}
.sw-3btn .sw3btn-radio__dark:checked ~ .sw3btn-slider:before {
  content: "🌑";
  left: 3px;
  left: 0;
}
.sw-3btn .sw3btn-radio__neutral:checked ~ .sw3btn-slider:before {
  content: "🌗";
  left: calc(100% / 3 - 3.5px);
  left: calc(100% / 3 - 3px);
}
.sw-3btn .sw3btn-radio__light:checked ~ .sw3btn-slider:before {
  content: "🌕";
  left: calc(2 * ((100% - 6px) / 3));
  right: 0;
  left: calc(100% - 34px);
  left: calc(100% - 33.5px);
}

.sw-4btn .sw4btn {
  position: relative;
  display: inline-block;
}
.sw-4btn .sw4btn i {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: #ccc;
  border-radius: 50%;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3),
    inset 1px 1px 2px rgba(255, 255, 255, 0.4),
    inset -1px -1px 2px rgba(0, 0, 0, 0.4);
}
.sw-4btn .sw4btn i,
.sw-4btn .sw4btn i:before,
.sw-4btn .sw4btn i:after {
  transition: all 0.3s;
}
.sw-4btn .sw4btn i:before {
  content: " ";
  display: block;
  position: absolute;
  left: 30%;
  top: 30%;
  width: 40%;
  height: 40%;
  border-radius: 50%;
  box-shadow: -30px 0 0 #707070, 0 30px 0 #707070, 30px 0 0 #707070;
  box-shadow: -30px -13px 0 #707070, -30px 13px 0 #707070, 30px -13px 0 #707070,
    30px 13px 0 #707070;
}
.sw-4btn .sw4btn i:after {
  content: " ";
  display: block;
  position: absolute;
  top: calc(50% - 1px);
  left: 0;
  width: 50%;
  border-bottom: solid 3px #666;
  transform-origin: 20px 50%;
}
.sw-4btn .sw4btn label {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: -40%;
  top: 63%;
  width: 40%;
  height: 40%;
  text-align: center;
  border-radius: 50px;
}
.sw-4btn .sw4btn label + label {
  left: -40%;
  top: 0%;
}
.sw-4btn .sw4btn label + label + label {
  right: -40% !important;
  left: 110%;
  top: 3%;
  top: 0%;
}
.sw-4btn .sw4btn label + label + label + label {
  right: -40% !important;
  left: 110%;
  top: 97%;
  top: 63%;
}
.sw-4btn .sw4btn > input[type="radio"] {
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 0;
  opacity: 0;
}
.sw-4btn .sw4btn > input[type="radio"]:first-child {
  z-index: 10;
}
.sw-4btn .sw4btn > input[type="radio"]:first-child:checked {
  z-index: 0;
}
.sw-4btn .sw4btn > input[type="radio"]:checked + input[type="radio"] {
  z-index: 10;
}
.sw-4btn .sw4btn > input[type="radio"]:checked + i {
  background-color: #0f0;
  background: #00ba00;
}
.sw-4btn .sw4btn > input[type="radio"]:checked + i + label,
.sw-4btn .sw4btn > input[type="radio"]:checked + i + label + label,
.sw-4btn .sw4btn > input[type="radio"]:checked + i + label + label + label {
  background: none;
  background: red;
  background-color: #b40000;
}
.sw-4btn .sw4btn > input[type="radio"]:checked + input[type="radio"] + i {
  background-color: #00f;
}
.sw-4btn
  .sw4btn
  > input[type="radio"]:checked
  + input[type="radio"]
  + i
  + label,
.sw-4btn
  .sw4btn
  > input[type="radio"]:checked
  + input[type="radio"]
  + i
  + label
  + label,
.sw-4btn
  .sw4btn
  > input[type="radio"]:checked
  + input[type="radio"]
  + i
  + label
  + label
  + label
  + label {
  background: none;
  background: red;
  background-color: #b40000;
}
.sw-4btn
  .sw4btn
  > input[type="radio"]:checked
  + input[type="radio"]
  + input[type="radio"]
  + i {
  background-color: #ff0;
  background-color: #b40000;
}
.sw-4btn
  .sw4btn
  > input[type="radio"]:checked
  + input[type="radio"]
  + input[type="radio"]
  + i
  + label,
.sw-4btn
  .sw4btn
  > input[type="radio"]:checked
  + input[type="radio"]
  + input[type="radio"]
  + i
  + label
  + label
  + label,
.sw-4btn
  .sw4btn
  > input[type="radio"]:checked
  + input[type="radio"]
  + input[type="radio"]
  + i
  + label
  + label
  + label
  + label {
  background: none;
  background-color: #b40000;
}
.sw-4btn
  .sw4btn
  > input[type="radio"]:checked
  + input[type="radio"]
  + input[type="radio"]
  + input[type="radio"]
  + i {
  background-color: #fad201;
}
.sw-4btn
  .sw4btn
  > input[type="radio"]:checked
  + input[type="radio"]
  + input[type="radio"]
  + input[type="radio"]
  + i
  + label
  + label,
.sw-4btn
  .sw4btn
  > input[type="radio"]:checked
  + input[type="radio"]
  + input[type="radio"]
  + input[type="radio"]
  + i
  + label
  + label
  + label,
.sw-4btn
  .sw4btn
  > input[type="radio"]:checked
  + input[type="radio"]
  + input[type="radio"]
  + input[type="radio"]
  + i
  + label
  + label
  + label
  + label {
  background: none;
  background-color: #b40000;
}
.sw-4btn .sw4btn > input[type="radio"]:checked + i:after {
  transform: rotate(150deg);
  transform: rotate(210deg);
}
.sw-4btn .sw4btn > input[type="radio"]:checked + input[type="radio"] + i:after {
  transform: rotate(-30deg);
  transform: rotate(150deg);
}
.sw-4btn
  .sw4btn
  > input[type="radio"]:checked
  + input[type="radio"]
  + input[type="radio"]
  + i:after {
  transform: rotate(30deg);
}
.sw-4btn
  .sw4btn
  > input[type="radio"]:checked
  + input[type="radio"]
  + input[type="radio"]
  + input[type="radio"]
  + i:after {
  transform: rotate(-30deg);
}

.block {
  display: none;
  width: 100%;
  height: 100px;
}

#block1 {
  background-color: red;
}

#block2 {
  background-color: blue;
}

.dlJQ {
  display: flex;
  background-color: #000;
}
.dlJQ .btn {
  width: 100px;
  height: 50px;
  margin: 0px 10px;
}

.block.active {
  display: block;
}

.probb1 .blocks {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.probb1 .user {
  background-color: black;
  color: white;
  padding: 10px;
  transition: margin-top 0.2s linear;
}
.probb1 .user + .user {
  margin-top: 20px;
}
.probb1 .user.active > * + * {
  margin-top: 10px;
  max-height: 100%;
}
.probb1 .trigger {
  background-color: yellow;
  color: black;
  padding: 5px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 2px solid transparent;
  transition: border-color 0.2s linear, color 0.2s linear;
}
.probb1 .trigger:hover {
  border-color: red;
  color: red;
}
.probb1 .user.active .trigger {
  border-color: white !important;
  color: green !important;
}
.probb1 .settings {
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.2s linear, margin-top 0.2s linear;
}

body {
  /* --ON и --OFF заменяют двоичную переменную */
  --ON: initial;
  --OFF: ;
}

/* выбираем светлую тему по умолчанию */
.--theme_dark {
  --dark: var(--ON);
  --light: var(--OFF);
  --neutral: var(--OFF);
}

.--theme_neutral {
  --neutral: var(--ON);
  --light: var(--OFF);
  --dark: var(--OFF);
}

.--theme_light {
  --light: var(--ON);
  --neutral: var(--OFF);
  --dark: var(--OFF);
}

/* медиа-запрос теперь нужен только для переключения */
@media (prefers-color-scheme: dark) {
  .--theme_dark {
    --dark: var(--ON);
    --neutral: var(--OFF);
    --light: var(--OFF);
  }
}
body {
  --baz-bkg-color: var(--dark, #140f0b) var(--neutral, #333)
    var(--light, #858585);
  --hed-bkg-color: var(--dark, #35170c) var(--neutral, $DarkRed)
    var(--light, #4b4b4b);
  --hed-bkg-color: var(--dark, #4b0000) var(--neutral, $DarkRed)
    var(--light, #4b4b4b);
  --bkd-col: var(--dark, #080707) var(--neutral, #500000) var(--light, #cccccc);
  --text-color: var(--dark, #555555) var(--neutral, #1b0000)
    var(--light, #000000);
  --hel-p-bkg-color: var(--dark, #4d220e) var(--neutral, #555)
    var(--light, #ccc);
  --hel-p-color: var(--dark, #4b0000) var(--neutral, $DarkRed)
    var(--light, #000000);
  --hel-p-color: var(--dark, #1b0000) var(--neutral, $DarkRed)
    var(--light, #000000);
  --hel-p-color: var(--dark, #555555) var(--neutral, $DarkRed)
    var(--light, #000000);
  --hel-h-color: var(--dark, #6b0000) var(--neutral, $DarkRed)
    var(--light, #000000);
  --hel-h-bkg-color: var(--dark, #35170c) var(--neutral, #fad201)
    var(--light, #ccc);
  --link-color: var(--dark, #b76c10) var(--neutral, #cde404)
    var(--light, #0089c7);
  --primary-color: var(--dark, #8916b9) var(--neutral, #c07d00)
    var(--light, #165fb9);
}

body {
  background: var(--baz-bkg-color);
}

header {
  background: var(--hed-bkg-color);
}

hr {
  color: var(--bkd-col);
}

.helloys h1,
.helloys h2,
.helloys h3 {
  text-align: center;
  background-color: var(--hel-h-bkg-color);
}
.helloys p {
  background-color: var(--hel-p-bkg-color);
  color: var(--hel-p-color);
}

.block-body,
.centr-text {
  color: var(--text-color);
}
.block-body h3,
.centr-text h3 {
  background-color: var(--h-bkg-color);
  color: var(--text-color);
}

body {
  --ON: initial;
  --OFF: ;
}

.--size_mid {
  --mid: var(--ON);
  --small: var(--OFF);
  --big: var(--OFF);
  --off: var(--OFF);
}

.--size_small {
  --small: var(--ON);
  --mid: var(--OFF);
  --big: var(--OFF);
  --off: var(--OFF);
}

.--size_big {
  --big: var(--ON);
  --small: var(--OFF);
  --mid: var(--OFF);
  --off: var(--OFF);
}

.--size_off {
  --off: var(--ON);
  --small: var(--OFF);
  --mid: var(--OFF);
  --big: var(--OFF);
}

@media (prefers-reduced-motion: reduce) {
  .--size_off {
    --big: var(--ON);
    --small: var(--OFF);
    --mid: var(--OFF);
    --off: var(--OFF);
  }
}
body {
  --width: var(--big, 120px) var(--mid, 100px) var(--small, 80px)
    var(--off, 80px);
  --width-swit: var(--big, 100px) var(--mid, 95px) var(--small, 90px)
    var(--off, 90px);
  --height: var(--big, 35px) var(--mid, 30px) var(--small, 25px)
    var(--off, 25px);
  --font-size-big: var(--big, 22px) var(--mid, 18px) var(--small, 15px)
    var(--off, 15px);
  --font-size-mid: var(--big, 16px) var(--mid, 14px) var(--small, 11px)
    var(--off, 11px);
  --font-size-small: var(--big, 22px) var(--mid, 17px) var(--small, 15px)
    var(--off, 15px);
  --font-weight: var(--big, 700) var(--mid, 400) var(--small, 200)
    var(--off, 200);
  --border: var(--big, 1px solid #000) var(--mid, 1px solid #000)
    var(--small, 0.5px solid #000) var(--off, 0px solid #000);
  --border-radius: var(--big, 7px) var(--mid, 5px) var(--small, 2px)
    var(--off, 0px);
  --mar-bl: var(--big, 5px) var(--mid, 0px) var(--small, 0px) var(--off, 0px);
  --bor-wid: var(--big, 5px) var(--mid, 5px) var(--small, 3px) var(--off, 0px);
  --switcher-1-top: var(--big, 16%) var(--mid, 12%) var(--small, 5%)
    var(--off, 5%);
  --switcher-1-lab: var(--big, 32px) var(--mid, 27px) var(--small, 22px)
    var(--off, 22px);
  --swblwh-2-lef: var(--big, 10px) var(--mid, 9px) var(--small, 8px)
    var(--off, 8px);
  --swblwh-2-lef: var(--big, 14px) var(--mid, 13px) var(--small, 12px)
    var(--off, 12px);
  --swblwh-2-rig: var(--big, 10px) var(--mid, 9px) var(--small, 8px)
    var(--off, 8px);
  --swblwh-2-fo-si: var(--big, 17px) var(--mid, 15px) var(--small, 13px)
    var(--off, 13px);
  --sw3btn-aft: var(--big, 33.5px) var(--mid, 30px) var(--small, 26px)
    var(--off, 26px);
  --sw3btn-top: var(--big, -1px) var(--mid, 4px) var(--small, -3px)
    var(--off, -3px);
  --sw3btn-neut: var(--big, 1px) var(--mid, 0px) var(--small, -1px)
    var(--off, -1px);
  --sw3btn-befo: var(--big, 25px) var(--mid, 22px) var(--small, 19px)
    var(--off, 19px);
  --sw4btn-box-sh: var(--big, -24px 11px 0 #707070)
    var(--mid, -22px -9px 0 #707070) var(--small, 20px -8.5px 0 #707070)
    var(--off, 19.5px 8px 0 #707070);
  --sw4btn-top: var(--big, 4px) var(--mid, -2px) var(--small, -3px)
    var(--off, 5px);
  --sw4btn-left: var(--big, 0px) var(--mid, 0px) var(--small, -14px)
    var(--off, -14px);
  --bot-it-fir-mar: var(--big, 30px) var(--mid, 25px) var(--small, 20px)
    var(--off, 20px);
  --bot-it-las-mar-rig: var(--big, 14px) var(--mid, 12px) var(--small, 10px)
    var(--off, 10px);
  --bot-it-las-mar-lef: var(--big, 44px) var(--mid, 37px) var(--small, 30px)
    var(--off, 30px);
}

hr {
  -webkit-margin-before: var(--mar-bl);
  margin-block-start: var(--mar-bl);
  -webkit-margin-after: var(--mar-bl);
  margin-block-end: var(--mar-bl);
  border-width: var(--bor-wid);
}

.helloys h1,
.helloys h2 {
  margin: 0px 0px var(--mar-bl);
}

header .menu__top .menu-list .menu-list__items .items__link {
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size-big);
  border: var(--border);
  border-radius: var(--border-radius);
}
header .menu__top .menu-list .items__sub {
  width: var(--width);
}
header .menu__top .menu-list .items__sub .sub__li-a {
  font-size: var(--font-size-mid);
}
header .menu__bottom .menu-set__items {
  height: var(--height);
  width: var(--width-swit);
}
header .menu__bottom .menu-set__items:not(:first-child) {
  margin: 0px 0px 0px var(--bot-it-fir-mar);
}
header .menu__bottom .menu-set__items:last-child {
  margin: 0px var(--bot-it-las-mar-rig) 0px var(--bot-it-las-mar-lef);
}
header .m-s-switcher-1:before,
header .m-s-switcher-1::after {
  top: var(--switcher-1-top);
}
header .m-s-switcher-1 label {
  height: var(--switcher-1-lab);
}
header .m-s-switcher.sw-blwh {
  height: var(--height);
}
header .m-s-switcher.sw-blwh .swblwh input:before {
  left: var(--swblwh-2-lef);
  font-size: var(--swblwh-2-fo-si);
}
header .m-s-switcher.sw-blwh .swblwh input:after {
  right: var(--swblwh-2-rig);
  font-size: var(--swblwh-2-fo-si);
}
header .m-s-switcher.sw-blwh .swblwh-3 label {
  height: var(--height);
}
header .m-s-switcher-4 .toggle-button--aava label {
  height: var(--height);
  line-height: var(--height);
}
header .m-s-switcher-4 .toggle-button--aava .toggle-button__icon {
  height: var(--height);
  width: var(--height);
}
header .m-s-switcher.sw-3btn .sw3btn {
  height: var(--height);
}
header .m-s-switcher.sw-3btn .sw3btn-slider:before {
  font-size: var(--sw3btn-befo);
}
header
  .m-s-switcher.sw-3btn
  .sw3btn-radio__light:checked
  ~ .sw3btn-slider:before {
  left: calc(100% - var(--sw3btn-aft));
}
header
  .m-s-switcher.sw-3btn
  .sw3btn-radio__neutral:checked
  ~ .sw3btn-slider:before {
  left: calc(100% / 3 - var(--sw3btn-neut));
}
header .m-s-switcher.sw-3btn .sw3btn-radio__dark ~ .sw3btn-slider:before {
  font-size: var(--sw3btn-befo);
}
header .m-s-switcher.sw-4btn {
  height: var(--height);
  width: var(--height);
}
header .m-s-switcher.sw-4btn .sw4btn-rotate {
  height: var(--height);
  width: var(--height);
}
header .m-s-switcher.sw-4btn .sw4btn > input[type="radio"],
header .m-s-switcher.sw-4btn .sw4btn i {
  height: var(--height);
  width: var(--height);
}
header .m-s-switcher.sw-4btn .sw4btn i:before {
  box-shadow: var(--sw4btn-box-sh);
}
header .m-s-switcher.sw-4btn .sw4btn i:after {
  top: calc(50% - var(--sw4btn-top));
  left: var(--sw4btn-left);
}

/* Или применяем через медиа-запрос */
.header-logo-smail:hover {
  -webkit-animation: logoImgColor 3s linear infinite 0s;
  animation: logoImgColor 3s linear infinite 0s;
}
@-webkit-keyframes logoImgColor {
  25% {
    background-color: red;
  }
  50% {
    background-color: yellow;
  }
  75% {
    background-color: blue;
  }
}
@keyframes logoImgColor {
  25% {
    background-color: red;
  }
  50% {
    background-color: yellow;
  }
  75% {
    background-color: blue;
  }
}
.header-logo-smail:hover .logo-down,
.header-logo-smail:hover .logo-up {
  display: none;
}
.header-logo-smail:hover .logo-img {
  position: inherit;
  top: 0;
  left: 0;
  width: auto;
  -webkit-animation: logoImgSize 3s linear infinite 0s;
  animation: logoImgSize 3s linear infinite 0s;
}
@-webkit-keyframes logoImgSize {
  0% {
    transform: rotate(0deg);
  }
  12% {
    transform: rotate(0.72turn) scale(0.5);
  }
  20% {
    transform: rotate(1.25turn);
  }
  25% {
    transform: rotate(1.25turn);
  }
  37% {
    transform: rotate(1.87turn) scale(0.5);
  }
  45% {
    transform: rotate(2.5turn);
  }
  50% {
    transform: rotate(2.5turn);
  }
  62% {
    transform: rotate(3.12turn) scale(0.5);
  }
  70% {
    transform: rotate(3.75turn);
  }
  75% {
    transform: rotate(3.75turn);
  }
  87% {
    transform: rotate(4.37turn) scale(0.5);
  }
  95% {
    transform: rotate(5turn);
  }
  100% {
    transform: rotate(5turn);
  }
}
@keyframes logoImgSize {
  0% {
    transform: rotate(0deg);
  }
  12% {
    transform: rotate(0.72turn) scale(0.5);
  }
  20% {
    transform: rotate(1.25turn);
  }
  25% {
    transform: rotate(1.25turn);
  }
  37% {
    transform: rotate(1.87turn) scale(0.5);
  }
  45% {
    transform: rotate(2.5turn);
  }
  50% {
    transform: rotate(2.5turn);
  }
  62% {
    transform: rotate(3.12turn) scale(0.5);
  }
  70% {
    transform: rotate(3.75turn);
  }
  75% {
    transform: rotate(3.75turn);
  }
  87% {
    transform: rotate(4.37turn) scale(0.5);
  }
  95% {
    transform: rotate(5turn);
  }
  100% {
    transform: rotate(5turn);
  }
}

.block-img {
  position: relative;
  perspective: 700px;
  transition-duration: 1.5s;
}
.block-img:hover {
  transition-duration: 1.5s;
}
.block-img:hover .block-img__link {
  transform: rotateY(-540deg);
}
.block-img:hover .block-img-back__content {
  transform: rotateY(0deg);
}

.block-img__link,
.block-img-back__content {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: 1s ease-in-out 0.5s;
}

.block-img__link {
  transform: rotateY(0deg);
}

.block-img-back__content {
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  padding: 5px;
  display: flex !important;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  transform: rotateY(540deg);
  background-blend-mode: screen;
  background: repeating-radial-gradient(circle, #f00, #000 135px);
}
.block-img-back__content :not(:last-child) {
  margin: 0px 0px 3px 0px;
}
.block-img-back__content :nth-child(n + 1):nth-child(-n + 3) {
  margin: 0px 0px 10px 0px;
}
.block-img-back__content .rating__item {
  margin: 0 !important;
}
.block-img-back__title {
  font-size: 15px;
}

.block-img-back__text {
  font-size: 10px;
}

.block-img__link-back {
  font-size: 15px;
  color: #000;
  letter-spacing: 5.5px;
  text-transform: uppercase;
  text-decoration: underline;
}

.catalogs-items .block-img__link {
  -webkit-backface-visibility: inherit;
  backface-visibility: inherit;
  transition: 0.5s ease-in-out 0s;
}
.catalogs-items .block-img__link:hover {
  transition: 0.5s ease-in-out 0s;
  -webkit-animation: run 5s infinite;
  animation: run 5s infinite;
}
@-webkit-keyframes run {
  0% {
    transform: translate(-25%, -25%) scale(0.5);
    border-radius: 0%;
  }
  12% {
    transform: translate(0%);
    border-radius: 50%;
    outline: none;
    border-radius: 50%;
  }
  25% {
    transform: translate(25%, -25%) scale(0.5);
    border-radius: 0%;
  }
  37% {
    transform: translate(0%);
    border-radius: 50%;
  }
  50% {
    transform: translate(25%, 25%) scale(0.5);
    border-radius: 0%;
  }
  62% {
    transform: translate(0%);
    border-radius: 50%;
  }
  75% {
    transform: translate(-25%, 25%) scale(0.5);
    border-radius: 0%;
  }
  87% {
    transform: translate(0%);
    border-radius: 50%;
  }
  100% {
    transform: translate(-25%, -25%) scale(0.5);
    border-radius: 0%;
  }
}
@keyframes run {
  0% {
    transform: translate(-25%, -25%) scale(0.5);
    border-radius: 0%;
  }
  12% {
    transform: translate(0%);
    border-radius: 50%;
    outline: none;
    border-radius: 50%;
  }
  25% {
    transform: translate(25%, -25%) scale(0.5);
    border-radius: 0%;
  }
  37% {
    transform: translate(0%);
    border-radius: 50%;
  }
  50% {
    transform: translate(25%, 25%) scale(0.5);
    border-radius: 0%;
  }
  62% {
    transform: translate(0%);
    border-radius: 50%;
  }
  75% {
    transform: translate(-25%, 25%) scale(0.5);
    border-radius: 0%;
  }
  87% {
    transform: translate(0%);
    border-radius: 50%;
  }
  100% {
    transform: translate(-25%, -25%) scale(0.5);
    border-radius: 0%;
  }
}

.block-img-cont:hover {
  background-color: #055a49;
  cursor: pointer;
  transform: scale(1.5);
  font-size: 14px;
  color: #000;
  box-shadow: 0px 0px 5px 3px #008aaa;
}

.block-img-cont {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0087be;
  width: 58%;
  height: 50%;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 10px;
  text-transform: uppercase;
  font-family: "Montserrat Regular", sans-serif;
  font-size: 12px;
  transition: 1s cubic-bezier(0.34, 1.56, 0.34, 1.56),
    background-color 0.5s ease-in, color 1.5s ease-out;
}

.gallery .gallery-grid img {
  width: 100%;
}

.cont-grid {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(20ch, 1fr));
  grid-template-rows: minmax(auto, auto);
  grid-template-areas: "img-b b-s b-s b-s b-s" "b-b b-b b-b b-b b-b" "cha cha cha cha cha" "t-b t-b t-b t-b t-b";
}
.cont-grid .block-img {
  grid-area: img-b;
  margin: 0;
}
.cont-grid .block-img2 {
  grid-area: img-b2;
  margin: 0;
}
.cont-grid .block-side {
  grid-area: b-s;
  justify-items: center;
  align-items: center;
}
.cont-grid .block-body,
.cont-grid .centr-text {
  grid-area: b-b;
  justify-items: center;
  align-items: center;
}
.cont-grid .block-img3 {
  grid-area: img-b3;
  margin: 0;
}
.cont-grid .block-img4 {
  grid-area: img-b4;
  margin: 0;
}
.cont-grid .block-sides {
  grid-area: b-ss;
  justify-items: center;
  align-items: center;
}
.cont-grid .block-bodys {
  grid-area: b-bs;
  justify-items: center;
  align-items: center;
}
.cont-grid .character {
  grid-column: 1/4;
  grid-row: 3/4;
}
.cont-grid .tabl-block {
  grid-column: 1/4;
  grid-row: 4/5;
}

.cont-grid {
  grid-template-areas: "img-b b-s b-s b-s b-s" "b-b b-b b-b b-b img-b2" "img-b3 b-ss b-ss b-ss b-ss" "b-bs b-bs b-bs b-bs img-b4";
}

/*# sourceMappingURL=main.css.map*/
