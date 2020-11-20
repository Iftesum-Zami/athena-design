import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
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
    </div>
  );
}

export default App;