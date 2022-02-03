import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Admin from './admin/admin';
import AdminAssignment from "./admin/component/Assignment";
import AdminEpisodeList from "./admin/component/EpisodeList";
import AdminHomework from "./admin/component/Homework";
import AdminSchoolRoomList from "./admin/component/SchoolRoomList";
import AdminStudentList from "./admin/component/StudentList";
import AdminTeacherList from "./admin/component/TeacherList";
import './App.css';
import ChapterList from "./app/ChapterList";
import Exam from "./app/Exam";
import ExamList from "./app/ExamList";
import QuizList from "./app/QuizList";
import Student from "./app/Student";
import Studty from './app/Study';
import TaskList from "./app/TaskList";
import Login from "./login/login";
import EpisodeList from "./app/EpisodeList";
import WordBankList from "./app/WordBankList";
import WordBankEpisode from "./app/WordBankEpisode";
import WordBank from "./app/WordBank";


// <Route path="*" element={<NotFound/>}/>





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/admin/student" element={<AdminStudentList />} />
        <Route exact path="/admin/schoolroom" element={<AdminSchoolRoomList />} />
        <Route exact path="/admin/episode" element={<AdminEpisodeList />} />
        <Route exact path="/admin/assignment" element={<AdminAssignment />} />
        <Route exact path="/admin/homework" element={<AdminHomework />} />
        <Route exact path="/admin/teacher" element={<AdminTeacherList />} />
        
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/study" element={<Studty />} />
        <Route exact path="/student" element={<Student />} />
        <Route exact path="/exam" element={<ExamList />} />
        <Route exact path="/quiz" element={<QuizList />} />
        <Route exact path="/task" element={<TaskList />} />
        
        <Route exact path="/chapter" element={<ChapterList />} />
        <Route exact path="/episode" element={<EpisodeList />} />
        <Route exact path="/wordbank" element={<WordBankList />} />
        <Route exact path="/words" element={<WordBankEpisode />} />

        <Route exact path="/app/exam" element={<Exam />} />
        <Route exact path="/app/wordbank" element={<WordBank />} />


        <Route exact path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
