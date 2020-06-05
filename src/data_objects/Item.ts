import StatBlock from "./StatBlock";

class Item {
    goldCost: number;
    name: string;
    stats: StatBlock;
    passive: any; //TODO make ItemPassive interface

    constructor(name = "", goldCost = 0, stats = new StatBlock(0), passive = null) {
        this.name = name;
        this.goldCost = goldCost;
        this.stats = stats;
        this.passive = passive;
    }
}

export default Item;

const EmptySlot = new Item('Empty Slot');

export {EmptySlot};