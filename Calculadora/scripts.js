const numerButtons = document.querySelectorAll('[data-number]');
const operationsButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const deteleButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear-button]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
    }
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
}
const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
);































