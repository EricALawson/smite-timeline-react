import { createSelector } from "@reduxjs/toolkit";
import StatBlock from "../../data_objects/StatBlock";
import Item from "../../data_objects/Item";
import God from "../../data_objects/God";
import KillTiming from "../../data_objects/KillTiming";
import Build from "../../data_objects/Build";

type BuildEvent = {
    time: number,
    stats: StatBlock
}

const selectItem = (state: Build) => state.items;
const selectGod = (state: Build) => state.god;
const selectKillTiming = (state: Build) => state.killTiming;

const makeGodEventSelector = () => {
    return createSelector( 
        [selectGod, selectKillTiming],
        (god: God, killTiming: KillTiming) => {
            let levelTimes: number[] = killTiming.getLevelTimes();
            let levelEvents: BuildEvent[] = []
            levelEvents.push( ...levelTimes.map(time => ({
                time: time,
                stats: god.perLevelStats
            })));

            levelEvents[0].stats = god.baseStats;

            return levelEvents;
        }
    );
}

export {makeGodEventSelector};

const makeItemEventSelector = () => {
    return createSelector( 
        [selectItem, selectKillTiming],
        (buildItems: (Item | undefined)[], killTiming: KillTiming) => {
        let itemCosts: number[] = []; //this is the cumulative total spent when this item is built.
        let prevCost = 0;
        let items: Item[] = buildItems.filter(
            function<Item>(item: Item | undefined): item is Item {
                return item instanceof Item;
            }
        )
        items.forEach((item: (Item|undefined) ) => {
            if(item instanceof Item) {
                itemCosts.push(item.goldCost + prevCost);
                prevCost += item.goldCost;
            }
        });
        let itemTimes: number[] = itemCosts.map(gold => killTiming.getTimeForGold(gold));
        let itemEvents: BuildEvent[] = [];
        for (let i = 0; i > itemTimes.length; i++) {
            itemEvents.push({
                time: itemTimes[i],
                stats: items[i].stats
            });
        }
        return itemEvents; 
    });
}
export {makeItemEventSelector};

const makeEventSelector = () => {
    return createSelector(
        [makeGodEventSelector(), makeItemEventSelector()],
        (godEvents, itemEvents, ) => {
            var events: BuildEvent[] = [...godEvents, ...itemEvents];
            
            return events.sort((a:BuildEvent, b: BuildEvent) => (a.time > b.time) ? 1: -1);
        }
    );
}

const makeStatsSelector = () => {
    return createSelector(
        [makeEventSelector()],
        (statEvents) => {
            let summed: BuildEvent[] = [];
            let sum = new StatBlock(0);
            for (let event of statEvents) {
                sum.add(event.stats);
                summed.push({
                    time: event.time,
                    stats: Object.assign({}, sum)
                })
            }
            return summed;
        }
    )
}

export default makeStatsSelector;

