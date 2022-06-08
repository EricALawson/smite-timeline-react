
import { God, Item, StatBlock } from '@smite-timeline/smite-game-objects'

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
let stats = StatBlock({
    mana: 250,
    power: 55,
    cooldownReduction: 0.10,
    moveSpeed: 0.18
});
let shoesOfFocus = Item(
    "Shoes of Focus",
    1600,
    stats,
    itemImagePath("Shoes of Focus")
);


export {shoesOfFocus};

let shoesOfTheMagi = Item(
    "Shoes of The Magi",
    1550,
    StatBlock({
        power: 75,
        mana: 100,
        lifesteal: 0.08,
        moveSpeed: 0.18
    }),
    itemImagePath("Shoes of the Magi")
);

export {shoesOfTheMagi};

export function itemImagePath(itemName: string): string {
    return "http://web2.hirez.com/smite/item-icons/" + itemName.toLowerCase().replace(/\s/g, "-") + ".jpg";
}

const defaultItems = [shoesOfFocus, shoesOfTheMagi] 
export {defaultItems};