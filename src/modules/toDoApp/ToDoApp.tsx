import React,{ useState, useCallback, } from 'react';
import * as types from './types/types'
import Task from './components/Task.js';
import './todoAppStyle.css'

export interface Props {
    tasks: any;
    saveTask: any;
    deleteTask: Function;
}

const ToDo: React.FC<Props> = props => {
    const {
        tasks,
        saveTask,
        deleteTask,
    } = props

    const [taskText, setTaskText] = useState<string>('');

    const onSaveTask = useCallback((event: React.MouseEvent<HTMLButtonElement> ): void => {
        event.preventDefault();

        const task: types.taskType = {
            id: new Date().getTime(),
            text: taskText,
        }

        saveTask(task);
        setTaskText('');
    }, [taskText]);

     const onChangeText = useCallback((event: React.ChangeEvent<HTMLInputElement> ): void => {
        setTaskText(event.target.value)
     }, [setTaskText]);

    return(
        <div className='container'>
            <h1>ToDo List</h1>
            <div className='container__input-wrapper'>
                <input type="text"
                       value={taskText}
                       onChange={onChangeText}
                       className='input-wrapper__text'
                       placeholder="Add a task"/>
                <button onClick={onSaveTask}
                        children='Add'
                        className='input-wrapper__add-button'
                />
            </div>
            <div className='container__list-wrapper'>
                <ul className='list-wrapper__tasks'>
                    { tasks.length ?
                        tasks.map((task: types.taskType) =>

                            <Task id={task.id}
                                  key={task.id}
                                  text ={task.text}
                                  deleteTask={deleteTask}
                            />  )
                        : null
                    }
                </ul>
            </div>
        </div>
    );
}

export default React.memo(ToDo);
