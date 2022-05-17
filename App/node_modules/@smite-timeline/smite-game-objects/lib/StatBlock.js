"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZeroStats = exports.add = exports.StatBlock = void 0;
function StatBlock(statMap) {
    return {
        power: statMap.power ? statMap.power : 0,
        criticalStrikeChance: statMap.criticalStrikeChance ? statMap.criticalStrikeChance : 0,
        flatPenetration: statMap.flatPenetration ? statMap.flatPenetration : 0,
        percentPenetration: statMap.percentPenetration ? statMap.percentPenetration : 0,
        health: statMap.health ? statMap.health : 0,
        mana: statMap.mana ? statMap.mana : 0,
        hp5: statMap.hp5 ? statMap.hp5 : 0,
        mp5: statMap.mp5 ? statMap.mp5 : 0,
        movementSpeed: statMap.movementSpeed ? statMap.movementSpeed : 0,
        attackSpeed: statMap.attackSpeed ? statMap.attackSpeed : 0,
        physicalProtection: statMap.physicalProtection ? statMap.physicalProtection : 0,
        magicalProtection: statMap.magicalProtection ? statMap.magicalProtection : 0,
        lifesteal: statMap.lifesteal ? statMap.lifesteal : 0,
        cooldownReduction: statMap.cooldownReduction ? statMap.cooldownReduction : 0,
        crowdControlReduction: statMap.crowdControlReduction ? statMap.crowdControlReduction : 0
    };
}
exports.StatBlock = StatBlock;
function add(stats1, stats2) {
    return {
        power: stats1.power + stats2.power,
        criticalStrikeChance: stats1.criticalStrikeChance + stats2.criticalStrikeChance,
        flatPenetration: stats1.flatPenetration + stats2.flatPenetration,
        percentPenetration: stats1.percentPenetration + stats2.percentPenetration,
        health: stats1.health + stats2.health,
        mana: stats1.mana + stats2.mana,
        hp5: stats1.hp5 + stats2.hp5,
        mp5: stats1.mp5 + stats2.mp5,
        movementSpeed: stats1.movementSpeed + stats2.movementSpeed,
        attackSpeed: stats1.attackSpeed + stats2.attackSpeed,
        physicalProtection: stats1.physicalProtection + stats2.physicalProtection,
        magicalProtection: stats1.magicalProtection + stats2.magicalProtection,
        lifesteal: stats1.lifesteal + stats2.lifesteal,
        cooldownReduction: stats1.cooldownReduction + stats2.cooldownReduction,
        crowdControlReduction: stats1.crowdControlReduction + stats2.crowdControlReduction
    };
}
exports.add = add;
exports.ZeroStats = StatBlock({}); //reusable for things that could have stats but don't.
exports.default = StatBlock;
//# sourceMappingURL=StatBlock.js.map