import God from "./God";
import StatBlock from "./StatBlock";
import Item from "./Item";

const Ares = God(
    'Ares',
    StatBlock({ //base stats
        health: 485,
        mana: 200,
        hp5: 8,
        mp5: 4.6,
        physicalProtections: 20,
        magicalProtections: 30
    }),
    StatBlock({ //per level stats
        health: 90,
        mana: 37,
        hp5: 0.67,
        mp5: 0.42,
        physicalProtections: 3,
        magicalProtections: 0.9
    })
);

export {Ares};

const Cerberus = God(
    'Cerberus',
    StatBlock({ //base stats
        health: 490,
        mana: 200,
        hp5: 7,
        mp5: 4.6,
        physicalProtections: 19,
        magicalProtections: 30
    }),
    StatBlock({ //per level stats
        health: 95,
        mana: 35,
        hp5: 0.75,
        mp5: 0.4,
        physicalProtections: 3,
        magicalProtections: 0.9
    })
);

export {Cerberus};

let shoesOfFocus = Item();
shoesOfFocus.goldCost = 1600;
shoesOfFocus.name = "Shoes of Focus";
shoesOfFocus.stats = StatBlock({
    mana: 250,
    power: 55,
    cooldownReduction: 0.10,
    moveSpeed: 0.18
});
shoesOfFocus.image = process.env.PUBLIC_URL + '/images/items/' + shoesOfFocus.name + '.jpg';

export {shoesOfFocus};

let shoesOfTheMagi = Item();
shoesOfTheMagi.goldCost = 1550;
shoesOfTheMagi.name = "Shoes of The Magi";
shoesOfTheMagi.stats = StatBlock({
    power: 75,
    mana: 100,
    lifesteal: 0.08,
    moveSpeed: 0.18
});
shoesOfTheMagi.image = process.env.PUBLIC_URL + '/images/items/' + shoesOfTheMagi.name + '.jpg';

export {shoesOfTheMagi};