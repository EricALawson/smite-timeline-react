
import { God, Item } from "@smite-timeline/smite-game-objects";
import KillTiming from "./KillTiming";
import {shoesOfFocus, shoesOfTheMagi} from './TestObjects';

interface Build {
    god: God;
    items: Item[];
    killTiming: KillTiming;
}

const Build = (
        god:God = God(), 
        items: Item[] = [shoesOfFocus, shoesOfTheMagi],
        killTiming = KillTiming()
    ): Build => {
        return {god: god, items: items, killTiming: killTiming}
    }

export default Build;