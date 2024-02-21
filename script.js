let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1")

btn1.addEventListener("click", function(){
    if(tg.MainButton.isVisible){
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(`Вы выбрали товар ${item}!`);
        item = "Кофе";
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