const form = document.querySelector("form");

// This usecase will give you empty value
// const height = parseInt(document.querySelector('height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // show the Result
    result.innerHTML = `<span> Result is: ${bmi}</span>`;
    // show the range
    if (bmi < 18.6) {
      const underWeight = document.querySelector("#UW");
      underWeight.style.backgroundColor = "green";
    }
    if (bmi > 18.6 && bmi < 24.9) {
      const normalRange = document.querySelector("#NR");
      normalRange.style.backgroundColor = "green";
    }
    if (bmi > 24.9) {
      const overWeight = document.querySelector("#OW");
      overWeight.style.backgroundColor = "green";
    }
  }
});
