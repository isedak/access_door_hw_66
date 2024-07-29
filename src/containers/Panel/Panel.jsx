import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Display from "../../components/Display/Display";
import './Panel.css';

const Panel = () => {
    const code = useSelector((state) => state.myReducer.accessCode);
    const message = useSelector((state) => state.myReducer.message);

    const dispatch = useDispatch();

    const addNumber = (input) => {
        if (code === '' || code.length < 4) {
            dispatch({ type: 'SET_ACCESSCODE', value: `${code}${input}` });
        };
    };

    const deleteNumber = () => {
        if (message === 'Access Granted' || message === 'Access Denied') {
            dispatch({ type: 'CLEAR' });
        };
        if (code !== '') {
            dispatch({ type: 'SET_ACCESSCODE', value: `${code.substr(0, code.length - 1)}` })
        };
    };

    const checkCode = () => {
        dispatch({ type: 'SET_MESSAGE' });
    };

    const rednerButtons = () => {
        let array = [];
        for (let i = 1; i < 10; i++) {
            array.push(<Button key={`${i}-b`} click={() => addNumber(`${i}`)}
                label={`${i}`} />)
        };
        return array
    };

    return (
        <div className={"Panel-background"}>
            <div className="Panel-box">
                <Display />
                <div className="Buttons-box">
                    {rednerButtons()}
                    <Button click={() => deleteNumber()}
                        label={'<'} />
                    <Button click={() => addNumber('0')}
                        label={'0'} />
                    <Button click={() => checkCode()}
                        label={'E'} />
                </div>
            </div>
        </div>
    );
};

export default Panel;