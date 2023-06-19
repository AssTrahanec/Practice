import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './slice/auth';
import assetsReducer from './slice/assets'

const rootReducer = combineReducers({
    auth: authReducer,
    assets : assetsReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
