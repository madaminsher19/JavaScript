const elInput = document.querySelector(".input");
const elBtn = document.querySelector(".btn");
const elBorder1 = document.querySelector(".border1");
const elBorder2 = document.querySelector(".border2");


elBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (elInput.value < 11) {
        elBorder1.style.display = "block";
        elBorder2.style.display = "none";
    }else if( elInput.value<=16 && elInput.value >= 11){
        elBorder1.style.display = "none";
        elBorder2.style.display = "block";
    }else if( elInput.value>16 ){
        elBorder1.style.display = "none";
        elBorder2.style.display = "none";
        alert("siz noto'g'ri raqam kiritdiz");
    }
});
