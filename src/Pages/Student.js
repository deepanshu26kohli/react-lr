import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
const Student = () => {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [editId, setEdit] = useState("");
    let [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    async function getEditStudentData(std_id) {
        console.log(std_id)
        const res = await axios.get(`http://127.0.0.1:8000/api/edit-student/${std_id}`)
        if (res.data.status === 200) {
            setName(res.data.student.name);
            setEmail(res.data.student.email);
            setPhone(res.data.student.phone);
            setCourse(res.data.student.course);
        }
    }
    useEffect(() => {
        if (editId !== "") {
            console.log("edit")
            getEditStudentData(editId)
        }
    }, [editId])
    async function editSubmitForm(e) {
        e.preventDefault()
        let editedStudent = { name: name, course: course, email: email, phone: phone };
        const res = await axios.put(`http://127.0.0.1:8000/api/update-student/${editId}`, editedStudent);
        if (res.data.status === 200) {
            console.log(res.data.message);
            setEdit("")
        } else {
            console.log("error occured while editing")
        }
    }

    async function getStudents() {
        const res = await axios.get("http://127.0.0.1:8000/api/students");
        if (res.data.status === 200) {
            // console.log("inside", res.data.students);
            setStudents(res.data.students);
            setLoading(false);
            // console.log("std", students)
        }
        else{
            console.log("error occured while getting student data")
        }
    }
    useEffect(() => {
        if (loading || editId == "") {
            getStudents();
        }
    }, [editId])
    async function deleteStudent(sid){
        const res = await axios.delete(`http://127.0.0.1:8000/api/delete-student/${sid}`)
        if (res.data.status === 200) {
            console.log(res.data.message);
            swal({
                title: "Deleted",
                text: "Student Deleted Successfully",
                icon: "success",
                button: "okay",
              });
            getStudents();
        } else {
            console.log("error occured while deleting")
        }
    }
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
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Email Id</th>
                            <th>Phone</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {  console.log(students)} */}
                        {loading ? (
                            <tr>
                                <td colSpan="7">Loading....</td>
                            </tr>
                        ) :
                            students.map((student) => {
                                return editId != student.id ? (
                                    <tr key={student.id}>
                                        <td style={{"width":"13vw"}}>{student.id}</td>
                                        <td style={{"width":"13vw"}}>{student.name}</td>
                                        <td style={{"width":"13vw"}}>{student.course}</td>
                                        <td style={{"width":"13vw"}}>{student.email}</td>
                                        <td style={{"width":"13vw"}}>{student.phone}</td>
                                        <td style={{"width":"13vw"}}>
                                            {/* <Link to={`edit-student/${student.id}`}><button  className='btn btn-success btn-sm' onClick={() => setEdit(student.id)}>Edit</button></Link> */}
                                            <button className='btn btn-success btn-sm' onClick={() => setEdit(student.id)}>Edit</button>
                                        </td>
                                        <td style={{"width":"13vw"}}>
                                            <button onClick={()=>deleteStudent(student.id)} className='btn btn-danger btn-sm'>Delete</button>
                                        </td>
                                    </tr>
                                ) : (
                                    <tr key={student.id}>
                                                <td style={{"width":"13vw"}}>{student.id}</td>
                                                <td style={{"width":"13vw"}}> <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control"  /></td>
                                                <td style={{"width":"13vw"}}> <input type="text" name="course" value={course} onChange={(e) => setCourse(e.target.value)} className="form-control"  /></td>
                                                <td style={{"width":"13vw"}}>  <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"  /></td>
                                                <td style={{"width":"13vw"}}> <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control"  /></td>
                                                <td style={{"width":"13vw"}}> <button onClick={editSubmitForm} type='button' className="update btn btn-sm btn-primary">Update</button></td>
                                                <td style={{"width":"13vw"}}><button type='button' onClick={() => setEdit("")} className="update btn-sm btn btn-info">Back</button></td>                                   
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Student
