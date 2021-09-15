const form = document.querySelector("form");
const billEl = document.querySelector("#bill");
const tipEl = document.querySelector(".wrapper");
const peopleEl = document.querySelector("#people");

const tipAmount = document.querySelector(".tipAmount");
const total = document.querySelector(".sum");
const reset = document.querySelector(".reset");

let tip = 0.15;

// tipEl.addEventListener("click", function (e) {
//   if (!e.target.classList.contains("btn")) return;
//   if (e.target.classList.contains("custom")) {
//     e.target.classList.add("hidden");
//     document.querySelector("input.customInput").classList.remove("hidden");
//   }
//   console.log(e.target);
// });

// const checkData = function (inputField) {
//   if (
//     !Number.isFinite(+inputField.value.trim()) ||
//     +inputField.value.trim() < 0 ||
//     inputField.value.trim() === ""
//   ) {
//     inputField.previousElementSibling.classList.remove("hidden");
//     inputField.style.border = "3px solid red";

//     return false;
//   } else {
//     inputField.previousElementSibling.classList.add("hidden");
//     inputField.style.border = "3px solid green";

//     return true;
//   }
// };

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const billValidation = checkData(billEl);
//   const peopleValidation = checkData(peopleEl);
//   if (!billValidation || !peopleValidation) return;
//   const bill = billEl.value;
//   const people = peopleEl.value;
//   const tipAmount = console.log(billEl.value, peopleEl.value);
// });

//User inputs bill value

//Check if data is safe

//User selects appropiate tip %

//If regular button - update variable with percentage

//If custom button, display input field

//Check if data is safe

//User types amount of people

//Check if data is safe

//User types enter
//Display errors if any occured

//If OK:
//Calc tip amount per person

//Display tip amount per person

//Calc total (tip + bill) per person

//Display total (tip + bill) per person

//User clicks reset - bring all to ZERO
