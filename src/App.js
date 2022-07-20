import Splash from './Views/Splash';
import Routes from './Routes';
import './index.css';
import './assets/main.css';

import { useSelector } from 'react-redux';

function App() {
    const { appLoaded } = useSelector(state => state.app);
    console.log(appLoaded);
    return (
      <>
          {!appLoaded && <Splash/>}
          { appLoaded && <Routes/>}
      </>
    );
}

export default App;
