import React from "react";
import { useSelector } from "react-redux";
import './Display.css';

const Display = () => {
    const message = useSelector((state) => state.myReducer.message);
    const color = useSelector((state) => state.myReducer.displayColor);

    return (
        <div className="Display-box">
            <div className="result-row">
                <p className={`display-text ${color}`}>
                    {message.includes('*') ?
                        ('* '.repeat(message.length)).slice(0, -1) : message}
                </p>
            </div>
        </div>
    );
};

export default Display;