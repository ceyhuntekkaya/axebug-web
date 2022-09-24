import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import useStudent from '../api/useStudent'

export default function TeacherStudents() {
    const [studentList, setStudentList] = useStudent([]);
    let { id } = useParams();

    useEffect(() => {
        setStudentList("findBySchoolRoomStudent", id);
        // eslint-disable-next-line 
    }, [])

    console.log()

  return (
    <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className="text-white bg-dark border border-2 border-dark p-2 mt-3 d-flex justify-content-center" style={{ width: "100%" }}><h2><b> <Link to="/teacher" style={{ color: "white", textDecoration: "none" }}> AXEBUG DIGITAL</Link></b></h2></div>
          </div>
           <div className='col-12'>
            <div className="border border-2 border-dark p-2 mt-3 d-flex justify-content-center" style={{ width: "100%" }}><h2><b>STUDENT LIST</b></h2></div>
          </div> 
          <div className='col-12'>

          <table className='table table-striped'>
          <tr>
            <th scope="col">NO</th>
            <th scope="col">STUDENT</th>
            <th scope="col"> </th>
          </tr>

          {
            studentList ?
            studentList.length > 0 ?
            studentList.map((student, key) =>
                  <tr key={key} className="p-2">
                    <td className="p-2">{key+1}</td>
                    <td className="p-2">{student.name}</td>
                    <td className="p-2"><Link to={`/teacher-student-score/${student.id}`} className='btn btn-info'>SCORES</Link></td>
                  </tr>
                )
                : null
              : null
          }

        </table>
          


          </div>

    
    </div>
  </div>
  )
}
