
export interface StatBlock {
    power: number;
    critChance: number;
    flatPenetration: number;
    percentPenetration: number;
    health: number;
    mana: number;
    hp5: number;
    mp5: number;
    moveSpeed: number;
    attackSpeed: number;
    physicalProtections: number;
    magicalProtections: number;
    lifesteal: number;
    cooldownReduction: number;
    crowdControlReduction: number;
}

export function StatBlock(statMap: any): StatBlock {
    return {
        power: statMap.power ? statMap.power : 0,
        critChance: statMap.critChance ? statMap.critChance : 0,
        flatPenetration: statMap.flatPenetration ? statMap.flatPenetration : 0,
        percentPenetration: statMap.percentPenetration ? statMap.percentPenetration : 0,
        health: statMap.health ? statMap.health : 0,
        mana: statMap.mana ? statMap.mana : 0,
        hp5: statMap.hp5 ? statMap.hp5 : 0,
        mp5: statMap.mp5 ? statMap.mp5 : 0,
        moveSpeed: statMap.moveSpeed ? statMap.moveSpeed : 0,
        attackSpeed: statMap.attackSpeed ? statMap.attackSpeed : 0,
        physicalProtections: statMap.physicalProtections ? statMap.physicalProtections : 0,
        magicalProtections: statMap.magicalProtections ? statMap.magicalProtections : 0,
        lifesteal: statMap.lifesteal ? statMap.lifesteal : 0,
        cooldownReduction: statMap.cooldownReduction ? statMap.cooldownReduction : 0,
        crowdControlReduction: statMap.crowdControlReduction ? statMap.crowdControlReduction : 0
    }
}

export function add(stats1: StatBlock, stats2: StatBlock): StatBlock {
    return {
        power: stats1.power + stats2.power,
        critChance: stats1.critChance + stats2.critChance,
        flatPenetration: stats1.flatPenetration + stats2.flatPenetration,
        percentPenetration: stats1.percentPenetration + stats2.percentPenetration,
        health: stats1.health + stats2.health,
        mana: stats1.mana + stats2.mana,
        hp5: stats1.hp5 + stats2.hp5,
        mp5: stats1.mp5 + stats2.mp5,
        moveSpeed: stats1.moveSpeed + stats2.moveSpeed,
        attackSpeed: stats1.attackSpeed + stats2.attackSpeed,
        physicalProtections: stats1.physicalProtections + stats2.physicalProtections,
        magicalProtections: stats1.magicalProtections + stats2.magicalProtections,
        lifesteal: stats1.lifesteal + stats2.lifesteal,
        cooldownReduction: stats1.cooldownReduction + stats2.cooldownReduction,
        crowdControlReduction: stats1.crowdControlReduction + stats2.crowdControlReduction
    }
}


export default StatBlock;