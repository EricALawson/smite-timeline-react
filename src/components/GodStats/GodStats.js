import React from 'react';
import './GodStats.css';
import { connect } from 'react-redux';

const GodStats = ({godNum}) => {
    return(
        <div className="GodStats">
            <title>God Name Here</title>
            <StatTable godNum={godNum}></StatTable>
        </div>
    );
}

export default GodStats;

const StatTable = ({godNum}) => {
    const displayStat = (name) => {
        const mapStateToProps = state => {
            return {
                name: name,
                val: state.stats.gods[godNum][name]
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
                {displayStat('flatReduction')}
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

const StatItem = (props) => {
    return(
        <td>
            <span>{props.name}:</span><span>{props.val}</span>
        </td>
    )
}