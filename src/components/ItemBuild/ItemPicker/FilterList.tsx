import Item from "../../../data_objects/Item"
import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";

const itemFilters = {
    consumable: (item: Item) => "consumable" in item,
    relic: (item: Item) => "relic" in item,
    starter: (item: Item) => "starter" in item,
    power: (item: Item) => item.stats.power > 0,
    "attack speed": (item: Item) => item.stats.attackSpeed > 0,
    lifesteal: (item: Item) => item.stats.lifesteal > 0,
    penetration: (item: Item) => item.stats.percentPenetration > 0 || item.stats.flatPenetration > 0,
    physical: (item: Item) => item.stats.physicalProtections > 0,
    magical: (item: Item) => item.stats.magicalProtections > 0,
    health: (item: Item) => item.stats.health > 0,
    hp5: (item: Item) => item.stats.hp5 > 0,
    ccr: (item: Item) => item.stats.crowdControlReduction > 0,
    aura: (item: Item) => "aura" in item,
    movement: (item: Item) => item.stats.hp5 > 0,
    'cooldown %': (item: Item) => item.stats.cooldownReduction > 0,
    mana: (item: Item) => item.stats.mana > 0,
    mp5: (item: Item) => item.stats.mp5 > 0,
}

export type FilterName = keyof typeof itemFilters;
type FilterCategories = Record<string, FilterName[]>
const filterCategories: FilterCategories = {
    general: ['consumable', 'relic', 'starter'],
    offensive: ['power', 'attack speed', 'lifesteal', 'penetration'],
    defensive: ['physical', 'magical', 'health', 'hp5', 'ccr'],
    utility: ['aura', 'movement', 'cooldown %', 'mana', 'mp5']
}

type ItemFilter = (item: Item) => boolean
const filterToComponent = (filterName: FilterName, dispatch: Dispatch<PayloadAction<FilterName>>) => {
    return <div>
        {filterName}
        <input type="checkbox" 
            onClick={() => dispatch({
                type: 'itemPicker/toggleFilter', 
                payload: filterName
            })}>
        </input>
    </div>
}

export default () => {
    const dispatch: Dispatch<PayloadAction<FilterName>> = useDispatch();
    
    return <div className='filters'>
        {Object.entries(filterCategories).map(([filterCategory, filterNames]) => {
            return <div>{filterCategory}
                <ul className='filter-list'>
                    {filterNames.map(filter => filterToComponent(filter, dispatch))}
                </ul>
            </div>;
        })}
    </div>
};