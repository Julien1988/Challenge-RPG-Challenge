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
  let playerOne;

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
      playerOneName == false ||
      playerOneRace == false ||
      playerOneItem == false
    ) {
      alert("Il faut remplir tous les champs joueur 1 !");
    }

    document.querySelector(
      ".section-fight-screen__fighter-01__pseudo"
    ).innerHTML = `Fighter 1 is ${playerOneName}`;

    console.log(
      "name: ",
      playerOneName,
      "Race : ",
      playerOneRace,
      "Item: ",
      playerOneItem
    );
    //   Person Object

    playerOne = new Person(playerOneRace, playerOneItem, playerOneName);
    console.log(playerOne);
    playerOne.displayChar();
  });
  // Fight
  let actionPlayerOne;

  let getActionButtonPlayerOneLength = document.querySelector(
    ".section-panels__fighter-01"
  ).children.length;
  //console.log(getActionButtonPlayerOneLength);

  for (let i = 0; i < getActionButtonPlayerOneLength; i++) {
    document
      .getElementsByClassName("section-panels__fighter__button-01")
      [i].addEventListener("click", () => {
        actionPlayerOne = document.getElementsByClassName(
          "section-panels__fighter__button-01"
        )[i].value;
        console.log(actionPlayerOne);
        makeActionPlayer01(actionPlayerOne);
      });
  }
  //   Function de gestion des actions joueur 1
  function makeActionPlayer01(actionPlayer) {
    if (actionPlayer === "hit-player-one") {
      console.log("Tu frappes");
      playerOne.damage(playerOne.name, playerTwo.name);
      // récupération des dégats effectué par le joueur 2
      console.log(damage);
      playerTwo.getHeal(damage, playerTwo.name);
      console.log(playerOne);
      console.log(playerTwo);
    } else if (actionPlayer === "heal-player-one") {
      console.log("Tu te heal");
      playerOne.heal(playerOne.name);
    } else if (actionPlayer === "yield-player-one") {
      console.log("Tu te défands");
    } else {
      return console.error("somethings wrong...");
    }
  }

  //   -- PLAYER TWO

  //   Race Selection :
  let playerTwoRace = false;
  let playerTwo;

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

  let playerTwoName;

  document.querySelector("#button-valide-02").addEventListener("click", () => {
    playerTwoName = document.querySelector("#input-name-02").value;

    if (
      playerTwoName == false ||
      playerTwoRace == false ||
      playerTwoItem == false
    ) {
      alert("Il faut remplir tous les champs joueur 2 !");
    }

    document.querySelector(
      ".section-fight-screen__fighter-02__pseudo"
    ).innerHTML = `Fighter 2 is ${playerTwoName}`;

    console.log(
      "name: ",
      playerTwoName,
      "Race : ",
      playerTwoRace,
      "Item: ",
      playerTwoItem
    );
    //console.log(playerTwo);
    //   Person Object

    playerTwo = new Person(playerTwoRace, playerTwoItem, playerTwoName);
    console.log(playerTwo);
    playerTwo.displayChar();
  });

  // Fight
  let actionPlayerTwo;

  let getActionButtonPlayerTwoLength = document.querySelector(
    ".section-panels__fighter-02"
  ).children.length;
  //console.log(getActionButtonPlayerTwoLength);

  for (let i = 0; i < getActionButtonPlayerTwoLength; i++) {
    document
      .getElementsByClassName("section-panels__fighter__button-02")
      [i].addEventListener("click", () => {
        actionPlayerTwo = document.getElementsByClassName(
          "section-panels__fighter__button-02"
        )[i].value;
        //console.log(actionPlayerTwo);
        makeActionPlayer02(actionPlayerTwo);
      });
  }

  //   Function de gestion des actions joueur 2
  function makeActionPlayer02(actionPlayer) {
    if (actionPlayer === "hit-player-two") {
      console.log("Tu frappes");
      playerTwo.damage(playerTwo.name, playerOne.name);
      // récupération des dégats effectué par le joueur 2
      console.log(damage);
      playerOne.getHeal(damage, playerOne.name);
      console.log(playerTwo);
      console.log(playerOne);
    } else if (actionPlayer === "heal-player-two") {
      console.log("Tu te heal");
      playerTwo.heal(playerTwo.name);
    } else if (actionPlayer === "yield-player-two") {
      console.log("Tu te défands");
    } else {
      return console.error("somethings wrong...");
    }
  }
})();
