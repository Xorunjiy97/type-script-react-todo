import * as types from '../../modules/toDoApp/types/types';
import { ActionTypes } from '../../actionTypes/actionTypes';

export type InitialStateType = {
    tasks: Array<types.taskType>;
};

const initialState: InitialStateType = {
    tasks: [],
};

export default(state = initialState,action: any): InitialStateType => {
    const {type, data} = action;

    switch(type) {
        case ActionTypes.SAVE_TASK:
            return {
                ...state,
                tasks: [...state.tasks, data]
            }
        // case constants.TASK_DONE:
        //     return {
        //         ...state,
        //         tasks: state.tasks.map(element => +action.payload === element.id ? { ...element, isCompleted: element.isCompleted ? false : true }: element)
        //     }
        case ActionTypes.DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(element => +data=== element.id ? { ...element, isOpen: false }: element)
            }
        default:
            return state;        
    }
}