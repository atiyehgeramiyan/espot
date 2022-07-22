import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TaskCards from './pages/TaskCards';
import TaskRegister from './pages/TaskRegister';
import TaskConfirm from './pages/TaskConfirm';


const App = () => {

  return (
   <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<TaskCards/>} />
      <Route path="/register" element={<TaskRegister/>} />
      <Route path="/confirm" element={<TaskConfirm/>} />
     </Routes>
     </BrowserRouter>
   </>
  )
}
export default App;



