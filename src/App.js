import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';
import Clock from './components/pure/clock';
import { useState } from 'react';

function App() {
  const [visibleClock, setVisibleClock] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente */}
        {/* <TaskListComponent/> */}
        {/* <GreetingStyled name={'Martin'} /> */}
        {visibleClock && <Clock/>}
        <button onClick={() => setVisibleClock(!visibleClock)}>Toggle Clock</button>
      </header>
    </div>
  );
}

export default App;
