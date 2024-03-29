let btn = document.querySelector("#recap-btn");
let pRecap = document.querySelector(".recap-txt-p")
let details1 = document.querySelector(".details1");
let details2 = document.querySelector(".details2");
let details3 = document.querySelector(".details3");

let check1 = 0;
let check2 = 0;
let check3 = 0;

btn.addEventListener("click", () => {
    if ((check1 + check2 + check3) === 3) {
        pRecap.innerHTML = "&nbsp;&nbsp;Python est donc un langage <b>généraliste</b> qui est soumis à une <b>convention</b>. C'est un langage simple d'utilisation fonctionnant comme chaque langage de programmation : avec des mots-clés. <br> &nbsp;&nbsp;Python est donc connu pour ces spécifités et vous servira sûrement si vous ferez de l'informatique plus tard.<br><br><p><b>&nbsp;&nbsp;LEXIQUE :</b><br><ul><li>Convention : Modèle d'écriture à suivre lors de la création de programme.</li><li>Script : Autrement dit &#34;code&#34; ou &#34;programme&#34;.</li><li>Shell : sortie/résultat donné lors du lancement du programme.";
        btn.style.display = "none";
    } else {
        pRecap.innerHTML = "Vous devez lire les parties précédentes avant de lire le résumé !";
    };
});

details1.addEventListener("click", () => {
    if (check1 === 0) {
        check1 = 1;
    };
});

details2.addEventListener("click", () => {
    if (check2 === 0) {
        check2 = 1;
    };
});

details3.addEventListener("click", () => {
    if (check3 === 0) {
        check3 = 1;
    };
});