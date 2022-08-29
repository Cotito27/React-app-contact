import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({ add }) => {
  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask)
  }

  return (
    <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4 p-3'>
      <div className="form-outline flex-fill">
        <label htmlFor="inputName">Name</label>
        <input ref={nameRef} type="text" id='inputName' className='form-control form-control-lg' required autoFocus />
        <label htmlFor="inputDescription">Description</label>
        <input ref={descriptionRef} type="text" id='inputDescription' className='form-control form-control-lg' required />
        <label htmlFor="selectLevel">Priority</label>
        <select ref={levelRef} className='form-select form-control-lg' id="selectLevel">
          {Object.values(LEVELS).map(level => <option value={level}>{level}</option>)}
        </select>
        <button type='submit' className='btn btn-primary mt-3'>Agregar</button>
      </div>
    </form>
  );
}

TaskForm.propTypes = {
  add: PropTypes.func.isRequired
}

export default TaskForm;
