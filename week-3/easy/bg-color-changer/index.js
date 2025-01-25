const colorInput = document.querySelectorAll("#color");
const canvas = document.querySelector(".canvas");

colorInput.forEach((btn) => {
  if (btn.nodeName == "BUTTON") {
    btn.addEventListener("click", function (elem) {
      canvas.style.backgroundColor = `${elem.target.style.backgroundColor}`;
    });
  } else {
    btn.addEventListener("input", function (elem) {
      canvas.style.backgroundColor = `${elem.target.value}`;
    });
  }
});
