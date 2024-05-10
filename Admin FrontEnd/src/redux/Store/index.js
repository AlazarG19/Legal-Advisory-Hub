import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Reducers/index';
import sectionreducer from '../Reducers/sectionreducer';

const store = configureStore({
    reducer: { counter: counterReducer, sections: sectionreducer },
});

export default store;