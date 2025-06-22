async function fetchData() {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const card = document.getElementById("card");
    const nameEl = document.getElementById("name");
    const weightEl = document.getElementById("weight");
    const typeEl = document.getElementById("type");
    const imgEl = document.getElementById("pokemonImage");
    const dataContainer = document.getElementById("dataContainer");
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) throw new Error("Pokemon not found");
        const data = await response.json();
        await console.log(data)
        
        // Fade out first
        card.style.opacity = 0;

        setTimeout(() => {
            imgEl.style.display = "block";
            dataContainer.style.backgroundColor = "skyblue";
            imgEl.src = data.sprites.front_default;
            nameEl.textContent = `Name : ${capitalize(pokemonName)}`;
            weightEl.textContent = `Weight : ${data.weight} units`;
            typeEl.textContent = `${capitalize(data.types[0].type.name)} type pokemon.`;

            card.style.display = "flex";
            card.style.opacity = 1;
        }, 300);

    } catch (error) {
        console.error(error);

        // Fade out first
        card.style.opacity = 0;

        setTimeout(() => {
            imgEl.style.display = "none";
            dataContainer.style.backgroundColor = "pink";
            nameEl.textContent = "Not Found!";
            weightEl.textContent = "";
            typeEl.textContent = "Try another name.";
            card.style.display = "flex";
            card.style.opacity = 1;
        }, 300);
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
