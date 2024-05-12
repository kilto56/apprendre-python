let themeSommaire = document.querySelectorAll(".sommaire-type");

for (let i = 0; i < 5; i++) {
    themeSommaire[i].addEventListener("click", () => {
        if (i === 0) {
            document.getElementById('intro').scrollIntoView({ behavior: 'smooth' });
        } else if (i === 1) {
            document.getElementById('arithm').scrollIntoView({ behavior: 'smooth' });
        } else if (i === 2) {
            document.getElementById('affect').scrollIntoView({ behavior: 'smooth'});
        } else if (i === 3) {
            document.getElementById('autres').scrollIntoView({ behavior: 'smooth'});
        } else if (i === 4) {
            document.getElementById('melange').scrollIntoView({ behavior: 'smooth'});
        };
    });
};