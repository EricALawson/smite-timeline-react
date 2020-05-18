import StatBlock from "./StatBlock";

class Item {
    goldCost: number;
    name: string;
    stats: StatBlock;

    constructor() {
        this.goldCost = 0;
        this.name = "";
        this.stats = new StatBlock(undefined);
    }
}

export default Item;