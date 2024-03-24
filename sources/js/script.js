//Mise en place des interactions des boutons de l'index.html
let menu_buttons_one = document.querySelector(".one");
let menu_buttons_two = document.querySelector(".two");
let menu_buttons_three = document.querySelector(".three");
let menu_buttons_four = document.querySelector(".four");

menu_buttons_one.addEventListener("click", () => {
    location.replace("../syntaxe-de-base.html");
});

menu_buttons_two.addEventListener("click", () => {
    location.replace("../symboles.html");
});

menu_buttons_three.addEventListener("click", () => {
    location.replace("../fonctions.html");
});

menu_buttons_four.addEventListener("click", () => {
    location.replace("../diverses.html");
});

let head_title = document.querySelector(".head_title");

head_title.addEventListener("click", () => {
    location.replace("../index.html");
});


let page_buttons = document.querySelectorAll(".page_button");

for (let i = 0; i < 4; i++) {
    page_buttons[i].addEventListener("click", () => {
        if (i === 0) {
            location.replace("../syntaxe-de-base.html");
        } else if (i === 1) {
            location.replace("../symboles.html");
        } else if (i === 1) {
            location.replace("../fonctions.html");
        } else {
            location.replace("../diverses.html");
        };
    });
};
//fin