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

  const handleLactec = () => {
    api.get('/lactec1')
        .then(() => navigate("/lactec"))
        .catch(error => {
            console.log("Erro ao navegar para página /lactec");
        });
    navigate("/lactec")
  };

  const handleChargeback = () => {
    api.get('/chargeback')
        .then(() => navigate("/chargeback"))
        .catch(error => {
            console.log("Erro ao navegar para página /chargeback");
        });
  };

  const handleGeneralenergy = () => {
    api.get('/generalenergy')
        .then(() => navigate("/generalenergy"))
        .catch(error => {
            console.log("Erro ao navegar para página /generalenergy");
        });
  };

  const handleAdntech = () => {
    api.get('/adntech')
        .then(() => navigate("/adn"))
        .catch(error => {
            console.log("Erro ao navegar para página /adntech");
        });
  };

  const handleGiusoft = () => {
    api.get('/giusoft')
        .then(() => navigate("/giusoft"))
        .catch(error => {
            console.log("Erro ao navegar para página /giusoft");
        });
  };

  const handleLactecTwo = () => {
    api.get('/lactec')
        .then(() => navigate("/lactec"))
        .catch(error => {
            console.log("Erro ao navegar para página /lactec");
        });
  };
                        
  return (
    <>
      <div className='App'>

        <HexGrid style={{width: '100%', height: '100%', marginTop: '10%'}} viewBox="-50 -50 100 100">
            {/* Main grid with bit hexagons, all manual */}
            <Layout size={hexagonSize} flat={true} spacing={1.1} origin={{ x: 10, y: 0 }}>
              <Hexagon className='btn' q={0} r={0} s={0} fill="pat-1" onClick={handleLivinglab} />
              {/* Using pattern (defined below) to fill the hexagon */}
              <Hexagon className='btn' q={0} r={1} s={-1} fill="chargeback" onClick={handleChargeback}/>
              <Hexagon className='btn' q={0} r={-1} s={1} fill="adn" onClick={handleAdntech} />
              <Hexagon className='btn' q={1} r={-1} s={0} fill="giusoft" onClick={handleGiusoft} />
              <Hexagon className= 'btn'q={1} r={0} s={-1} fill="generalenergy" onClick={handleGeneralenergy} />
              <Hexagon className='btn' q={-1} r={1} s={0} fill="hive"  onClick={handleHive} />
              <Hexagon className='btn' q={-1} r={0} s={5} fill="lactec" onClick={handleLactec} />
            </Layout>
            {/* You can define multiple patterns and switch between them with "fill" prop on Hexagon */}
            <Pattern id="pat-1" link={`${address}/ParqueTecBa.png`} size={{x: 16, y: 14 }} />
            <Pattern id="hive" link={`${address}/Hive/HIVE.png`} size={{x: 16, y: 14 }} />
            <Pattern id="adn" link={`${address}/ADNtech/ADNTECH.png`}  size={{x: 16, y: 14 }} />
            <Pattern id="giusoft" link={`${address}/Giusoft/GIUSOFT.png`} size={{x: 16, y: 14 }} />
            <Pattern id="generalenergy" link={`${address}/GeneralEnergy/GENERALENERGY.png`} size={{x: 16, y: 13 }} />
            <Pattern id="lactec" link={`${address}/Lactec/LACTEC.png`}  size={{x: 16, y:14  }} />
            <Pattern id="chargeback" link={`${address}/Chargeback/CHARGEBACK.png`} size={{x: 16, y: 13}} />
        </HexGrid>

        <div className='inst'>
          {/* Labes2 << UFBA << AEPETEC << Parque << Governo */}
          <img src={`${address}/Labes-01.png`} style={{ width: "6%", height: "6%" }}/>
          <img src={`${address}/ufba.png`} style={{ width: "8%", height: "8%" }}/>
          <img src={`${address}/AEPTECBA.png`} style={{ width: "6%", height: "6%" }}/>
          <img src={`${address}/logo-parque-tecnologico-bahia.png`} style={{ width: "8%", height: "8%" }}/>
          <img src={`${address}/Secti.png`} style={{ width: "8%", height: "8%" }}/>
        </div>

      </div>
    </>
  );
}

export default Home;
