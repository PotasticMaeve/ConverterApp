import React, { Component } from 'react';
import { 
  Router, 
  Scene,
} from 'react-native-router-flux';

import Home from './pages/Home';
import MainMenu from './pages/MainMenu';
import Jarak from './pages/Jarak';
import Kecepatan from './pages/Kecepatan';
import Waktu from './pages/Waktu';
import Massa from './pages/Massa';
import Temperatur from './pages/Temperatur';
import Energi from './pages/Energi';
import Daya from './pages/Daya';
import Gaya from './pages/Gaya';
import IntenCahaya from './pages/IntenCahaya';
import JumlahZat from './pages/JumlahZat';

const Routes = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Home"
          hideNavBar={true}
          component={Home}
          initial
        />
        <Scene
          key="MainMenu"
          component={MainMenu}
          title="Main Menu"
        />

        <Scene key="Jarak" component={Jarak} title="Jarak"/>
        <Scene key="Kecepatan" component={Kecepatan} title="Kecepatan"/>
        <Scene key="Waktu" component={Waktu} title="Waktu"/>
        <Scene key="Massa" component={Massa} title="Massa"/>
        <Scene key="Temperatur" component={Temperatur} title="Temperatur"/>
        <Scene key="Energi" component={Energi} title="Energi"/>
        <Scene key="Daya" component={Daya} title="Daya"/>
        <Scene key="Gaya" component={Gaya} title="Gaya"/>
        <Scene key="IntenCahaya" component={IntenCahaya} title="Intensitas Cahaya"/>
        <Scene key="JumlahZat" component={JumlahZat} title="Jumlah Zat"/>
      </Scene>
    </Router>
  );
}

export default Routes;
