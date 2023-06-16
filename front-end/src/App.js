import * as React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home'
import Hive from './pages/Hive'
import Adn from './pages/Adn'
import ChargeBack from './pages/ChargeBack'
import GeneralEnergy from './pages/GeneralEnergy'
import Giusoft from './pages/Giusoft'
import Lactec from './pages/Lactec'

function App() {

  return (
    <div >
       <Routes>
        <Route index element={<Home />} />
        <Route path="hive" element={<Hive />} />
        <Route path="adn" element={<Adn />} />
        <Route path="chargeBack" element={<ChargeBack />} />
        <Route path="generalEnergy" element={<GeneralEnergy />} />
        <Route path="giusoft" element={<Giusoft />} />
        <Route path="lactec" element={<Lactec />} />
      </Routes>

    </div>
  );
}

export default App;
