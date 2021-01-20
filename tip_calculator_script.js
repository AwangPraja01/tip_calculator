const bill_amount = document.querySelector(".bill_amount");
const service = document.querySelector(".service");
const number_of_people = document.querySelector(".number_of_people");
const calculate_btn = document.querySelector(".calculate_btn");
const result = document.querySelector(".result");
const amount_tip_result = document.querySelector(".amount_tip");
const hidden_result = document.querySelector(".hidden_result");
const each_sign = document.querySelector(".each_sign");

calculate_btn.addEventListener("click", (e) => {
  e.preventDefault();
  let amount_tip = 0;

  if (number_of_people.value == "" || bill_amount.value == "") {
    alert("Please fill out all field");
  } else {
    if (number_of_people.value > 0) {
      amount_tip = (bill_amount.value * service.value) / number_of_people.value;
      if (number_of_people.value > 1) {
        each_sign.style.display = "inline-block";
      }
    } else {
      amount_tip = bill_amount.value * service.value;
    }

    amount_tip_result.innerHTML = amount_tip.toFixed(2);

    if (amount_tip < 0.01) {
      alert("To much people to sharing the bill");
    } else {
      hidden_result.style.display = "block";
    }

    bill_amount.value = null;
    service.value = 0.3;
    number_of_people.value = null;
  }
});
