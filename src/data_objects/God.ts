import StatBlock from "./StatBlock";

class God {
    name: string = "No god selected";
    baseStats: StatBlock = new StatBlock(0);
    perLevelStats: StatBlock = new StatBlock(0);
    image: string = "";

    constructor(
        name: string = "No god selected",
        baseStats: StatBlock = new StatBlock(0),
        perLevelStats: StatBlock = new StatBlock(0)
    ) {
        this.name = name;
        this.baseStats = baseStats;
        this.perLevelStats = perLevelStats;
        this.image = process.env.PUBLIC_URL + '/images/god_cards/' + name + '.jpg';
    }
}

export default God;