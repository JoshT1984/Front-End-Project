let isSpinning = false;
let rotateAngle = 0;
let shoePriceArray = [];
let clothingPriceArray = [];
let equipmentPriceArray = [];
render();

function render() {
  rotateOnClick();
  apiShoePricesEmbedded();
  clothingPricesEmbedded();
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

async function clothingPricesEmbedded() {
  let $clothingFig_1_2 = $(".clothing-fig-1-1");
  let $clothingFig_1_1 = $(".clothing-fig-1-2");
  let $clothingFig_1_3 = $(".clothing-fig-1-3");
  let $clothingFig_2_1 = $(".clothing-fig-2-1");
  let $clothingFig_2_2 = $(".clothing-fig-2-2");
  let $clothingFig_2_3 = $(".clothing-fig-2-3");
  let $clothingFig_3_1 = $(".clothing-fig-3-1");
  let $clothingFig_3_2 = $(".clothing-fig-3-2");
  let $clothingFig_3_3 = $(".clothing-fig-3-3");

  let $clothingFig2_1_1 = $(".clothing-2-fig-1-1");
  let $clothingFig2_1_2 = $(".clothing-2-fig-1-2");
  let $clothingFig2_1_3 = $(".clothing-2-fig-1-3");
  let $clothingFig2_2_1 = $(".clothing-2-fig-2-1");
  let $clothingFig2_2_2 = $(".clothing-2-fig-2-2");
  let $clothingFig2_2_3 = $(".clothing-2-fig-2-3");
  let $clothingFig2_3_1 = $(".clothing-2-fig-3-1");
  let $clothingFig2_3_2 = $(".clothing-2-fig-3-2");
  let $clothingFig2_3_3 = $(".clothing-2-fig-3-3");

  let $clothingFig3_1_1 = $(".clothing-3-fig-1-1");
  let $clothingFig3_1_2 = $(".clothing-3-fig-1-2");
  let $clothingFig3_1_3 = $(".clothing-3-fig-1-3");
  let $clothingFig3_2_1 = $(".clothing-3-fig-2-1");
  let $clothingFig3_2_2 = $(".clothing-3-fig-2-2");
  let $clothingFig3_2_3 = $(".clothing-3-fig-2-3");
  let $clothingFig3_3_1 = $(".clothing-3-fig-3-1");
  let $clothingFig3_3_2 = $(".clothing-3-fig-3-2");
  let $clothingFig3_3_3 = $(".clothing-3-fig-3-3");

  let $clothingFig4_1_1 = $(".clothing-4-fig-1-1");
  let $clothingFig4_1_2 = $(".clothing-4-fig-1-2");
  let $clothingFig4_1_3 = $(".clothing-4-fig-1-3");
  let $clothingFig4_2_1 = $(".clothing-4-fig-2-1");
  let $clothingFig4_2_2 = $(".clothing-4-fig-2-2");
  let $clothingFig4_2_3 = $(".clothing-4-fig-2-3");
  let $clothingFig4_3_1 = $(".clothing-4-fig-3-1");
  let $clothingFig4_3_2 = $(".clothing-4-fig-3-2");
  let $clothingFig4_3_3 = $(".clothing-4-fig-3-3");

  let randomPriceAdder = Math.floor(Math.random() * 12) + 1;
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    for (let i = 0; i < data.length; i++) {
      let apiData = (data[i].price + randomPriceAdder).toFixed(2);
      clothingPriceArray.push(apiData);
    }
  } catch (error) {
    console.error(`could not get products: ${error}`);
  }

  $clothingFig_1_1.text(`$${clothingPriceArray[1]}`);
  $clothingFig_1_2.text(`$${clothingPriceArray[2]}`);
  $clothingFig_1_3.text(`$${clothingPriceArray[3]}`);
  $clothingFig_2_1.text(`$${clothingPriceArray[6]}`);
  $clothingFig_2_2.text(`$${clothingPriceArray[7]}`);
  $clothingFig_2_3.text(`$${clothingPriceArray[8]}`);
  $clothingFig_3_1.text(`$${clothingPriceArray[14]}`);
  $clothingFig_3_2.text(`$${clothingPriceArray[15]}`);
  $clothingFig_3_3.text(`$${clothingPriceArray[16]}`);
  $clothingFig2_1_1.text(`$${clothingPriceArray[17]}`);
  $clothingFig2_1_2.text(`$${clothingPriceArray[18]}`);
  $clothingFig2_1_3.text(`$${clothingPriceArray[19]}`);
  $clothingFig2_2_1.text(`$${clothingPriceArray[2]}`);
  $clothingFig2_2_2.text(`$${clothingPriceArray[1]}`);
  $clothingFig2_2_3.text(`$${clothingPriceArray[7]}`);
  $clothingFig2_3_1.text(`$${clothingPriceArray[8]}`);
  $clothingFig2_3_2.text(`$${clothingPriceArray[3]}`);
  $clothingFig2_3_3.text(`$${clothingPriceArray[17]}`);
  $clothingFig3_1_1.text(`$${clothingPriceArray[19]}`);
  $clothingFig3_1_2.text(`$${clothingPriceArray[18]}`);
  $clothingFig3_1_3.text(`$${clothingPriceArray[16]}`);
  $clothingFig3_2_1.text(`$${clothingPriceArray[15]}`);
  $clothingFig3_2_2.text(`$${clothingPriceArray[14]}`);
  $clothingFig3_2_3.text(`$${clothingPriceArray[7]}`);
  $clothingFig3_3_1.text(`$${clothingPriceArray[6]}`);
  $clothingFig3_3_2.text(`$${clothingPriceArray[3]}`);
  $clothingFig3_3_3.text(`$${clothingPriceArray[2]}`);
  $clothingFig4_1_1.text(`$${clothingPriceArray[1]}`);
  $clothingFig4_1_2.text(`$${clothingPriceArray[8]}`);
  $clothingFig4_1_3.text(`$${clothingPriceArray[19]}`);
  $clothingFig4_2_1.text(`$${clothingPriceArray[14]}`);
  $clothingFig4_2_2.text(`$${clothingPriceArray[15]}`);
  $clothingFig4_2_3.text(`$${clothingPriceArray[16]}`);
  $clothingFig4_3_1.text(`$${clothingPriceArray[17]}`);
  $clothingFig4_3_2.text(`$${clothingPriceArray[7]}`);
  $clothingFig4_3_3.text(`$${clothingPriceArray[3]}`);
}

console.log(clothingPriceArray);
