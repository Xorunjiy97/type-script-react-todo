import { combineReducers } from 'redux';
import reducer from "../../manegers/toDoReducer/reducer";


const rootReducer =  combineReducers({
    reducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

export default rootReducer;