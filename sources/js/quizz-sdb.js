let button = document.querySelector(".pages-quizz-button").children[0];
let title = document.querySelector(".pages-quizz-title").children[0];
let content = document.querySelector(".pages-quizz-content").children[0];
let contentContainer = document.querySelector(".pages-quizz-content-container");
let quizzPage = document.querySelector(".popup-quizz");
let startButton = document.querySelector(".start-quizz-sdb");
let body = document.querySelector("body");

startButton.addEventListener("click", () => {
    startButton.classList.add("active");
    quizzPage.classList.remove("quizz-sdb-hidden");
    quizzPage.classList.add("display-flex");
    body.scrollIntoView({
            behavior: 'smooth',
            block: "center",
            inline: "center" 
    });
});

containerInput = document.createElement("div");
containerInput.style.display = "flex";
containerInput.style.justifyContent = "space-around";
containerInput.style.alignItems = "center";
for (let i = 1; i <= 4; i++) {
    let inputNLabel = document.createElement("div");
    inputNLabel.style.display = "flex";
    let p = document.createElement("p");
    p.innerHTML = i + " -&nbsp;";
    inputNLabel.appendChild(p);
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.classList.add("quizz-input");
    inputNLabel.appendChild(input);
    containerInput.appendChild(inputNLabel);
};


let currentPage = 1;

button.addEventListener("click", () => {
    if (currentPage == 1) {
        currentPage = 2;
        title.innerHTML = "Question 1/10";
        content.innerHTML = "Quelles sont les principales caratéristique de Python ?";
        
        let contentChoices = document.createElement("div");
        contentChoices.style.color = "black";
        contentChoices.style.margin = "15px";
        contentChoices.innerHTML = "1 - Un programme soumis à une convention.<br>2 - Un langage de programmation généraliste.<br>3 - Un outil qui permet de programmer.<br>4 - Un  automatiseur de tâches.<br><br><i style='color: grey;'>(Choisissez la ou les bonnes réponses.)</i>";

        content.appendChild(contentChoices);
        content.appendChild(containerInput);

        button.innerHTML = "Valider";
    } else if (currentPage == 2) {
        currentPage = 3;
        title.innerHTML = "Question 2/10";
        content.innerHTML = "Quel est l'outil indispensable pour pouvoir observer le résultat d'un programme ?";
        
        let contentChoices = document.createElement("div");
        contentChoices.style.color = "black";
        contentChoices.style.margin = "15px";
        contentChoices.innerHTML = "1 - Le programme.<br>2 - Le shell.<br>3 - L' instanciation.<br>4 - La console.<br><br><i style='color: grey;'>(Choisissez la ou les bonnes réponses.)</i>";

        content.appendChild(contentChoices);
        content.appendChild(containerInput);
        
        button.innerHTML = "Valider";
    } else if (currentPage == 3) {
        currentPage = 4;
        title.innerHTML = "Question 3/10";
        content.innerHTML = "Quelle est la différence entre les deux programmes ci-contre ?";

        let contentChoices = document.createElement("div");
        contentChoices.classList.add("pages-quizz-code-exemple");
        contentChoices.innerHTML = "<span class='code-var-lightblue'>helloworld</span> <span class='code-exemple-p'>=</span> <span class='code-text-brown'>&quot;Hello world !&quot;</span><br><span class='code-yellow'>print</span><span class='code-caract-yellow'>(</span><span class='code-var-lightblue'>helloworld</span><span class='code-caract-yellow'>)</span>";

        let contentChoicesTwo = document.createElement("div");
        contentChoicesTwo.classList.add("pages-quizz-code-exemple");
        contentChoicesTwo.innerHTML = "<span class='code-yellow'>print</span><span class='code-caract-yellow'>(</span><span class='code-text-brown'>&quot;Hello world !&quot;</span><span class='code-caract-yellow'>)</span>";

        let contentChoicesThree = document.createElement("div");
        contentChoicesThree.style.color = "black";
        contentChoicesThree.style.margin = "15px";
        contentChoicesThree.innerHTML = "1 - La sortie de code sera &quot;helloworld&quot; pour le premier et &quot;Hello world !&quot; pour le deuxième.<br>2 - Le nombre de lignes de code.<br>3 - Aucune sur le résultat dans le shell.<br>4 - Il y aura écrit : helloworld = &quot;Hello world !&quot;, après avoir éxecuté le code.<br><br><i style='color: grey;'>(Choisissez la ou les bonnes réponses.)</i>";


        content.appendChild(contentChoices);
        content.appendChild(contentChoicesTwo);
        content.appendChild(contentChoicesThree);
        content.appendChild(containerInput);


        button.innerHTML = "Valider";
    } else if (currentPage == 4) {
        currentPage = 5;
        title.innerHTML = "Question 4/10";
        content.innerHTML = "Pourquoi ne faut-il pas mettre d'espace entre deux mots du nom de ma variable lorsqu'on la crée ?";
        
        let contentChoices = document.createElement("div");
        contentChoices.style.color = "black";
        contentChoices.style.margin = "15px";
        contentChoices.innerHTML = "1 - Ce n'est pas un problème.<br>2 - Car il manque une virgule.<br>3 - Car il pense que ce sont deux variables.<br>4 - Car il ne comprendra pas ce qui y est écrit.<br><br><i style='color: grey;'>(Choisissez la ou les bonnes réponses.)</i>";

        content.appendChild(contentChoices);
        content.appendChild(containerInput);
        
        button.innerHTML = "Valider";
    } else if (currentPage == 5) {
        currentPage = 6;
        title.innerHTML = "Question 5/10";
        content.innerHTML = "À quoi peuvent servir les booléens ?";

        let contentChoices = document.createElement("div");
        contentChoices.style.color = "black";
        contentChoices.style.margin = "15px";
        contentChoices.innerHTML = "1 - Ils servent à faire des formulaires.<br>2 - Ils servent à savoir si quelque-chose est fait ou non.<br>3 - Ils servent à faire des choix à notre place.<br>4 - Ils ne servent que dans les variables.<br><br><i style='color: grey;'>(Choisissez la ou les bonnes réponses.)</i>";

        content.appendChild(contentChoices);
        content.appendChild(containerInput);

        button.innerHTML = "Valider";
    } else if (currentPage == 6) {
        currentPage = 7;
        title.innerHTML = "Question 6/10";
        content.innerHTML = "Comment crée-t-on une variable ayant un nombre flottant comme valeur ?";
        
        let contentChoices = document.createElement("div");
        contentChoices.style.color = "black";
        contentChoices.style.margin = "15px";
        contentChoices.innerHTML = "1 - On donne un nom à notre variable et on lui donne la valeur : 123,123.<br>2 - On donne un nom à notre variable et on lui donne la valeur : &quot;123,123&quot;.<br>3 - On donne un nom à notre variable et on lui donne la valeur : 123.123.<br>4 - On donne un nom à notre variable et on lui donne la valeur : &quot;123.123&quot;.<br><br><i style='color: grey;'>(Choisissez la ou les bonnes réponses.)</i>";

        content.appendChild(contentChoices);
        content.appendChild(containerInput);

        button.innerHTML = "Valider";
    } else if (currentPage == 7) {
        currentPage = 8;
        title.innerHTML = "Question 7/10";
        content.innerHTML = "Concrètement, à quoi servent les variables ?";

        let contentChoices = document.createElement("div");
        contentChoices.style.color = "black";
        contentChoices.style.margin = "15px";
        contentChoices.innerHTML = "1 - Elles servent à nous simplifier la vie.<br>2 - Elles servent à être réutilisées, modifiées et transformées pour nos besoins.<br>3 - A stocker une valeur et des informations concernant un sujet.<br>4 - Elles servent à écrire dans le shell.<br><br><i style='color: grey;'>(Choisissez la ou les bonnes réponses.)</i>";

        content.appendChild(contentChoices);
        content.appendChild(containerInput);
        
        button.innerHTML = "Valider";
    } else if (currentPage == 8) {
        currentPage = 9;
        title.innerHTML = "Question 8/10";
        content.innerHTML = "Laquelle de ces méthodes est la bonne pour instancier deux variables sur la même ligne de code ?";
        
        let contentChoices = document.createElement("div");
        contentChoices.classList.add("pages-quizz-code-exemple");
        contentChoices.innerHTML = "<span class='code-com'>#Méthode n1</span><br><span class='code-var-lightblue'>helloworld</span> <span class='code-exemple-p'>+</span> <span class='code-var-lightblue'>helloworld2</span> <span class='code-exemple-p'>=</span> <span class='code-text-brown'>&quot;Hello world !&quot;</span> <span class='code-exemple-p'>+</span> <span class='code-text-brown'>&quot;Hello world Number 2 !&quot;</span><br><br><span class='code-com'>#Méthode n2</span><br><span class='code-var-lightblue'>helloworld</span> <span class='code-exemple-p'>&</span> <span class='code-var-lightblue'>helloworld2</span> <span class='code-exemple-p'>=</span> <span class='code-text-brown'>&quot;Hello world !&quot;</span> <span class='code-exemple-p'>&</span> <span class='code-text-brown'>&quot;Hello world Number 2 !&quot;</span><br><br><span class='code-com'>#Méthode n3</span><br><span class='code-var-lightblue'>helloworld</span><span class='code-exemple-p'>,</span> <span class='code-var-lightblue'>helloworld2</span> <span class='code-exemple-p'>=</span> <span class='code-text-brown'>&quot;Hello world !&quot;</span><span class='code-exemple-p'>,</span> <span class='code-text-brown'>&quot;Hello world Number 2 !&quot;</span><br><br><span class='code-com'>#Méthode n4</span><br><span class='code-var-lightblue'>helloworld</span> <span class='code-exemple-p'>+</span> <span class='code-var-lightblue'>helloworld2</span> <span class='code-exemple-p'>==</span> <span class='code-text-brown'>&quot;Hello world !&quot;</span> <span class='code-exemple-p'>+</span> <span class='code-text-brown'>&quot;Hello world Number 2 !&quot;</span><br><br>";

        let contentChoicesTwo = document.createElement("div");
        contentChoicesTwo.style.color = "black";
        contentChoicesTwo.style.margin = "15px";
        contentChoicesTwo.innerHTML = "1 - La méthode n1.<br>2 - La méthode n2.<br>3 - La méthode n3.<br>4 - La méthode n4.<br><br><i style='color: grey;'>(Choisissez la ou les bonnes réponses.)</i>";

        content.appendChild(contentChoices);
        content.appendChild(contentChoicesTwo);
        content.appendChild(containerInput);
        
        button.innerHTML = "Valider";
    } else if (currentPage == 9) {
        currentPage = 10;
        title.innerHTML = "Question 9/10";
        content.innerHTML = "Quelle sera la sortie affichée dans le shell après le lancement du programme ?";

        let contentChoices = document.createElement("div");
        contentChoices.classList.add("pages-quizz-code-exemple");
        contentChoices.innerHTML = "<span class='code-var-lightblue'>name</span> <span class='code-exemple-p'>=</span> <span class='code-yellow'>print</span><span class='code-caract-yellow'>(</span><span class='code-text-brown'>&quot;What's your name ?&quot;</span><span class='code-caract-yellow'>)</span><br><span class='code-var-lightblue'>name</span>";

        let contentChoicesTwo = document.createElement("div");
        contentChoicesTwo.style.color = "black";
        contentChoicesTwo.style.margin = "15px";
        contentChoicesTwo.innerHTML = "1 - name = print(&quot;What's your name ?&quot;).<br>2 - name.<br>3 - What's your name?.<br>4 - print(&quot;What's your name?&quot;).<br><br><i style='color: grey;'>(Choisissez la ou les bonnes réponses.)</i>";

        content.appendChild(contentChoices);
        content.appendChild(contentChoicesTwo);
        content.appendChild(containerInput);

        button.innerHTML = "Valider";
    } else if (currentPage == 10) {
        currentPage = 11;
        title.innerHTML = "Question 10/10";
        content.innerHTML = "Quelle sera le type de valeur affichée dans le shell après avoir entrer ce qui suit ?<br>>>> True";
        
        let contentChoices = document.createElement("div");
        contentChoices.classList.add("pages-quizz-code-exemple");
        contentChoices.innerHTML = "<span class='code-var-lightblue'>result</span> <span class='code-exemple-p'>=</span> <span class='code-yellow'>input</span><span class='code-caract-yellow'>(</span><span class='code-text-brown'>&quot;Êtes vous en train d'apprendre ?&quot;</span><span class='code-caract-yellow'>)</span><br><span class='code-yellow'>print</span><span class='code-caract-yellow'>(</span><span class='code-var-lightblue'>result</span><span class='code-caract-yellow'>)</span>";
        
        let contentChoicesTwo = document.createElement("div");
        contentChoicesTwo.style.color = "black";
        contentChoicesTwo.style.margin = "15px";
        contentChoicesTwo.innerHTML = "1 - Un nombre entier.<br>2 - Un booléen.<br>3 - Une chaine de caractères.<br>4 - Un nombre flottant.<br><br><i style='color: grey;'>(Choisissez la ou les bonnes réponses.)</i>";

        content.appendChild(contentChoices);
        content.appendChild(contentChoicesTwo);
        content.appendChild(containerInput);
        
        button.innerHTML = "Terminer";
    } else if (currentPage == 11) {
        currentPage = 0;
        title.innerHTML = "Résultat";
        content.innerHTML = "";
        button.innerHTML = "Fermer";
    } else {
        currentPage = 1;
        quizzPage.classList.add("quizz-sdb-hidden");
        quizzPage.classList.remove("display-flex");
    };
});