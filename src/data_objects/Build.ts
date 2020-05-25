import God from "./God";
import Item from "./Item";
import KillTiming from "./KillTiming";

class Build{
    god = new God();
    items: (Item|undefined)[] = [];
    killTiming = new KillTiming();

    constructor(
        god:God = new God(), 
        items: (Item|undefined)[] = [],
        killTiming = new KillTiming()
        ) {
            this.god = god;
            this.items = items;
            this.killTiming = killTiming;
        }
    
}

export default Build;