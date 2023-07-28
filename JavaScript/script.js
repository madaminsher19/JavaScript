let num1 = Number(prompt("Birinchi sonni tiriting"));
let num2 = Number(prompt("Ikkinchi sonni tiriting"));
let amal = prompt("bajarilishi kerak bo'lgan amalnini kiriting");

switch (amal) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    case "%":
        console.log(num1 % num2);
        break;
    case "**":
        console.log(num1 ** num2);
        break;

    default:
        console.log("siz noto'g'ri amal kiritdingiz");
        break;
}
