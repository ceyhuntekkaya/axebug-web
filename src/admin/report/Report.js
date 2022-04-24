import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useExam from "../../api/useExam"
import useStudentWork from "../../api/useStudentWork"

const scoreModel = {
  examScore: 0,
  quizScore: 0,
  skillsScore: 0,
  readScore: 0,
  writeScore: 0,
  speakingScore: 0,
  listeningScore: 0,
}
export default function Report() {

  let { id, std } = useParams();
  const [reportData, setReportData] = useExam(null);
  const [studentScore, setStudentScore] = useStudentWork(scoreModel);

  useEffect(() => {
    document.body.style.backgroundColor = 'white';
    setReportData("createReport", { studentId: std, examId: id })
    setStudentScore("studentScore", std)
    // eslint-disable-next-line 
  }, [])

  const getProgress = (score) => {

    if (score < 20)
      return (
        <div className="progress" style={{ height: "25px" }}>
          <div className="progress-bar bg-danger"
            role="progressbar" style={{ width: score + "%" }}
            aria-valuenow={score} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      )
    else if (score < 50)
      return (
        <div className="progress" style={{ height: "25px" }}>
          <div className="progress-bar bg-warning"
            role="progressbar" style={{ width: score + "%" }}
            aria-valuenow={score} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      )

    else if (score < 75)
      return (
        <div className="progress" style={{ height: "25px" }}>
          <div className="progress-bar bg-info"
            role="progressbar" style={{ width: score + "%" }}
            aria-valuenow={score} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      )

    else
      return (
        <div className="progress" style={{ height: "25px" }}>
          <div className="progress-bar bg-success"
            role="progressbar" style={{ width: score + "%" }}
            aria-valuenow={score} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      )

  }


  const getText = (skill, score) => {
    if (skill === "Reading") {
      if (score < 25) {
        return "Does not yet demonstrate the understanding of the reading skill required. Matches visuls with vocabulary given. Needs to reduce simplified reading assignments and reading materials in order to succeed.";
      }
      else if (score < 50) {
        return "Basic understanding of the reading skill. Limited pronounciation. Locates main idea poorly. Need to improve reading as well as memorising vocabulary.";
      }
      else if (score < 75) {
        return "A good understanding of the reading skill. Locates the main idea of a text and gives opinion. Keep Practising!";
      }
      else {
        return "An exact Book Worm. Keep Reading! While reading, make sure you try to pronounce the words correctly as much as you can. Well Achieved!";
      }
    }



    if (skill === "Listenig") {
      if (score < 25) {
        return "Identifies resources,yet not all of them. Figures from visuals. Matches everyday information using daily based language very poorly.  Points to basic objects named orally. Needs to practice more with a supervisor/teacher.  ";
      }
      else if (score < 50) {
        return "Categorizes content based examples and describes only the fix material given. Matches or classifies oral descriptions to real life situations in a very basic way. In order to understand listening acivities, Listen more and practice more with your peers.";
      }
      else if (score < 75) {
        return "Categorizes examples read aloud or from any other audio. Matches or classifies oral descriptions to real life situations in an intense way. Keep your practice!";
      }
      else {
        return "A well listener! Sorts oral language statements very clearly.  Understands short or long sentences or dialogues about the topic or not.  Evaluates the intent of speech. Analyzes assignments based on oral speeches.  Well Done!  ";
      }
    }



    if (skill === "Writing") {
      if (score < 25) {
        return "Produces only short answer responses. Labels picture or wordbanks based on target vocabulary. Poor grammar/vocabulary knowledge. Needs to practice more with a supervisor/teacher.";
      }
      else if (score < 50) {
        return "Produces short answer responses and makes content related lists of words and matches meanings, Chooses from multiple resource. Use wordbanks,, especially  content based vocabulary to improve writing.";
      }
      else if (score < 75) {
        return "Outlines details and ideas of texts. Completes reports from templates. Writes small sentences using correct grammar structures. Inorder to improve, expand vocabulary and practice with writing skills.";
      }
      else {
        return "Summarizes content related notes from texts . Supplies missing words or phrases correctly. Makes long and meaningful sentences using correct grammar structures. Explain with details and processes. Keep up the good work! ";
      }
    }



    if (skill === "Speaking") {
      if (score < 25) {
        return "The explanation is full of mistakes based on grammar mor structure. / Full of incorrect sentence structures. Only can answer ye/no questions and can not build word or phrases related to a specific topic. Needs to practice with dictation and activities with a supervisor/teacher.";
      }
      else if (score < 50) {
        return "There are notable mistakes about grammar and some notable incorrect sentence structures. Explains content related issues but not in the actual strcture required. Needs to listen to more audio or dialogues to practice. More known vocabulary is required.";
      }
      else if (score < 75) {
        return "There are some grammar mistakes. Generally correct sentence structures. Being engaged in conversations and debates based on a specific topic, yet uses structures informally. Used Daily language but not very clearly. Listen to expand vocabulary to engage with the correct structures.";
      }
      else {
        return "Almost no grammar mistake/correct sentence structures. Represent someones ideas or own. Answering WH questions clearly. Being engaged in conversations and debates based on a specific topic. Uses Daily language with confidence. One of the best! ";
      }
    }

  }



  return (
    <React.Fragment>

      {
        reportData ?
          <div className='container m-5'>
            <div className='row text-white bg-dark p-4'>
              <div className='col-6 text-white bg-dark d-flex justify-content-center'><h2><b>AXEBUG REPORT</b></h2></div>
              <div className='col-3 text-white bg-dark d-flex justify-content-center'><h2><b>{reportData.exam.name}</b></h2></div>
              <div className='col-3 text-white bg-dark d-flex justify-content-center'><h2><b>{reportData.student.name} {reportData.student.surname}</b></h2></div>
            </div>

            <div className='row mt-2 text-white bg-dark p-1'>
              <div className='col-12 text-white bg-dark d-flex justify-content-center'>
                <h4><b> AXEBUG 4 SKILLS TASK REPORT</b></h4>

              </div>
            </div>

            <div className='row border border-light mt-2'>
              {
                reportData.taskScore ?
                  reportData.taskScore.map((data, key) =>
                    <React.Fragment key={key}>
                      <div className='col-3'>{data.scoreFunctionText}</div>
                      <div className='col-2'>
                        {
                          getProgress(parseInt(data.score))
                        }

                      </div>
                      <div className='col-1'>{parseInt(data.score)}</div>
                    </React.Fragment>
                  )
                  : null
              }
            </div>
            <div className='row mt-2 text-white bg-dark p-1 mb-3'>
              <div className='col-12 text-white bg-dark d-flex justify-content-center'>
                <h4><b>AXEBUG 4 SKILLS EXAM & QUIZ REPORT</b></h4>
              </div>
            </div>
            {
              reportData.examScore ?
                reportData.examScore.map((data, key) =>
                  <div key={key} className='row border border-light'>
                    <div className='col-8'>{data.scoreFunctionText}</div>
                    <div className='col-3'>
                      {
                        getProgress(parseInt(data.score))
                      }
                    </div>
                    <div className='col-1'>{parseInt(data.score)}</div>
                  </div>
                )
                : null
            }
            <div className='row mt-2 text-white bg-dark p-1'>
              <div className='col-12 text-white bg-dark d-flex justify-content-center'>
                <h4><b>SUGGESTIONS</b></h4>
              </div>
            </div>


            <div className='row border border-light mt-2'>
              <div className='col-2'><h4><b>Reading : {parseInt(studentScore.readScore)}</b></h4></div>
              <div className='col-10'>{getText('Reading', parseInt(studentScore.readScore))}
              </div>
            </div>
            <div className='row border border-light'>
              <div className='col-2'><h4><b>Listenig : {parseInt(studentScore.listeningScore)}</b></h4></div>
              <div className='col-10'>{getText('Listenig', parseInt(studentScore.listeningScore))}
              </div>
            </div>
            <div className='row border border-light'>
              <div className='col-2'><h4><b>Writing : {parseInt(studentScore.writeScore)}</b></h4></div>
              <div className='col-10'>{getText('Writing', parseInt(studentScore.writeScore))}
              </div>
            </div>
            <div className='row border border-light'>
              <div className='col-2'><h4><b>Speaking : {parseInt(studentScore.speakingScore)}</b></h4></div>
              <div className='col-10'>{getText('Speaking', parseInt(studentScore.speakingScore))}
              </div>
            </div>




          </div>
          : null

      }




    </React.Fragment>
  )
}
