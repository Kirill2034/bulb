import React from 'react';
import './Bulb.css'

function Bulb(props) {
    const classes = ['bulb']

    if(props.isActive) {
        classes.push('active')
    }

    return <div className={classes.join(' ')}>
        {props.isActive ? <p>Не трать энергию!</p> : <p>Включи меня</p>}
    </div>
}

export default Bulb;