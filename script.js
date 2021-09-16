const form = document.getElementById("form");

const billInputField = document.getElementById("bill");
const radioBtns = document.querySelectorAll('input[name="percentage"');
const customOption = document.querySelector("#custom");
const peopleInputField = document.getElementById("people");
const tipAmount = document.getElementById("tipPerPerson");
const totalAmount = document.getElementById("totalPerPerson");
const resetBtn = document.getElementById("reset");

let percentage = 0.05;

init();
resetBtn.addEventListener("click", init);

radioBtns.forEach((input) => {
  input.addEventListener("click", () => {
    customOption.value = "";
    input.closest(".form-control").className = "form-control";
    clearCustomClasses();
    percentage = +input.value;
  });
});

customOption.addEventListener("click", () => {
  radioBtns.forEach((option) => {
    option.checked = false;
  });
});

customOption.addEventListener("keyup", (e) => {
  if (e.key === "Tab") return;
  else percentage = +customOption.value / 100;
});

form.addEventListener("change", () => (resetBtn.disabled = false));
window.addEventListener("keydown", (e) => {
  resetBtn.disabled = false;
  if (e.key === "Enter") {
    if (!checkInputs()) return;

    const bill = +billInputField.value;
    const numOfPeople = +peopleInputField.value;

    const { tipPerPerson, totalPerPerson } = calcPerPerson(
      bill,
      percentage,
      numOfPeople
    );

    updateSummaryPanel(tipPerPerson, totalPerPerson);
  }
});

function checkInputs() {
  const bill = billInputField.value.trim();
  const numOfPeople = peopleInputField.value.trim();

  if (bill === "") {
    setErrorFor(billInputField, "Can't be empty!");
  } else if (+bill <= 0) {
    setErrorFor(billInputField, "Must be a positive integer!");
  } else {
    setSuccessFor(billInputField);
  }

  if (numOfPeople === "") {
    setErrorFor(peopleInputField, "Can't be empty!");
  } else if (numOfPeople <= 0) {
    setErrorFor(peopleInputField, "Must be a positive integer!");
  } else {
    setSuccessFor(peopleInputField);
  }

  //If radio inputs are UNCHECKED, #CUSTOM must be focused, so function checks its value
  if ([...radioBtns].every((option) => !option.checked)) {
    const customValue = customOption.value.trim();
    if (customValue === "" || customValue <= 0) {
      setErrorFor(customOption);
      customOption.classList.add("error");
      customOption.classList.remove("success");
    } else {
      setSuccessFor(customOption);
      customOption.classList.remove("error");
      customOption.classList.add("success");
    }
  } else {
    clearCustomClasses();
  }

  if (
    [...document.querySelectorAll(".form-control")].some((control) =>
      control.classList.contains("error")
    )
  )
    return false;
  else return true;
}

function setErrorFor(input, msg = "") {
  const formControl = input.closest(".form-control");
  formControl.className = "form-control error";
  formControl.querySelector("small").innerText = msg;
}

function setSuccessFor(input) {
  const formControl = input.closest(".form-control");
  formControl.className = "form-control success";
  formControl.querySelector("small").innerText = "";
}

function calcPerPerson(bill, percentage, numOfPeople) {
  const tipPerPerson = (bill / numOfPeople) * percentage;
  const totalPerPerson = bill / numOfPeople + tipPerPerson;
  return {
    tipPerPerson: tipPerPerson,
    totalPerPerson: totalPerPerson,
  };
}

function updateSummaryPanel(tipPerPerson, totalPerPerson) {
  tipAmount.innerText = `$${tipPerPerson.toFixed(2)}`;
  totalAmount.innerText = `$${totalPerPerson.toFixed(2)}`;
}

function init() {
  billInputField.value = "";
  customOption.value = "";
  peopleInputField.value = "";
  updateSummaryPanel(0, 0);
  radioBtns.forEach((option) => {
    option.checked = false;
  });
  [...radioBtns][0].checked = true;
  percentage = +[...radioBtns][0].value;
  document
    .querySelectorAll(".form-control")
    .forEach((control) => (control.className = "form-control"));
  resetBtn.disabled = true;
  clearCustomClasses();
  billInputField.focus();
}

function clearCustomClasses() {
  customOption.classList.remove("error");
  customOption.classList.remove("success");
}
