import React from 'react';
import './GodStats.css';
import { connect } from 'react-redux';
import makeStatsSelector from '../../redux/selectors/StatsSelector';
import Build from '../../data_objects/Build';
import StatBlock from '../../data_objects/StatBlock';

type BuildID = {
    buildIdentifier: string
}
type NameValPair = {
    name: keyof StatBlock,
    val: number
}

const GodStats = ({buildIdentifier}: BuildID) => {
    return(
        <div className="GodStats">
            <title>God Name Here</title>
            <StatTable buildIdentifier={buildIdentifier}></StatTable>
        </div>
    );
}

export default GodStats;

const StatTable = ({buildIdentifier}: BuildID) => {
    let statsSelector = makeStatsSelector();

    const displayStat = (name: keyof StatBlock) => {
        const mapStateToProps = (state: any) => {
            let build: Build = state[buildIdentifier];
            let events = statsSelector(build);
            let time: number = state.time;
            let stats: StatBlock = events.filter(event => event.time > time)[0].stats;
            let val = stats[name]
            if (typeof val == 'number') {
                return {
                    name: name,
                    val: val
                }
            }
            
        }
        const ConnectedStatItem = connect(mapStateToProps)(StatItem);
        return (
            <ConnectedStatItem></ConnectedStatItem>
        );
    }

    return(
        <table><tbody>
            <tr>
                {displayStat('health')}
                {displayStat('mana')}
            </tr>
            <tr>
                {displayStat('hp5')}
                {displayStat('mp5')}
            </tr>
            <tr>
                {displayStat('power')}
                {displayStat('critChance')}
            </tr>
            <tr>
                {displayStat('flatPenetration')}
                {displayStat('percentPenetration')}
            </tr>
            <tr>
                {displayStat('attackSpeed')}
            </tr>
            <tr>
                {displayStat('physicalProtections')}
                {displayStat('magicalProtections')}
            </tr>
            <tr>
                {displayStat('moveSpeed')}
            </tr>
            <tr>
                {displayStat('cooldownReduction')}
            </tr>
            <tr>
                {displayStat('crowdControlReduction')}
            </tr>
        </tbody></table>
    );
}

const StatItem = (props: NameValPair) => {
    return(
        <td>
            <span>{props.name}: </span><span>{props.val}</span>
        </td>
    )
}