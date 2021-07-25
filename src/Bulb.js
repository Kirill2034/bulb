import React from 'react';
import './Bulb.css';
const classNames = require('classnames');

function Bulb(props) {
    // const classes = ['bulb']

    // if(props.isActive) {
    //     classes.push('active')
    // }

    return <div className={classNames('bulb', { 'active': props.isActive })}>
        {props.isActive ? <p>Не трать энергию!</p> : <p>Включи меня</p>}
    </div>
}

export default Bulb;