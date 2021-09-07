const slider = document.getElementById("slider");
const outputNumber = document.getElementById("output-number");
const outputPrice = document.getElementById("output-price");
const outputPriceMobile = document.getElementById("output-price-mobile");

outputNumber.innerHTML = `${slider.value}K&nbsp;PAGEVIEWS`; // Display the default slider value
outputPrice.innerHTML = `$${returnPrice(slider.value)}`; //
outputPriceMobile.innerHTML = `$${returnPrice(slider.value)}`; //

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  outputNumber.innerHTML = `${this.value}K&nbsp;PAGEVIEWS`;
  outputPrice.innerHTML = `$${returnPrice(this.value)}`;
  outputPriceMobile.innerHTML = `$${returnPrice(this.value)}`;
  const percentage = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #A4F3EB 0%, #A4F3EB " +
    percentage +
    "%, #ECF0FB " +
    percentage +
    "%, #ECF0FB 100%)";
};

function returnPrice(numberPageView) {
  const price = (numberPageView / 100) * 16;
  return price.toFixed(2);
}
