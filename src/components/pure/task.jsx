import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import useClasses from './../../hooks/useClasses';
import clsx from 'clsx';
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({ task, complete, remove }) => {
  const classes = useClasses({
    iconToggleOn: {
      color: 'green',
    },
    iconToggleOff: {
      color: 'grey'
    },
    iconTrash: {
      color: 'tomato',
    }
  });

  function TaskLevelBadge() {
    switch(task.level) {
      case LEVELS.NORMAL:
        return <h6 className='mb-0'>
          <span className='badge bg-primary'>
            {task.level}
          </span>
        </h6>;
      case LEVELS.URGENT:
        return <h6 className='mb-0'>
          <span className='badge bg-warning'>
            {task.level}
          </span>
        </h6>;
      case LEVELS.BLOCKING: 
        return <h6 className='mb-0'>
          <span className='badge bg-danger'>
            {task.level}
          </span>
        </h6>;
      default:
        return <></>
    }
  }

  function TaskIconCompleted() {
    if(task.completed) {
      return <i onClick={() => complete(task)} className={clsx("bi-toggle-on", classes.iconToggleOn, 'task-action')}></i>;
    } else {
      return <i onClick={() => complete(task)} className={clsx("bi-toggle-off", classes.iconToggleOff, 'task-action')}></i>;
    }
  }

  return (
    <tr className='fw-normal'>
      <th>
        <span>{task.name}</span>
      </th>
      <td className='align-middle'>
        <span>{task.description}</span>
      </td>
      <td className='align-middle'>
        <TaskLevelBadge/>
      </td>
      <td className='align-middle'>
        <span>
          <TaskIconCompleted/>
        </span>
        <i onClick={() => remove(task)} className={clsx("bi-trash", classes.iconTrash, 'task-action')}></i>
      </td>
    </tr>
  );
};


TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};


export default TaskComponent;
