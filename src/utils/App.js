import '../utils/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NaviBar from '../components/Navibar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../components/AppRouter';

function App() {
  return (
    <div>
      <BrowserRouter className="App page">
        <NaviBar/>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;