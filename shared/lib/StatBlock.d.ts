export interface StatBlock {
    power: number;
    criticalStrikeChance: number;
    flatPenetration: number;
    percentPenetration: number;
    health: number;
    mana: number;
    hp5: number;
    mp5: number;
    movementSpeed: number;
    attackSpeed: number;
    physicalProtection: number;
    magicalProtection: number;
    lifesteal: number;
    cooldownReduction: number;
    crowdControlReduction: number;
}
export declare function StatBlock(statMap: any): StatBlock;
export declare function add(stats1: StatBlock, stats2: StatBlock): StatBlock;
export declare const ZeroStats: StatBlock;
export default StatBlock;
//# sourceMappingURL=StatBlock.d.ts.map