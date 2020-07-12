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
type ImageUrl = {
    image: string
}
type NameValPair = {
    name: keyof StatBlock,
    val: number
}

const GodStats = ({buildIdentifier}: BuildID) => {
    const mapStateToGodImage = (state: any) => {
        return {image: state[buildIdentifier].god.image}
    }

    const godStats = ({image}: ImageUrl) =>
        <div className="GodStats">
            <img src={image} alt='the selected god' aria-label={'god image ' + buildIdentifier} ></img>
            <GodSelector buildIdentifier={buildIdentifier}></GodSelector>
            <StatTable buildIdentifier={buildIdentifier}></StatTable>
        </div>
    const Connected = connect(mapStateToGodImage)(godStats);
    return (<Connected></Connected>)
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