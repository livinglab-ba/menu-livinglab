import * as React from 'react';

import ChargeBackLogo from '../../assets/chargeback.png'

import './style.css'

function ChargeBack() {
    return (
        <div className='logo'>
            <img src={ChargeBackLogo} width={'25%'} height={'50%'} />
        </div>
    )
}

export default ChargeBack;