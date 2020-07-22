import React from 'react'
import GodProvider from '../../redux/GodProvider'
import store, {buildSlices, buildIdentifier} from '../../redux/store'
import { Dropdown, Menu, Button } from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem'
import { connect } from 'react-redux'

type BuildID = {
    buildIdentifier: buildIdentifier,
}

type imageProp = {
    image: string
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
    const mapStateToProps = (state: any) => {
        return {image: state[buildIdentifier].god.image}
    }
    const onClick = ({key}: any) => { onClickWithID(key, buildIdentifier) }
    const menu = <Menu onClick={onClick}>
            {gods.godNames.map((name: string, index: number) => <MenuItem key={index} aria-label={'select '+ name + ' ' + buildIdentifier}>{name}</MenuItem>)}
        </Menu>

    const component = ({image}: imageProp) => <div className="godSelection">
            <Dropdown overlay={menu}>
                <Button className='god-selection-menu' role='menu' aria-label='left god selection dropdown'>Select God</Button>
            </Dropdown>
            <img src={image} alt='the selected god' aria-label={'god image ' + buildIdentifier} ></img>
        </div>

    const ConnectedComponent = connect(mapStateToProps)(component);
    return <ConnectedComponent></ConnectedComponent>
}

export default GodSelector;