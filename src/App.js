import WebRoutes from './Routes/WebRoutes';
import { Route, Routes } from 'react-router-dom';
import "../src/Styles/KNimbalkarStyles.css"
import "../src/Styles/KJadhavStyles.css"
import "../src/Styles/SahilStyles.css"
import AdministratorViewSidebar from './AdminView/AdministratorViewSidebar/AdministratorViewSidebar';
import AadharKyc from './Components/KYCVerifications/AadharKyc';

function App() {
  return (
    <div className="App" style={{overflowX:"hidden"}}>
         <Routes>
        <Route path="/*" element=<WebRoutes /> />
        <Route path="/admin/*" element=<AdministratorViewSidebar/> />
        <Route path="/aadharkyc" element=<AadharKyc/> />
      </Routes>
    </div>
  );
}

export default App;
