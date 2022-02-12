import styles from './LocationSelectionFilter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faTimes, faThumbtack  } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { citiesAction } from '../../../../../Modules/Dictionary/Cities/Action';
import LocationDropDownContent from './LocationDropDownContent/LocationDropDownContent';

const LocationSelectionFilter = () => {

    const [isInputFocused, setInputFocused] = useState(false);
    const [selectedItem, setItem] = useState({
        searchParam: null
      });

    const dispatch = useDispatch();



    useEffect(() => {
        if (!selectedItem.searchParam) {
          dispatch(citiesAction.get(''));
        } else {
    
          dispatch(citiesAction.get(selectedItem.searchParam));
        }
        
    
    
      }, [selectedItem.searchParam]);
 
        const citiesStateData = useSelector(state => state.cities)
        const citiesData = citiesStateData.data;

        const handleChange = (keyword) => {
            setItem({
              searchParam: keyword
            })
          }
 

    
    const onItemClickHandler = (selectedObject) => {
        setItem({
            searchParam: null,
            cityName: selectedObject.cityName,
            countryName: selectedObject.countryName
        }); 
    }

    const onInputClearClick = () => {
        setItem({
            searchParam: null
        });
    }
    var ref = useRef(null);

    useEffect(() => {
        ref.current.focus();
    }, [isInputFocused]);


    const handleClickOutside = (event) => {
 
        if (ref.current && ref.current.contains(event.target)) { 
            setInputFocused(true);
        } else {  
            setInputFocused(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);
 
    return <div className={styles.locationSelectionFilter}>
        <div className={styles.inputDropdownLocation}> {/* input area */}
            <div className={`${styles.locationIcon}  ${isInputFocused? styles.colorisedIcon: ''}`}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <input 
            onChange={(event) => handleChange(event.target.value)}
            value={selectedItem?.searchParam != null ? selectedItem?.searchParam : (selectedItem.cityName != null? selectedItem.cityName  + ', ' + selectedItem.countryName : '') }
            type='text' 
            placeholder='Select location' 
            className={styles.locationTextInput}  
            ref = {ref}/>
            <div className={styles.locationRemoveButton} onClick = {() => onInputClearClick()}>                        
                <FontAwesomeIcon icon={faTimes} />
            </div>                   

        </div>

        <div className={`${styles.locationDropdownArea} ${isInputFocused && styles.dropDownShow }`}> 
                <LocationDropDownContent citiesData={citiesData} onItemClickHandler= {onItemClickHandler}/>    
        </div>
    </div>
}

export default LocationSelectionFilter;