import { PayloadAction } from '@reduxjs/toolkit';
import { God } from '@smite-timeline/smite-game-objects';
import Build from '../../data_objects/Build';


const godReducer = (state: Build, action: PayloadAction<God>) => {
    return Build(
        action.payload,
        state.items,
        state.killTiming
    )
};

export default godReducer;