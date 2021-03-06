import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';

import DedicatedTeam from './Components/DedicatedTeam/DedicatedTeam';
import GetInTouch from './Components/GetInTouch/GetInTouch';
import Footer from './Components/Footer/Footer';
import WhatWeDo from './Components/WhatWeDo/WhatWeDo';
import StayRunning from './Components/StayRunning/StayRunning';
import OurAchievement from './Components/OurAchievement/OurAchievement';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <WhatWeDo />
      <StayRunning />
      <OurAchievement />
      <DedicatedTeam />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;