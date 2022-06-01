import React, { useEffect } from 'react'
import { thunkLoadGodNames, thunkLoadGodStats } from '../../redux/GodList'
import buildIdentifier from "../../redux/buildIdentifier"
import { Dropdown, Menu, Button } from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem'
import { connect } from 'react-redux'
import { thunkSetGodByName } from '../../redux/reducers/GodReducer'
import { RootState } from '../../redux/store'

type Props = { buildIdentifier: buildIdentifier }

type DispatchProp = { 
    pickGod: (name: string, buildIdentifier: buildIdentifier) => void,
    loadGodNames: () => void
 }

type stateProp = { 
    image: string,
    godNames: string[]
}

const mapDispatch = (dispatch: any) => {
    return {
        pickGod: (name: string, buildIdentifier: buildIdentifier) => {
            dispatch(thunkSetGodByName(name, buildIdentifier));
            dispatch(thunkLoadGodStats(name));
        },
        loadGodNames: () => {
            dispatch(thunkLoadGodNames());
        }
    }
}


const GodSelector = ({buildIdentifier}: Props) => {
    const mapStateToProps = (state: RootState) => {
        return {
            image: state[buildIdentifier].god.image,
            godNames: state.gods.names
        }
    }
    
    const Component = ({image, godNames, pickGod, loadGodNames}: stateProp & DispatchProp) => {
        const onClick = ({key}: {key: string}) => pickGod(key, buildIdentifier)

        useEffect(() => loadGodNames(), [])

        const items = godNames.map((name: string) => {
            return { 
                key: name,
                arialabel: 'select ' + name + ' ' + buildIdentifier,
                label: name
            }
        });
        const menu = <Menu onClick={onClick} items={items}/>
        
        return (<div className="godSelection">
            <Dropdown overlay={menu}>
                <Button className='god-selection-menu' role='menu' aria-label='left god selection dropdown'>Select God</Button>
            </Dropdown>
            <img src={image} alt='the selected god' aria-label={'god image ' + buildIdentifier} ></img>
        </div>)
    }

    const ConnectedComponent = connect(mapStateToProps, mapDispatch)(Component);
    return <ConnectedComponent></ConnectedComponent>
}

export default GodSelector;