import StatBlock from "./StatBlock";
interface Item {
    goldCost: number;
    name: string;
    stats: StatBlock;
    image: string;
}
declare const Item: (name: string, goldCost?: number, stats?: StatBlock, image?: string, passive?: null) => Item;
export default Item;
declare const EmptySlot: Item;
export { EmptySlot };
//# sourceMappingURL=Item.d.ts.map