import * as React from 'react';

import LactecLogo from '../../assets/lactec.png'

import './style.css'
import { Link } from 'react-router-dom';

function Lactec() {
    return (
        <div className="lactec">
            <div className='lactecLogo'>
                <img src={LactecLogo} />
            </div>
            <div className="content">
                <video 
                    width="90%"
                    height="auto"
                    src='http://10.146.42.12:3000/Lactec/LACTEC_Institucional.mp4'
                    title="Youtube Player"
                    frameborder="0"
                    allowFullScreen
                />
            </div>
        </div>
    )
}

export default Lactec;