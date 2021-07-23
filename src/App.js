import React, {useState} from 'react';
import './App.css';
import Bulb from './Bulb';

function App() {

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="wrapper">
      <button className='btn' onClick={() => setIsActive(!isActive)}>Вкл/Выкл</button>
      <Bulb isActive={isActive}/>
    </div>
  );
}

export default App;
