import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Task } from "../../models/task.class";
import { LEVELS } from './../../models/levels.enum';
import TaskComponent from '../pure/task';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss';
import useClasses from '../../hooks/useClasses';
import clsx from 'clsx';
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {
  const classes = useClasses({
    cardBody: {
      position: 'relative',
      height: '400px'
    }
  });

  const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL);
  const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENT);
  const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING);

  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  function completeTask(task) {
    console.log('Complete this task', task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    setTasks(tempTasks);
  }

  function deleteTask(task) {
    console.log('Delete this task', task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }

  function addTask(task) {
    console.log('Add this task', task);
    const tempTasks = [...tasks, task];
    setTasks(tempTasks);
  }

  return (
    <div>
      <div className='col-12'>
        <div className='card'>
          <div className="card-header p-3">
            <h5 className='text-center'>Your Tasks:</h5>
          </div>
          <div className={clsx('card-body', classes.cardBody)} data-mdb-perfect-scrollbar='true'>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th scope='col'>Name</th>
                  <th scope="col">Surname</th>
                  <th scope="col">Email</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
              {tasks.map((task, index) => <TaskComponent key={index} task={task} complete={completeTask} remove={deleteTask} />)}
              </tbody>
            </table>
          </div>
          <TaskForm add={addTask} />
        </div>
      </div>
    </div>
  );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
