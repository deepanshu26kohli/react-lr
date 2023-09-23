import React, {  useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom';

import axios from 'axios';
const EditStudent = () => {
    let std_id = useParams() 
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    
    async function editSubmitForm(e) {
        e.preventDefault()
        let editedStudent = {name:name, course:course, email:email, phone:phone};
        const res = await axios.put(`http://127.0.0.1:8000/api/update-student/${std_id.id}`,editedStudent);
        if (res.data.status === 200){
            console.log(res.data.message);
        }
        
    }
    async function getEditStudentData(std_id){
        console.log(std_id.id)
        const res = await axios.get(`http://127.0.0.1:8000/api/edit-student/${std_id.id}`)
        if (res.data.status === 200){
                setName(res.data.student.name);
                setEmail(res.data.student.email);
                setPhone(res.data.student.phone);
                setCourse(res.data.student.course);
            }
    }
    useEffect(()=>{
        if(std_id){
            console.log("edit")
            getEditStudentData(std_id)
        }
    },[])
return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <h1>Edit Student Form Page</h1>
                </div>
                <div className='col-6'>
                    <Link to="/">Back</Link>
                </div>
            </div>
            <div className='w-25'>
            <form onSubmit={editSubmitForm}>
                <div className="mb-3">
                    <label className="form-label">Student Name</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Student Course</label>
                    <input type="text" name="course" value={course} onChange={(e) => setCourse(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Student Email</label>
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Student Phone</label>
                    <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" />
                </div>
                <button type="submit" className="update btn btn-primary">Update Student</button>
            </form>
            </div>
            
        </div>
    </>
)
}

export default EditStudent

