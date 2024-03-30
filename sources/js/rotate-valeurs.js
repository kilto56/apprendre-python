let chaineCaract = document.querySelector(".texte");
let int = document.querySelector(".number-int");
let float = document.querySelector(".number-float");
let bool = document.querySelector(".bool");

let pChaineCaract = document.querySelector("#texte-p");
let pInt = document.querySelector("#int-p");
let pFloat = document.querySelector("#float-p");
let pBool = document.querySelector("#bool-p");

const rotatedCard = [false, false, false, false];

chaineCaract.addEventListener("click", () => {
    chaineCaract.classList.toggle("rotated");
    setTimeout(() => {
        pChaineCaract.classList.toggle("invert");
        pChaineCaract.classList.toggle("justify-texte");
        if (!rotatedCard[0]) {
            pChaineCaract.innerHTML = "La chaine de caractère est symbolisée par des guillemets autour d'un texte. Elle sert à communiquer des informations écrites !";
            rotatedCard[0] = !rotatedCard[0];
        } else {
            pChaineCaract.innerHTML = "La chaine de caractères";
            rotatedCard[0] = !rotatedCard[0];
        };
    }, 50);
});

int.addEventListener("click", () => {
    int.classList.toggle("rotated");
    setTimeout(() => {
        pInt.classList.toggle("invert");
        pInt.classList.toggle("justify-texte");
        if (!rotatedCard[1]) {
            pInt.innerHTML = "Les nombres entiers sont utilisés pour faire des actions à répétitions ou compter. Il sont symbolisés sans guillemets et sans virgules.";
            rotatedCard[1] = !rotatedCard[1];
        } else {
            pInt.innerHTML = "Les nombres entiers";
            rotatedCard[1] = !rotatedCard[1];
        };
    }, 50);
});

float.addEventListener("click", () => {
    float.classList.toggle("rotated");
    setTimeout(() => {
        pFloat.classList.toggle("invert");
        pFloat.classList.toggle("justify-texte");
        if (!rotatedCard[2]) {
            pFloat.innerHTML = "Les nombres flottants (autrement dit : décimaux) sont utilisés pour faire des calculs complexes. Il sont symbolisés sans guillemets avec un point en guise de virgule et un/plusieurs chiffres à la suite.";
            rotatedCard[2] = !rotatedCard[2];
        } else {
            pFloat.innerHTML = "Les nombres flottants";
            rotatedCard[2] = !rotatedCard[2];
        };
    }, 50);
});

bool.addEventListener("click", () => {
    bool.classList.toggle("rotated");
    setTimeout(() => {
        pBool.classList.toggle("invert");
        pBool.classList.toggle("justify-texte");
        if (!rotatedCard[3]) {
            pBool.innerHTML = "Les booléens (autrement dit : Vrai/Faux) sont sollicités pour faire des choix à notre place et pour savoir si les conditions d'une action/d'un fait sont remplies. Ils sont symbolisés sans guillemets et en minuscule.";
            rotatedCard[3] = !rotatedCard[3];
        } else {
            pBool.innerHTML = "Les booléens";
            rotatedCard[3] = !rotatedCard[3];
        };
    }, 50);
});