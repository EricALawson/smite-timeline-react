import { createSelector } from "@reduxjs/toolkit";
import StatBlock from "../../data_objects/StatBlock";
import Item from "../../data_objects/Item";
import God from "../../data_objects/God";
import KillTiming from "../../data_objects/KillTiming";

type BuildEvent = {
    time: number,
    stats: StatBlock
}

const selectItem = (state: any) => state.item;
const selectGod = (state: any) => state.god;
const selectKillTiming = (state: any) => state.killTimiing;

const selectGodEvents = createSelector( 
    [selectGod, selectKillTiming],
    (god: God, killTiming: KillTiming) => {
    let levelTimes: number[] = killTiming.getLevelTimes();
    let levelEvents: BuildEvent[] = [{time: 0, stats: god.baseStats}]
    levelEvents.push( ...levelTimes.map(time => ({
        time: time,
        stats: god.perLevelStats
    })));

    return levelEvents;
});

const selectItemEvents = createSelector( 
    [selectItem, selectKillTiming],
    (items: Item[], killTiming: KillTiming) => {
    let itemCosts: number[] = []; //this is the cumulative total spent when this item is built.
    let prevCost = 0;
    items.forEach((item: Item) => {
        itemCosts.push(item.goldCost + prevCost);
        prevCost += item.goldCost;
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

const EventSelector = createSelector(
    [selectGodEvents, selectItemEvents],
    (godEvents, itemEvents, ) => {
        var events: BuildEvent[] = [...godEvents, ...itemEvents];
        
        return events.sort((a:BuildEvent, b: BuildEvent) => (a.time > b.time) ? 1: -1);
    }
);

const statsSelector = createSelector(
    [EventSelector],
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

export default statsSelector;

