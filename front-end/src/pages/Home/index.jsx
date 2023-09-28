import React, { useState } from 'react';
import Modal from 'react-modal';
import { HexGrid, Layout, Hexagon, Pattern } from 'react-hexgrid';
import { useNavigate } from 'react-router-dom';
import { api } from '../../axios';
import '../../hex.css';
import './style.css';

Modal.setAppElement('#root');

function Home() {
  const navigate = useNavigate();
  const address = 'http://10.146.42.12:3000';
  const hexagonSize = { x: 16, y: 16 };

  const [hiveModalOpen, setHiveModalOpen] = useState(false);
  const [lactecModalOpen, setLactecModalOpen] = useState(false);

  const handleLivinglab = async () => {
    await api.get('/livinglab');
  };

  const handleHive = () => {
    setHiveModalOpen(true);
  };

  const handleLactec = () => {
    setLactecModalOpen(true);
  };

  const handleChargeback = () => {
    api.get('/chargeback')
      .then(() => navigate('/chargeback'))
      .catch(error => {
        console.log('Erro ao navegar para página /chargeback');
      });
  };

  const handleGeneralenergy = () => {
    api.get('/generalenergy')
      .then(() => navigate('/generalenergy'))
      .catch(error => {
        console.log('Erro ao navegar para página /generalenergy');
      });
  };

  const handleAdntech = () => {
    api.get('/adntech')
      .then(() => navigate('/adn'))
      .catch(error => {
        console.log('Erro ao navegar para página /adntech');
      });
  };

  const handleGiusoft = () => {
    api.get('/giusoft')
      .then(() => navigate('/giusoft'))
      .catch(error => {
        console.log('Erro ao navegar para página /giusoft');
      });
  };

  const handleLactecOneI = () => {
    api.get('/lactecOneI')
      .then(() => navigate('/lactec'))
      .catch(error => {
        console.log('Erro ao navegar para página /lactecOneI');
      });
  };

  const handleLactecOne = () => {
    api.get('/lactecOne')
      .then(() => navigate('/lactec'))
      .catch(error => {
        console.log('Erro ao navegar para página /lactecOne');
      });
  };
  
  const handleLactecTwoI = () => {
    api.get('/lactecTwoI')
      .then(() => navigate('/lactec'))
      .catch(error => {
        console.log('Erro ao navegar para página /lactecTwoI');
      });
  };
  const handleLactecTwo = () => {
    api.get('/lactecTwo')
      .then(() => navigate('/lactec'))
      .catch(error => {
        console.log('Erro ao navegar para página /lactecTwo');
      });
  };

  const handleHiveOne = () => {
    api.get('/hive')
      .then(() => navigate('/hive'))
      .catch(error => {
        console.log('Erro ao navegar para página /hive');
      });
  };
  const handleHiveOneI = () => {
    api.get('/hiveI')
      .then(() => navigate('/hive'))
      .catch(error => {
        console.log('Erro ao navegar para página /hiveI');
      });
  };
  return (
    <>
      <div className='App'>
        <HexGrid style={{ width: '100%', height: '100%', marginTop: '10%' }} viewBox='-50 -50 100 100'>
          <Layout size={hexagonSize} flat={true} spacing={1.1} origin={{ x: 10, y: 0 }}>
            <Hexagon className='btn' q={0} r={0} s={0} fill='pat-1' onClick={handleLivinglab} />
            <Hexagon className='btn' q={0} r={1} s={-1} fill='chargeback' onClick={handleChargeback} />
            <Hexagon className='btn' q={0} r={-1} s={1} fill='adn' onClick={handleAdntech} />
            <Hexagon className='btn' q={1} r={-1} s={0} fill='giusoft' onClick={handleGiusoft} />
            <Hexagon className='btn' q={1} r={0} s={-1} fill='generalenergy' onClick={handleGeneralenergy} />
            <Hexagon className='btn' q={-1} r={1} s={0} fill='hive' onClick={handleHive} />
            <Hexagon className='btn' q={-1} r={0} s={5} fill='lactec' onClick={handleLactec} />
          </Layout>
          <Pattern id='pat-1' link={`${address}/ParqueTecBa.png`} size={{ x: 16, y: 14 }} />
          <Pattern id='hive' link={`${address}/Hive/HIVE.png`} size={{ x: 16, y: 14 }} />
          <Pattern id='adn' link={`${address}/ADNtech/ADNTECH.png`} size={{ x: 16, y: 14 }} />
          <Pattern id='giusoft' link={`${address}/Giusoft/GIUSOFT.png`} size={{ x: 16, y: 14 }} />
          <Pattern id='generalenergy' link={`${address}/GeneralEnergy/GENERALENERGY.png`} size={{ x: 16, y: 13 }} />
          <Pattern id='lactec' link={`${address}/Lactec/LACTEC.png`} size={{ x: 16, y: 14 }} />
          <Pattern id='chargeback' link={`${address}/Chargeback/CHARGEBACK.png`} size={{ x: 16, y: 13 }} />
        </HexGrid>

        <div className='inst'>
          <img src={`${address}/Labes-01.png`} style={{ width: '6%', height: '6%' }} />
          <img src={`${address}/ufba.png`} style={{ width: '8%', height: '8%' }} />
          <img src={`${address}/AEPTECBA.png`} style={{ width: '6%', height: '6%' }} />
          <img src={`${address}/logo-parque-tecnologico-bahia.png`} style={{ width: '8%', height: '8%' }} />
          <img src={`${address}/Secti.png`} style={{ width: '8%', height: '8%' }} />
        </div>


        <Modal 
          isOpen={hiveModalOpen}
          onRequestClose={() => setHiveModalOpen(false)}
          contentLabel='Opções da Hive'
          className='custom-modal'

        >
          {
            <div className='container-hive'>
              <img onClick={handleHiveOne} src={`${address}/icons8-câmera-tipo-redoma-100.png`} />
              <img onClick={handleHiveOneI} src={`${address}/icons8-câmera-tipo-redoma-100-blue.png`} />
            </div>
          }
        </Modal>
        
        <Modal
          isOpen={lactecModalOpen}
          onRequestClose={() => setLactecModalOpen(false)}
          contentLabel='Opções da Lactec'
          className='custom-modal'
        >
          {
            <div className='container-lactec'>
              <p>Roteador</p>
              <div className='container-roteador'>
                <img onClick={handleLactecOne} src={`${address}/icons8-roteador-64.png`} />
                <img onClick={handleLactecOneI} src={`${address}/icons8-roteador-64-blue.png`} />
              </div>
              <p>Macrófitas</p>
              <div className='container-macrofitas'> 
                <img onClick={handleLactecTwo} src={`${address}/icons8-hydroponics-50.png`} />
                <img onClick={handleLactecTwoI} src={`${address}/icons8-hydroponics-50-blue.png`} />
              </div>
            </div>
          }
        </Modal>
      </div>
    </>
  );
}

export default Home;
