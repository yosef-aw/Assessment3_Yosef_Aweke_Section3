// Select elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let calcString = ""; // To keep track of what’s being typed

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.getAttribute("data-value");

    if (btn.id === "clear") {
      calcString = "";
      display.value = "";
      return;
    }

    if (btn.id === "equals") {
        if(!calcString) return
        const result = eval(calcString);
        display.value = result;
        calcString = result.toString();  
      
      return;
    }

    if (btn.classList.contains("operator")) {
      const lastChar = calcString.slice(-1);
      if (["+", "-", "*", "/"].includes(lastChar)) {
        return;  
      }
    }
    if (calcString==="" && ["+", "-", "*", "/"].includes(value)) return 

    calcString += value;
    display.value = calcString;
  });
});
