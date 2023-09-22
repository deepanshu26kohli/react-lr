import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
const AddStudent = () => {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    
    async function submitForm(e) {
        e.preventDefault()
        // let newEntry = {name: name, course: course,email:email,phone:phone }
        // const res = await axios.post("http://127.0.0.1:8000/api/add-student",newEntry);
        // if (res.data.status === 200){
        //     console.log(res.data.message);
        // }
        // setEmail("")
        // setPhone("")
        // setCourse("")
        // setName("")
        setPhone(phone+1);
        setPhone(phone+1);
        setPhone((phone)=>phone+1);
        setPhone(phone+1);
        setPhone((phone)=>phone+1);
      
        
        
        // console.log(res)
    }
    useEffect(()=>{
    //    console.log("34")
      console.log(phone)
    },[phone])
return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <h1>Add Student Form Page</h1>
                </div>
                <div className='col-6'>
                    <Link to="/">Back</Link>
                </div>
            </div>
            <div className='w-25'>
            <form onSubmit={submitForm}>
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
                <button type="submit" className="btn btn-primary">Save Student</button>
            </form>
            </div>
            
        </div>
    </>
)
}

export default AddStudent
