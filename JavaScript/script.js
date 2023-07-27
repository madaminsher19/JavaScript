alert("Assalomu aleykum va roxmatullohi va barokatihu");

let nameA = prompt("ismingizni kiriting.");
let money = prompt(nameA + " sizda qancha pull bor?");
let a = 750;
let b = 120;
let dollar = a * 11000.34;
let euro = b * 12354.03;
let som = dollar + euro;
let keraklisom = som - money 
if(som > money){
    console.log(nameA + " sizda " + keraklisom + " so'm mablag' yetarli emas");
} else if(som <= money){
console.log("Oq yo'l " + nameA);
}