import React, { useState } from 'react';

function Switch(props) {
   const [state, toggleState] = useState(true)

   return (
      <div id="switch"
         className={`switch-${state ? 'off' : 'on'}`}
         onClick={() => { toggleState(!state); props.onClick() }}

      >
         {state ? 'OFF' : 'ON'}
      </div>
   )
}

export default Switch;