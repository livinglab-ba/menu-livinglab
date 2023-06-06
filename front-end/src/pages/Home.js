import { HexGrid, Layout, Path, Hexagon, Text, Pattern, Hex } from 'react-hexgrid';
import { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';


import {api} from '../axios'
import "../hex.css"

function Home() {
  const navigate = useNavigate()

  const hexagonSize = { x: 14, y: 14 };
  
  const handleLivinglab = useCallback(async () => {
    const response = await api.get('/livinglab')

    navigate("/")
}, [])

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

  console.log('passou pela api: /chargback');
  navigate("/chargeback")
}, [])

const handleGeneralenergy = useCallback(async () => {
  const response = await api.get('/generalenergy')

  console.log('passou pela api: /generalenergy');
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
                        
  return (
    <div className='App'>
      <HexGrid style={{width: '100%', height: '100%'}} viewBox="-50 -50 100 100">
          {/* Main grid with bit hexagons, all manual */}
          <Layout size={hexagonSize} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
            <Hexagon className='btn' q={0} r={0} s={0} fill="pat-1" onClick={handleLivinglab} />
            {/* Using pattern (defined below) to fill the hexagon */}
            <Hexagon className='btn' q={0} r={-1} s={1} fill="chargeback" onClick={handleChargeback}/>
            <Hexagon q={0} r={1} s={-1} fill="adn" onClick={handleAdntech} />
            <Hexagon q={1} r={-1} s={0} fill="giusoft" onClick={handleGiusoft} />
            <Hexagon q={1} r={0} s={-1} fill="generalenergy" onClick={handleGeneralenergy} />
            <Hexagon className='btn' q={-1} r={1} s={0} fill="hive" onClick={handleHive} />
            <Hexagon q={-1} r={0} s={1} fill="lactec" onClick={handleLactec} />
            <Hexagon q={-2} r={0} s={1} />
          </Layout>
          {/* You can define multiple patterns and switch between them with "fill" prop on Hexagon */}
          <Pattern id="pat-1" link="https://parquetecnologico-ba.org.br/wp-content/uploads/2021/09/marca-parque-e1632066716450.png" size={{x: 13, y: 12 }} />
          <Pattern id="hive" link="https://hivecomputervision.com.br/assets/img/Hive_Logo_clara.png" size={{x: 14, y: 12}} />
          <Pattern id="adn" link="https://adn.com.br/wp-content/uploads/2020/10/logofundobranco-300x83.png" size={{x: 12.5, y: 12}} />
          <Pattern id="giusoft" link="https://www.giusoft.com.br/gadmin/site/images/brand-white.png" size={{x: 13, y: 12}} />
          <Pattern id="generalenergy" link="https://general-energy.com.br/wp-content/uploads/2020/09/logo.png" size={{x: 14, y: 12}} />
          <Pattern id="lactec" link="https://lactec.com.br/wp-content/uploads/2021/04/logo.svg" size={{x: 12, y: 12}} />
          <Pattern id="chargeback" link="http://localhost:3000/chargeback.png" size={{x: 14, y: 12}} />
          <Pattern id="pat-3" link="http://localhost:3000/logo192.png" size={{x: 12, y: 12}} />
          
          
        </HexGrid>
    </div>
  );
}

export default Home;
