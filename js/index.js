// $.get("https://fakestoreapi.com/products", (data) => {
//   console.log(data);
// });

let $test = $(".test");

$test.on("click", function () {
  console.log("IT WORKS");
});


$(document).ready(function () {
 
    // Adding click event on id div-1
    // if it clicked then anonymous
    // function will be called
    $('#div-1').click(function () {

        // Load the external html
        // here this refers to 
        // current selector
        $(this).load('div-1.html');
    });
