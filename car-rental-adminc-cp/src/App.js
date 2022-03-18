 
import styles from './App.module.css'; 
import Login from './Components/Content/Authorization/Login';
import { Route, Link, Outlet, useRoutes, Routes, Navigate, useNavigate  } from 'react-router-dom';
import Home from './Components/Content/Home/Home';   
import MainContent from './Components/Content/MainContent/MainContent';
import { useEffect, useState } from 'react';
import LeftCornerAlert from './Components/Content/LeftCornerAlert/LeftCornerAlert';

function App() {
  let navigate = useNavigate();
  const [isTokenValid, setTokenValid] = useState(false);
 
const[createdAlert, createAlert] = useState({});

useEffect(() => {

}, [createdAlert]);

  useEffect(() => { 
         if(isTokenValid) {
           navigate("/admin/home");
         }
  }, [isTokenValid]);

  

  
  return <div className={styles.app}>
     <div className={styles.contentArea}>
      <Routes>
      <Route
                  exact
                  path="/"
                  element = {
                    isTokenValid ?                  
                    <Navigate to="/admin/home" /> :
                    <Navigate to="signIn" /> 
                  }                 
                />
        <Route path="admin/*" element={<MainContent />} /> 
        <Route path="signIn" element={<Login setTokenValid = {setTokenValid} createAlert = {createAlert}/>} /> 
      </Routes>
     </div>
     <div className={styles.alertsListArea}>
          <div   className={[styles.alertArea].join(' ')}> 
            <LeftCornerAlert type={createdAlert?.alertType} message={createdAlert?.alertMessage} visible={createdAlert?.visibility} createAlert={createAlert}/>
          </div>
     </div>
  </div>

 
}

export default App;
