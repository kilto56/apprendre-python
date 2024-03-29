let chaineCaract = document.querySelector(".texte");
let int = document.querySelector(".number-int");
let float = document.querySelector(".number-float");
let bool = document.querySelector(".bool");

let pChaineCaract = document.querySelector("#texte-p");
let pInt = document.querySelector("#int-p");
let pFloat = document.querySelector("#float-p");
let pBool = document.querySelector("#bool-p");

chaineCaract.addEventListener("click", () => {
    chaineCaract.classList.toggle("rotated");
    setTimeout(() => {
        pChaineCaract.classList.toggle("invert");
        pChaineCaract.innerHTML = "La chaine de caractère est symbolisée par des guillemets autour d'un texte. Elle sert à communiquer des informations écrites !"
    }, 50);
});

int.addEventListener("click", () => {
    int.classList.toggle("rotated");
    setTimeout(() => {
        pInt.classList.toggle("invert");
    }, 50);
});

float.addEventListener("click", () => {
    float.classList.toggle("rotated");
    setTimeout(() => {
        pFloat.classList.toggle("invert");
    }, 50);
});

bool.addEventListener("click", () => {
    bool.classList.toggle("rotated");
    setTimeout(() => {
        pBool.classList.toggle("invert");
    }, 50);
});