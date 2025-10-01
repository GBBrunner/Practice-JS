// Pokedex functionality
function pokedex() {
    let currentId = 1;
    const MAX_ID = 1025;
    const API_URL = "https://pokeapi.co/api/v2/pokemon/";

    const app = document.getElementById("Pokémon_API"); 
    let cardContent, prevButton, nextButton;

    const capitalize = str => str[0].toUpperCase() + str.slice(1);

    const renderPokémon = ({ id, name, sprites, weight, types }) => {
        cardContent.innerHTML = `
            <h1>In-class Exercise 5: Pokémon API</h1>
            <h2>${capitalize(name)} (#${id})</h2>
            <img src="${sprites.front_default || ''}" alt="${name}" />
            <p>Weight: ${(weight / 10).toFixed(1)} kg</p>
            <p>Type: ${types.map(t => capitalize(t.type.name)).join(", ")}</p>
        `;
    };

    const fetchPokémon = async id => {
        try {
            const res = await fetch(`${API_URL}${id}`);
            if (!res.ok) throw new Error("Pokémon not found");
            renderPokémon(await res.json());
        } catch (err) {
            cardContent.innerHTML = `<p style="color:red;">${err.message}</p>`;
        }
    };

    const createUI = () => {
        app.innerHTML = `
            <div id="card-content"></div>
            <div class="controls">
                <button id="prev">Previous</button>
                <button id="next">Next</button>
            </div>
        `;
        cardContent = document.getElementById("card-content");
        prevButton = document.getElementById("prev");
        nextButton = document.getElementById("next");

        prevButton.onclick = () => {
            if (currentId > 1) fetchPokémon(--currentId);
        };
        nextButton.onclick = () => {
            if (currentId < MAX_ID) fetchPokémon(++currentId);
        };
    };

    createUI();
    fetchPokémon(currentId);
}
export { pokedex };