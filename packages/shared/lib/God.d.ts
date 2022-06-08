import StatBlock from "./StatBlock";
export interface GodBaseStats {
    baseAttackDamage: number;
    perLevelAttackDamage: number;
    baseMoveSpeed: number;
    baseAttackSpeed: number;
    range: number;
    attackProgression: number[];
    autoAttackPowerMultiplier: number;
}
interface God {
    name: string;
    baseStats: StatBlock;
    perLevelStats: StatBlock;
    image: string;
}
declare const God: (name?: string, baseStats?: StatBlock, perLevelStats?: StatBlock) => God;
export default God;
//# sourceMappingURL=God.d.ts.map