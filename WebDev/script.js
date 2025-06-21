async function fetchData(){
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        if(!response.ok){
            throw new Error("Pokemon not found");
        }

        const data = await response.json();

        console.log(data.name);
        console.log(data.weight);
        console.log(data.id);

    } catch (error) {
        console.error(error);
    }
}

fetchData();