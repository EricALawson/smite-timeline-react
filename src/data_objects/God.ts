import StatBlock from "./StatBlock";

class God {
    name: string = "No god selected";
    baseStats: StatBlock = new StatBlock(0);
    perLevelStats: StatBlock = new StatBlock(0);

    constructor(
        name: string = "No god selected",
        baseStats: StatBlock = new StatBlock(0),
        perLevelStats: StatBlock = new StatBlock(0)
    ) {
        this.name = name;
        this.baseStats = baseStats;
        this.perLevelStats = perLevelStats;
    }
}

export default God;