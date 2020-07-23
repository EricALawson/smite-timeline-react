import React from 'react'
import GodProvider from '../../redux/GodProvider'
import { buildIdentifier} from '../../redux/store'
import { Dropdown, Menu, Button } from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem'
import { connect } from 'react-redux'

type Props = { buildIdentifier: buildIdentifier }

type DispatchProp = { pickGod: (key: number, buildIdentifier: buildIdentifier) => void }

type stateProp = { image: string }

const gods = GodProvider.getInstance();

const mapDispatch = (dispatch: any) => {
    return {
        pickGod: (key: number, buildIdentifier: buildIdentifier) => {
            
            const name = gods.godNames[key];
            const selectedGod = gods.getGod(name);
            if (selectedGod) {
                const action = {
                    type: buildIdentifier + '/godReducer',
                    payload: selectedGod
                }
                dispatch(action);
            }
        }
    }
}


const GodSelector = ({buildIdentifier}: Props) => {
    const mapStateToProps = (state: any) => {
        return {image: state[buildIdentifier].god.image}
    }
    
    const component = ({image, pickGod}: stateProp & DispatchProp) => {
        const onClick = ({key}: any) => pickGod(key, buildIdentifier)
        const menu =  <Menu onClick={onClick}>
            {gods.godNames.map((name: string, index: number) => <MenuItem key={index} aria-label={'select '+ name + ' ' + buildIdentifier}>{name}</MenuItem>)}
        </Menu>
        
        return (<div className="godSelection">
            <Dropdown overlay={menu}>
                <Button className='god-selection-menu' role='menu' aria-label='left god selection dropdown'>Select God</Button>
            </Dropdown>
            <img src={image} alt='the selected god' aria-label={'god image ' + buildIdentifier} ></img>
        </div>)
    }

    const ConnectedComponent = connect(mapStateToProps, mapDispatch)(component);
    return <ConnectedComponent></ConnectedComponent>
}

export default GodSelector;