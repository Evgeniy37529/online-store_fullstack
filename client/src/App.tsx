import React from 'react';
import { AppRouting } from './components/AppRouting';
import { NavPanel } from './components/Navbar';
import { Del } from './del/del';

function App() {
  return (
    <div className="App">
      <NavPanel />
      <AppRouting />
      {/* <Del /> */}
    </div>
  );
}

export default App;
