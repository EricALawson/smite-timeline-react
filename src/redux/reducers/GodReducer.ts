import { PayloadAction } from '@reduxjs/toolkit';
import God from '../../data_objects/God';
import Build from '../../data_objects/Build';


const godReducer = (state: Build, action: PayloadAction<God>) => {
            return new Build(
                action.payload,
                state.items,
                state.killTiming
            )
        };

export default godReducer;