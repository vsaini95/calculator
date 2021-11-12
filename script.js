let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    let val = e.target.innerText;
    let output = document.querySelector("#result");
    let current = output.innerText;
    if (output.innerText == "0") {
      if (val != "AC" && val != "DEL") {
        output.innerText = "";
        output.innerText += val;
      }
    } else {
      if (val == "DEL") {
        output.innerText = current.slice(0, -1);
        if (output.innerText.length == 1) {
          output.innerText = "0";
        }
      }
      if (val == "AC") {
        output.innerText = "0";
      }
      if (val == "=") {
        let res = output.innerText;
        output.innerText = eval(res);
      }
      if (val != "AC" && val != "DEL" && val != "=") {
        output.innerText += val;
      }
    }
  });
}
