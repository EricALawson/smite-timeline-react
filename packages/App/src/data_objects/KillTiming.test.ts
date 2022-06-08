import KillTiming, { getLevelTimes, getTimeForGold } from './KillTiming'


test('getLevelTimes returns an array of size 20',() => {
    let kt = KillTiming();
    let result = getLevelTimes(kt);
    expect(result.length).toEqual(20);
    expect(result).toEqual(expect.arrayContaining([0]))
} );

test('getTimeForGold returns calculated values', () => {
    let kt = KillTiming();
    expect(getTimeForGold(kt, 1500)).toEqual(0);
    expect(getTimeForGold(kt, 1587)).toEqual(29);
    expect(getTimeForGold(kt, 1591)).toEqual(30);
    expect(getTimeForGold(kt, 1500 + 450 + 43*3*5 + 88)).toEqual(150);
})