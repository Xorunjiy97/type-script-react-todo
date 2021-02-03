import Component from './ToDoApp';
import * as actions from './actions';
import * as selectors from './selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    tasks: selectors.getAllTask(state)
});

const mapDispatchToProps = dispatch => ({
    saveTask: data => dispatch(actions.onSaveTask(data)),
    deleteTask: taskId => dispatch(actions.onDeleteTask(taskId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
