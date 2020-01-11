import React from 'react';
import './GodStats.css';
import StatContext from '../../contexts/StatContext.js';

console.log(StatContext)

const GodStats = (whichGod) => {
    const stats = React.useContext(StatContext)

    return( 
        <div className="GodStats">
            {StatTable(stats.gods[whichGod])}
        </div>
    );
}

export default GodStats;

const StatTable = (stats) => {

    const displayStat = (name) => {
        return (
        <StatItem name={name} val={stats[name]}></StatItem>
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