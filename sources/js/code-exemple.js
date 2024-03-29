//syntaxe de base
//interaction bloc de code "avant de commencer"
let blocPython = document.querySelector(".python-code");
let blocJs = document.querySelector(".js-code");
let blocCpp = document.querySelector(".cpp-code");

let codeText = document.querySelector(".code-exemple-p");

blocPython.addEventListener("click", () => {
    if (blocPython.classList.contains("not-selected")) {
        blocPython.classList.toggle("selected");
        blocPython.classList.toggle("not-selected");
    };

    if (blocJs.classList.contains("selected")) {
        blocJs.classList.toggle("selected");
        blocJs.classList.toggle("not-selected");
    };

    if (blocCpp.classList.contains("selected")) {
        blocCpp.classList.toggle("selected");
        blocCpp.classList.toggle("not-selected");
    };

    codeText.innerHTML = "<span class='code-yellow'>print</span><span class='code-caract-yellow'>(</span><span class='code-text-brown'>&#34;Hello world !&#34;</span><span class='code-caract-yellow'>)</span>";
});

blocJs.addEventListener("click", () => {
    if (blocJs.classList.contains("not-selected")) {
        blocJs.classList.toggle("selected");
        blocJs.classList.toggle("not-selected");
    };

    if (blocCpp.classList.contains("selected")) {
        blocCpp.classList.toggle("selected");
        blocCpp.classList.toggle("not-selected");
    };

    if (blocPython.classList.contains("selected")) {
        blocPython.classList.toggle("selected");
        blocPython.classList.toggle("not-selected");
    };

    codeText.innerHTML = "<span class='code-var-lightblue'>console.</span><span class='code-yellow'>log</span><span class='code-caract-yellow'>(<span><span class='code-text-brown'>&#34;Hello world !&#34;</span><span class='code-caract-yellow'>)<span>;";
});

blocCpp.addEventListener("click", () => {
    if (blocCpp.classList.contains("not-selected")) {
        blocCpp.classList.toggle("selected");
        blocCpp.classList.toggle("not-selected");
    };

    if (blocPython.classList.contains("selected")) {
        blocPython.classList.toggle("selected");
        blocPython.classList.toggle("not-selected");
    };

    if (blocJs.classList.contains("selected")) {
        blocJs.classList.toggle("selected");
        blocJs.classList.toggle("not-selected");
    };

    codeText.innerHTML = "<span class='code-text-violet'>#include</span> <span class='code-text-red'>&lt;iostream&gt;</span><br><span class='code-text-violet'>using</span> <span class='code-var-lightblue'>namespace</span> std;<br><br><span class='code-var-lightblue'>int</span> <span class='code-yellow'>main</span><span class='code-caract-yellow'>() {</span><br>&nbsp;&nbsp;std::cout << <span class='code-text-brown'>&#34;Hello world !&#34;</span>;<br><span class='code-caract-yellow'>}</span>";
});