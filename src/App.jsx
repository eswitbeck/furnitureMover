import React, { useEffect } from 'react';
import main from './classes/main';
import './style.css';

const App = () => {
  useEffect(main, []);

  return <div className="draggable noselect">Hello world</div>;
}

export default App;
