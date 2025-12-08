import React from 'react'
import './App.css';
import {BrowserRouter , Routes,Route,Navigate} from 'react-router-dom'
import Auth from './Pages/RegisterLogin/Auth.jsx';

import Translate from './Pages/Translate/Translate.jsx';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes> 
          <Route path='/' element={<Navigate to="/Auth" replace />}/>
          <Route path='/auth'   element= {<Auth/>}/>
          <Route path='/Translate' element={<Translate/>} />
         </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App