
import * as types from './types/types';
import {ActionTypes} from "../../actionTypes/actionTypes";

export type AddTaskType = {
    type: ActionTypes.SAVE_TASK;
    data: types.taskType;
}

export const onSaveTask = (data: types.taskType): AddTaskType => ({
    type: ActionTypes.SAVE_TASK,
    data,
})

export type DeleteTaskType = {
    type: ActionTypes.DELETE_TASK;
    data: types.taskType;
}

export const onDeleteTask = (data: types.taskType): DeleteTaskType => ({
    type: ActionTypes.DELETE_TASK,
    data,
})
