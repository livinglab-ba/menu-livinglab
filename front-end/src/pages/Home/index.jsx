import { HexGrid, Layout, Path, Hexagon, Text, Pattern, Hex } from 'react-hexgrid';
import { useCallback } from 'react';

import { useNavigate, redirect } from 'react-router-dom';


import {api} from '../../axios'
import "../../hex.css"
import "./style.css"

function Home() {
  const navigate = useNavigate()

  const address = 'http://10.146.42.12:3000'

  const hexagonSize = { x: 16, y: 16 };
  
  const handleLivinglab = async () => {
    await api.get('/livinglab');
  };

  const handleHive = () => {
    api.get('/hive')
        .then(() => navigate("/hive"))
        .catch(error => {
            console.log("Erro ao navegar para página /hive");
        });
};

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
    <>
      <div className='App'>

        <HexGrid style={{width: '100%', height: '100%', marginTop: '10%'}} viewBox="-50 -50 100 100">
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
            <Pattern id="pat-1" link={`${address}/livinglab.png`} size={{x: 14, y: 14 }} />
            <Pattern id="hive" link={`${address}/Hive/Hive_Claro.png`} size={{x: 14, y: 14 }} />
            <Pattern id="adn" link={`${address}/ADNtech/ADNtech.png`} size={{x: 14, y: 14 }} />
            <Pattern id="giusoft" link={`${address}/Giusoft/giusoft.png`} size={{x: 14, y: 14 }} />
            <Pattern id="generalenergy" link={`${address}/GeneralEnergy/logo_big.png`} size={{x: 14, y: 12 }} />
            <Pattern id="lactec" link={`${address}/Lactec/lactec.png`} size={{x: 14, y: 14 }} />
            <Pattern id="chargeback" link={`${address}/Chargeback/CHARGEBACK.png`} size={{x: 16, y: 14 }} />
            <Pattern id="pat-3" link={`${address}/logo192.png`} size={{x: 12, y: 12 }} />
        </HexGrid>

        <div className='inst'>
          <img src={`${address}/livinglab.png`} style={{ width: "8%", height: "8%" }}/>
          <img src={`${address}/AEPTECBA.png`} style={{ width: "6%", height: "6%" }}/>
          <img src={`${address}/Secti.png`} style={{ width: "8%", height: "8%" }}/>
        </div>

      </div>
    </>
  );
}

export default Home;
