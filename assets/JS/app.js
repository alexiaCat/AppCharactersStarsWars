class Character {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }

    getName() {
        return `${this.name}`;
    }

    getInfo() {
        return `Estatura: ${this.height} cm.<br/>Peso: ${this.weight} Kg.`;
    }
}

class StarWarsCharacter extends Character {
    constructor(name, height, weight) {
        super(name, height, weight);
    }
}

const charactersRange1 = document.getElementById("range1");
const charactersRange2 = document.getElementById("range2");
const charactersRange3 = document.getElementById("range3");

const block1 = document.getElementById("block1");
block1.classList.add("d-flex", "flex-row", "flex-wrap");

const block2 = document.getElementById("block2");
block2.classList.add("d-flex", "flex-row", "flex-wrap");

const block3 = document.getElementById("block3");
block3.classList.add("d-flex", "flex-row", "flex-wrap");

charactersRange1.addEventListener("mouseenter", () => {
    getCharacterInfo(1, 0, 5, 1);
});

charactersRange2.addEventListener("mouseenter", () => {
    getCharacterInfo(1, 5, 10, 2);
});

charactersRange3.addEventListener("mouseenter", () => {
    getCharacterInfo(2, 0, 5, 3);
});


function clearCharacterCards() {
    block1.innerHTML = "";
    block2.innerHTML = "";
    block3.innerHTML = "";
}

function getCharacterInfo(pageNumber, start, end, block) {
    fetch("https://swapi.dev/api/people/?page=" + pageNumber)
        .then((response) => response.json())
        .then((data) => {
            const characters = data.results.slice(start, end);
            clearCharacterCards()

            characters.forEach((character, index) => {
                const characterName = character.name;
                const characterHeight = character.height;
                const characterWeight = character.mass;

                const starWarsCharacter = new StarWarsCharacter(characterName, characterHeight, characterWeight);

                const characterCard = document.createElement("div");
                characterCard.classList.add("col", "cardInfo", "fade-in", "mt-4");
                characterCard.style.animationDelay = `${index * 0.2}s`;
                characterCard.innerHTML = `
            <h3 class="namePj">${starWarsCharacter.getName()}</h3>
            <text class="infoPj">${starWarsCharacter.getInfo()}</text>
          `;

                if (block === 1) {
                    characterCard.style.backgroundColor = "#00272d";
                    block1.appendChild(characterCard);
                } else if (block === 2) {
                    characterCard.style.backgroundColor = "#134647";
                    block2.appendChild(characterCard);
                } else {
                    characterCard.style.backgroundColor = "#0c7e7e";
                    block3.appendChild(characterCard);
                }
            });
        })
        .catch((error) => {
            console.error(error);
        });
}
