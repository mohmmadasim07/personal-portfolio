let item = document.querySelectorAll(".item");
let itemG = document.querySelectorAll(".itemG");

// color generator
function colorsgenarator() {
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
//gradient generator

function gradientgenerator() {
  var degree = Math.floor(Math.random() * 360);
  var gradient =
    "linear-gradient(" +
    degree +
    "deg," +
    colorsgenarator() +
    "," +
    colorsgenarator() +
    ")";
  return gradient;
}

item.forEach((i) => {
  i.style.backgroundColor = colorsgenarator();
  i.innerHTML = `<p> ${colorsgenarator()} </p>`;
});

itemG.forEach((j) => {
  j.style.background = gradientgenerator();
  j.innerHTML = `<p class="pg"> ${gradientgenerator()} </p>`;
});
