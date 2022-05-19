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
import AdminSchoolRoomList from "./admin/schoolroom/SchoolRoomList";
import AdminStudentList from "./admin/student/StudentList";
import AdminTeacherList from "./admin/teacher/TeacherList";
import './App.css';
import ChapterList from "./app/ChapterList";
import Exam from "./app/Exam";
import ExamList from "./app/ExamList";
import QuizList from "./app/QuizList";
import Student from "./app/StudentPanel";
import Studty from './app/Study';
import TaskList from "./app/TaskList";
import Login from "./login/login";
import EpisodeList from "./app/EpisodeList";
import WordBankList from "./app/WordBankList";
import WordBankEpisode from "./app/WordBankEpisode";
import WordBank from "./app/WordBank";
import Spelling from "./app/Spelling";
import SpellingList from "./app/SpellingList";
import SpellingEpisode from "./app/SpellingEpisode";
import Report from "./admin/report/Report";
import ReportList from "./admin/report/ReportList";
import MyTasks from "./app/MyTasks";
import DijitalContents from "./app/DijitalContents";


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
        <Route exact path="/admin/reportlist" element={<ReportList />} />
        <Route exact path="/admin/report/:id/:std" element={<Report />} />
        
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

        <Route exact path="/speling" element={<SpellingList />} />
        <Route exact path="/spellingword" element={<SpellingEpisode />} />

        <Route exact path="/app/exam/:id" element={<Exam />} />
        <Route exact path="/app/quiz/:id" element={<Exam />} />
        <Route exact path="/app/wordbank" element={<WordBank />} />
        <Route exact path="/app/spelling" element={<Spelling />} />
        <Route exact path="/mytasks" element={<MyTasks />} />
        <Route exact path="/dijitalcontents" element={<DijitalContents />} />
       

        <Route exact path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
