import WebRoutes from './Routes/WebRoutes';
import { Route, Routes } from 'react-router-dom';
import "../src/Styles/KNimbalkarStyles.css"
import "../src/Styles/KJadhavStyles.css"
import "../src/Styles/SahilStyles.css"
import AdministratorViewSidebar from './AdminView/AdministratorViewSidebar/AdministratorViewSidebar';

function App() {
  return (
    <div className="App" style={{overflowX:"hidden"}}>
         <Routes>
        <Route path="/*" element=<WebRoutes /> />
        <Route path="/admin/*" element=<AdministratorViewSidebar/> />
      </Routes>
    </div>
  );
}

export default App;
