document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("calc");
    const clearButton = document.getElementById("clear");
    const deleteButton = document.getElementById("delete");
    const operatorButtons = document.querySelectorAll(".operator");
    const numberButtons = document.querySelectorAll(".number");
    const decimalButton = document.getElementById("decimal");
    const equalsButton = document.getElementById("equals");

    clearButton.addEventListener("click", clearDisplay);
    deleteButton.addEventListener("click", deleteFromDisplay);
    operatorButtons.forEach(button => button.addEventListener("click", appendOperator));
    numberButtons.forEach(button => button.addEventListener("click", appendNumber));
    decimalButton.addEventListener("click", appendDecimal);
    equalsButton.addEventListener("click", evaluateExpression);

    function clearDisplay() {
        display.value = "";
    }

    function deleteFromDisplay() {
        display.value = display.value.slice(0, -1);
    }

    function appendOperator(event) {
        const operator = event.target.dataset.operator;
        display.value += operator;
    }

    function appendNumber(event) {
        const number = event.target.value;
        display.value += number;
    }

    function appendDecimal() {
        if (!display.value.includes(".")) {
            display.value += ".";
        }
    }

    function evaluateExpression() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }
});
