import React from 'react';
import PropTypes from 'prop-types';
import { Task } from "../../models/task.class";
import { LEVELS } from './../../models/levels.enum';
import TaskComponent from '../pure/task';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss';

const TaskListComponent = () => {
  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

  return (
    <div>
      <div>
        Your Tasks:
      </div>
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
