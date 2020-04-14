import React, { useState } from 'react';
import Switch from './Switch';

import './App.css';

function App() {

   const [light, setLight] = useState(true)

   return (
      <div id="wall" className={light ? "on" : null}>
         <Switch onClick={() => setLight(!light)} />
         <div id="bulb" className={light ? "on" : "off"}></div>
         <div id="light" className={light ? "lit" : null}></div>
         <div id="lamp" className={light ? "on" : null}></div>
      </div>

   );
}

export default App;
