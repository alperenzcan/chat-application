import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/styles/main.css';
import Chatroom from './components/Chatroom';
import Login from './components/Login';

function App() {

  const [user, setUser] = useState()

  return (
    <div className='app container'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat' element={<Chatroom />} />
      </Routes>
    </div>
  );
}

export default App;
