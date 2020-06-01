import StatBlock from "./StatBlock";

class Item {
    goldCost: number;
    name: string;
    stats: StatBlock;
    passive: any; //TODO make ItemPassive interface

    constructor() {
        this.goldCost = 0;
        this.name = "";
        this.stats = new StatBlock(0);
        this.passive = {};
    }
}

export default Item;