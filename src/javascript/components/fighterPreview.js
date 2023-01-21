import { createElement } from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`,
  });

  // todo: show fighter info (image, name, health, etc.)
  if (fighter) {
    const positionClassName = position === 'right' ? 'arena___right-fighter' : 'arena___left-fighter';
    const cardElement = createElement({
      tagName: 'div',
      className: 'card ' + positionClassName
    });
    const name = createElement({
      tagName: 'h4'
    })
    name.innerHTML = fighter.name;
    const uList = createElement({
      tagName: 'ul',
    });
    const attack = createElement({
      tagName: 'li'
    })
    attack.innerHTML = "ATTACK: " + fighter.attack;
    const defense = createElement({
      tagName: 'li'
    })
    defense.innerHTML = "DEFENSE: " + fighter.defense;
    const health = createElement({
      tagName: 'li'
    })
    health.innerHTML = "HEALTH: " + fighter.health;
    uList.append(attack);
    uList.append(defense);
    uList.append(health);
    cardElement.append(name);
    cardElement.append(uList);
    cardElement.append(createFighterImage(fighter, position));
    fighterElement.append(cardElement);
  }

  return fighterElement;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = {
    src: source,
    title: name,
    alt: name,
    width: "100",
    height: "200"
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes,
  });

  return imgElement;
}
