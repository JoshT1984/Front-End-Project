// $.get("https://fakestoreapi.com/products", (data) => {
//   console.log(data);
// });

// $test.on("click", function () {
//   console.log("IT WORKS");
// });
// animation();
render();

function render() {
  // changeDocs();
}

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
// }

var rotateLine = 0;

  let $board = $(".skate-icon").click(function () {
    rotateLine += 45;
    $board.css({ transform: "rotate(" + rotateLine + "deg" });
  });

// function animation() {
//
//   const frameHeight = 102;
//   const frames = 15;
//   let frame = 0;
//   setInterval(function () {
//     const frameOffset = (++frame % frames) * -frameHeight;
//     $div.css("background-position", "0px " + frameOffset + "px");
//   }, 100);
// }
