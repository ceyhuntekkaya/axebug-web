import React from 'react';
import { Link } from 'react-router-dom';
import Square from './components/Square';

export default function Student() {

  const onClick =()=>{
    alert("tiklandi")
  }
  return (
    <React.Fragment>
      <div className="container">
        <div className="text-white bg-dark border border-2 border-dark p-2 mt-5 d-flex justify-content-center" style={{width:350}}><h2><b>AXEBUG DIGITAL</b></h2></div>
        <div className="border border-2 border-dark p-2 mt-2 d-flex justify-content-center" style={{width:350}}><h2><b>STUDENT SECTION</b></h2></div>
      </div>
      <div className="d-flex justify-content-center">
      
      <div style={{ width: 750 }}>
        <div className="row m-5">
          <div className="col-4 m-auto">
            <Square col="12" backgroundColor="black">
              <h3><b>MISSIONS</b></h3>
            </Square>
            <Square col="12" backgroundColor="white" onClick="/study">
            <h3><b>EXAM</b></h3>
            </Square>
            <Square col="12" backgroundColor="white">
            <h3><b>QUIZ</b></h3>
            </Square>
            <Square col="12" backgroundColor="white">
            <h3><b>AXE4SKILS</b></h3>
            </Square>
          </div>
          <div className="col-4">
            <Square col="12" backgroundColor="black">
            <h3><b>MATERIALS</b></h3>
            </Square>
            <Square col="12" backgroundColor="white">
            <h3><b>WORDBANK</b></h3>
            </Square>
            <Square col="12" backgroundColor="white">
            <h3><b>SPELLING</b></h3>
            </Square>
          </div>
          <div className="col-4">
            <Square col="12" backgroundColor="black">
            <h3><b>SCORBOARD</b></h3>
            </Square>
            <Square col="12" backgroundColor="white">
            <h3><b>REPORT</b></h3>
            </Square>
          </div>
        </div>
      </div>
    </div>
      <div className="container">
        <div className="row pt-4">
          <h3>AXE BUG COMICS</h3>
        </div>
        <div className="row mt-4">
          <div className="card">
            <div className="card-title">
              <div className="pl-3 pt-3"><h5>My Homeworks</h5></div></div>
            <div className="card-body">
              <table className="table table-hover">
                <tr>
                  <th>Capture</th>
                  <th>Epispde</th>
                  <th>Section</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th></th>
                </tr>
                <tr>
                  <td>1. AXEBUG IN SPACE</td>
                  <td>1. MAKE A BUG</td>
                  <td>1. SECTION - AXEBUG COMING</td>
                  <td>1.1.2022</td>
                  <td>3.1.2022</td>
                  <td><Link className="btn btn-warning m-2" to="/study">START STUDY</Link></td>
                </tr>
                <tr>
                  <td>1. AXEBUG IN SPACE</td>
                  <td>1. MAKE A BUG</td>
                  <td>2. SECTION - AXEBUG SPEAKING</td>
                  <td>1.1.2022</td>
                  <td>3.1.2022</td>
                  <td><Link className="btn btn-warning m-2" to="/study">START STUDY</Link></td>
                </tr>
                <tr>
                  <td>1. AXEBUG IN SPACE</td>
                  <td>1. MAKE A BUG</td>
                  <td>3. SECTION - AXEBUG FLYING</td>
                  <td>1.1.2022</td>
                  <td>3.1.2022</td>
                  <td><Link className="btn btn-warning m-2" to="/study">START STUDY</Link></td>
                </tr>
              </table>

            </div>
          </div>


        </div>
      </div>
    </React.Fragment>
  );
}
