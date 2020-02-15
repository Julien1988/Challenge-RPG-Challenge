(() => {

    const getCharacter = () => {
        return fetch("http://localhost/becode/fevrier/12-rpg-challenge/01-javascript/12-rpg-challenge/caracter-data.json")
        .then(res => res.json())
        .then(characters => console.log(characters));
    };

    const newCharacter = post => {
        const options = {
            method: "POST",
            body: JSON.stringify(post),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        };

        return fetch("http://localhost/becode/fevrier/12-rpg-challenge/01-javascript/12-rpg-challenge/caracter-data.json", options)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(error => console.error(error));
    };

    document.querySelector("#button-valide-01").addEventListener("click", () => {
        let playerName = document.querySelector("#input-name-01").value;
        let playerRace = "Orcs";
        console.log(playerName);
        let post = {
            name: playerName,
            race : playerRace

        }

        newCharacter(post);
        getCharacter();

    });





})();