import { useState, useEffect } from 'react';
import Splash from './Views/Splash';
import Routes from './Routes';
import './assets/main.css';
import './index.css'
function App() {
  const [appLoaded, setAppLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAppLoaded(true);
    }, 3000);
  }
    , []);
  return (
    <>
      {!appLoaded && <Splash />}
      {appLoaded && <Routes />}
    </>
  );
}

export default App;
