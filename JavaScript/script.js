var num = Number(prompt("raqam kiriting"));

if (num>0 && num <10){
    for(let i=1; i<11; i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
} else if(num>10){
    console.log("siz noto'gri raqam kiritdiz");
}


