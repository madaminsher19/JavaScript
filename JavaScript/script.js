var ball = prompt("balingizni kiriting");

if (ball < 80) {
    alert("o'qishga kira olmadingiz");
} else if (ball < 100) {
    alert("siz super-kontrakt asosida o'qishga tavsiya qilindingiz");
    var pull = prompt("yillik kantrakt miqdori 3000$. Sizni pulingiz bor?");
    if (pull < 3000) {
        alert("Siz kontrakt miqdorini to'lay olmaysiz.");
    } else if (pull > 3000) {
        alert("tabriklayman siz bizda o'qishingiz mumkin");
    }
} else if (ball < 130) {
    alert("siz kontrakt asosida o'qishga tavsiya qilindingiz");
    var pull = prompt("yillik kantrakt miqdori 2000$. Sizni pulingiz bor?");
    if (pull < 2000) {
        alert("Siz kontrakt miqdorini to'lay olmaysiz.");
    } else if (pull > 2000) {
        alert("tabriklayman siz bizda o'qishingiz mumkin");
    }
} else if (ball <= 180) {
    alert("Grant asosida o'qishga qabul qilindiz.");
} else if (ball > 180) {
    alert("siz no'tog'ri ball kiritdingiz");
}
