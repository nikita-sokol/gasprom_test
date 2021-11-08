import React from 'react';
import classes from './ErrorBlock.module.css';
import {useDispatch} from "react-redux";

const ErrorBlock = ({action}) => {
    const dispatch = useDispatch();
    function retryRequest () {
        dispatch(action)
    }
    return (
        <div className={classes.block}>
            <div className={classes.text}>Произошла ошибка</div>
            <button className={classes.button} onClick={()=>{retryRequest()}}>Повторить запрос</button>
        </div>
    );
};

export default ErrorBlock;