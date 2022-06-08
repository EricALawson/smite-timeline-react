import StatBlock, { ZeroStats } from "./StatBlock";


interface Item {
    goldCost: number,
    name: string,
    stats: StatBlock,
    image: string,
}
    
const Item = (
    name: string,
    goldCost: number = 0,
    stats = ZeroStats,
    image: string = "",
    passive = null,
): Item =>  {
    const item: Partial<Item> = {};

    if(name && name !== "") {
        item.name = name;
    } else {
        throw new Error(`Cannot create an item with no name. Given value: ${name}`);
    }
    if(!image) {
        image = "https://web2.hirez.com/smite/item-icons/" + name.toLowerCase().replace(/\s/g, "-") + ".jpg";
    }
    item.image = image;
    item.goldCost = goldCost;
    item.stats = stats;
    //item.passive = passive;
    return item as Item;
}

export default Item;

const EmptySlot = Item('Empty Slot');

export { EmptySlot };