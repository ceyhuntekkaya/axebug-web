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
import MyReports from "./app/MyReports";
import MyMaterials from "./app/MyMaterials";
import Goals from "./app/Goals";
import Schedule from "./admin/Schedule";
import Teacher from "./teacher/Teacher";
import TeacherContents from "./teacher/TeacherContents";
import TeacherClassrooms from "./teacher/TeacherClassrooms"
import TeacherReports from "./teacher/TeacherReports"
import Teach from "./teacher/Teach"
import TeacherTask from "./teacher/TeacherTask";
import TeacherExam from "./teacher/TeacherExam";
import TeacherStudents from "./teacher/TeacherStudents";
import TeacherScore from "./teacher/TeacherScore";
import Download from "./teacher/Download";
import TeacherSpellingList from "./teacher/page/TeacherSpellingList";
import TeacherSpellingEpisode from "./teacher/page/TeacherSpellingEpisode"
import TeacherSpelling from "./teacher/page/TeacherSpelling";

import TeacherWordBankList from "./teacher/page/TeacherWordBankList";
import TeacherWordBankEpisode from "./teacher/page/TeacherWordBankEpisode"
import TeacherWordBank from "./teacher/page/TeacherWordBank";

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
        <Route exact path="/admin/schedule" element={<Schedule />} />
        
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/study" element={<Studty />} />
        <Route exact path="/student" element={<Student />} />
        <Route exact path="/exam" element={<ExamList />} />
        <Route exact path="/quiz" element={<QuizList />} />
        <Route exact path="/task" element={<TaskList />} />

        <Route exact path="/teacher/teach/:id" element={<Teach />} />
        <Route exact path="/teacher-classes" element={<TeacherClassrooms />} />
        <Route exact path="/teacher-students/:id" element={<TeacherStudents />} />
        <Route exact path="/teacher-student-score/:id" element={<TeacherScore />} />
        <Route exact path="/teacher-tasks/:id" element={<TeacherTask />} />
        <Route exact path="/teacher-exam/:id" element={<TeacherExam />} />
        <Route exact path="/teacher-contents/:id" element={<TeacherContents />} />
        <Route exact path="/teacher-contents" element={<TeacherContents />} />
        <Route exact path="/teacher-reports" element={<TeacherReports />} />

        
        <Route exact path="/teacher-spelling-list" element={<TeacherSpellingList />} />
        <Route exact path="/teacher-spellingword" element={<TeacherSpellingEpisode />} />
        <Route exact path="/teacher-spelling" element={<TeacherSpelling />} />


        <Route exact path="/teacher-wordbank-list" element={<TeacherWordBankList />} />
        <Route exact path="/teacher-wordbankword" element={<TeacherWordBankEpisode />} />
        <Route exact path="/teacher-wordbank" element={<TeacherWordBank />} />


        <Route exact path="/teacher" element={<Teacher />} />
        <Route exact path="/download" element={<Download />} />
        
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
        <Route exact path="/myReports" element={<MyReports />} />
        <Route exact path="/myMaterials" element={<MyMaterials />} />
        <Route exact path="/goals" element={<Goals />} />
        
       

        <Route exact path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
