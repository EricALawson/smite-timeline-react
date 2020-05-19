import StatBlock from "./StatBlock";

class God {
    name: string = "";
    baseStats: StatBlock = new StatBlock(0);
    perLevelStats: StatBlock = new StatBlock(0);
}

export default God;