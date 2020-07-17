import StatBlock from "./StatBlock";

interface Item {
    goldCost: number;
    name: string;
    stats: StatBlock;
    image: string;
    passive: any; //TODO make item passives
}

const Item = (
    name = "", 
    goldCost = 0, 
    stats = StatBlock({}), 
    passive = null
    ): Item => {
        return {
            name: name,
            goldCost: goldCost,
            stats: stats,
            passive: passive,
            //image: process.env.PUBLIC_URL + '/images/items/' + name + '.jpg'
            image: "https://web2.hirez.com/smite/item-icons/" + name.toLowerCase().replace(/\s/g, "-") + ".jpg"
        } as Item
    }

export default Item;

const EmptySlot = Item('Empty Slot');

export {EmptySlot};