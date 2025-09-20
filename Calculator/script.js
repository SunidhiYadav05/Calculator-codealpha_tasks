const display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value); // Simple way
  } catch {
    display.value = "Error";
  }
}

// ✅ Keyboard Support
document.addEventListener("keydown", (event) => {
  if (!isNaN(event.key) || "+-*/.%".includes(event.key)) {
    append(event.key);
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Backspace") {
    deleteChar();
  } else if (event.key === "Escape") {
    clearDisplay();
  }
});
