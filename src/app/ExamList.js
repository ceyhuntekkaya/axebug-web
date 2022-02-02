import React from 'react';
import Square from './components/Square';


export default function ExamList() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="text-white bg-dark border border-2 border-dark p-2 mt-5 d-flex justify-content-center" style={{ width: 350 }}><h2><b>AXEBUG DIGITAL</b></h2></div>
                <div className="border border-2 border-dark p-2 mt-2 d-flex justify-content-center" style={{ width: 350 }}><h2><b>EXAMS</b></h2></div>
            </div>
            <div className="d-flex justify-content-center mt-5">

                <div className='row' style={{ width: 750 }}>
                    <Square col="3" backgroundColor="white"><h1><b>EXAM</b><br /><b>01</b></h1> </Square>
                    <Square col="3" backgroundColor="white"><h1><b>EXAM</b><br /><b>02</b></h1> </Square>
                    <Square col="3" backgroundColor="white"><h1><b>EXAM</b><br /><b>03</b></h1> </Square>
                    <Square col="3" backgroundColor="white"><h1><b>EXAM</b><br /><b>04</b></h1> </Square>
                </div>
            </div>
        </React.Fragment>
    );
}
