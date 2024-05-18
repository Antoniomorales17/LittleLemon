
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Menu from './components/Menu/Menu';
import Popular from './components/Popular/Popular';
import Reservation from './components/Reservation/Reservation';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <div>
    < Navbar />
    < Intro />
    < Menu />
    < Reservation />
    < Popular />
    < Footer />
   </div>
  );
}

export default App;
