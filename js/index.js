let isSpinning = false;
let rotateAngle = 0;
render();

function render() {
  rotateOnClick();
}

function rotateOnClick() {
  $(".skate-icon").click(function () {
    isSpinning = !isSpinning;
    aJaxCall();
  });
}
function aJaxCall() {
  let $board = $(".skate-icon");
  if (isSpinning) {
    rotateAngle += 45;
    $board.css({ transform: "rotate(" + rotateAngle + "deg" });
    setTimeout(() => {
      aJaxCall();
    }, 300);
  }
}

// $.get("https://fakestoreapi.com/products", (data) => {
//   console.log(data);
// });

// $test.on("click", function () {
//   console.log("IT WORKS");
// });

// function changeDocs() {
//   $(document).ready(function () {
//     let $test = $(".main-image");
//     // Adding click event on id div-1
//     // if it clicked then anonymous
//     // function will be called
//     $test.on("click", function () {
//       // Load the external html
//       // here this refers to
//       // current selector
//       $(this).load("test.html");
//     });
//   });
