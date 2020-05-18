import StatBlock from "./StatBlock";

class God {
    name: string = "";
    baseStats: StatBlock = new StatBlock(undefined);
    perLevelStats: StatBlock = new StatBlock(undefined);
}

export default God;