import { controls } from '../../constants/controls';
import { createElement } from '../helpers/domHelper';

export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    // resolve the promise with the winner when fight is over
    console.log(firstFighter);
    console.log(secondFighter);
    listener();
  });
}

export function getDamage(attacker, defender) {
  // return damage
}

export function getHitPower(fighter) {
  // return hit power
}

export function getBlockPower(fighter) {
  // return block power
}

function listener() {
  const root = document.getElementById('root');
  root.tabIndex = 0;
  root.focus();
  let aux = new Object();
  root.addEventListener('keydown', (event) => {
    aux[event.code] = true;
    if (Object.values(controls).includes(event.code)) {
    }
    if (aux["KeyQ"] && aux["KeyW"] && aux["KeyE"]) {
      console.log("COMBOOOO");
    }
    if (aux['KeyU'] && aux['KeyI'] && aux['KeyO']) {
      console.log("COMBO 2222222222222222222222");
    }
  });
  root.addEventListener('keyup', event => {
    aux[event.code] = false;
  });
}