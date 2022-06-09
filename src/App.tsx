import { useState } from 'react';

import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import * as AiIcon from 'react-icons/ai';

import './App.css';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = function () {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <div className="flex h-full">
      <Sidebar />

      <div className='Main flex flex-col w-full'>
        <div className="navbar flex w-full">
          <button className='toggle-icon w-6 h-6 m-3' onClick={toggle}>
            <AiIcon.AiOutlineMenu className='text-gray-600 w-6 h-6' />
          </button>

          
        </div>


        <div className='Main-content h-screen flex flex-col'>
          <Home/>
        </div>
      </div>
    </div>
  )
}

export default App
