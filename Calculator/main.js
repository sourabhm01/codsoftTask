let display = document.getElementById('display');

function addToDisplay(val) {
   if (display.value == '0') {
      display.value = val;
   } else {
      display.value += val;
   }
}

function clearDisplay() {
   display.value = '0';
}

function calculate() {
   try {
      display.value = eval(display.value);
   } catch (error) {
      display.value = 'Error';
   }
}