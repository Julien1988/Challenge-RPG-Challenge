//Use this script to generate your character

function Person(race, item, name) {
  this.race = race;
  this.item = item;
  this.name = name;
  this.startHealth = 100;
  this.currenthealth = 100;
  this.maxHealth = 100;

  this.min = 3;
  this.maxDamage = 20;
  this.maxHealing = 30;

  this.heal = function(playerTarget) {
    this.currenthealth = this.currenthealth + this.maxHealing;
    if (this.currenthealth > this.maxHealth) {
      this.currenthealth = this.maxHealth;
    }
    console.log(`Il reste ${this.currenthealth} à ${playerTarget}`);
  };

  this.damage = function(playerAttack, playerTarget) {
    console.log(
      `${playerAttack} fait ${this.maxDamage} de dégats à ${playerTarget}`
    );

    return (damage = this.maxDamage);
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
}
