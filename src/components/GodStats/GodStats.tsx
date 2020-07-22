import React from 'react';
import './GodStats.css';
import { connect } from 'react-redux';
import makeStatsSelector from '../../redux/selectors/StatsSelector';
import Build from '../../data_objects/Build';
import StatBlock from '../../data_objects/StatBlock';
import GodSelector from './GodSelector';
import { buildIdentifier } from '../../redux/store';

type BuildID = {
    buildIdentifier: buildIdentifier
}
type NameValPair = {
    name: keyof StatBlock,
    val: number
}

const GodStats = ({buildIdentifier}: BuildID) => {
    return(
        <div className="GodStats major-container">
            <GodSelector buildIdentifier={buildIdentifier}></GodSelector>
            <StatTable buildIdentifier={buildIdentifier}></StatTable>
        </div>
    )
}

export default GodStats;

const StatTable = ({buildIdentifier}: BuildID) => {
    let statsSelector = makeStatsSelector();

    const displayStat = (name: keyof StatBlock) => {
        const mapStateToProps = (state: any) => {
            let build: Build = state[buildIdentifier];
            let events = statsSelector(build);
            events = events.filter(event => event.time <= state.time);
            let stats = events[events.length - 1].stats; //the last event whose time is <= current time
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
                {displayStat('health')}
                {displayStat('mana')}
                {displayStat('hp5')}
                {displayStat('mp5')}
                {displayStat('power')}
                {displayStat('critChance')}
                {displayStat('flatPenetration')}
                {displayStat('percentPenetration')}
                {displayStat('attackSpeed')}
                {displayStat('physicalProtections')}
                {displayStat('magicalProtections')}
                {displayStat('moveSpeed')}
                {displayStat('cooldownReduction')}
                {displayStat('crowdControlReduction')}
        </tbody></table>
    );
}

const StatItem = (props: NameValPair) => {
    return(
        <tr>
            <td className='stat-name'>
                {props.name}:
            </td>
            <td className='stat-value'>
              {props.val.toFixed(0)}  
            </td>
        </tr>
    )
}