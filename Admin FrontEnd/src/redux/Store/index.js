import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Reducers/index';
import adminsectionreducer from '../Reducers/adminsectionreducer';

const store = configureStore({
    reducer: { counter: counterReducer, adminsections: adminsectionreducer },
});

export default store;