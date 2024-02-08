import Navbar from './Components/navbar';
import AccountBalance from './Components/Account-balance';
import CurrentCheck from './Components/Current-check';
import FixCost from './Components/Fix-costs';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AccountBalance />
      <CurrentCheck />
      <FixCost />
    </div>
  );
}

export default App;
