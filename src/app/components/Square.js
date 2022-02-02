import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Square(props) {
    const [colSize, ] = useState(props.col);
    const [backgroundColor, setbackgroundColor ] = useState("red");
    const [border, setBorder] = useState("border-dark");
    const [textColor, setTextColor] = useState("text-dark");
    const [hasEvent, setHasEvent] = useState(null);

    useEffect(() => {
        if (props.backgroundColor){
            setbackgroundColor(props.backgroundColor);
            if(props.backgroundColor=== "black"){
                setTextColor("text-white");
                setBorder("border-dark")
            }
            else if(props.backgroundColor=== "white"){
                setTextColor("text-dark");
                setBorder("border-dark")
            }
        }
        if (props.onClick){
            setHasEvent(props.onClick);
        }
    }, [])

    return (
        <div className={`square m-2 col-${colSize} border border-4 ${border}`} style={{ backgroundColor: backgroundColor }} onClick={props.onClick ? props.onClick : null }>
            <img src="http://dummyimage.com/50x50/000/fff.gif&text=50x50" className="sq-setter-w" />
            {
                hasEvent ?
                <Link to={hasEvent} className={`sq-content p-3 d-flex justify-content-center align-items-center ${textColor}`} style={{fontSize: 22}}> {props.children}</Link>
                :
                <div to="/" className={`sq-content p-3 d-flex justify-content-center align-items-center ${textColor}`} style={{fontSize: 22}}> {props.children}</div>
            }
        </div>)
}


{/* <div className="square" style={{ width: 200, backgroundColor: "black" }}>
<img src="http://dummyimage.com/50x50/000/fff.gif&text=50x50" className="sq-setter-w" />
<div className="sq-content">Here is content</div>
</div>
<div className="square" style={{ height: 100, backgroundColor: "black" }}>
<img src="http://dummyimage.com/50x50/000/fff.gif&text=50x50" className="sq-setter-h" />
<div className="sq-content">Here is content</div>
</div>
<div className="extrawrapper">
<div className="square" style={{ width: 200, backgroundColor: "black" }}>
    <img src="http://dummyimage.com/50x50/000/fff.gif&text=50x50" className="sq-setter-w" />
    <div className="sq-content">Here is content</div>
</div>
</div>
<div className="extrawrapper">
<div className="square" style={{ height: 100, backgroundColor: "black" }}>
    <img src="http://dummyimage.com/50x50/000/fff.gif&text=50x50" className="sq-setter-h" />
    <div className="sq-content">Here is content</div>
</div>
</div> */}