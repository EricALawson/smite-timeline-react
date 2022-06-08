import StatBlock from "./StatBlock";

export interface GodBaseStats {
    baseAttackDamage: number,
    perLevelAttackDamage: number,
    baseMoveSpeed: number,
    baseAttackSpeed: number,
    range: number,
    attackProgression: number[],
    autoAttackPowerMultiplier: number
}
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
        //image: process.env.PUBLIC_URL + '/images/god_cards/' + name + '.jpg'
        image: "https://web2.hirez.com/smite/god-cards/" + name.toLowerCase().replace(/\s/g, "-") + ".jpg"
    }
}

export default God;