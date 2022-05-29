import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Square(props) {
    const [colSize,] = useState(props.col);
    const [backgroundColor, setbackgroundColor] = useState("red");
    const [border, setBorder] = useState("border-dark");
    const [textColor, setTextColor] = useState("text-dark");
    const [hasEvent, setHasEvent] = useState(null);
    const navigate = useNavigate();
    const [fontsize, setFontSize] = useState(22);
    const [blank, setBlank] = useState(false);

    useEffect(() => {
        if (props.backgroundColor) {
            setbackgroundColor(props.backgroundColor);
            if (props.backgroundColor === "black") {
                setTextColor("text-white");
                setBorder("border-dark")
            }
            else if (props.backgroundColor === "white") {
                setTextColor("text-dark");
                setBorder("border-dark")
            }
        }
        if (props.to) {
            setHasEvent(props.to);
        }

        if (props.blank) {
            setBlank(props.blank);
        }
        else {
            setBlank(false);
        }

        if (props.fontSize) {
            setFontSize(props.fontSize);
        }
    }, [])

    const goLink = (link) => {
        navigate(link);
    }

    return (
        <div className={`square col-${colSize}  d-flex justify-content-center`} onClick={() => props.to ? goLink(props.to) : null}>
            <img src="http://dummyimage.com/50x50/000/fff.gif&text=50x50" className="sq-setter-w" alt='window' />
            <div className={`sq-content m-1 row border border-4 ${border}`} style={{ backgroundColor: backgroundColor }} onClick={() => props.to ? goLink(props.to) : null}>
                {
                    hasEvent ?

                        blank ?
                            <a target="_blank" href={hasEvent} className={`sq-content p-3 d-flex justify-content-center align-items-center ${textColor}`}
                                style={{ fontSize: fontsize, textDecoration: 'none' }}> {props.children}</a>
                            :
                            <Link to={hasEvent} className={`sq-content p-3 d-flex justify-content-center align-items-center ${textColor}`}
                                style={{ fontSize: fontsize, textDecoration: 'none' }}> {props.children}</Link>

                        :
                        <div to="/" className={`sq-content p-3 d-flex justify-content-center align-items-center ${textColor}`} style={{ fontSize: 22 }}> {props.children}</div>
                }
            </div></div>)
}
