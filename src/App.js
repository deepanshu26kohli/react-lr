import React from 'react'
import Student from './Pages/Student'
import {  Routes, Route } from 'react-router-dom';
import AddStudent from './Pages/AddStudent';
import EditStudent from './Pages/EditStudent';
const App = () => {
  return (
    <div>
      <div className='text-center mb-5'> 
        <h1 >Student App</h1>
      </div>
      <Routes>
        <Route path="/" element={<Student />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/edit-student/:id" element={<EditStudent />} />
      </Routes>
    </div>

  )
}

export default App
