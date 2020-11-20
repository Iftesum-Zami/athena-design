import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import DedicatedTeam from './Components/DedicatedTeam/DedicatedTeam';
import GetInTouch from './Components/GetInTouch/GetInTouch';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <DedicatedTeam />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;