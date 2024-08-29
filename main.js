const cardNumber = document.querySelector(".card-number");
const cardName = document.querySelector(".card-name");
const cardDateMonth = document.querySelector(".card-date-month");
const cardDateYear = document.querySelector(".card-date-year");
const cardCvv = document.querySelector(".card-cvv");

const inputNumber = document.querySelector("#cardNumber");
const inputName = document.querySelector("#cardHolder");
const inputDateM = document.querySelector("#expMonth");
const inputDateY = document.querySelector("#expYear");
const inputCvv = document.querySelector("#cvv");

inputNumber.addEventListener("input", function () {
  let value = this.value.replace(/\D/g, "");
  value = value.match(/.{1,4}/g)?.join("-") || "";
  this.value = value;
  cardNumber.textContent = value || "#### #### #### ####";
});

inputName.addEventListener("input", function () {
  cardName.textContent = this.value || "Victor Bezrukov";
});

inputCvv.addEventListener("input", function () {
  cardCvv.textContent = this.value || "####";
});

inputDateM.addEventListener("click", function () {
  cardDateMonth.textContent = this.value;
});

inputDateY.addEventListener("click", function () {
  cardDateYear.textContent = this.value;
});
