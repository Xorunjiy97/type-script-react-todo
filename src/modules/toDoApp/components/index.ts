import Component from './Task.tsx';
import * as actions from './actions.ts';
import { connect } from 'react-redux';


export type mapDispatchToPropsType = {
    deleteTask: Function
}

const mapDispatchToProps = (dispatch: Function ) : mapDispatchToPropsType => ({
    deleteTask: (taskId: number): Function => dispatch(actions.onDeleteTask(taskId)),
    // taskDone: (taskId: number): Function => dispatch(actions.onTaskDone(taskId))
});

export default connect( null, mapDispatchToProps )(Component);