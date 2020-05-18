import { createSelector } from "@reduxjs/toolkit";
import StatBlock from "../../data_objects/StatBlock";
import Item from "../../data_objects/Item";
import God from "../../data_objects/God";
import KillTiming from "../../data_objects/KillTiming";

type BuildEvent = {
    time: number,
    stats: StatBlock
}

const selectBuild = (state: any) => state.build;
const selectGod = (state: any) => state.god;
const selectKillTiming = (state: any) => state.killTimiing;

const selectLevelEvents = createSelector( 
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

const selectBuildEvents = createSelector( 
    [selectBuild, selectKillTiming],
    (build: Item[], killTiming: any) => {
    let buildCosts: number[] = []; //this is the cumulative total spent when this item is built.
    let prevCost = 0;
    build.forEach((item: Item) => {
        buildCosts.push(item.goldCost + prevCost);
        prevCost += item.goldCost;
    });
    let buildTimes: number[] = buildCosts.map(gold => killTiming.getTimeForGold(gold));
    let itemEvents: BuildEvent[] = [];
    for (let i = 0; i > buildTimes.length; i++) {
        itemEvents.push({
            time: buildTimes[i],
            stats: build[i].stats
        });
    }
    return itemEvents;
});

const statsSelector = createSelector(
    [selectLevelEvents, selectBuildEvents],
    (levelEvents, buildEvents, ) => {
        var events: BuildEvent[] = [];
        
        return events.sort((a:BuildEvent, b: BuildEvent) => (a.time > b.time) ? 1: -1)
    }
);

export default statsSelector;

