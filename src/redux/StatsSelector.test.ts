import makeStatsSelector, {makeGodEventSelector, makeItemEventSelector} from "./reducers/StatsSelector";
import Build from "../data_objects/Build";
import God from "../data_objects/God";
import StatBlock from "../data_objects/StatBlock";

test('test god event selector', () => {
    let selector = makeGodEventSelector();
    let build = new Build();
    let events = selector(build);
    expect(events.length).toBe(20);
    expect(events[0].stats).toEqual(build.god.baseStats);
    expect(events[19].stats).toEqual(build.god.perLevelStats);
});

test('test item event selector', () => {
    let build = new Build();
    let selector = makeItemEventSelector();
    let events = selector(build);
    expect(events.length).toBe(build.items.length)
});

test('test summed events selector', () => {
    let build = new Build();
    let selector = makeStatsSelector();
    let events = selector(build);
    expect(events[0].stats).toEqual(build.god.baseStats);
    expect(events[1].stats).toEqual(build.god.baseStats.add(build.god.perLevelStats));
});

test('Use two selectors for two builds', () =>  {
    let testState  = {
        left: new Build(
            new God(
                "testGodLeft",
                new StatBlock({health: 100, power: 100}),
                new StatBlock({health: 10, power: 10})
            ),
        ),
        right: new Build(
            new God(
                "testGodRight",
                new StatBlock({mana: 200, magicalProtections: 200}),
                new StatBlock({mana: 20, magicalProtections: 20, hp5: 1})
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