const charactersRange1 = document.getElementById("range1");
const charactersRange2 = document.getElementById("range2");
const charactersRange3 = document.getElementById("range3");

const block1 = document.getElementById("block1");
block1.classList.add("d-flex", "flex-row");

const block2 = document.getElementById("block2");
block2.classList.add("d-flex", "flex-row");

const block3 = document.getElementById("block3");
block3.classList.add("d-flex", "flex-row");

charactersRange1.addEventListener("mouseenter", () => {
    getCharacterInfo(1, 0, 5, 1);
});

charactersRange2.addEventListener("mouseenter", () => {
    getCharacterInfo(1, 5, 10, 2);
});

charactersRange3.addEventListener("mouseenter", () => {
    getCharacterInfo(2, 0, 5, 3);
});


function getCharacterInfo(pageNumber, start, end, block) {
    fetch("https://swapi.dev/api/people/?page=" + pageNumber)
        .then((response) => response.json())
        .then((data) => {
            const characters = data.results.slice(start, end);
            block1.innerHTML = "";
            block2.innerHTML = "";
            block3.innerHTML = "";

            characters.forEach((character) => {
                const characterName = character.name;
                const characterHeight = character.height;
                const characterWeight = character.mass;
                const characterCard = document.createElement("div");
                characterCard.classList.add("col","cardInfo");
                characterCard.innerHTML = `
             
                  <h3 class="namePj">${characterName}</h3>
                  <text class="infoPj">Estatura: ${characterHeight} cm.</text>
                  <text class="infoPj2">Peso: ${characterWeight} Kg.</text>
            
              `;
                if (block === 1) {
                    block1.appendChild(characterCard);
                } else if (block === 2) {
                    block2.appendChild(characterCard);
                } else {
                    block3.appendChild(characterCard);
                }
            });
        })
        .catch((error) => {
            console.error(error);
        });
}