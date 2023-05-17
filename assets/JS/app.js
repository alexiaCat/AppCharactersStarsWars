const charactersRange1 = document.getElementById("range1");
const charactersRange2 = document.getElementById("range2");
const charactersRange3 = document.getElementById("range3");

charactersRange1.addEventListener("mouseenter", () => {
    getCharacterInfo(1, 0, 5);
});

charactersRange2.addEventListener("mouseenter", () => {
    getCharacterInfo(1, 5, 10);
});

charactersRange3.addEventListener("mouseenter", () => {
    getCharacterInfo(2, 0, 5);
});


function getCharacterInfo(pageNumber, start, end) {
    fetch("https://swapi.dev/api/people/?page=" + pageNumber)
        .then((response) => response.json())
        .then((data) => {

            console.log(data);
            const characters = data.results.slice(start, end);
            console.log(characters);
        })
        .catch((error) => {
            console.error(error);
        });
}