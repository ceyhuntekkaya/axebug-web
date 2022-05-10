import React from 'react'
import { Link } from 'react-router-dom'

export default function FinishExam() {
  return (
    <div className='container'>
    <div className='row'>
      <div className='col'>
        <div className='row'>
          <div className='col'>
            <div className="text-white bg-dark border border-2 border-dark p-2 mt-4 d-flex justify-content-center" style={{ width: "100%" }}><h2><b> <Link to="/student" style={{ color:"white", textDecoration:"none" }}> AXEBUG DIGITAL</Link></b></h2></div>
            <div className="border border-2 border-dark p-2 mt-2 d-flex justify-content-center" style={{ width: "100%" }}><h2><b>Successfully completed.</b></h2></div>
          </div>
          <div className='col-auto'>
          </div>
        </div>
      </div>
      <div className='col'>
        <div>
          <div className="border border-2 border-dark p-2 mt-4 d-flex justify-content-center black900" style={{ width: "100%", color: "white", backgroundColor: "black" }}><h2><b>REPORT</b></h2></div>
        </div><div className='row'>
        </div>
      </div>
    </div>
  </div>
  )
}
