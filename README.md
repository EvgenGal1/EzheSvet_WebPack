<div align="center">
  <img width="200" height="200" src="./test ES4/img/logo/ЕжеСветRedWhWhEff.png"  alt="">
  <h1>Сайт ЕжеСвет</h1>
  <p>
    
  </p>
  <p>Сайт ЕжеСвет(EzheSvet) | Author:
    <!-- <a href="#" target="_blank">EvGen Gal</a> | 
    <a href="#" target="_blank">В Никуда</a> | 
    <a href="#" target="_blank">В Нигде</a> | 
    <a href="#" target="_blank">В Никогда</a> -->
[![EvGen Gal][EvGen]][vk] | 
  </p>
</div>
[![В Никуда][nowhereTo]][nwt] | 
[![В Нигде][nowhere]][nwe] | 
[![В Никогда][inNever]][inr]

[evgen]: https://github.com/EvgenGal1
[vk]: https://vk.com/genwolk
[nowhereto]: https://#
[nwt]: https://#
[nowhere]: https://#
[nwe]: https://#
[innever]: https://#
[inr]: https://#

<h2 align="center">Оглавление</h2>

- [Цель проекта](#Цель-проекта)
- [Структура и Иерархия Проекта](#Структура-и-Иерархия-Проекта)
  * [Важные файлы](#Важные-файлы)
  * [Важные моменты](#Важные-моменты)
    + [Ещё пара важных моментов:](#Ещё-пара-важных-моментов:)
- [Код/Elements/Логика](#Код/Elements/Логика)
  * [HTML](#HTML)
  * [Webpack](#Webpack)
  * [SCSS](#SCSS)
  * [jQuery](#jQ)
  * [JavaScript](#JS)
- [Разбор](#Разбор-будет-обязательно)
- [Признательность](#Признательность)
- [Авторство](#Авторство)

<h2 align="center">Цель проекта</h2>

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

<h2 align="center">Структура и Иерархия Проекта</h2>

```
src(test ES4)/
├── html/                   - `многостраничный проект HTML`
│   └── views/              - `одностраничные проекты HTML`
│   ├── includes/           - `подкл. блоки к проектам HTML`
├── styles/                 - `стили проекта`
│   ├── css/                - `CSS стили + разбор`
│   └── scss/               - `SCSS стили + разбор`
├── js/                     - `доп. JS приложения, + включ. + разбор`
├── img/                    - `изображения проекта`
├── fonts/                  - `шрифты проекта`
├── index.html              - `начальный файл HTML приложения`
├── index.js                - `основной файл JS приложения, + включ.`
└── webpack.config.js       - `настройка webpack`
```

## Важные файлы:

**[`index.html`](#HTML)**
**[index.js](#JS)**
[`styles.css`](#SCSS)
[jQuery.js](#jQ)
[webpack.config.js](#Webpack)

## Важные моменты:

- `1` - 191
* `2` - 248
+ `3` - 396
* `4` - 428
- `5` - 575

### Ещё пара важных моментов:

|                                                                            Имя                            | Тип                       | Статус              | Описание                                                                         |
| :-------------------------------------------------------------------------------------------------------: | :-----------------------: | :-----------------: | :------------------------------------------------------------------------------- |
| <a href="https://#"><img width="48" height="48" src="https://worldvectorlogo.com/logos/html5.svg"></a>    | **[`index.html`](#HTML)** | `{Object}`          | HTML код в разработке заливки в<a href="https://github.com/EvgenGal1">Проект</a> |
| <a href="https://#"><img width="48" height="48" src="https://worldvectorlogo.com/logos/css-3.svg"></a>    | [`styles.css`](#SCSS)     | `{String/Function}` | CSS код в разработке заливки JavaScript                                          |
| <a href="https://#"><img width="48" height="48" src="https://worldvectorlogo.com/logos/sass-1.svg"></a>   | [`styles.css`](#SCSS)     | `{Array/Function}`  | SCSS код в разработке заливки                                                    |
| <a href="https://#"><img width="48" height="48" src="https://worldvectorlogo.com/logos/babel-10.svg"></a> | `false`                   | `[]`                | Код в разработке заливки <a href="https://#">Babel</a>                           |

<h2 align="center">Код/Elements/Логика</h2>

Заполню по наличию времени...
Пока кусочки экспериментов:

#### `HTML`

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

#### `Webpack`

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

#### `SCSS`

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

#### `jQ`

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

#### `JS`

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

<h2 align="center">Разбор будет обязательно</h2>

Осталось: **не Немного подождать и ..**

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

## Признательность

Выражаю благодарность за помощь/уроки/материалы следующим:
`Травник`, [FreelancerLifeStyle](https://www.youtube.com/c/FreelancerLifeStyle/playlists), [vedees](https://www.youtube.com/channel/UCDtQ4kJos22sCdYtNDB_4Cg),

## Авторство

Copyright (c) 2021-present, [EvGen Gal](https://github.com/EvgenGal1)
