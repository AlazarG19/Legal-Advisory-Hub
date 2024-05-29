import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Reducers/index';
import sectionreducer from '../Reducers/sectionreducer';
import formtextreducer from '../Reducers/formtextreducer';
import adminsectionreducer from '../Reducers/adminsectionreducer';

const store = configureStore({
    reducer: { counter: counterReducer, sections: sectionreducer, formtext: formtextreducer, adminsections: adminsectionreducer },
});

export default store;