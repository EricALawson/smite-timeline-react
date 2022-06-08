"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var StatBlock_1 = __importDefault(require("./StatBlock"));
var God = function (name, baseStats, perLevelStats) {
    if (name === void 0) { name = "No god selected"; }
    if (baseStats === void 0) { baseStats = StatBlock_1.default({}); }
    if (perLevelStats === void 0) { perLevelStats = StatBlock_1.default({}); }
    return {
        name: name,
        baseStats: baseStats,
        perLevelStats: perLevelStats,
        //image: process.env.PUBLIC_URL + '/images/god_cards/' + name + '.jpg'
        image: "https://web2.hirez.com/smite/god-cards/" + name.toLowerCase().replace(/\s/g, "-") + ".jpg"
    };
};
exports.default = God;
//# sourceMappingURL=God.js.map