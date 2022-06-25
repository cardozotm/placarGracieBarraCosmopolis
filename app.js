// set inital value to zero
let count = 0;
// select value and buttons
const valueP1 = document.querySelector("#valueP1");
const valueP2 = document.querySelector("#valueP2");

const btnsP1 = document.querySelectorAll(".btnP1");
const btnsP2 = document.querySelectorAll(".btnP2");

btnsP2.forEach(function (btn) {

  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList; // Qual o botão
   
    if (styles.contains("decreaseP2")) {
      count--;
    } else if (styles.contains("increaseP2")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      valueP2.style.color = "green";
    }
    if (count < 0) {
      valueP2.style.color = "red";
    }
    if (count === 0) {
      valueP2.style.color = "#222";
    }

    valueP2.textContent = count;

  });

});

btnsP2.forEach(function (btn) {

  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList; // Qual o botão
   
    if (styles.contains("decreaseP1")) {
      count--;
    } else if (styles.contains("increaseP1")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      valueP1.style.color = "green";
    }
    if (count < 0) {
      valueP1.style.color = "red";
    }
    if (count === 0) {
      valueP1.style.color = "#222";
    }

    valueP1.textContent = count;

  });

});