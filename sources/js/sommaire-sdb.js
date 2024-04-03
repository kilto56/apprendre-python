let themeSommaire = document.querySelectorAll(".sommaire-type");

for (let i = 0; i < 5; i++) {
    themeSommaire[i].addEventListener("click", () => {
        if (i === 0) {
            document.getElementById('intro').scrollIntoView({ behavior: 'smooth' });
        } else if (i === 1) {
            document.getElementById('valeurs').scrollIntoView({ behavior: 'smooth' });
        }
    })
};