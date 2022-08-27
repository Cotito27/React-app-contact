import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

const TaskComponent = ({ task }) => {
  return (
    <div>
      <h1>
        Nombre: {task.name}
      </h1>
      <h3>
        Descripción: {task.description}
      </h3>
      <h4>
        Level: {task.level}
      </h4>
      <h5>
        This task is: {task.completed ? 'COMPLETED' : 'PENDING'}
      </h5>
    </div>
  );
};


TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
