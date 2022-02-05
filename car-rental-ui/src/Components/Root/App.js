import styles from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { citiesAction as citiesAction } from '../../Modules/Dictionary/Cities/Action';
import { useEffect } from 'react';
import Header from '../Content/Header/Header';

function App() {


  return (
    <div className={styles.app}>
       <div className={styles.appHeader}> 
          <Header />
       </div>
       <div className={styles.appContent}>
          App content
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

