const clickButton = document.getElementById("click");

const userInputElement = document.getElementById("user-input");


let userInputText = "";


userInputElement.addEventListener("change", function (){
    userInputText = this.value;
    console.log("this user input is , " , this.value )
});

clickButton.addEventListener("click", function () /*anonymous functions*/ {
  const h1Element =  document.createElement("h1");
  h1Element.innerHTML = " <a href = ''>"  + userInputText + "</a>";
  document.body.appendChild(h1Element);
});

// document.addEventListener("keypress", function (event) {
//   console.log("this key is pressed, ", event.key);
// });
