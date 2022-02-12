import styles from './Filter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faAngleUp, faSearch  } from '@fortawesome/free-solid-svg-icons';
import LocationSelectionFilter from './LocationSelectionFilter/LocationSelectionFilter';
import DateRangePicker from './DateRangePicker/DateRangePicker';
import CarSpecificationFilter from './CarSpecificationFilter/CarSpecificationFilter';
import { useEffect, useRef, useState } from 'react';



const Filter = () => {

    const carRentalFilter  = {
        locationCityId: null,
        locationCity: null,
        locationCountryId: null,
        locationCountry: null,
        rentFromDate: null,
        retnToDate: null,
        manufacturerId: null,
        manufacturer: null,
        carModelId: null,
        carModel: null,
        carCategoryId: null,
        carCategory: null,
        carTransmisionId: null,
        carTransmision: null,
        fuelTypeId: null,
        fuelType: null,
        priceFrom: null,
        priceTo: null,
        priceTypeId: null,
        priceType: null
    }

    const [isCarSpecificsVisible, setCarSpecificsVisible] = useState(false);

    var ref = useRef();
    useEffect(() => {
        ref.current.focus();
    }, [isCarSpecificsVisible]);


    const handleClickOutside = (event) => {
 
        if (ref.current && ref.current.contains(event.target)) { 
            setCarSpecificsVisible(true);
            setAdditionalFilterDropHovered(true);
        } else {  
            setCarSpecificsVisible(false);
            setAdditionalFilterDropHovered(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);


    const [iseAdditionalFilterDropHovered, setAdditionalFilterDropHovered] = useState(false);
    useEffect(() => {}, [iseAdditionalFilterDropHovered]);

    const additionalFilterDropCickHandler = () => {
     
        setCarSpecificsVisible(true);
        setAdditionalFilterDropHovered(true);
    }

    const additionalFilterDroLeaveHandler = () => {
        if(!isCarSpecificsVisible) {
            setAdditionalFilterDropHovered(false);
        }
    }

 

    return <div className={styles.filter} >
        <div className={styles.visibleFilterLine}>
            <div className={styles.locationDropdownSelect}>  
                <LocationSelectionFilter />
            </div>  

            <div className={styles.periodSelection}>
                  <DateRangePicker />
            </div>

            <div className={styles.additionalFilterDrop} onMouseEnter={() => setAdditionalFilterDropHovered(true)} onMouseLeave={() => additionalFilterDroLeaveHandler()}  onClick = {() => additionalFilterDropCickHandler()}>
                <div className={styles.showFilterBtnText}>Specs filter</div>
                <div className = {`${styles.filterBtnIcon} ${iseAdditionalFilterDropHovered? styles.additionalFilterDropHover : styles.additionalFilterDropLeave }`}>
                    <FontAwesomeIcon icon={faAngleUp} />
                </div>
            </div>

            <div className={styles.searchButton} ref={ref}  >
                <div className = {`${styles.searchBtnIcon}   `}>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className={styles.searchBtnText}>Search</div> 
            </div>
       
       
        </div> {/* ENd of visible Filter line */}

        <div ref={ref} className={`${styles.dropDownFilterLine} ${isCarSpecificsVisible? styles.dropDownCarSpecificsShow: ''}`}>
               <CarSpecificationFilter />
        </div>
    </div>
}

export default Filter;  