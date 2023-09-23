import React, {  useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddStudent = () => {
    const [success,setSuccess] = useState(false);
    const [error,setError] = useState(false);
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    
    async function submitForm(e) {
        e.preventDefault()
        let newStudent = {name: name, course: course,email:email,phone:phone }
        const res = await axios.post("http://127.0.0.1:8000/api/add-student",newStudent).then((resp)=>{
       
        if (resp.data.status === 200){
            console.log(resp.data.message);
            toast.success(resp.data.message,{theme: "colored"});
            setSuccess(true);
        }
    }

        ).catch((respp)=>{
            toast.error(respp.response.data.message,{theme: "colored"});
            setError(true);
        });
        
       
       
        
        setEmail("")
        setPhone("")
        setCourse("")
        setName("")
        setPhone("")
    }
   
return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <h1>Add Student Form Page</h1>
                </div>
                <div className='col-6'>
                    <Link to="/"><button className='btn-dark btn'>All students list</button></Link>
                </div>
            </div>
            <div className='w-25'>
            <form onSubmit={submitForm}>
                <div className="mb-3">
                    <label className="form-label">Student Name</label>
                    <input  type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Student Course</label>
                    <input  type="text" name="course" value={course} onChange={(e) => setCourse(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Student Email</label>
                    <input  type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Student Phone</label>
                    <input  type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Save Student</button>
            </form>
            </div>
            {success && <ToastContainer />}
            {error && <ToastContainer />}
        </div>
    </>
)
}

export default AddStudent

