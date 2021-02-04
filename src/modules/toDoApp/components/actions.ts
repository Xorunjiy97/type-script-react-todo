
import * as types from '../types/types';
import {ActionTypes} from "../../../actionTypes/actionTypes";

export type DeleteTaskType = {
    type: ActionTypes.DELETE_TASK;
    data: types.taskType;
}
export const onDeleteTask = (data: types.taskType): DeleteTaskType => ({
    type: ActionTypes.DELETE_TASK,
    data,
})