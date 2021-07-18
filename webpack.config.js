// подключение пакет пафз через константу. для корректного поиска точки входа
const path = require("path");
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
const OptimizeCssAssetWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
// analyzer подк. визуал размер кода
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

// пути в константу(QF3EcxymIcc)(для удобной смены во всем сразу)
// PATHS.src(dist) - ярлык. './src/'(./dist/) - изменяемая переменая
const PATHS = {
  src: path.join(__dirname, "./test ES4/"),
  dist: path.join(__dirname, "./dist/"),
  views: path.join(__dirname, "./test ES4/html/views/"),
  includes: path.resolve(__dirname, "./test ES4/html/includes/"),
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
      chunks: "all", // async
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
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        // hmr: isDev,
        // reloadAll: true,
      },
    },
    // MiniCssExtractPlugin.loader,
    "css-loader",
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

function generateHtmlPlugins(templatesDir) {
  const fs = require("fs");
  const templateFolders = fs.readdirSync(path.resolve(__dirname, templatesDir));
  return templateFolders.map((folderName) => {
    const templateFoldersPath = path.resolve(
      __dirname,
      templatesDir,
      folderName
    );
    const firstTemplateFileName = fs.readdirSync(templateFoldersPath)[0];
    const firstTemplateFilePath = path.resolve(
      __dirname,
      templatesDir,
      folderName,
      firstTemplateFileName
    );
    return new HTMLWebpackPlugin({
      filename: `html/${folderName}/${firstTemplateFileName}`,
      template: firstTemplateFilePath,
      minify: { collapseWhitespace: isProd },
      // inject: true,
      // inject: false,
      chunks: ["app"],
    });
  });
}

const htmlPlugins = generateHtmlPlugins("./test ES4/html/views");

// analyzer(визуал размер кода) и plugin ч/з fn()
// описание plugin в plugins:стандарт + описание
const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      minify: {
        collapseWhitespace: isProd,
      },
      chunks: ["main"],
      filename: `${PATHS.dist}index.html`,
      template: `${PATHS.src}index.html`,
    }),
    // new HTMLWebpackPlugin({
    //   minify: {
    //     collapseWhitespace: isProd,
    //   },
    //   chunks: ["app"],
    //   filename: `${PATHS.dist}html/Catalog/Catalog.html`,
    //   template: `${PATHS.views}Catalog/Catalog.html`,
    // }),
    // new HTMLWebpackPlugin({
    //   minify: {
    //     collapseWhitespace: isProd,
    //   },
    //   chunks: ["app"],
    //   filename: `${PATHS.dist}html/Reference/Reference.html`,
    //   template: `${PATHS.views}Reference/Reference.html`,
    // }),
    new MiniCssExtractPlugin({
      // filename: `${PATHS.assets}css/[name].css`,
      filename: filename("css"),
    }),
    new CleanWebpackPlugin(),
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
      ],
    }),
  ].concat(htmlPlugins);
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
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "img/[name].[hash].[ext]",
        },
      },
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
    port: 8080, // 8080 // 4200 // 8081
    // только в разраб
    hot: isDev,
    // показ ошб. на экране а не в консоле
    overlay: true,
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
