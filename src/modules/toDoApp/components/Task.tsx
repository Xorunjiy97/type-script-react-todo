import React, {FC, useCallback} from 'react'
import PropTypes from 'prop-types';
import './tasksStyles.css'


export interface Props {
    id: number;
    text: string;
    taskDone: Function;
    deleteTask: Function;
    isCompleted:Function,
}

const Task:FC<Props> = props => {
    const {
        id,
        text,
        taskDone,
        deleteTask,
        isCompleted,
    } = props;

    const onDeleteTask = useCallback(event => {
        deleteTask(event.target.id);
    }, [deleteTask]);

    const onCompleteTask = useCallback(event => {
        taskDone(event.target.id);
    }, [taskDone]);

    return(
        <li id={id}
            children={text}
            className='tasks__list'
        >
            <span id={id}
                  onClick={onCompleteTask}
                  children={text}
                  className={`list__text ${isCompleted ? 'done' : null}`}
             />
            <button
                id={id}
                onClick={onDeleteTask}
                children='delete'
                className='list__delete-btn'>
            </button>
        </li>
    );
}

Task.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    taskDone: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    isCompleted: PropTypes.booleans,
}

export default React.memo(Task);
