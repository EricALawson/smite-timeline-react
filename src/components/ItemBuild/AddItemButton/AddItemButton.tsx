import React from 'react';
import { Slot } from '../../../redux/reducers/ItemPickerSlice';
import { connect } from 'react-redux';
import { RootState } from '../../../redux/store';
import buildIdentifier from "../../../redux/buildIdentifier";
import { EmptySlot } from '@smite-timeline/smite-game-objects/lib/Item';

type Props = {
    side: buildIdentifier
}
type DispatchProp = ReturnType<typeof mapDispatch>

const mapDispatch = (dispatch: any) => { 
    return {
        openItemPicker: (slot: Slot) => { 
            const action = {
                type: 'itemPicker/openItemPicker',
                payload: slot
            }
            dispatch(action) 
        } 
    }
};

type StateProps = ReturnType<typeof mapState>
const mapState = (state: RootState, ownProps: Props) => {
    let buildItems = state[ownProps.side].items;
    let index = 0;
    for (index = buildItems.length - 1; index >= 0; index--) {
        const current = buildItems[index];
        if (current !== EmptySlot) break;
    }
    index++;
    return { nextItemIndex: index}

}

const AddItemButton = ({ side, openItemPicker, nextItemIndex }: Props & DispatchProp & StateProps) =>  {
    const open = () => openItemPicker({buildID: side, index: nextItemIndex})
    return (<img 
                    className={'item-slot ' + side }
                    src={process.env.PUBLIC_URL + '/images/items/empty slot.png'} 
                    alt={'Add an item to ' + side + ' build'}
                    onClick={open} 
                    role='button'
                    aria-label='item slot'></img>
            )
}



export default connect(mapState, mapDispatch)(AddItemButton);