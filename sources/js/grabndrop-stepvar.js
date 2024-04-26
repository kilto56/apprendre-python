window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

let leftSide = document.querySelectorAll(".contain-list-step");
let rightSide = document.querySelector(".right-contain-acti-var-steps");
let lists = document.getElementsByClassName("list-step");

if (!(window.mobileAndTabletCheck)) {
    let offsetX, offsetY;

    for (list of lists) {
        /*
        list.addEventListener("touchstart", (e) => {
            let selected = e.target;
            e.preventDefault();
            selected.classList.toggle("dragged");
            e.style.zIndex = "999";
            e.style.position = "absolute";

            if (selected.parentElement.classList.contains("contain-list-step")) {
                selected.parentElement.classList.add("empty");
            };
            
        });

        list.addEventListener("touchmove", (e) => {
            
        });

        list.addEventListener("touchend", (e) => {
            
        });*/


        list.addEventListener('touchstart', (e) => {
            const rect = list.getBoundingClientRect();
            offsetX = e.touches[0].clientX - rect.left;
            offsetY = e.touches[0].clientY - rect.top;

            let selected = e.target;
            selected.classList.toggle("dragged");

            if (selected.parentElement.classList.contains("contain-list-step")) {
                selected.parentElement.classList.add("empty");
            };
        });
        
        list.addEventListener('touchmove', (e) => {
            e.preventDefault(); // Prevent page scrolling
            const x = e.touches[0].clientX - offsetX;
            const y = e.touches[0].clientY - offsetY;
            draggable.style.left = x + 'px';
            draggable.style.top = y + 'px';
        });
        
        let target = rightSide;

        list.addEventListener('touchend', (e) => {
            const rect = list.getBoundingClientRect();
            const targetRect = target.getBoundingClientRect();
            const draggableCenterX = rect.left + rect.width / 2;
            const draggableCenterY = rect.top + rect.height / 2;
        
            // Check if the draggable is dropped inside the target
            if (
              draggableCenterX >= targetRect.left &&
              draggableCenterX <= targetRect.right &&
              draggableCenterY >= targetRect.top &&
              draggableCenterY <= targetRect.bottom
            ) {
              target.appendChild(draggable); // Append draggable to target
              draggable.style.position = 'inline'; // Reset position
            }
        });
    };

} else {

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