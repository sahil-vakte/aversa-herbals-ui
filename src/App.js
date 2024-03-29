import WebRoutes from './Routes/WebRoutes';
import { Route, Routes } from 'react-router-dom';
import "../src/Styles/KNimbalkarStyles.css"
import "../src/Styles/KJadhavStyles.css"

function App() {
  return (
    <div className="App">
         <Routes>
        <Route path="/*" element=<WebRoutes /> />
      </Routes>
    </div>
  );
}

export default App;
