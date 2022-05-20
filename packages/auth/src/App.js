import React, { useState } from 'react';
import Register from './components/register/register'
import Login from './components/login/login';


function App() {

  const [register, setRegister] = useState(false)

  return (
    <div className="App">
      {
        register ? <Register setRegister={setRegister}/> : <Login setRegister={setRegister} />
      }
    </div>
  );
}

export default App;