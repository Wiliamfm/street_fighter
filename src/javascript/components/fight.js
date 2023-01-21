import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
  firstFighter.actualHealth = firstFighter.health;
  secondFighter.actualHealth = secondFighter.health;
  listener(firstFighter, secondFighter);
  return new Promise((resolve) => {
    // resolve the promise with the winner when fight is over
  });
}

export function getDamage(attacker, defender) {
  let damage = getHitPower(attacker) - getBlockPower(defender);
  return damage < 0 ? 0 : damage;
}

export function getHitPower(fighter) {
  let criticalHitChance = getRandomNumber(1, 2);
  return fighter['attack'] * criticalHitChance;
}

export function getBlockPower(fighter) {
  let dodgeChange = getRandomNumber(1, 2);
  return fighter.defense * dodgeChange;
}

async function listener(firstFighter, secondFighter) {
  const root = document.getElementById('root');
  let leftBar = document.getElementById("left-fighter-indicator");
  let rightBar = document.getElementById("right-fighter-indicator");
  root.tabIndex = 0;
  root.focus();
  let aux = new Object();
  root.addEventListener('keydown', (event) => {
    console.log(firstFighter, secondFighter);
    aux[event.code] = true;
    switch (event.code) {
      case controls['PlayerOneAttack']:
        secondFighter['actualHealth'] = secondFighter.actualHealth - getDamage(firstFighter, secondFighter);
        setHealthBar(secondFighter, rightBar);
        break;
      case controls['PlayerOneBlock']:
        break;
      case controls['PlayerTwoAttack']:
        firstFighter['actualHealth'] = firstFighter.actualHealth - getDamage(secondFighter, firstFighter);
        setHealthBar(firstFighter, leftBar);
        break;
      case controls['PlayerTwoBlock']:
        break;
      default:
        break;
    }
    if (aux["KeyQ"] && aux["KeyW"] && aux["KeyE"]) {
      console.log("COMBOOOO");
    }
    if (aux['KeyU'] && aux['KeyI'] && aux['KeyO']) {
      console.log("COMBO 2222222222222222222222");
    }
    if (firstFighter.actualHealth <= 0) {
      winner = 2;
      return false;
    } else if (secondFighter.actualHealth <= 0) {
      winner = 1;
      return false;
    }
  });
  root.addEventListener('keyup', event => {
    aux[event.code] = false;
  });
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min + 1) + min
}

function setHealthBar(fighter, barElement) {
  barElement.style.width = `${getPercentage(fighter.health, fighter.actualHealth)}%`;
}

function getPercentage(totalHealth, actualHealth) {
  return (100 * actualHealth / totalHealth);
}