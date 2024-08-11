document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                // Clear display
                currentInput = '';
                operator = '';
                firstOperand = '';
                display.textContent = '';
            } else if (value === '=') {
                // Calculate result
                if (operator && firstOperand) {
                    currentInput = eval(`${firstOperand} ${operator} ${currentInput}`);
                    display.textContent = currentInput;
                    operator = '';
                    firstOperand = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                // Store the operator and first operand
                if (firstOperand) {
                    currentInput = eval(`${firstOperand} ${operator} ${currentInput}`);
                    display.textContent = currentInput;
                }
                firstOperand = currentInput;
                operator = value;
                currentInput = '';
            } else {
                // Handle number and decimal inputs
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });
});