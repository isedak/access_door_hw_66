import React from "react";
import './Button.css';

const Button = (props) => {
    return (
        <button
            className={"Button"}
            onClick={props.click !== undefined ? props.click : null}>
            {props.label}
        </button>
    );
};

export default Button;