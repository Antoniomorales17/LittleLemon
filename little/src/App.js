
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Menu from './components/Menu/Menu';
import Popular from './components/Popular/Popular';
import Reservation from './components/Reservation/Reservation';

function App() {
  return (
   <div>
    < Navbar />
    < Menu />
    < Reservation />
    < Popular />
   </div>
  );
}

export default App;
