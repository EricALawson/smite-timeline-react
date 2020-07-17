import React from 'react'
import GodProvider from '../../redux/GodProvider'
import store, {buildSlices, buildIdentifier} from '../../redux/store'
import { Dropdown, Menu, Button } from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem'

type BuildID = {
    buildIdentifier: buildIdentifier
}

const gods = GodProvider.getInstance();

const onClickWithID = (key: number, buildIdentifier: buildIdentifier) => {
    let name = gods.godNames[key];
    let selectedGod = gods.getGod(name);
    if (selectedGod) {
        let slice = buildSlices[buildIdentifier];
        let action = slice.actions.godReducer(selectedGod) 
        console.log(action.type);
        store.dispatch(action);
    }  
}

const GodSelector = ({buildIdentifier}: BuildID) => {
    const onClick = ({key}: any) => { onClickWithID(key, buildIdentifier) }
    const menu = <Menu onClick={onClick}>
            {gods.godNames.map((name: string, index: number) => <MenuItem key={index}>{name}</MenuItem>)}
        </Menu>

    return <Dropdown overlay={menu}>
            <Button className='god-selection-menu'>Select God</Button>
        </Dropdown>
}

export default GodSelector;