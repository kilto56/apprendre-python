let leftSide = document.querySelectorAll(".contain-list-step");
let rightSide = document.querySelector(".right-contain-acti-var-steps");
let lists = document.getElementsByClassName("list-step");

for (list of lists) {
    list.addEventListener("dragstart", (e) => {
        let selected = e.target;
        selected.classList.toggle("dragged");

        rightSide.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        rightSide.addEventListener("drop", (e) => {
            rightSide.appendChild(selected);
            selected.classList.add("dropped");
            selected = null;
        });

        leftSide[0].addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        leftSide[0].addEventListener("drop", (e) => {
            leftSide[0].appendChild(selected);
            selected.classList.remove("dropped");
            selected = null;
        });

        leftSide[1].addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        leftSide[1].addEventListener("drop", (e) => {
            leftSide[1].appendChild(selected);
            selected.classList.remove("dropped");
            selected = null;
        });

        leftSide[2].addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        leftSide[2].addEventListener("drop", (e) => {
            leftSide[2].appendChild(selected);
            selected.classList.remove("dropped");
            selected = null;
        });

        leftSide[3].addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        leftSide[3].addEventListener("drop", (e) => {
            leftSide[3].appendChild(selected);
            selected.classList.remove("dropped");
            selected = null;
        });
    });

    list.addEventListener("dragend", (e) => {
        let selected = e.target;
        selected.classList.toggle("dragged");
    });
};

let validBtn = document.querySelector(".valid-acti-var").firstElementChild;

validBtn.addEventListener("click", () => {
    let pResult = document.querySelector(".result-acti-var")
    if ((rightSide.childElementCount === 4) && ((rightSide.children[0].classList.contains("list-step-util")) && (rightSide.children[1].classList.contains("list-step-name")) && (rightSide.children[2].classList.contains("list-step-symb")) && (rightSide.children[3].classList.contains("list-step-value")))) {
        pResult.innerHTML = "Bien vu !";
    } else {
        pResult.innerHTML = "Dommage ! Essaies encore !";
    };
});