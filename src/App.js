import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Web from './Routes/Web';

function App() {
  return (
    <div className="App">
      <Router>
          <Web/>
      </Router>
    </div>
  );
}

export default App;
