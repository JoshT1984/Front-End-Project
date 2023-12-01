let isSpinning = false;
let rotateAngle = 0;
let shoePriceArray = [];
let clothingPriceArray = [];
let equipmentPriceArray = [];
let sound = document.createElement("audio");

let isPlaying = false;

render();

function render() {
  rotateOnClick();
  apiShoePricesEmbedded();
  equipmentPricesEmbedded();
  playMusic();
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

function playMusic() {
  window.addEventListener("click", function () {
    if (isPlaying === false) {
      playAudio();
    }
    isPlaying = true;
  });
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

  let randomPriceAdder = Math.floor(Math.random() * 15) + 1;
  let randomPriceAdder2 = Math.floor(Math.random() * 15) + 1;
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
    for (let j = 0; j < data.length; j++) {
      let apiData2 = (data[j].price + randomPriceAdder2).toFixed(2);
      clothingPriceArray.push(apiData2);
    }
  } catch (error) {
    console.error(`could not get products: ${error}`);
  }
  $shoeFig_1_1.text(`$${shoePriceArray[0]}`);
  $shoeFig_1_2.text(`$${shoePriceArray[1]}`);
  $shoeFig_1_3.text(`$${shoePriceArray[2]}`);
  $shoeFig_2_1.text(`$${shoePriceArray[3]}`);
  $shoeFig_2_2.text(`$${shoePriceArray[0]}`);
  $shoeFig_2_3.text(`$${shoePriceArray[5]}`);
  $shoeFig_3_1.text(`$${shoePriceArray[6]}`);
  $shoeFig_3_2.text(`$${shoePriceArray[7]}`);
  $shoeFig_3_3.text(`$${shoePriceArray[8]}`);

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

function equipmentPricesEmbedded() {
  let iterator = 9;
  let newDeckArray = [];
  let newWheelArray = [];
  let newBearingArray = [];
  let newGripArray = [];
  let newTruckArray = [];
  let newToolArray = [];
  let newHardwareArray = [];

  for (let i = 0; i < iterator; i++) {
    let deckPrices = Math.floor(Math.random() * 85) + 45;
    let wheelPrices = Math.floor(Math.random() * 45) + 15;
    let bearingPrices = Math.floor(Math.random() * 54) + 14;
    let gripPrices = Math.floor(Math.random() * 12) + 4;
    let truckPrices = Math.floor(Math.random() * 65) + 33;
    let toolPrices = Math.floor(Math.random() * 25) + 12;
    let hardwarePrices = Math.floor(Math.random() * 22) + 6;

    newDeckArray.push(deckPrices);
    newWheelArray.push(wheelPrices);
    newBearingArray.push(bearingPrices);
    newGripArray.push(gripPrices);
    newTruckArray.push(truckPrices);
    newToolArray.push(toolPrices);
    newHardwareArray.push(hardwarePrices);
  }
  let f1 = $(".f1").text(`$${newDeckArray[0]}.00`);
  let f2 = $(".f2").text(`$${newDeckArray[1]}.00`);
  let f3 = $(".f3").text(`$${newDeckArray[2]}.00`);
  let f4 = $(".f4").text(`$${newDeckArray[3]}.00`);
  let f5 = $(".f5").text(`$${newDeckArray[4]}.00`);
  let f6 = $(".f6").text(`$${newDeckArray[5]}.00`);
  let f7 = $(".f7").text(`$${newDeckArray[6]}.00`);
  let f8 = $(".f8").text(`$${newDeckArray[7]}.00`);
  let f9 = $(".f9").text(`$${newDeckArray[8]}.00`);

  let f21 = $(".f21").text(`$${newDeckArray[0]}.00`);
  let f22 = $(".f22").text(`$${newDeckArray[1]}.00`);
  let f23 = $(".f23").text(`$${newDeckArray[2]}.00`);
  let f24 = $(".f24").text(`$${newDeckArray[3]}.00`);
  let f25 = $(".f25").text(`$${newDeckArray[4]}.00`);
  let f26 = $(".f26").text(`$${newDeckArray[5]}.00`);
  let f27 = $(".f27").text(`$${newDeckArray[6]}.00`);
  let f28 = $(".f28").text(`$${newDeckArray[7]}.00`);
  let f29 = $(".f29").text(`$${newDeckArray[8]}.00`);

  let f31 = $(".f31").text(`$${newDeckArray[0]}.00`);
  let f32 = $(".f32").text(`$${newDeckArray[1]}.00`);
  let f33 = $(".f33").text(`$${newDeckArray[2]}.00`);
  let f34 = $(".f34").text(`$${newDeckArray[3]}.00`);
  let f35 = $(".f35").text(`$${newDeckArray[4]}.00`);
  let f36 = $(".f36").text(`$${newDeckArray[5]}.00`);
  let f37 = $(".f37").text(`$${newDeckArray[6]}.00`);
  let f38 = $(".f38").text(`$${newDeckArray[7]}.00`);
  let f39 = $(".f39").text(`$${newDeckArray[8]}.00`);

  let f41 = $(".f41").text(`$${newDeckArray[0]}.00`);
  let f42 = $(".f42").text(`$${newDeckArray[1]}.00`);
  let f43 = $(".f43").text(`$${newDeckArray[2]}.00`);
  let f44 = $(".f44").text(`$${newDeckArray[3]}.00`);
  let f45 = $(".f45").text(`$${newDeckArray[4]}.00`);
  let f46 = $(".f46").text(`$${newDeckArray[5]}.00`);
  let f47 = $(".f47").text(`$${newDeckArray[6]}.00`);
  let f48 = $(".f48").text(`$${newDeckArray[7]}.00`);
  let f49 = $(".f49").text(`$${newDeckArray[8]}.00`);

  let f51 = $(".f51").text(`$${newDeckArray[0]}.00`);
  let f52 = $(".f52").text(`$${newDeckArray[1]}.00`);
  let f53 = $(".f53").text(`$${newDeckArray[2]}.00`);
  let f54 = $(".f54").text(`$${newDeckArray[3]}.00`);
  let f55 = $(".f55").text(`$${newDeckArray[4]}.00`);
  let f56 = $(".f56").text(`$${newDeckArray[5]}.00`);
  let f57 = $(".f57").text(`$${newDeckArray[6]}.00`);
  let f58 = $(".f58").text(`$${newDeckArray[7]}.00`);
  let f59 = $(".f59").text(`$${newDeckArray[8]}.00`);

  let f61 = $(".f61").text(`$${newDeckArray[0]}.00`);
  let f62 = $(".f62").text(`$${newDeckArray[1]}.00`);
  let f63 = $(".f63").text(`$${newDeckArray[2]}.00`);
  let f64 = $(".f64").text(`$${newDeckArray[3]}.00`);
  let f65 = $(".f65").text(`$${newDeckArray[4]}.00`);
  let f66 = $(".f66").text(`$${newDeckArray[5]}.00`);
  let f67 = $(".f67").text(`$${newDeckArray[6]}.00`);
  let f68 = $(".f68").text(`$${newDeckArray[7]}.00`);
  let f69 = $(".f69").text(`$${newDeckArray[8]}.00`);

  let f71 = $(".f71").text(`$${newDeckArray[0]}.00`);
  let f72 = $(".f72").text(`$${newDeckArray[1]}.00`);
  let f73 = $(".f73").text(`$${newDeckArray[2]}.00`);
  let f74 = $(".f74").text(`$${newDeckArray[3]}.00`);
  let f75 = $(".f75").text(`$${newDeckArray[4]}.00`);
  let f76 = $(".f76").text(`$${newDeckArray[5]}.00`);
  let f77 = $(".f77").text(`$${newDeckArray[6]}.00`);
  let f78 = $(".f78").text(`$${newDeckArray[7]}.00`);
  let f79 = $(".f79").text(`$${newDeckArray[8]}.00`);
}

function playAudio() {
  sound.loop = true;
  sound.volume = 0.1;
  sound.src = "../audio/evansBlue.mp3";
  sound.play();
}
