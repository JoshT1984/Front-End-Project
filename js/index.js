let isSpinning = false;
let rotateAngle = 0;
render();

function render() {
  rotateOnClick();
}

// function changeDocs() {
//   $(document).ready(function () {
//     let $shoes = $(".nav-shoes");

//     $shoes.on("click", function () {
//       console.log("WHAT UP BITCHES");
//       $(this).load("shoes.html");
//     });
//   });
// }

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
    }, 200);
  }
}



// $.get("https://fakestoreapi.com/products", (data) => {
//   console.log(data);
// });

// $test.on("click", function () {
//   console.log("IT WORKS");
// });
