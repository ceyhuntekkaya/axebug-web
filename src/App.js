import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Admin from './admin/admin';
import Assignment from "./admin/component/Assignment";
import EpisodeList from "./admin/component/EpisodeList";
import Homework from "./admin/component/Homework";
import SchoolRoomList from "./admin/component/SchoolRoomList";
import StudentList from "./admin/component/StudentList";
import TeacherList from "./admin/component/TeacherList";
import './App.css';
import Student from "./app/student";
import Studty from './app/studty';
import Login from "./login/login";


// <Route path="*" element={<NotFound/>}/>





function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/admin/student" element={<StudentList />} />
        <Route exact path="/admin/schoolroom" element={<SchoolRoomList />} />
        <Route exact path="/admin/episode" element={<EpisodeList />} />
        <Route exact path="/admin/assignment" element={<Assignment />} />
        <Route exact path="/admin/homework" element={<Homework />} />
        <Route exact path="/admin/teacher" element={<TeacherList />} />
        
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/study" element={<Studty />} />
        <Route exact path="/student" element={<Student />} />
        
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
