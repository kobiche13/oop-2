import Character from '../character.js';

test('check levelUp', () => {
  const char = new Character();
  const checkLvl = char.level;
  const checkAttack = char.attack;
  const checkDefence = char.defence;
  char.levelUp();
  expect(char.level).toEqual(checkLvl + 1);
  expect(char.attack).toEqual(checkAttack + checkAttack * 0.2);
  expect(char.defence).toEqual(checkDefence + checkDefence * 0.2);
});

test('check no work levelUp and damage', () => {
  const char = new Character();
  char.health = 0;
  expect(() => char.levelUp()).toThrow(Error);
  expect(() => char.damage(24)).toThrow(Error);
});

test('check damage', () => {
  const char = new Character();
  const checkHealth = char.health;
  const damageDone = 24;
  char.damage(damageDone);
  const resultHealth = damageDone * (1 - char.defence / 100);
  expect(char.health).toEqual(checkHealth - resultHealth);
});
