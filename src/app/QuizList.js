import React from 'react';
import Square from './components/Square';

export default function QuizList() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="text-white bg-dark border border-2 border-dark p-2 mt-5 d-flex justify-content-center" style={{ width: 350 }}><h2><b>
        <Link to="/student" style={{ color:"white", textDecoration:"none" }}> AXEBUG DIGITAL</Link>
          </b></h2></div>
        <div className="border border-2 border-dark p-2 mt-2 d-flex justify-content-center" style={{ width: 350 }}><h2><b>QUIZS</b></h2></div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className='row' style={{ width: 750 }}>
          <Square col="2" backgroundColor="white"><h2><b>QUIZ</b><br /><b>01</b></h2> </Square>
          <Square col="2" backgroundColor="white"><h2><b>QUIZ</b><br /><b>02</b></h2> </Square>
          <Square col="2" backgroundColor="white"><h2><b>QUIZ</b><br /><b>03</b></h2> </Square>
          <Square col="2" backgroundColor="white"><h2><b>QUIZ</b><br /><b>04</b></h2> </Square>

          <Square col="2" backgroundColor="white"><h2><b>QUIZ</b><br /><b>05</b></h2> </Square>
          <Square col="2" backgroundColor="white"><h2><b>QUIZ</b><br /><b>06</b></h2> </Square>
          <Square col="2" backgroundColor="white"><h2><b>QUIZ</b><br /><b>07</b></h2> </Square>
          <Square col="2" backgroundColor="white"><h2><b>QUIZ</b><br /><b>08</b></h2> </Square>

          <Square col="2" backgroundColor="white"><h2><b>QUIZ</b><br /><b>09</b></h2> </Square>
          <Square col="2" backgroundColor="white"><h2><b>QUIZ</b><br /><b>10</b></h2> </Square>
          <Square col="2" backgroundColor="white"><h2><b>QUIZ</b><br /><b>11</b></h2> </Square>
          <Square col="2" backgroundColor="white"><h2><b>QUIZ</b><br /><b>12</b></h2> </Square>

          <Square col="2" backgroundColor="white"><h2><b>QUIZ</b><br /><b>13</b></h2> </Square>
          <Square col="2" backgroundColor="white"><h2><b>QUIZ</b><br /><b>14</b></h2> </Square>
          <Square col="2" backgroundColor="white"><h2><b>QUIZ</b><br /><b>15</b></h2> </Square>
          <Square col="2" backgroundColor="white"><h2><b>QUIZ</b><br /><b>16</b></h2> </Square>
        </div>
      </div>
    </React.Fragment>
  );
}
