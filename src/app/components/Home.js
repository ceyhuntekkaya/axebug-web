import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
    return <div className="container">
        <div className="text-white bg-dark border border-2 border-dark p-2 mt-5 d-flex justify-content-center" style={{ width: 350 }}><h2><b>

            <Link className='homeLinkBlack' style={{ textDecoration: "none" }} to="/student">AXEBUG DIGITAL</Link></b></h2></div>
        {
            props.secondaryLink ?
                <div className="border border-2 border-dark p-2 mt-2 d-flex justify-content-center" style={{ width: 350 }}>
                    <h2><b>
                        <Link className='homeLinkWhite' to={props.secondaryLink}>{props.secondaryName}</Link>

                    </b></h2></div>
                :
                <div className="border border-2 border-dark p-2 mt-2 d-flex justify-content-center" style={{ width: 350 }}><h2><b>{props.secondaryName}</b></h2></div>
        }

    </div>;
}
