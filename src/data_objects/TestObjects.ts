import God from "./God";
import StatBlock from "./StatBlock";
import Item from "./Item";

const Ares = new God(
    'Ares',
    new StatBlock({ //base stats
        health: 485,
        mana: 200,
        hp5: 8,
        mp5: 4.6,
        physicalProtections: 20,
        magicalProtections: 30
    }),
    new StatBlock({ //per level stats
        health: 90,
        mana: 37,
        hp5: 0.67,
        mp5: 0.42,
        physicalProtections: 3,
        magicalProtections: 0.9
    })
);

export {Ares};

const Cerberus = new God(
    'Cerberus',
    new StatBlock({ //base stats
        health: 490,
        mana: 200,
        hp5: 7,
        mp5: 4.6,
        physicalProtections: 19,
        magicalProtections: 30
    }),
    new StatBlock({ //per level stats
        health: 95,
        mana: 35,
        hp5: 0.75,
        mp5: 0.4,
        physicalProtections: 3,
        magicalProtections: 0.9
    })
);

export {Cerberus};

let shoesOfFocus = new Item();
shoesOfFocus.goldCost = 1600;
shoesOfFocus.name = "Shoes of Focus";
shoesOfFocus.stats = new StatBlock({
    mana: 250,
    power: 55,
    cooldownReduction: 0.10,
    moveSpeed: 0.18
});

export {shoesOfFocus};

let shoesOfTheMagi = new Item();
shoesOfFocus.goldCost = 1550;
shoesOfFocus.name = "Shoes of The Magi";
shoesOfFocus.stats = new StatBlock({
    power: 75,
    mana: 100,
    flatPenetration: 10,
    moveSpeed: 0.18
});

export {shoesOfTheMagi};