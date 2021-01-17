import Item from "../../../data_objects/Item"
import React from "react";
import { Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";

const itemFilters = {
    general: {
        consumable: (item: Item) => "consumable" in item,
        relic: (item: Item) => "relic" in item,
        starter: (item: Item) => "starter" in item,
    },
    offensive: {
        power: (item: Item) => item.stats.power > 0,
        "attack speed": (item: Item) => item.stats.attackSpeed > 0,
        lifesteal: (item: Item) => item.stats.lifesteal > 0,
        penetration: (item: Item) => item.stats.percentPenetration > 0 || item.stats.flatPenetration > 0,
    },
    defensive: {
        physical: (item: Item) => item.stats.physicalProtections > 0,
        magical: (item: Item) => item.stats.magicalProtections > 0,
        health: (item: Item) => item.stats.health > 0,
        hp5: (item: Item) => item.stats.hp5 > 0,
        ccr: (item: Item) => item.stats.crowdControlReduction > 0
    },
    utility: {
        aura: (item: Item) => "aura" in item,
        movement: (item: Item) => item.stats.hp5 > 0,
        'cooldown %': (item: Item) => item.stats.cooldownReduction > 0,
        mana: (item: Item) => item.stats.mana > 0,
        mp5: (item: Item) => item.stats.mp5 > 0,

    }
}

type ItemFilter = (item: Item) => boolean
const filterToComponent = ([filterName, filter]: [string, ItemFilter], dispatch: Dispatch<PayloadAction<ItemFilter>>) => {
    return <div>
        {filterName}
        <input type="checkbox" 
            onClick={() => dispatch({
                type: 'itemPicker/toggleFilter', 
                payload: filter
            })}>
        </input>
    </div>
}

export default () => {
    const dispatch: Dispatch<PayloadAction<ItemFilter>> = useDispatch();
    
    return <div className='filters'>
        GENERAL
        <ul className='filter-list'>
            { Object.entries(itemFilters.general).map(filter => filterToComponent(filter, dispatch)) }
        </ul>
        OFFENSIVE
        <ul className='filter-list'>

        </ul>
        DEFENSIVE
        <ul className='filter-list'>

        </ul>
        UTILITY
        <ul className='filter-list'>

        </ul>
    </div>
};