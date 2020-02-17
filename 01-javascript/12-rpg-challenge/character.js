//Use this script to generate your character
let damage;

function Person(race, item, name) {
  this.race = race;
  this.item = item;
  this.name = name;
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
}
