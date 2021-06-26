import '../utils/App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NaviBar from '../components/Navibar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../components/AppRouter';
import {AuthProvider} from "../Auth";

function App() {

    const [data, setData] = React.useState(null);
  return (
      <AuthProvider>
          <BrowserRouter className="App page">
              <NaviBar/>
              <AppRouter/>
          </BrowserRouter>
      </AuthProvider>
  );
}

export default App;