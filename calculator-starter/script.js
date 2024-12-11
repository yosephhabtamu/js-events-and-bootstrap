
function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}




let firstNumber = 0;
let secondNumber = 0;


const firstNumberElement = document.getElementById("first-number");

firstNumberElement.addEventListener("change", function (){
    console.log("first number type"+ typeof this.value);
    firstNumber = parseInt(this.value);
});

const secondNumberElement = document.getElementById("second-number");

secondNumberElement.addEventListener("change", function () {
  secondNumber = parseInt(this.value);
});


 const addButtonElement = document.getElementById("add-button");

 addButtonElement.addEventListener("click", function () {
    const h1Element = document.createElement("h1");
    h1Element.innerHTML  = "result: " + add(firstNumber, secondNumber);
    document.body.appendChild(h1Element);

 });