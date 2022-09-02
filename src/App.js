import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';
import Clock from './components/pure/clock';
import { useState } from 'react';
import ContactListComponent from './components/container/contact_list';
import Rectangle from './components/pure/rectangle';

function App() {
  const [visibleClock, setVisibleClock] = useState(true);
  return (
    <div className="App">
        {/* Componente */}
        {/* <TaskListComponent/> */}
        {/* <ContactListComponent/> */}
        {/* <GreetingStyled name={'Martin'} /> */}
        {/* {visibleClock && <Clock/>} */}
        {/* <button onClick={() => setVisibleClock(!visibleClock)}>Toggle Clock</button> */}
        <Rectangle />
    </div>
  );
}

export default App;
