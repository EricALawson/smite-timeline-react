
class StatBlock {
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
            cooldownReduction: number;
            crowdControlReduction: number;

    constructor(statMap: any = 0) {
        if (statMap !== 0) {
            this.power = statMap.power ? statMap.power : 0;
            this.critChance = statMap.critChance ? statMap.critChance : 0;
            this.flatPenetration = statMap.flatPenetration ? statMap.flatPenetration : 0;
            this.percentPenetration = statMap.percentPenetration ? statMap.percentPenetration : 0;
            this.health = statMap.health ? statMap.health : 0;
            this.mana = statMap.mana ? statMap.mana : 0;
            this.hp5 = statMap.hp5 ? statMap.hp5 : 0;
            this.mp5 = statMap.mp5 ? statMap.mp5 : 0;
            this.moveSpeed = statMap.moveSpeed ? statMap.moveSpeed : 0;
            this.attackSpeed = statMap.attackSpeed ? statMap.attackSpeed : 0;
            this.physicalProtections = statMap.physicalProtections ? statMap.physicalProtections : 0;
            this.magicalProtections = statMap.magicalProtections ? statMap.magicalProtections : 0;
            this.cooldownReduction = statMap.cooldownReduction ? statMap.cooldownReduction : 0;
            this.crowdControlReduction = statMap.crowdControlReduction ? statMap.crowdControlReduction : 0;
        }
        else {
            this.power = 0;
            this.critChance = 0;
            this.flatPenetration = 0;
            this.percentPenetration = 0;
            this.health = 0;
            this.mana = 0;
            this.hp5 = 0;
            this.mp5 = 0;
            this.moveSpeed = 0;
            this.attackSpeed = 0;
            this.physicalProtections = 0;
            this.magicalProtections = 0;
            this.cooldownReduction = 0;
            this.crowdControlReduction = 0;
        }
    }

    add(stats: StatBlock): StatBlock {
        this.power += stats.power;
        this.critChance += stats.critChance;
        this.flatPenetration += stats.flatPenetration;
        this.percentPenetration += stats.percentPenetration;
        this.health += stats.health;
        this.mana += stats.mana;
        this.hp5 += stats.hp5;
        this.mp5 += stats.mp5;
        this.moveSpeed += stats.moveSpeed;
        this.attackSpeed += stats.attackSpeed;
        this.physicalProtections += stats.physicalProtections;
        this.magicalProtections += stats.magicalProtections;
        this.cooldownReduction += stats.cooldownReduction;
        this.crowdControlReduction += stats.crowdControlReduction;
        return this;
    }
}

export default StatBlock;