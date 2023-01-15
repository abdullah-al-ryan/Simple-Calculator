let calculation = document.getElementById("inputext");
let calculate = (number) => {
    calculation.value += number;
}

let result = () => {
    try {
        calculation.value = eval(calculation.value)
    }
    catch (err) {
        alert("Enter an Valid Operation");
    }
}
function clearScreen() {
    calculation.value = " ";

}
function removeLastInput() {
    calculation.value = calculation.value.slice(0, -1);
}