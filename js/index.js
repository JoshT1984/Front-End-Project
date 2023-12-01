let isSpinning = false;
let rotateAngle = 0;
let shoePriceArray = [];
render();

function render() {
  rotateOnClick();
  apiShoePricesEmbedded();
  apiClothingPricesEmbedded();
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
    }, 200);
  }
}

async function apiShoePricesEmbedded() {
  let $shoeFig_1_1 = $(".shoe-fig-1-1");
  let $shoeFig_1_2 = $(".shoe-fig-1-2");
  let $shoeFig_1_3 = $(".shoe-fig-1-3");
  let $shoeFig_2_1 = $(".shoe-fig-2-1");
  let $shoeFig_2_2 = $(".shoe-fig-2-2");
  let $shoeFig_2_3 = $(".shoe-fig-2-3");
  let $shoeFig_3_1 = $(".shoe-fig-3-1");
  let $shoeFig_3_2 = $(".shoe-fig-3-2");
  let $shoeFig_3_3 = $(".shoe-fig-3-3");

  let randomPriceAdder = Math.floor(Math.random() * 100) + 1;
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    for (let i = 0; i < data.length - 11; i++) {
      let apiData = (data[i].price + randomPriceAdder).toFixed(2);
      shoePriceArray.push(apiData);
    }
  } catch (error) {
    console.error(`could not get products: ${error}`);
  }
  $shoeFig_1_1.text(`$${shoePriceArray[0]}`);
  $shoeFig_1_2.text(`$${shoePriceArray[1]}`);
  $shoeFig_1_3.text(`$${shoePriceArray[2]}`);
  $shoeFig_2_1.text(`$${shoePriceArray[3]}`);
  $shoeFig_2_2.text(`$${shoePriceArray[4]}`);
  $shoeFig_2_3.text(`$${shoePriceArray[5]}`);
  $shoeFig_3_1.text(`$${shoePriceArray[6]}`);
  $shoeFig_3_2.text(`$${shoePriceArray[7]}`);
  $shoeFig_3_3.text(`$${shoePriceArray[8]}`);
}

async function apiClothingPricesEmbedded() {
  let $shoeFig_1_1 = $(".shoe-fig-1-1");
  let $shoeFig_1_2 = $(".shoe-fig-1-2");
  let $shoeFig_1_3 = $(".shoe-fig-1-3");
  let $shoeFig_2_1 = $(".shoe-fig-2-1");
  let $shoeFig_2_2 = $(".shoe-fig-2-2");
  let $shoeFig_2_3 = $(".shoe-fig-2-3");
  let $shoeFig_3_1 = $(".shoe-fig-3-1");
  let $shoeFig_3_2 = $(".shoe-fig-3-2");
  let $shoeFig_3_3 = $(".shoe-fig-3-3");

  let randomPriceAdder = Math.floor(Math.random() * 100) + 1;
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    for (let i = 0; i < data.length - 11; i++) {
      let apiData = (data[i].price + randomPriceAdder).toFixed(2);
      shoePriceArray.push(apiData);
    }
  } catch (error) {
    console.error(`could not get products: ${error}`);
  }
  $shoeFig_1_1.text(`$${shoePriceArray[0]}`);
  $shoeFig_1_2.text(`$${shoePriceArray[1]}`);
  $shoeFig_1_3.text(`$${shoePriceArray[2]}`);
  $shoeFig_2_1.text(`$${shoePriceArray[3]}`);
  $shoeFig_2_2.text(`$${shoePriceArray[3]}`);
  $shoeFig_2_3.text(`$${shoePriceArray[5]}`);
  $shoeFig_3_1.text(`$${shoePriceArray[6]}`);
  $shoeFig_3_2.text(`$${shoePriceArray[7]}`);
  $shoeFig_3_3.text(`$${shoePriceArray[8]}`);
}
