import React, { useEffect, useState } from 'react';
import Square from './components/Square';
import { Link } from 'react-router-dom';


export default function MyMaterials() {
    const [student, setStudent] = useState({ name: "", surname: "", avatar: "" });

    useEffect(() => {
        document.body.style.backgroundColor = '#eeeeee'; // '#231F20';
        const studentData = JSON.parse(localStorage.getItem("student"));
        setStudent(studentData);
        // eslint-disable-next-line 
    }, [])

    const activeTaskShow = (type) => {
        return (
            <React.Fragment>
                <div style={{ paddingLeft: "8px", paddingRight: "8px" }}>
                    <Square col="4" backgroundColor="white" to="/speling"><b>SPELLING</b> </Square>
                    <Square col="4" backgroundColor="white" to="/wordbank"><b>WORDBANK</b></Square>
                    <Square col="4" backgroundColor="white" to="/dijitalcontents"><b>CONTENTS</b></Square>
                </div>
            </React.Fragment>
        )
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-5 mt-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="text-white bg-dark border border-2 border-dark p-2 mt-3 d-flex justify-content-center" style={{ width: "100%" }}><h2><b> <Link to="/student" style={{ color: "white", textDecoration: "none" }}> AXEBUG DIGITAL</Link></b></h2></div>
                        </div>
                        <div className='col-12'>
                            <div className="border border-2 border-dark p-2 mt-3 d-flex justify-content-center" style={{ width: "100%" }}><h2><b>{student.name}</b></h2></div>
                        </div>
                    </div>
                </div>
                <div className='col-7 mt-3'>
                    <div>
                        <div className="border border-2 border-dark p-2 mt-4 d-flex justify-content-center black900" style={{ width: "100%", color: "white", backgroundColor: "black" }}><h2><b>YOUR MATERIALS</b></h2></div>
                    </div><div className='row'>
                        {
                            activeTaskShow(true)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
