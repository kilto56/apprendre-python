let leftButton = document.querySelectorAll(".arrow-slider")[0];
let rightButton = document.querySelectorAll(".arrow-slider")[1];
let slider = document.querySelector(".slider-container");
let slide = document.querySelector(".slide");

let page = 1;
let position = slide.offsetWidth / 100 * 5;
slider.scrollLeft = position;
leftButton.addEventListener("click", () => {
    if (page > 1) {
        if (position) {
            if (page === 4) {
                position = (slide.offsetWidth + (slide.offsetWidth / 100 * 10)) * 2;
            } else if (page === 3) {
                position = (slide.offsetWidth + (slide.offsetWidth / 100 * 10));
            } else if (page === 2) {
                    position = slide.offsetWidth / 100 * 5;
            };
        };

        slider.scrollTo({
            top: 0,
            left: position,
            behavior: "smooth"
        });
        page -= 1;
    };
});

rightButton.addEventListener("click", () => {
    if (page < 4) {
        if (position) {
            position += slide.offsetWidth + (slide.offsetWidth / 100 * 10);
        };

        slider.scrollTo({
            top: 0,
            left: position,
            behavior: "smooth"
        });
        page += 1;
    };
});