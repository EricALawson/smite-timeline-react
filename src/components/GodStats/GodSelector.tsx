import React from 'react'
import GodProvider from '../../redux/GodProvider'
import store, {buildSlices, buildIdentifier} from '../../redux/store'

type BuildID = {
    buildIdentifier: buildIdentifier
}

const GodSelector = ({buildIdentifier}: BuildID) => {
    let gods = GodProvider.getInstance();

    return <select
        onChange={(event) => {
            let selectedGod = gods.getGod(event.target.value);
            if (selectedGod) {
                let slice = buildSlices[buildIdentifier];
                let action = slice.actions.godReducer(selectedGod)
                store.dispatch(action);
            }  
        }}
    >
        {
            gods.godNames.map((name: string) => <option>{name}</option>)
        }
    </select>
}

export default GodSelector;