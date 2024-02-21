let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")

btn1.addEventListener("click", function(){
    if(tg.MainButton.isVisible){
        tg.MainButton.hide();
    } else { 
        item = "Кофе";
        tg.MainButton.setText(`Вы выбрали товар ${item}!`);
        tg.MainButton.show();
    }
})

btn2.addEventListener("click", function(){
    if(tg.MainButton.isVisible){
        tg.MainButton.hide();
    } else {
        item = "Вискас мурчикам";
        tg.MainButton.setText(`Вы выбрали товар ${item}!`);
        tg.MainButton.show();
    }
})

btn3.addEventListener("click", function(){
    if(tg.MainButton.isVisible){
        tg.MainButton.hide();
    } else {
        item = "Отель";
        tg.MainButton.setText(`Найти ближайщий ${item}!`);
        tg.MainButton.show();
    }
})

btn4.addEventListener("click", function(){
    if(tg.MainButton.isVisible){
        tg.MainButton.hide();
    } else {
        item = "";
        tg.MainButton.setText(`Вы решили стать самым модным ${item}!`);
        tg.MainButton.show();
    }
})

// Связь сайта и тг
Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});


// связь тг и сайта
let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `Здравствуйте, ${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name} !
Версия API: ${tg.version}`;

usercard.appendChild(p);