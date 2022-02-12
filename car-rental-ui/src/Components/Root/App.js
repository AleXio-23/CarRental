import styles from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { citiesAction as citiesAction } from '../../Modules/Dictionary/Cities/Action';
import React, { useEffect, useRef, useState } from 'react';
import Header from '../Content/Header/Header';
import Home from '../Content/Home/Home';
import AuthorizedDrop from '../Content/Header/UnauthorizedDrop/UnauthorizedDrop';
import Slide from '../Content/Home/Slider/Slide';

function App() {
 
 
  return (
    <div className={styles.app}>
       <div className={styles.appHeader}  > 
          <Header   />
          
          
       </div>
       <div className={styles.appContent}>
         <div className={styles.sliderArea}>
               <Slide />
         </div>
          <div className={styles.appContentArea}>
               <Home />
          </div>
       </div>
    </div>
  );
}

export default App;


// {
//   Array.isArray(citiesData?.data) && citiesData.data.map((city) => (
//     <div className="user">{city.cityName}</div>
//   ))
//   }


// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(citiesAction.get());
// }, []);


// const citiesStateData = useSelector(state => state.cities)
// const citiesData = citiesStateData.data;

