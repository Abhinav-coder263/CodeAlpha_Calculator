document.addEventListener('keydown', function(event) {
    const inputBox = document.getElementById('inputBox');
    const key = event.key;
    const operators = ['+', '-', '*', '/', '%'];

    if (!isNaN(key) || key === '.') {
      inputBox.value += key;
    } else if (operators.includes(key)) {
      inputBox.value += ` ${key} `;
    } else if (key === 'Enter') {
      try {
        inputBox.value = eval(inputBox.value);
      } catch {
        inputBox.value = 'Error';
      }
    } else if (key === 'Backspace') {
      inputBox.value = inputBox.value.slice(0, -1);
    } else if (key === 'Escape') {
      inputBox.value = '';
    }
  });

const inputBox = document.getElementById('inputBox');

function clearInput() {
inputBox.value = '';
}

function deleteLast() {
inputBox.value = inputBox.value.slice(0, -1);
}
function appendNumber(number) {
inputBox.value += number;
}

function appendOperator(operator) {
inputBox.value += operator;
}

function appendDot() {
if (!inputBox.value.includes('.')) {
  inputBox.value += '.';
}
}

function calculateResult() {
try {
  inputBox.value = eval(inputBox.value);
} catch (error) {
  inputBox.value = 'Error';
}
}