"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptySlot = void 0;
var StatBlock_1 = require("./StatBlock");
var Item = function (name, goldCost, stats, image, passive) {
    if (goldCost === void 0) { goldCost = 0; }
    if (stats === void 0) { stats = StatBlock_1.ZeroStats; }
    if (image === void 0) { image = ""; }
    if (passive === void 0) { passive = null; }
    var item = {};
    if (name && name !== "") {
        item.name = name;
    }
    else {
        throw new Error("Cannot create an item with no name. Given value: " + name);
    }
    if (!image) {
        image = "https://web2.hirez.com/smite/item-icons/" + name.toLowerCase().replace(/\s/g, "-") + ".jpg";
    }
    item.image = image;
    item.goldCost = goldCost;
    item.stats = stats;
    //item.passive = passive;
    return item;
};
exports.default = Item;
var EmptySlot = Item('Empty Slot');
exports.EmptySlot = EmptySlot;
//# sourceMappingURL=Item.js.map