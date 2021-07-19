<div align="center">
  <img width="200" height="200" src="./test ES4/img/logo/ЕжеСветRedWhWhEff.png"  alt="">
  <h1>Сайт EzheSvet</h1>
  <p>
    Сайт ЕжеСвет(EzheSvet)
  </p>
  <p>Author: <a href="#" target="_blank">EvGen Gal</a> | <a href="#" target="_blank">В Никуда</a> | <a href="#" target="_blank">В Нигде</a> | <a href="#" target="_blank">В Никогда</a></p>
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

# 3 Создание Ресурса Помощи и напоминания ради:
Советы, Уроки, Схемы, Рецепты, Мастеркласы,
... .. ... .... .. . ...
... ..
```

## Структура Проекта:

- `test ES4/index.html` - HTML основного приложения
- `test ES4/html/` - многостраничный проект HTML
- `test ES4/styles/scss` - SCSS стили + разбор.
- `test ES4/styles/css` - CSS стили + разбор.
- `test ES4/index.js` - основной файл JS приложения, со всеми включениями
- `test ES4/js` - скрипты JS приложений + разбор.
- `test ES4/img` - изображения проекта
- `test ES4/fonts` - шрифты проекта

## Структура Сайта:

- `1` - 191

* `2` - 248

- `3` - 396

= `4` - 428

^ `5` - 575

<div align="center">
  <h2>Настройки:</h2>
</div>

## Код/Elements/Логика:

Заполню по наличию времени...
Пока кусочки экспериментов:

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

Выражаю благодарность за помощь/уроки/материалы to Травник, FreelancerLifeStyle, vedees,

## Authorship

Copyright (c) 2021-present, [EvGen Gal](https://github.com/EvgenGal1)
