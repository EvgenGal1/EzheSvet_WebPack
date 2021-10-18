// подключение пакет пафз через константу. для корректного поиска точки входа
const path = require("path");
// Импорт станд модуль fs(File System) в проект, для раб с файловой системой
const fs = require("fs");
// `путь`=`требует`
// html выгр, подкл css, js
const HTMLWebpackPlugin = require("html-webpack-plugin");
// очистка выводной папки
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// копир файлов из корня в вывод
const CopyWebpackPlugin = require("copy-webpack-plugin");
// css + mini... css в отдельные файлы + loader
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// cssmini вывод - по документации
// ??? не раб - прибавляет очень много веса
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// cssmini вывод - по видео
// минимизация CSS
const OptimizeCssAssetWebpackPlugin = require("optimize-css-assets-webpack-plugin");
// минимизация JS
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { log } = require("console");
// analyzer подк. визуал размер кода
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

// пути в константу(QF3EcxymIcc)(для удобной смены во всем сразу)
// PATHS.src(dist) - ярлык. './src/'(./dist/) - изменяемая переменая
const PATHS = {
  src: path.join(__dirname, "./test ES4/"),
  dist: path.join(__dirname, "./dist/"),
  views: path.join(__dirname, "./test ES4/html/views/"),
  includes: path.join(__dirname, "./test ES4/html/includes/"),
  assets: "assets/",
};

// режимы разраб/продукт ч/з систем перем.
// $$ npm i -D cross-env - корректно задаёт системную переменную(разраб/прод). прописать в packege.json
const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const filename = (ext) =>
  isDev ? `${ext}/[name].${ext}` : `${ext}/[name].[hash].${ext}`;

// fn для передачи объ. в optimization с проверкой на Prod
const optimization = () => {
  // объ. конфиг по умолчанию
  const config = {
    splitChunks: {
      // объедин/разъедин доп библ js (jQ, React). в один файл из 2х не связаных файлов
      // chunks: "all", // async
    },
  };
  // е/и prod(true) в minimize добавл. cssmini а css объединяет в один файл
  if (isProd) {
    (config.minimizer = [
      // с видео
      // cssmini вывод
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin(),
      // с webpack документации
      // ??? не раб - прибавляет очень много веса, хоть и mini
      // new CssMinimizerPlugin(),
    ]),
      // CSS в один файл
      (config.splitChunks = {
        // объедин/разъедин доп библ js (jQ, React)
        chunks: "all", // async
        cacheGroups: {
          styles: {
            // путь/имя
            name: "styles",
            // убирает доп файл , хз что за js
            type: "css/mini-extract",
            // For webpack@4
            // test: /\.css$/,
            chunks: "all",
            // enforce: true,
          },
        },
      });
  }
  // возращ по умолчан
  return config;
};

// убираем дубли loader в css, scss, less
const cssLoaders = (extra) => {
  // массив по умолчанию
  const loaders = [
    MiniCssExtractPlugin.loader,
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        // указ где искать
        postcssOptions: {
          config: path.resolve(__dirname, "postcss.config.js"),
        },
        // ??? не раб???
        // config: { path: "src/js/postcss.config.js" },
      },
    },
  ];
  // если есть передаваемый параметр(extra) добовл. его в конце массива
  if (extra) {
    loaders.push(extra);
  }
  // возвращ умолч
  return loaders;
};

// убираем дубли babel options в JS, JSX, TS
const babelOptions = (preset) => {
  const opts = {
    presets: ["@babel/preset-env"],
    plugins: ["@babel/plugin-proposal-class-properties"],
  };
  if (preset) {
    opts.presets.push(preset);
  }
  return opts;
};

// eslint(анализ проблем в js коде) счас только для rules:js
const jsLoaders = () => {
  // по умолчанию. возращ массив
  // const loader = [
  const user = [
    {
      loader: "babel-loader",
      options: babelOptions(),
    },
  ];
  // е/и раработка, то добавл eslint
  if (isDev) {
    user.push("eslint-loader");
  }
  // возвращ
  return user;
};

// ! рекурсивный поиск по каталогам
// https://stackoverflow.com/questions/5827612/node-js-fs-readdir-recursive-directory-search
// https://ourcodeworld.com/articles/read/420/how-to-read-recursively-a-directory-in-node-js
function filewalker(dir, done) {
  let results = [];
  fs.readdir(dir, function (err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function (file) {
      file = path.resolve(dir, file);
      fs.stat(file, function (err, stat) {
        // Если каталог, выполнить рекурсивный вызов
        if (stat && stat.isDirectory()) {
          // Добавить каталог в массив [прокомментируйте, если вам нужно удалить каталоги из массива]
          results.push(file);
          filewalker(file, function (err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
}
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// ??? не раб - Травник - не могу прописать больше вложеностей
// принимает путь основ. папок с html в src, пересобирает всё dist
function generateHtmlPlugins(templatesDir) {
  // в перем `папки шаблонов` = обращ. к файл.сист. синхр.чтен.директории принимая путь дериктории (список файлов\подкаталогов в каталоге)
  // const templateFolders = fs.readdirSync(path.resolve(__dirname, templatesDir));
  // const templateFolders = fs.readdirSync(path.resolve(__dirname, templatesDir), { withFileTypes: true });
  const templateFolders = fs.readdirSync(templatesDir);
  console.log("templatesDir:" + templatesDir);
  console.log("templateFolders:" + templateFolders);
  // возвращ. отфильтр., получ. ?только файлы и исключ. из вывода директории?
  return templateFolders.map((folderName) => {
    // !
    // const foldersNames = fs.readdirSync(path.resolve(__dirname, folderName))[0];
    // const foldersNames = fs.readdirSync(folderName)[0]; // нет такого файла или каталога, scandir 'Audio'
    // const foldersNames = fs.readdirSync(folderName);
    // folderName.forEach((foldersNames) => {
    //   return console.log(foldersNames);
    // });
    // folderName[0].fs.readdirSync((foldersNames) => {
    //     return console.log(foldersNames);
    //   }); // Невозможно прочитать свойство readdirSync из undefined
    // console.log("foldersNames:" + foldersNames);
    // !
    console.log("folderName:" + folderName);
    // в перем `путь к папкам шаблонов` = превращ последовательность путей или сегментов пути в абсолютный путь
    const templateFoldersPath = path.resolve(
      // главн.папка, путьДоКат, имяПапк
      __dirname,
      templatesDir,
      folderName
    );
    console.log("templateFoldersPath:" + templateFoldersPath);
    // &
    // const templateFolderFolders = fs.readdirSync(templateFoldersPath);
    // console.log("templateFolderFolders:" + templateFolderFolders);

    // // var tFF = path.dirname(templateFolderFolders);
    // // console.log("dirname tFF " + tFF);

    // // require('path').dirname('/test/something/file.txt') // /test/something
    // templateFolderFolders.map((folderFoldersName) => {
    //   // var tFF = path.dirname(templateFolderFolders);
    //   // console.log("dirname tFF " + tFF);
    //   console.log("folderFoldersName:" + folderFoldersName);
    //   // console.log("folderFoldersName:" + folderFoldersName)[1];

    //   var fFN = path.dirname(folderFoldersName);
    //   console.log("dirname fFN " + fFN);

    //   const templateFolderFoldersPath = path.resolve(
    //     // const templateFolderFoldersPath = path.dirname(
    //     // const templateFolderFoldersPath = path.resolve(
    //     // const templateFolderFoldersPath = require('path').dirname(
    //     __dirname,
    //     templatesDir,
    //     folderName,
    //     folderFoldersName
    //   );
    //   console.log("templateFolderFoldersPath:" + templateFolderFoldersPath);

    //  &&&
    // let pathw = templatesDir
    // fs.readdir(pathw, function (err, items) {
    //   for (var i = 0; i < items.length; i++) {
    //     var file = pathw + "/" + items[i];
    //     console.log("Start: " + file);

    //     fs.stat(file, function (err, stats) {
    //       console.log("file "+file);
    //       console.log(stats["size"]);
    //     });
    //   }
    // });
    //  &&&
    //  &&
    // if(templateFolderFolders.isDerictory()){
    // // if(templateFolderFoldersPath.isDerictory()){
    // // if(templateFolderFoldersPath.isFile()){
    //   console.log('Это папка');
    //  }
    // let readFrom = templateFoldersPath; // из какой папки нужно всё прочитать
    // let readFrom = templateFolderFoldersPath; // из какой папки нужно всё прочитать
    // function listObjects(path) {
    //   console.log("path :::::: " + path);
    //   fs.readdir(path, (err, files) => {
    //     // if (err) throw err;
    //     console.log("files : " + files);
    //     console.log("path2 : " + path);
    //     for (let file of files) {
    //       console.log("file :>>>>>> " + file);
    //       fs.stat(file, (errStat, status) => { // - files is not iterable
    // if (errStat) throw errStat;

    //     if (status.isDerictory()) {
    //       console.log("Папка: " + file);
    //       listObjects(path + "/" + file); // продолжаем рекурсию
    //     } else {
    //       console.log("Файл: " + file);
    //     }
    //       });
    //     }
    //   });
    // }
    // listObjects(readFrom);
    // console.log(listObjects);
    //  &&

    // var tFFP = path.dirname(templateFolderFoldersPath);
    // // require('path').dirname('/test/something/file.txt')
    // console.log("dirname tFFP " + tFFP);
    // const secTemplateFileName = fs.readdirSync(templateFolderFoldersPath)[1];
    // // const firstTemplateFileName = fs.readdirSync(templateFoldersPath);
    // console.log("secTemplateFileName:" + secTemplateFileName);
    // });
    // &
    // в перем `имя первого файла шаблона` = обращ. к файл.сист. синхр.чтен.директ. ?к первому эл?
    const firstTemplateFileName = fs.readdirSync(templateFoldersPath)[0];
    // const firstTemplateFileName = fs.readdirSync(templateFoldersPath);
    console.log("firstTemplateFileName:" + firstTemplateFileName);
    // в перем `первый путь к файлу шаблона` = превращ последов. путей или сегментов пути в абсолют. путь
    const firstTemplateFilePath = path.resolve(
      // главн.папка, путьДоКат, имяПапк, имяФайл
      __dirname,
      templatesDir,
      folderName,
      firstTemplateFileName
    );
    console.log("firstTemplateFilePath:" + firstTemplateFilePath);
    // возвращ. ?конст? html
    // !1
    return new HTMLWebpackPlugin({
      // new HTMLWebpackPlugin({
      // !1
      // имя: html/имяПапк/имяФайл
      filename: `html/${folderName}/${firstTemplateFileName}`,
      // `шаблон` ?пути?
      template: firstTemplateFilePath,
      // minify: { collapseWhitespace: isProd },
      minify: false,
      // inject: true,
      // inject: false,
      chunks: ["app"],
    });
    // !2
    // return new HTMLWebpackPlugin({
    //   // new HTMLWebpackPlugin({
    //   // имя: html/имяПапк/имяФайл
    //   // filename: `html/${folderName}/${folderName+"s"}/${firstTemplateFileName2}`,
    //   filename: `html/${folderName}/${folderName}/${firstTemplateFileName}`,
    //   // `шаблон` ?пути?
    //   template: firstTemplateFilePath,
    //   // minify: { collapseWhitespace: isProd },
    // });
    // !2
  });
}

// !!!
// принимает путь основ. папок с html в src, пересобирает всё dist
function generateHtmlPlugins20(templatesDir) {
  // !!
  fs.readdirSync(templatesDir).map((fileName) => {
    console.log("templatesDir:" + templatesDir);
    console.log("fileName:" + fileName);
    // return path.join(templatesDir, fileName);
    path.join(templatesDir, fileName);
  });
  return new HTMLWebpackPlugin({
    // new HTMLWebpackPlugin({
    // !1
    // имя: html/имяПапк/имяФайл

    filename: `html/${filename}/${filename}`,
    // `шаблон` ?пути?
    template: templatesDir,
    // minify: { collapseWhitespace: isProd },
    minify: false,
    // inject: true,
    // inject: false,
    chunks: ["app"],
  });
  // const templateFolders = fs.readdirSync(templatesDir).map(fileName => {
  //   const templateF = fs.readdirSync(path.resolve(__dirname,templatesDir));
  //   return templateF.map((fileName) => {
  //    path.join(templatesDir, fileName)
  //   console.log("fileName:" + fileName);
  // })
  // !!
  // в перем `папки шаблонов` = обращ. к файл.сист. синхр.чтен.директории принимая путь дериктории (список файлов\подкаталогов в каталоге)
  // const templateFolders = fs.readdirSync(path.resolve(__dirname, templatesDir));
  // const templateFolders = fs.readdirSync(templatesDir);
  // console.log("templatesDir:" + templatesDir);
  // console.log("templateFolders:" + templateFolders);
  // // возвращ. отфильтр., получ. ?только файлы и исключ. из вывода директории?
  // return templateFolders.map((folderName) => {
  //   // // !
  //   // // const foldersNames = fs.readdirSync(path.resolve(__dirname, folderName))[0];
  //   // // const foldersNames = fs.readdirSync(folderName)[0]; // нет такого файла или каталога, scandir 'Audio'
  //   // // const foldersNames = fs.readdirSync(folderName);
  //   // // folderName.forEach((foldersNames) => {
  //   // //   return console.log(foldersNames);
  //   // // });
  //   // // folderName[0].fs.readdirSync((foldersNames) => {
  //   // //     return console.log(foldersNames);
  //   // //   });
  //   // // console.log("foldersNames:" + foldersNames);
  //   // // !
  //   console.log("folderName:" + folderName);
  //   // // в перем `путь к папкам шаблонов` = превращ последовательность путей или сегментов пути в абсолютный путь
  //   const templateFoldersPath = path.resolve(
  //     // главн.папка, путьДоКат, имяПапк
  //     __dirname,
  //     templatesDir,
  //     folderName
  //   );
  //   console.log("templateFoldersPath:" + templateFoldersPath);
  // // !
  // // templateFoldersPath.map((foldersNames) => {
  // // templateFoldersPath.fs.readdirSync((foldersNames) => {
  // // templateFoldersPath = fs.readdirSync((foldersNames) => {
  // //     return console.log(foldersNames);
  // //   });
  // // console.log("foldersNames:" + foldersNames);
  // // }
  // // !
  // // в перем `имя первого файла шаблона` = обращ. к файл.сист. синхр.чтен.директ. ?к первому эл?
  // const firstTemplateFileName = fs.readdirSync(templateFoldersPath)[0];
  // // const firstTemplateFileName = fs.readdirSync(templateFoldersPath);
  // console.log("firstTemplateFileName:" + firstTemplateFileName);
  // // в перем `первый путь к файлу шаблона` = превращ последов. путей или сегментов пути в абсолют. путь
  // const firstTemplateFilePath = path.resolve(
  //   // главн.папка, путьДоКат, имяПапк, имяФайл
  //   __dirname,
  //   templatesDir,
  //   folderName,
  //   firstTemplateFileName
  // );
  // console.log("firstTemplateFilePath:" + firstTemplateFilePath);
  // // возвращ. ?конст? html
  // // !1
  // return new HTMLWebpackPlugin({
  // // new HTMLWebpackPlugin({
  //   // !1
  //   // имя: html/имяПапк/имяФайл
  //   filename: `html/${folderName}/${firstTemplateFileName}`,
  //   // `шаблон` ?пути?
  //   template: firstTemplateFilePath,
  //   // minify: { collapseWhitespace: isProd },
  //   minify: false,
  //   // inject: true,
  //   // inject: false,
  //   chunks: ["app"],
  // });
  // });
}
// !!!

// !!!!
// function generateHtmlPlugins(templatesDir) {
//   const templateFolders = fs.readdirSync(templatesDir);
//   return templateFolders.map((folderName) => {
// function generateHtmlPlugins20(templatesDir) {
//   fs.readdirSync(templatesDir).map((fileName) => {
// var generateHtmlPlugins30 = function (dir, done) {
// function generateHtmlPlugins30(dir, done) {
function generateHtmlPluginsNNNN(dir) {
  console.log("dir " + dir); // ./test ES4/html/views
  const templateFolders = fs.readdirSync(dir);
  console.log("templateFolders !!!: " + templateFolders); //~ Audio,Catalog,Contact, и пр.
  return templateFolders.map((folderName) => {
    console.log("folderName >!1<: " + folderName); //~ Audio  //~ Catalog //~ Contact и пр.
    const templateFoldersPath = path.resolve(
      // главн.папка, путьДоКат, имяПапк
      __dirname,
      dir,
      folderName
    );
    console.log("templateFoldersPath >>: " + templateFoldersPath); //~ D:\Про\...\views\Audio

    // &0
    // const folderPath = './test ES4/html/views'
    // const isDirectory0 = fileName => {
    //   return fs.lstatSync(fileName).isDirectory()
    // }
    // const ert0 = fs.readdirSync(templateFoldersPath).map(fileName => {
    //   return path.join(templateFoldersPath, fileName)
    //    // .filter(isDirectory0)
    // })
    // const filert0 = ert0.filter(isDirectory0)
    // console.log('filert0 : ' + filert0); //~ D:\Про\...\views\Audio\audios
    // console.log('ert0 : ' + ert0); //~ D:\Про\...\views\Audio\Audio.html, D:\Про\...\views\Audio\audios
    // &0

    // &1
    const isDirectory = (fileName) => {
      return fs.lstatSync(fileName).isDirectory();
    };
    // const readTemplateFileName1 = fs.readdirSync(templateFoldersPath)[1]; //~ audios //! НАКРАЙНЯК
    // console.log('readTemplateFileName 1 : ' + readTemplateFileName1); //~ audios
    const containsFolder = (path) => {
      return fs.readdirSync(path);
    };
    const contentsTempFoldPath = containsFolder(templateFoldersPath);
    // const contentsTempFoldPath = fs.readdirSync(templateFoldersPath);
    console.log("contentsTempFoldPath : " + contentsTempFoldPath); //~ Audio.html,audios
    const contentsTempFoldPathJoinPath = fs
      .readdirSync(templateFoldersPath)
      .map((fileName) => {
        return path.join(templateFoldersPath, fileName);
      });
    console.log(
      "contentsTempFoldPathJoinPath : " + contentsTempFoldPathJoinPath
    ); //~ D:\Про\...\views\Audio\Audio.html, D:\Про\...\views\Audio\audios
    const filterDerectTempFoldPathJP =
      contentsTempFoldPathJoinPath.filter(isDirectory);
    console.log(
      "filterDerectTempFoldPathJP : +++ " + filterDerectTempFoldPathJP
    ); //~ D:\Про\...\views\Audio\audios

    // &2
    console.log("qwerty");
    // const contentsTempFoldPath00 = fs.readdirSync(filterDerectTempFoldPathJP); //! Аргумент «путь» должен быть строкового типа, экземпляром буфера или URL. Получен экземпляр массива
    // const contfiltDirectTempFoldPathJP = containsFolder(filterDerectTempFoldPathJP) //! Аргумент «путь» должен быть строкового типа, экземпляром буфера или URL. Получен экземпляр массива
    // console.log('contfiltDirectTempFoldPathJP : ' + contfiltDirectTempFoldPathJP);
    // &2

    // const folderNameSecond = readTemplateFoldersPath.filter(isDirectory) //! нет ф. или кат. 'Audio.html'
    // const folderNameSecond = path.resolve(readTemplateFileName, folderName) //! Арг Путь нежен строк типа.
    // const folderNameSecond = path.join(readTemplateFileName, folderName) //! Аргумент «путь» должен быть строкового типа. Получен экземпляр массива
    // const dirFolder = templateFoldersPath.filter(isDirectory) //! Свойство "filter" не существует в типе "string"
    // const dirFolder = templateFolders.filter(isDirectory) //! нет такого файла или каталога, lstat 'Audio'
    // const folderNameSecond = templateFoldersPath + `/`  + readTemplateFileName.filter(isDirectory) //! нет такого файла или каталога, lstat 'Audio'
    // &1

    const firstTemplateFileName = fs.readdirSync(templateFoldersPath)[0];
    console.log("firstTemplateFileName 0!!: " + firstTemplateFileName); //~ Audio.html пр.
    // console.log("isF : " + isF);
    const firstTemplateFilePath = path.resolve(
      // главн.папка, путьДоКат, имяПапк, имяФайл
      __dirname,
      dir,
      folderName,
      firstTemplateFileName
    );
    console.log("firstTemplateFilePath 1!>>: " + firstTemplateFilePath); //~ D:\Про\...\views\Audio.html пр.

    // &
    // ^ нужна ли эта проверка, может сразу for of ?
    // fs.readdir(templateFoldersPath, (err, files) => {
    fs.readdirSync(templateFoldersPath, (err, files) => {
      //??? не раб Sync
      // const arrTFP = fs.readdirSync(templateFoldersPath, (err, files) => {
      if (err) throw err; // не прочиталось содержимое папки
      console.log("В папке находятся файлы:" + files); //~ Audio.html,audios //~ и пр.
      // ^ нужна ли эта проверка, может сразу for of ?
      // &&
      for (let file of files) {
        console.log("files " + files); //~ Audio.html,audios //~ и пр.
        console.log("file 1 " + file); //~ Audio.html //~ audios
        fs.stat(templateFoldersPath + `/` + file, (errStat, stats) => {
          // fs.stat('file.txt', (errStat, status) => {
          console.log("file 2 " + file); //~ Audio.html //~ audios
          console.log("stats : " + stats); //~ [object Object]
          console.log("errStat : " + errStat); //~ null
          if (errStat) throw errStat;
          if (stats.isDirectory()) {
            console.log("Папка file: >>!!!<< " + file); //~ audios //~ и пр.
            // &&&
            // &&&&
            const secTempFilPath = path.resolve(
              // главн.папка, путьДоКат, имяПапк, имяФайл
              __dirname,
              dir,
              folderName,
              templateFoldersPath,
              // firstTemplateFileName,
              file
            );
            console.log("secTempFilPath : +++ " + secTempFilPath); //~ D:\Про\...\views\Audio\audios
            // &&&&&
            const secondTFNSSS = fs.readdirSync(secTempFilPath);
            // const secondTFN = fs.readdirSync(secTempFilPath)[0];
            console.log("secondTFNSSS : +++++ " + secondTFNSSS); //~   //~ daydreamWealth.html,dreamSpace.html,
            // const secondTFN = fs.readdirSync(file)[0];
            for (let index = 0; index < secondTFNSSS.length; index++) {
              // return  secSSS = secondTFNSSS[index];
              let secSSS = secondTFNSSS[index];
              console.log("secSSS : ++++++++++++++ " + secSSS); //~ daydreamWealth.html //~ и пр.

              filewalker(secTempFilPath, function (err, data) {
                if (err) {
                  throw err;
                }
                // ["c://some-existent-path/file.txt","c:/some-existent-path/subfolder"]
                console.log(data);
              });

              // !3
              return new HTMLWebpackPlugin({
                // new HTMLWebpackPlugin({
                // имя: html/имяПапк/имяФайл
                filename: `html/${folderName}/${folderName + "s"}/${secSSS}`,
                // filename: `html/${folderName}/${file}/${secSSS}`,
                // `шаблон` ?пути?
                template: secTempFilPath,
                // minify: { collapseWhitespace: isProd },
                minify: false,
                // inject: true,
                // inject: false,
                chunks: ["app"],
              });
              // !3
            }
            // &&&&&
            // &&&&
            // &&&
          } else if (stats.isFile()) {
            console.log("Файл: <!> " + file); //~
            var isF = this;
          }

          console.log("isF : " + isF);
        });
        // });
      }
      // &&
    });
    // &

    // !1
    return new HTMLWebpackPlugin({
      // имя: html/имяПапк/имяФайл
      filename: `html/${folderName}/${firstTemplateFileName}`,
      // `шаблон` ?пути?
      template: firstTemplateFilePath,
      // minify: { collapseWhitespace: isProd },
      minify: false,
      // inject: true,
      // inject: false,
      chunks: ["app"],
    });
    // !1
    // !2
    new HTMLWebpackPlugin({
      // имя: html/имяПапк/имяФайл
      filename: `html/${folderName}/${
        folderName + "s"
      }/${firstTemplateFileName}`,
      // `шаблон` ?пути?
      template: secTempFilPath,
      // minify: { collapseWhitespace: isProd },
      minify: false,
      // inject: true,
      // inject: false,
      chunks: ["app"],
    });
    // !2
  });
}
// !!!!
// передаем в fn() путь основных папок с html. вызов в plugins().base[].concat(htmlPlugins)
const htmlPlugins = generateHtmlPluginsNNNN("./test ES4/html/views");

// analyzer(визуал размер кода) и plugin ч/з fn()
// описание plugin в plugins:стандарт + описание
const plugins = () => {
  const base = [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      minify: {
        collapseWhitespace: isProd,
      },
      chunks: ["main"],
      filename: `${PATHS.dist}index.html`,
      template: `${PATHS.src}index.html`,
      minify: false,
    }),
    // new HTMLWebpackPlugin({
    // minify: {
    //   collapseWhitespace: isProd,
    // },
    //   chunks: ["app"],
    //   filename: `${PATHS.dist}html/Catalog/Catalog.html`,
    //   template: `${PATHS.views}Catalog/Catalog.html`,
    // }),
    new MiniCssExtractPlugin({
      // filename: `${PATHS.assets}css/[name].css`,
      filename: filename("css"),
      // filename: "css/[name].[hash].css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        // {
        // from: path.resolve(__dirname, "./src/favicon.ico"),
        // to: path.resolve(__dirname, "dist"),
        // },
        {
          from: `${PATHS.src}fonts`,
          to: `${PATHS.dist}fonts/`,
        },
        {
          from: `${PATHS.src}img`,
          to: `${PATHS.dist}img`,
        },
        // {
        //   from: `${PATHS.src}styles/scss/catalog.scss`,
        //   to: `${PATHS.dist}styles/`,
        // },
      ],
    }),
    // вызов .concat(htmlPlugins) для f() generateHtmlPlugins
  ].concat(htmlPlugins);
  // !
  // ]
  // !
  // analyzer подк. е/и Prod
  // if (isProd) {
  //   base.push(new BundleAnalyzerPlugin());
  // }
  return base;
};

module.exports = {
  mode: "development",
  entry: {
    main: PATHS.src,
    app: `${PATHS.src}js/indexReact.jsx`,
    // ??? не раб - узнать как просто закидывать стиль, без создания js файла
    catalog: `${PATHS.src}styles/scss/htmlProjsPages/catalog.scss`,
  },
  output: {
    filename: filename("js"),
    path: PATHS.dist,
  },
  plugins: plugins(),
  module: {
    rules: [
      // html
      {
        test: /\.html$/,
        // exclude: path.resolve(__dirname, "test ES4/html/views"),
        include: path.resolve(__dirname, "test ES4/html/includes"),
        use: ["raw-loader"],
      },
      // JS
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: jsLoaders(),
      },
      // JSX
      {
        test: /\.(js|jsx)?$/i,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: babelOptions("@babel/preset-react"),
        },
      },
      // css
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      // scss
      {
        test: /\.scss/,
        use: cssLoaders("sass-loader"),
      },
      // img
      // ??? не раб - не создает, не переносит img. только ч/з copy
      // {
      //   test: /\.(ico|gif|png|jpe?g|svg)$/i,
      //   loader: "file-loader",
      //   options: {
      //     name: "img/[name].[hash].[ext]",
      //     publicPath: "../",
      //   },
      //   // type: "asset/resource",
      //   // generator: {
      //     // filename: "img/[name].[hash].[ext]",
      //     // publicPath: "../",
      //   // },
      // },
      // fonts
      {
        test: /\.(ttf|otf|svg|woff|woff2|eot)$/,
        exclude: path.resolve(__dirname, "src/img"),
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[hash].[ext]",
              outputPath: path.resolve(__dirname, "dist/fonts"),
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  // расшир/сокращ
  resolve: {
    // расшир. по умолч. чтоб не указыв. в import/export
    extensions: [".js", ".jsx", ".json", ".css", ".scss", ".png"],
    // сокращение/пседвоним указ. на путь
    alias: {
      "@models": path.resolve(__dirname, "src/models"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  // доп настр. знач. можно передать через fn с проверкой на Prod
  optimization: optimization(),
  // server
  devServer: {
    // порт для запуска. рекоменд 8081, реже 8080
    port: 8080, // 8081, // 8080 // 4200 // 8081
    // только в разраб
    hot: isDev,
    // показ ошб. на экране а не в консоле
    // overlay: true,
    // из док WP
    // contentBase: path.join(__dirname, 'dist'),
    // contentBase: [
    //   path.join(__dirname, 'dist'),
    //   path.join(__dirname, 'dist/html'),
    // ],
    // compress: true,
    // port: 9000,
  },
  // показ в консоле исходный код файла. для разраб(isDev)
  // ??? не раб - при npm build прибавляет очень много веса объед. файлу js
  devtool: isDev ? "source-map" : "eval",
  // или
  // devtool: "eval-source-map",
  // пояснения {
  // eval - мини/строка, source-map - как есть + копия в мини, eval-source-map - рекомендуется
  // после запуска npm run build(start, ) появится app.js.map (мини версия при source-map)
  // source-map технология позволяет посмотреть в браузере какие файлы были подкл. к выходному файлу
  // }
};
