import {configureStore} from '@reduxjs/toolkit';
import myReducer from '../reduxSlice/mySlice';

const store = configureStore({
    reducer :{
        counter: myReducer,
    }
})

export default store;

