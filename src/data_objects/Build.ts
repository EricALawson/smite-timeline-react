import God from "./God";
import Item from "./Item";
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