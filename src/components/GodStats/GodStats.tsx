import React from 'react';
import './GodStats.css';
import { connect } from 'react-redux';
import makeStatsSelector from '../../redux/selectors/StatsSelector';
import Build from '../../data_objects/Build';
import GodSelector from './GodSelector';
import { RootState } from '../../redux/store';
import buildIdentifier from "../../redux/buildIdentifier";
import { StatBlock } from '@smite-timeline/smite-game-objects';

type BuildID = {
    buildIdentifier: buildIdentifier
}
type NameValPair = {
    name: keyof StatBlock,
    val: number
}

const GodStats = ({buildIdentifier}: BuildID) => {
    return(
        <div className='GodStats border-gradient'>
            <div className=" major-container">
                <GodSelector buildIdentifier={buildIdentifier}></GodSelector>
                <StatTable buildIdentifier={buildIdentifier}></StatTable>
            </div>
        </div>
    )
}

export default GodStats;

var statsSelector: ReturnType<typeof makeStatsSelector> | null = null;
const StatTable = ({buildIdentifier}: BuildID) => {
    const selector = statsSelector ?? makeStatsSelector(buildIdentifier)
    const displayStat = (name: keyof StatBlock) => {
        const mapStateToProps = (state: RootState) => {
            let build: Build = state[buildIdentifier];
            let events = selector(build);
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
                {displayStat('criticalStrikeChance')}
                {displayStat('flatPenetration')}
                {displayStat('percentPenetration')}
                {displayStat('attackSpeed')}
                {displayStat('physicalProtection')}
                {displayStat('magicalProtection')}
                {displayStat('movementSpeed')}
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