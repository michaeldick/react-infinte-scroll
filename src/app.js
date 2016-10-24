import React from 'react';
import ReactDOM from 'react-dom';

// load components
import View from './components/view/view';
import Hud from './components/hud/hud';

// render app
function App() {
  return (
    <div>
      <Hud />
      <View />
    </div>
  );
}

// attach to DOM
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
