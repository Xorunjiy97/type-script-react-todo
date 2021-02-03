import Component from './Task.tsx';
import * as actions from './actions.ts';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    deleteTask: taskId => dispatch(actions.onDeleteTask(taskId)),
    taskDone: taskId => dispatch(actions.onTaskDone(taskId))
});

export default connect( null, mapDispatchToProps )(Component);