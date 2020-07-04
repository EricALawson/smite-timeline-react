import StatBlock from "./StatBlock";

interface God {
    name: string;
    baseStats: StatBlock;
    perLevelStats: StatBlock;
    image: string;
}

const God = (
    name: string = "No god selected",
    baseStats: StatBlock = StatBlock({}),
    perLevelStats: StatBlock = StatBlock({})
): God => {
    return {
        name: name,
        baseStats: baseStats,
        perLevelStats: perLevelStats,
        image: process.env.PUBLIC_URL + '/images/god_cards/' + name + '.jpg'
    }
}

export default God;