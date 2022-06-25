// set inital value to zero
let countP1 = 0;
let countP2 = 0;

// select value and buttons
const valueP1 = document.querySelector("#valueP1");
const valueP2 = document.querySelector("#valueP2");

const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  console.log(btn)

  btn.addEventListener("click", function (e) {
    
    const styles = e.currentTarget.classList[1]; // Qual o botão
    const board = styles.slice(-2);
    const action = styles.slice(0,styles.length -2)
   
    acountAndPaint(board,action);

    valueP1.textContent = countP1;
    valueP2.textContent = countP2;

  });

});

function acountAndPaint(board, action) {

  if(board == 'P1') {
    switch (action) {
      case "increase":
        countP1++;
        break;
      case "decrease":
        countP1--;
        break;
      default:
        countP1 = 0
    }

      if (countP1 > 0) {
        valueP1.style.color = "green";
      }
      if (countP1 < 0) {
        valueP1.style.color = "red";
      }
      if (countP1 === 0) {
        valueP1.style.color = "#222";
      }

  }

  if(board == 'P2') {
    switch (action) {
      case "increase":
        countP2++;
        break;
      case "decrease":
        countP2--;
        break;
      default:
        countP2 = 0
    }

    if (countP2 > 0) {
      valueP2.style.color = "green";
    }
    if (countP2 < 0) {
      valueP2.style.color = "red";
    }
    if (countP2 === 0) {
      valueP2.style.color = "#222";
    }

  }

}