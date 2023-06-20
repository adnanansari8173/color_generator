const getColor = () => {
  // Hex code
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  document.body.style.backgroundColor = randomCode;
  document.getElementById("color-code").innerText = randomCode;

  navigator.clipboard.writeText(randomCode);
};
// this is our event call
document.getElementById("btn").addEventListener("click", getColor);

// this our intial call
getColor();
