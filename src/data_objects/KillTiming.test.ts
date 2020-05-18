import KillTiming from './KillTiming'

let kt = new KillTiming();

test('getLevelTimes returns an array of size 20',() => {
    
    let result = kt.getLevelTimes();
    expect(result.length).toEqual(20);
    expect(result).toEqual(expect.arrayContaining([0]))
} );

test('getTimeForGold returns calculated values', () => {
    expect(kt.getTimeForGold(1500)).toEqual(0);
    expect(kt.getTimeForGold(1587)).toEqual(29);
    expect(kt.getTimeForGold(1591)).toEqual(30);
    expect(kt.getTimeForGold(1500 + 450 + 43*3*5 + 88)).toEqual(150);
})