import React from 'react'
import { Link } from 'react-router-dom';
const Student = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <h1>All Students List</h1>
                    </div>
                    <div className='col-6'>
                        <Link to="/addstudent">Add New Student</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Student
