import God from "./God";
import Item, {EmptySlot} from "./Item";
import KillTiming from "./KillTiming";
import {shoesOfFocus} from './TestObjects';

interface Build {
    god: God;
    items: Item[];
    killTiming: KillTiming;
}

const Build = (
        god:God = God(), 
        items: Item[] = [shoesOfFocus, EmptySlot, EmptySlot, EmptySlot, EmptySlot, EmptySlot],
        killTiming = KillTiming()
    ): Build => {
        return {god: god, items: items, killTiming: killTiming}
    }

export default Build;