//Use this script to generate your character

function Person(race, item, name) {
  this.race = race;
  this.item = item;
  this.name = name;
  this.startHealth = 100;
  this.currenthealth = 100;
  this.maxHealth = 100;
  this.damage;

  this.min = 3;
  this.maxDamage = 20;
  this.maxHealing = 30;

  this.heal = function(playerTarget) {
    this.currenthealth =
      this.currenthealth +
      (Math.floor(Math.random() * (this.maxHealing - this.min + 1)) + this.min);
    if (this.currenthealth > this.maxHealth) {
      this.currenthealth = this.maxHealth;
    }
    console.log(`Il reste ${this.currenthealth} à ${playerTarget}`);
  };

  this.damage = function(playerAttack, playerTarget) {
    damage =
      Math.floor(Math.random() * (this.maxDamage - this.min + 1)) + this.min;
    console.log(`${playerAttack} fait ${damage} de dégats à ${playerTarget}`);

    return damage;
  };

  this.getHeal = function(damage, playerTarget) {
    this.currenthealth = this.currenthealth - damage;
    if (this.currenthealth <= 0) {
      return alert(`${playerTarget} a perdu !`);
    }
    console.log(`Il reste ${this.currenthealth} PV à ${playerTarget}`);
  };

  this.displayChar = function() {
    return console.log(
      `I am a ${this.name}, ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`
    );
  };

  this.getRace = function(race) {
    if (race == "human") {
      // extraHeal = this.maxHealth + 14;
      this.maxHealth += 14;
      this.currenthealth += 14;
      console.log(this.currenthealth);
      // return extraHeal;
    } else if (race == "orcs") {
      this.maxDamage += 14;
    } else if (race == "elves") {
      this.maxHealing += 14;
    } else if (race == "vampires") {
      this.maxDamage += 7;
      this.maxHealing += 7;
    }
  };

  this.getItem = function(item) {
    if (item == "sword") {
      this.maxDamage += 10;
    } else if (item == "magic sticks") {
      this.maxHealing += 5;
      this.maxDamage += 5;
    } else if (item == "armor") {
      this.maxHealth += 10;
    }
  };
}
