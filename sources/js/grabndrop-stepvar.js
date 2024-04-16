let leftSide = document.querySelectorAll(".contain-list-step");
let rightSide = document.querySelector(".right-contain-acti-var-steps");
let lists = document.getElementsByClassName("list-step");


for (list of lists) {
    list.addEventListener("dragstart", (e) => {
        let selected = e.target;
        selected.classList.toggle("dragged");

        if (selected.parentElement.classList.contains("contain-list-step")) {
            selected.parentElement.classList.add("empty");
        };

        rightSide.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        rightSide.addEventListener("drop", (e) => {
            if (!(rightSide.children === 4)) {
                rightSide.appendChild(selected);
                selected.classList.add("dropped");
                selected = null;
            };
        });

        leftSide[0].addEventListener("dragover", (e) => {
            if ((leftSide[0].classList.contains("empty"))) {
                e.preventDefault();
            };
        });

        leftSide[0].addEventListener("drop", (e) => {
            leftSide[0].appendChild(selected);
            selected.classList.remove("dropped");
            leftSide[0].classList.remove("empty");
            selected = null;
        });

        leftSide[1].addEventListener("dragover", (e) => {
            if ((leftSide[1].classList.contains("empty"))) {
                e.preventDefault();
            };
        });

        leftSide[1].addEventListener("drop", (e) => {
            leftSide[1].appendChild(selected);
            selected.classList.remove("dropped");
            leftSide[1].classList.remove("empty");
            selected = null;
        });

        leftSide[2].addEventListener("dragover", (e) => {
            if ((leftSide[2].classList.contains("empty"))) {
                e.preventDefault();
            };
        });

        leftSide[2].addEventListener("drop", (e) => {
            leftSide[2].appendChild(selected);
            selected.classList.remove("dropped");
            leftSide[2].classList.remove("empty");
            selected = null;
        });

        leftSide[3].addEventListener("dragover", (e) => {
            if ((leftSide[3].classList.contains("empty"))) {
                e.preventDefault();
            };
        });

        leftSide[3].addEventListener("drop", (e) => {
            leftSide[3].appendChild(selected);
            selected.classList.remove("dropped");
            leftSide[3].classList.remove("empty");
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
        pResult.innerHTML = "Dommage ! Essaie encore !";
    };
});