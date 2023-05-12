import * as React from 'react';

import LactecLogo from '../../assets/lactec.svg'

import './style.css'

function Lactec() {
    return (
        <div className='logo'>
            <img src={LactecLogo} />
        </div>
    )
}

export default Lactec;