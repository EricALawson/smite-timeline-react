import God from "./God";
import Item, {EmptySlot} from "./Item";
import KillTiming from "./KillTiming";
import {shoesOfFocus} from './TestObjects';

class Build{
    god = new God();
    items: (Item|undefined)[] = [shoesOfFocus, EmptySlot, EmptySlot, EmptySlot, EmptySlot, EmptySlot];
    killTiming = new KillTiming();

    constructor(
        god:God = new God(), 
        items: (Item|undefined)[] = [shoesOfFocus, EmptySlot, EmptySlot, EmptySlot, EmptySlot, EmptySlot],
        killTiming = new KillTiming()
        ) {
            this.god = god;
            this.items = items;
            this.killTiming = killTiming;
        }
    
}

export default Build;