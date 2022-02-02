import React from 'react';
import { Link } from 'react-router-dom';

export default function Student() {
  return (
    <React.Fragment>
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
