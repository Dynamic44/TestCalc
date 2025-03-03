window.function = function (number1, number2) {
  if (typeof number1.value !== "number" || typeof number2.value !== "number") {
    throw new Error("Both inputs must be numbers.");
  }

  return number1.value + number2.value;
};
