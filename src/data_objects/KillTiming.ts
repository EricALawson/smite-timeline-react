

class KillTiming {
    startingGold = 1500;
    waveStartTime = 30;
    waveRespawnTime = 30;
    jungleStartTime = 30;
    jungleRespawnTime = 120;
    goldPerSecond = 3;
    
    getLevelTimes(): number[] {
        let time = 0;
        let xp = 0;
        let level = 0; //don't bother adjusting for array indexing until we display the level.
        var times = [];
        while(times.length < 20) {
            if(xp >= xpForLevel[level]) {
                times.push(time);
                level++;
            }

            time++;

            if((time - this.waveStartTime) % this.waveRespawnTime === 0) {
                xp += minions.waveMelee.xp * 3 + minions.waveArcher.xp * 3;
            }

            if((time - this.jungleStartTime) % this.jungleRespawnTime === 0) {
                xp += minions.jungleBuffMinion.xp * 2 + minions.jungleBuffHolder.xp;
            }
        }
        return times;
    }
    getTimeForGold(goldTarget: number): number {
        let gold = this.startingGold;
        let time = 0;
        while (gold < goldTarget) {
            time++;

            gold += this.goldPerSecond;

            if((time - this.waveStartTime) % this.waveRespawnTime === 0) {
                gold += minions.waveMelee.gold * 3 + minions.waveArcher.gold * 3;
            }

            if((time - this.jungleStartTime) % this.jungleRespawnTime === 0) {
                gold += minions.jungleBuffMinion.gold * 2 + minions.jungleBuffHolder.gold;
            }
            //console.log("time: " + time + " gold: " + gold);
        }
        return time;
    }

    getTimeForKills(killTarget: number) {
        let time = 0;
        let kills = 0;
        while (kills < killTarget) {
            if((time - this.waveStartTime) % this.waveRespawnTime === 0) {
                kills += 6;
            }

            if((time - this.jungleStartTime) % this.jungleRespawnTime === 0) {
                kills += 3;
            }
        }

        return time;
    }

}

const xpForLevel = [
    0,
    308,
    671,
    1089,
    1562,
    2090,
    2673,
    3311,
    4004,
    4752,
    5555,
    6413,
    7326,
    8294,
    9317,
    10395,
    11528,
    12716,
    13959,
    15257
]

const minions = {

    waveMelee: {
        xp: 45,
        gold: 25
    },
    waveArcher : {
        xp: 25,
        gold: 18
    },
    jungleBuffMinion : {
        xp: 16,
        gold: 20
    },
    jungleBuffHolder : {
        xp: 116,
        gold: 48
    },
    jungleHarpy : {
        xp: 22,
        gold: 22
    },
    jungleElderHarpy: {
        xp: 30,
        gold: 34
    },
    jungleAlphaHarpy: {
        xp: 35,
        gold: 50
    }
}

export default KillTiming;