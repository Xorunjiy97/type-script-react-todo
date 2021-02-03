import React,{ useState, useCallback, } from 'react';

import Task from './components/Task.js';
import './todoAppStyle.css'

const ToDo: React.FC = props => {
    const {
        tasks,
        taskDone,
        saveTask,
        deleteTask,
    } = props

    const [taskText, setTaskText] = useState<string>('');

    const onSaveTask = useCallback(event => {
        event.preventDefault();

        const task = {
            id: new Date().getTime(),
            text: taskText,
            isOpen: true,
            isCompleted: false,
        }

        saveTask(task);
        setTaskText('');
    }, [taskText]);

     const onChangeText = useCallback((event: React.ChangeEvent<HTMLInputElement> ) => {
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
                        tasks.map((task) =>
                            task.isOpen ?
                            <Task id={task.id}
                                  key={task.id}
                                  text ={task.text}
                                  taskDone={taskDone}
                                  deleteTask={deleteTask}
                                  isCompleted={task.isCompleted}
                            /> : null )
                        : null
                    }
                </ul>
            </div>
        </div>
    );
}

export default React.memo(ToDo);
