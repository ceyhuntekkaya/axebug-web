import React from "react"
import {
  BrowserRouter,
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
import Exam from "./app/Exam";
import ExamList from "./app/ExamList";
import QuizList from "./app/QuizList";
import Student from "./app/Student";
import Studty from './app/Study';
import TaskList from "./app/TaskList";
import Login from "./login/login";


// <Route path="*" element={<NotFound/>}/>





function App() {
  return (
    <BrowserRouter>
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
        <Route exact path="/exam" element={<ExamList />} />
        <Route exact path="/quiz" element={<QuizList />} />
        <Route exact path="/task" element={<TaskList />} />
        <Route exact path="/app/exam" element={<Exam />} />


        <Route exact path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
