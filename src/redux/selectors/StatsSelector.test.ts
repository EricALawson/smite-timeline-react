import makeStatsSelector, {makeGodEventSelector, makeItemEventSelector} from "./StatsSelector";
import Build from "../../data_objects/Build";
import God from "../../data_objects/God";
import StatBlock, { add } from "../../data_objects/StatBlock";
import buildIdentifier from "../buildIdentifier";

test('test god event selector', () => {
    let selector = makeGodEventSelector(buildIdentifier.left);
    let build = Build();
    let events = selector(build);
    expect(events.length).toBe(20);
    expect(events[0].stats).toEqual(build.god.baseStats);
    expect(events[19].stats).toEqual(build.god.perLevelStats);
});

test('test item event selector', () => {
    let build = Build();
    let selector = makeItemEventSelector(buildIdentifier.left);
    let events = selector(build);
    expect(events.length).toBe(build.items.length)
});

test('test summed events selector', () => {
    let build = Build();
    let selector = makeStatsSelector(buildIdentifier.left);
    let events = selector(build);
    expect(events[0].stats).toEqual(build.god.baseStats);
    expect(events[1].stats).toEqual(add(build.god.baseStats, build.god.perLevelStats));
});

test('Use two selectors for two builds', () =>  {
    let testState  = {
        left: Build(
            God(
                "testGodLeft",
                StatBlock({health: 100, power: 100}),
                StatBlock({health: 10, power: 10})
            ),
        ),
        right: Build(
            God(
                "testGodRight",
                StatBlock({mana: 200, magicalProtections: 200}),
                StatBlock({mana: 20, magicalProtections: 20, hp5: 1})
            ),
        ),
        time: 0
    }
    
    let selectorLeft = makeStatsSelector();
    let selectorRight = makeStatsSelector();
    let leftEvents = selectorLeft(testState.left)
    let rightEvents = selectorRight(testState.right)
    expect(leftEvents[0].stats.health).toBe(100);
    expect(rightEvents[0].stats.health).toBe(0);
    expect(leftEvents[0].stats.mana).toBe(0);
    expect(rightEvents[0].stats.mana).toBe(200);
});