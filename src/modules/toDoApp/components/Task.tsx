import React, {FC, useCallback} from 'react'
import './tasksStyles.css'


export interface Props {
    id: number;
    text: string;
    deleteTask: Function;
}

const Task:FC<Props> = props => {
    const {
        id,
        text,
        deleteTask,
    } = props;

    const onDeleteTask = useCallback((event: React.MouseEvent<HTMLButtonElement> ) : void => {
        deleteTask(event.target.id);
    }, [deleteTask]);

    return(
        <li id={id}
            children={text}
            className='tasks__list'
        >
            <span id={id}
                  children={text}
                  className={`list__text`}
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

export default React.memo(Task);
