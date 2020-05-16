
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../redux/reducers/root';

const store = configureStore({
    reducer: rootReducer
});

export default store;