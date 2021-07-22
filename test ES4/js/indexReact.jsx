// import "../styles/scss/utils/mixins.scss";
// import "../styles/scss/VDOH/mixins.scss";
// import "../styles/scss/VDOH/ui.scss";
import '../styles/scss/styles.scss';
// export default class IndexReact {}
// import "../styles/scss/VDOH/null.scss";
// ??? не раб - !*** css ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./node_modules/sass-loader/dist/cjs.js!./test ES4/styles/scss/VDOH/ui.scss ***!
// import "../styles/scss/VDOH/ui.scss";
// import "../styles/scss/VDOH/effect.scss";
// import "../styles/scss/htmlProjsBlocks/header";
// import "../styles/scss/VDOH/grid.scss";
// ??? не раб - SassError: Undefined variable - много $переменыч
// import "./styles/scss/VDOH/parseTheme.scss";
// ??? не раб - Module not found: Error: Can't resolve. 17 ERRORS
// import "./styles/scss/VDOH/style.scss";
// import "../styles/scss/VDOH/footer.scss";

// function ibg() {
//   $.each($(".ibg"), function (index, val) {
//     if ($(this).find("img").length > 0) {
//       $(this).css(
//         "background-image",
//         'url("' + $(this).find("img").attr("src") + '")'
//       );
//     }
//   });
// }
// ibg();

// на JS
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