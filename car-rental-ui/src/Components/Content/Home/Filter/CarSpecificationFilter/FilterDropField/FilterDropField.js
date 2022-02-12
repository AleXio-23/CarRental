import styles from './FilterDropField.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faAngleUp, faSearch  } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { manufacturersAction } from '../../../../../../Modules/Dictionary/Manufacturers/Action';



const FilterDropField = ({
    fieldTItle, 
    dataSelector, 
    selectedItemOut, 
    setSelectedItemOut, 
    selectedItemId, 
    selectedItemName, 
    isSearchEnabled  }) => {

    
    const [selectedItem, setItem] = useState({
        searchParam: null,
        selectedItemData: {}
      });

    const dispatch = useDispatch();



    useEffect(() => {
        if (!selectedItem.searchParam) {
          dispatch(manufacturersAction.get(''));
        } else {
    
          dispatch(manufacturersAction.get(selectedItem.searchParam));
        }
        
    
    
      }, [selectedItem.searchParam]);
 
        const manufacturersStateData = dataSelector;
        const manufacturersData = manufacturersStateData.data;

        const handleChange = (keyword) => {
            setItem({
              searchParam: keyword,
              selectedItemData: {}
            })
          }

          const setSelectedItem = (selectedObject) => {
            setItem({
                searchParam: null,
                selectedItemData:  {
                    selectedItemId: selectedObject[selectedItemId],
                    selectedItemName: selectedObject[selectedItemName]
                }
           
            }); 
        }
    
 

    









 
    const [isDropDownVisible, setDropDownVisible] = useState(false); 

    const ref = useRef();

    useEffect(() => {
        ref.current.focus();
    }, [isDropDownVisible]);


    // const handleClickOutside = (event) => {
 
    //     if (!(ref.current && ref.current.contains(event.target))) {  
    //         setDropDownVisible(false); 
    //     } 
    //     // else {  
    //     //     setDropDownVisible(false); 
    //     // }
    // };

    // useEffect(() => {
    //     document.addEventListener('click', handleClickOutside, true);
    //     return () => {
    //         document.removeEventListener('click', handleClickOutside, true);
    //     };
    // }, []);


    const onFieldAreaClicked = () => { 
            setDropDownVisible(!isDropDownVisible); 
    }   
     useEffect(() => {
        
    }, [isDropDownVisible]);

    useEffect(() => {

    }, [isDropDownVisible]);


    const onDropItemClickHandler = (item) => {
        setSelectedItemOut(item); 
        setSelectedItem(item);
        setDropDownVisible(false);
       
    }

    useEffect(() => { 
    }, [selectedItem, selectedItemOut]);








    const handleClickOutside = e => {
        if (!ref.current.contains(e.target)) {
            // setClickedOutside(true);
            setDropDownVisible(false)
            console.log('out');
        }
    };

    // const handleClickInside = () => setClickedOutside(false);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });



    
    return <div  className={styles.filterDropField} ref={ref} >
        <div className={styles.fieldArea}  onClick = {() => onFieldAreaClicked()}>
            <div className={styles.filedText} >
                    {Object.entries(selectedItem.selectedItemData).length === 0? fieldTItle: selectedItem.selectedItemData['selectedItemName']}
            </div>
            <div className={`${styles.fieldIcon} ${isDropDownVisible? styles.fieldIconDown: styles.fieldIconUp} `}>
                <FontAwesomeIcon icon={faAngleUp} />
            </div>
        </div>

        <div className={`${styles.fieldDropDown} ${isDropDownVisible? styles.fieldDropDownVisible: ''}`}>
            <div className={`${styles.dropItemsSearchArea} ${isSearchEnabled? styles.showSearchArea: ''}`}>
                <div className={styles.dropSearchInput}>
                    <input type='text' placeholder='Search...' 
                    value={selectedItem?.searchParam != null ? selectedItem?.searchParam : '' }
             
                    onChange={(event) => handleChange(event.target.value)}/>
                </div>
                <div className={styles.dropSearchIcon}>
                 <FontAwesomeIcon icon={faSearch}  />
                </div>
            </div>
            <div className={styles.dropdownDataArea}>
                {Array.isArray(manufacturersData) && manufacturersData.map((item) => {               
                    return <div key={item[selectedItemId]} className={`${styles.selectItemOption}`} onClick = {() => {
                        onDropItemClickHandler(item)
                        onFieldAreaClicked()
                    }}>  { item[selectedItemName]} </div>
                })}
            </div>
        </div>
    </div>
}

export default FilterDropField;