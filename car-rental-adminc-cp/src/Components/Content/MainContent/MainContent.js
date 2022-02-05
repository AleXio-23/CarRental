import Home from '../Home/Home';
import styles from './MainContent.module.css';

import { Route, Link, Outlet, useRoutes, Routes } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Header from '../Menu/Header/Header';
import { useEffect, useState } from 'react';


const MainContent = () => {

    const [isExpanded, setExpanded] = useState(true)
    
    const alexYle = (e) => {
        let windowWidth = window.innerWidth; 
        if(windowWidth <= 780){
            setExpanded(false);
        } else {
            setExpanded(true);
        }
    }
    useEffect(() => { 
       
        window.addEventListener('resize', alexYle)
        return () => window.removeEventListener('resize')

    }, [ ]);

    useEffect(() => { 
      }, [isExpanded]);
 

    return <div className={styles.mainContent}>
       
        <div  className={[styles.sideBarMenuArea, isExpanded? styles.sidebarMenuShow: styles.sidebarMenuHide].join(' ')}>    
            <Sidebar isExpanded={isExpanded} />
        </div>

        <div className={styles.contentArea}>
            <div className={styles.contentHeader}>
                <Header isExpanded = {isExpanded} setExpanded = {setExpanded}/>
            </div>


                <h2>Content area</h2>
                <h1>{window.innerWidth}</h1>
                <Routes>
                    <Route path="home" element={<Home />} />
                    

                </Routes>
        </div>
    </div>
}

export default MainContent;