import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import useLogin from "../api/useLogin"

export default function Login(props) {
    const [login, setLogin] = useLogin(null);
    const [username, setUsername] = useState("student");
    const [password, setPassword] = useState("student");
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.backgroundColor = 'black'; // '#231F20';
    }, [])

    const loginEvent = (e) => {
        setLogin({ username: username, password: password });
    }

    useEffect(() => {
        if (login != null) {
            if (login.error === null) {
                if (login.userType === "STUDENT") {
                    localStorage.setItem("student", JSON.stringify(login.student))
                    navigate(`/student`);
                }
                else if (login.userType === "TEACHER") {
                    navigate(`/teacher`);
                    localStorage.setItem("teacher", JSON.stringify(login.teacher))
                }
                else if (login.userType === "SCHOOL") {
                    navigate(`/admin`);
                    localStorage.setItem("school", JSON.stringify(login.school))
                }
                else if (login.userType === "SYSTEM_ADMIN") {
                    navigate(`/system`);
                    localStorage.setItem("system_admin", JSON.stringify(login.systemAdmin))
                }
                else {
                    console.log("USER NOT FOUND")
                }
            }
            else {
                console.log("ERROR",login)
            }
        }
    }, [login])


    return <React.Fragment>
        <div className="container" style={{ marginTop: 200 }}>
            <div className="row mt-5">
                <div className="col"> <img src="assets/loginScreen.png" style={{ width: "100%" }} alt="logo" /></div>
                <div className="col-auto" style={{ width: 500 }}>
                    <div className="p-5" style={{ backgroundColor: 'lightgray' }}>
                        <div>
                            <div className="text-white bg-dark p-2 border border-2 border-white d-flex justify-content-center"><h2><b>AXEBUG DIGITAL</b></h2></div>
                            <form>
                                <div className="form-group mb-3 mt-4">
                                    <label htmlFor="username" className="col-form-label"><h4><b>Username</b></h4></label>
                                    <input style={{ fontWeight: "bold", fontSize: 20 }}
                                        type="text" className="form-control border border-3 border-dark"
                                        id="username" placeholder="Enter your username"
                                        value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="col-form-label"><h4><b>Password</b></h4></label>
                                    <input style={{ fontWeight: "bold", fontSize: 20 }}
                                        type="password" className="form-control border border-3 border-dark"
                                        id="password" placeholder="Enter your password"
                                        value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </form>
                        </div>
                        <div className="mt-4">
                            <button onClick={loginEvent} className="btn btn-dark border border-2 border-white"><h4><b>Start Adventure</b></h4></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </React.Fragment>
}
