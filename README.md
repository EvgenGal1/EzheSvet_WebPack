<div align="center">
  <img width="200" height="200" src="./test ES4/img/logo/ЕжеСветRedWhWhEff.png"  alt="">
  <h1>Сайт EzheSvet</h1>
  <p>
    Сайт ЕжеСвет(EzheSvet)
  </p>
  <p>Author:
    <a href="#" target="_blank">EvGen Gal</a> | 
    <a href="#" target="_blank">В Никуда</a> | 
    <a href="#" target="_blank">В Нигде</a> | 
    <a href="#" target="_blank">В Никогда</a>
  </p>
</div>

## Цель проекта:

```bash
# 1 Обучение вёрстке:
Html, CSS, SCSS,
JS, jQ, React,
.... .. ...

# 2 Создание собственной базы хранения:
Шпаргалок, Словарей, Кода, Стилей,
Галерей, Фото, Изо, Творчества,
Анимаций, Эффектов, Visyal,
Картинок, Фонов, Gifок,
. ... .. ..... ... .

# 3 Создание Ресурса Помощи и напоминания Чтобы Было:
Советы, Уроки, Схемы, Рецепты, Мастеркласы,
... .. ... .... .. . ...
... ..
```

## Структура Проекта:

- `test ES4/index.html` - HTML основного приложения
- `test ES4/html/` - многостраничный проект HTML
- `test ES4/styles/scss/` - SCSS стили + разбор.
- `test ES4/styles/css/` - CSS стили + разбор.
- `test ES4/index.js` - основной файл JS приложения, с разными включениями
- `test ES4/js/` - скрипты JS приложений, с разными включениями + разбор.
- `test ES4/img/` - изображения проекта
- `test ES4/fonts/` - шрифты проекта

## Структура Сайта:

# 0 \* -

# `0` - `1`

- `1` - 191

* `2` - 248

- `3` - 396

* `4` - 428

- `5` - 575

<div align="center">
  <h2>Настройки:</h2>
</div>

## Код/Elements/Логика:

Заполню по наличию времени...
Пока кусочки экспериментов:

HTML:

```html
<div class="header-menu">
  <nav class="header-menu__top">
    <ul class="header-menu-list">
      <li class="menu-list__items">
        <a class="menu-list-link" href="index.html">
          <span class="link__firct-bykv">Г</span>
          <span class="link__last-bykv">лавная</span>
        </a>
      </li>
    </ul>
  </nav>
</div>
```

Webpack:

```js
const PATHS = {
  // Путь к Dev
  src: path.join(__dirname, "./test ES4/"),
  // Путь к Prod
  dist: path.join(__dirname, "./dist/"),
  // Путь к мн.стран. HTML
  views: path.join(__dirname, "./test ES4/html/views/"),
  // Путь к блокам HTML
  includes: path.resolve(__dirname, "./test ES4/html/includes/"),
```

SCSS:

```scss
.block-img-back__content {
  transform: rotateY(540deg);
  background-blend-mode: screen;
  & :nth-child(n + 1):nth-child(-n + 3) {
    margin: 0px 0px 10px 0px; // * с 1 по 3 эл.
  }
  @include bgr_r-b;
  @media (max-width: $md2+px) {
  }
}
```

jQ:

```js
function iliPadd() {
  var contSp = $("span.cont:contains()");
  var contSpIli = $("span.cont:contains('|'), span.cont:contains('=')");
  $(".gap").css("display", "none");
  $(contSp).css("padding", "0 1px");
  $(".token__el span")
    .filter(contSpIli)
    .css({ "font-weight": "900", "text-shadow": "0px 0px 0px black" });
}
iliPadd();
```

JS:

```js
const PATHS = {
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
```

## Разбор будет обязательно:

Осталось: **Немного подождать и ..**

1. Установить мотиватор

```bash
npm i give-me-motive
```

2. Активировать:

```js
const motiv = new Bro({
  el: "#motiv",
});
```

3. Создать div с id motiv и вложится в него

```html
<div id="motiv">
  <!-- Dobro -->
</div>
```

## Thanks

Выражаю благодарность за помощь/уроки/материалы следующим:
`Травник`, [FreelancerLifeStyle](https://www.youtube.com/c/FreelancerLifeStyle/playlists), [vedees](https://www.youtube.com/channel/UCDtQ4kJos22sCdYtNDB_4Cg),

## Authorship

Copyright (c) 2021-present, [EvGen Gal](https://github.com/EvgenGal1)
