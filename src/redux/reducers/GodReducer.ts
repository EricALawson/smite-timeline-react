import { createReducer, Action } from '@reduxjs/toolkit';
import StatBlock from '../../data_objects/StatBlock';
import God from '../../data_objects/God';
import Build from '../../data_objects/Build';


const godReducer = (state: Build, action: any) => {
            state.god = action.payload.god;
        };

export default godReducer;