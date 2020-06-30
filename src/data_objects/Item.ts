import StatBlock from "./StatBlock";

class Item {
    goldCost: number;
    name: string;
    stats: StatBlock;
    image: string;
    passive: any; //TODO make ItemPassive interface

    constructor(name = "", goldCost = 0, stats = new StatBlock(0), passive = null) {
        this.name = name;
        this.goldCost = goldCost;
        this.stats = stats;
        this.passive = passive;
        this.image = process.env.PUBLIC_URL + '/images/items/' + name + '.jpg';
    }
}

export default Item;

const EmptySlot = new Item('Empty Slot');

export {EmptySlot};