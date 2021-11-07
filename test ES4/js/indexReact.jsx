console.log('indexReact.jsx');
import "../index.js";
import '../styles/scss/styles.scss';

// ibg на jQ
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

// ibg на JS
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