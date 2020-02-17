(() => {
  // let playerName;
  // let playerRace = "Orcs";
  // let newId;
  // const getCharacter = () => {
  //     return fetch("http://localhost/becode/fevrier/12-rpg-challenge/01-javascript/12-rpg-challenge/caracter-data.json")
  //     .then(res => res.json())
  //     .then(characters => console.log(characters));
  // };
  // const newCharacter = post => {
  //     const options = {
  //         method: "POST",
  //         body: JSON.stringify(post),
  //         headers: new Headers({
  //             "Content-Type": "application/json"
  //         })
  //     };
  //     return fetch("http://localhost/becode/fevrier/12-rpg-challenge/01-javascript/12-rpg-challenge/caracter-data.json", options)
  //         .then(res => res.json())
  //         .then(res => console.log(res))
  //         .catch(error => console.error(error));
  // };
  // document.querySelector("#button-valide-01").addEventListener("click", () => {
  //     playerName = document.querySelector("#input-name-01").value;
  //     console.log(playerName);
  //     let post = {
  //         id: newId,
  //         name: playerName,
  //         race : playerRace
  //     }
  //     newCharacter(post);
  //     getCharacter();
  // });

  //   -- PLAYER ONE

  //   Race Selection :
  let playerOneRace = false;

  document.querySelector("#humain-01").addEventListener("click", () => {
    playerOneRace = document.querySelector("#humain-01").value;
    console.log("Race : ", playerOneRace);
    document.querySelector("#dropdownMenuButton-01").innerHTML = playerOneRace;
    return playerOneRace;
  });
  document.querySelector("#orcs-01").addEventListener("click", () => {
    playerOneRace = document.querySelector("#orcs-01").value;
    console.log("Race : ", playerOneRace);
    document.querySelector("#dropdownMenuButton-01").innerHTML = playerOneRace;
    return playerOneRace;
  });
  document.querySelector("#elves-01").addEventListener("click", () => {
    playerOneRace = document.querySelector("#elves-01").value;
    console.log("Race : ", playerOneRace);
    document.querySelector("#dropdownMenuButton-01").innerHTML = playerOneRace;
    return playerOneRace;
  });
  document.querySelector("#vampires-01").addEventListener("click", () => {
    playerOneRace = document.querySelector("#vampires-01").value;
    console.log("Race : ", playerOneRace);
    document.querySelector("#dropdownMenuButton-01").innerHTML = playerOneRace;
    return playerOneRace;
  });

  //   Item selection :

  let playerOneItem = false;

  document.querySelector("#sword-01").addEventListener("click", () => {
    playerOneItem = document.querySelector("#sword-01").value;
    console.log("Item : ", playerOneItem);
    document.querySelector("#dropdownMenuButton-001").innerHTML = playerOneItem;
    return playerOneItem;
  });
  document.querySelector("#magic-sticks-01").addEventListener("click", () => {
    playerOneItem = document.querySelector("#magic-sticks-01").value;
    console.log("Item : ", playerOneItem);
    document.querySelector("#dropdownMenuButton-001").innerHTML = playerOneItem;
    return playerOneItem;
  });
  document.querySelector("#armor-01").addEventListener("click", () => {
    playerOneItem = document.querySelector("#armor-01").value;
    console.log("Item : ", playerOneItem);
    document.querySelector("#dropdownMenuButton-001").innerHTML = playerOneItem;
    return playerOneItem;
  });

  document.querySelector("#button-valide-01").addEventListener("click", () => {
    let playerOneName = document.querySelector("#input-name-01").value;

    if (
      playerOneRace == false ||
      playerOneRace == false ||
      playerOneItem == false
    ) {
      alert("Il faut remplir tous les champs joueur 1 !");
    }

    console.log(
      "name: ",
      playerOneName,
      "Race : ",
      playerOneRace,
      "Item: ",
      playerOneItem
    );
  });

  //   -- PLAYER TWO

  //   Race Selection :
  let playerTwoRace = false;

  document.querySelector("#humain-02").addEventListener("click", () => {
    playerTwoRace = document.querySelector("#humain-02").value;
    console.log("Race : ", playerTwoRace);
    document.querySelector("#dropdownMenuButton-02").innerHTML = playerTwoRace;
    return playerTwoRace;
  });
  document.querySelector("#orcs-02").addEventListener("click", () => {
    playerTwoRace = document.querySelector("#orcs-02").value;
    console.log("Race : ", playerTwoRace);
    document.querySelector("#dropdownMenuButton-02").innerHTML = playerTwoRace;
    return playerTwoRace;
  });
  document.querySelector("#elves-02").addEventListener("click", () => {
    playerTwoRace = document.querySelector("#elves-02").value;
    console.log("Race : ", playerTwoRace);
    document.querySelector("#dropdownMenuButton-02").innerHTML = playerTwoRace;
    return playerTwoRace;
  });
  document.querySelector("#vampires-02").addEventListener("click", () => {
    playerTwoRace = document.querySelector("#vampires-02").value;
    console.log("Race : ", playerTwoRace);
    document.querySelector("#dropdownMenuButton-02").innerHTML = playerTwoRace;
    return playerTwoRace;
  });

  //   Item selection :

  let playerTwoItem = false;

  document.querySelector("#sword-02").addEventListener("click", () => {
    playerTwoItem = document.querySelector("#sword-02").value;
    console.log("Item : ", playerTwoItem);
    document.querySelector("#dropdownMenuButton-002").innerHTML = playerTwoItem;
    return playerTwoItem;
  });
  document.querySelector("#magic-sticks-02").addEventListener("click", () => {
    playerTwoItem = document.querySelector("#magic-sticks-02").value;
    console.log("Item : ", playerTwoItem);
    document.querySelector("#dropdownMenuButton-002").innerHTML = playerTwoItem;
    return playerTwoItem;
  });
  document.querySelector("#armor-02").addEventListener("click", () => {
    playerTwoItem = document.querySelector("#armor-02").value;
    console.log("Item : ", playerTwoItem);
    document.querySelector("#dropdownMenuButton-002").innerHTML = playerTwoItem;
    return playerTwoItem;
  });

  document.querySelector("#button-valide-02").addEventListener("click", () => {
    let playerTwoName = document.querySelector("#input-name-02").value;

    if (
      playerTwoRace == false ||
      playerTwoRace == false ||
      playerTwoItem == false
    ) {
      alert("Il faut remplir tous les champs joueur 2 !");
    }

    console.log(
      "name: ",
      playerTwoName,
      "Race : ",
      playerTwoRace,
      "Item: ",
      playerTwoItem
    );
  });
})();
