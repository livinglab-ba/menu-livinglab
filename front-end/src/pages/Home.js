import { useCallback } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import "../global.css"
import {api} from '../axios'

import LivingLab from '../assets/livinglab.png'
import GovBa from '../assets/logoGovBa.png'
import Hive from '../assets/hive.png'
import Adn from '../assets/adn-tech.png'
import GeneralEnergy from '../assets/general-energy.png'
import Giusoft from '../assets/giusoft.png'
import Lactec from '../assets/lactec.svg'
import ChargeBack from '../assets/chargeback.png'
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate()

    const handleHive = useCallback(async () => {
        const response = await api.get('/hive')
    
        navigate("/hive")
    }, [])

    const handleLactec = useCallback(async () => {
        const response = await api.get('/lactec1')
    
        navigate("/lactec")
    }, [])

    const handleChargeback = useCallback(async () => {
        const response = await api.get('/chargeback')
    
        navigate("/chargeback")
    }, [])

    const handleGeneralenergy = useCallback(async () => {
        const response = await api.get('/generalenergy')
    
        navigate("/generalenergy")
    }, [])

    const handleAdntech = useCallback(async () => {
        const response = await api.get('/adntech')
    
        navigate("/adn")
    }, [])

    const handleGiusoft = useCallback(async () => {
        const response = await api.get('/giusoft')
    
        navigate("/giusoft")
    }, [])

    const handleLivinglab = useCallback(async () => {
        const response = await api.get('/livinglab')
    
        navigate("/")
    }, [])
    
                        
  return (
    <div className='App'>
      <header>
        <img className="logoLL" src={LivingLab} />
        <h1>ESPAÇO INOVAR - LIVING LAB</h1>
      </header>
      <Stack direction="row" spacing={2}>
        <Button onClick={handleHive}><img src={Hive} /></Button>
        <Button onClick={handleAdntech}><img src={Adn} /></Button>
        <Button onClick={handleGeneralenergy}><img src={GeneralEnergy} /></Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button onClick={handleGiusoft}><img src={Giusoft} /></Button>
        <Button onClick={handleLactec}><img src={Lactec} /></Button>
        <Button onClick={handleChargeback}><img src={ChargeBack} /></Button>
      </Stack>
    </div>
  );
}

export default Home;
