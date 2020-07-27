import { createSelector } from "@reduxjs/toolkit";
import StatBlock, { add } from "../../data_objects/StatBlock";
import Item from "../../data_objects/Item";
import God from "../../data_objects/God";
import KillTiming, { getTimeForGold, getLevelTimes } from "../../data_objects/KillTiming";
import Build from "../../data_objects/Build";

type BuildEvent = {
    time: number,
    stats: StatBlock,
    type: string
}

const selectItem = (state: Build) => state.items;
const selectGod = (state: Build) => state.god;
const selectKillTiming = (state: Build) => state.killTiming;

const makeGodEventSelector = () => {
    return createSelector( 
        [selectGod, selectKillTiming],
        (god: God, killTiming: KillTiming) => {
            let levelTimes: number[] = getLevelTimes(killTiming);
            let levelEvents: BuildEvent[] = []
            levelEvents.push( ...levelTimes.map(time => ({
                time: time,
                stats: god.perLevelStats,
                type: 'level'
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
        (items: Item[], killTiming: KillTiming) => {
            let itemCosts: number[] = []; //this is the cumulative total spent when this item is built.
            let prevCost = 0;
            items.forEach((item: Item ) => {
                itemCosts.push(item.goldCost + prevCost);
                prevCost += item.goldCost;
            });
            let itemTimes: number[] = itemCosts.map(gold => getTimeForGold(killTiming, gold));
            let itemEvents: BuildEvent[] = [];
            for (let i = 0; i < itemTimes.length; i++) {
                itemEvents.push({
                    time: itemTimes[i],
                    stats: items[i].stats,
                    type: 'item finished'
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
            let sum = StatBlock({});
            for (let event of statEvents) {
                sum = add(sum, event.stats);
                summed.push({
                    time: event.time,
                    stats: Object.assign({}, sum),
                    type: event.type
                })
            }
            return summed;
        }
    )
}

export default makeStatsSelector;

