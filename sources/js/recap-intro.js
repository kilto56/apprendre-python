let btn = document.querySelector("#recap-btn");
let pRecap = document.querySelector(".recap-txt-p")
let details1 = document.querySelector(".details1");
let details2 = document.querySelector(".details2");
let details3 = document.querySelector(".details3");

let check = 0;

btn.addEventListener("click", () => {
    if (check === 3) {
        pRecap.innerHTML = "&nbsp;&nbsp;Python est donc un langage <b>généraliste</b> qui est soumis à une <b>convention</b>. C'est un langage simple d'utilisation fonctionnant comme chaque langage de programmation : avec des mots-clés. <br> &nbsp;&nbsp;Python est donc connu pour ces spécifités et vous servira sûrement si vous ferez de l'informatique plus tard."
    } else {
        pRecap.innerHTML = "Vous devez lire les parties précédentes avant de lire le résumé !";
    };
});