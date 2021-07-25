import React from 'react';
import './Bulb.css';
import classNames from 'classnames';

function Bulb(props) {
    return <div className={classNames('bulb', { 'active': props.isActive })}>
        {props.isActive ? <p>Не трать энергию!</p> : <p>Включи меня</p>}
    </div>
}

export default Bulb;