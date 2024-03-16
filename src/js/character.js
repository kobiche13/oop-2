export default class Character {
  constructor() {
    this.name = 'Bobik',
    this.type = 'Undead',
    this.health = 100,
    this.level = 1,
    this.attack = 25,
    this.defence = 25;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Нельзя нанести урон умершему персонажу');
    }
  }
}
