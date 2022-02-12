import styles from './MultiSelectFilterDropField.module.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faAngleUp, faSearch  } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { manufacturersAction } from '../../../../../../Modules/Dictionary/Manufacturers/Action';




const MultiSelectFilterDropField = ({
    fieldTItle, 
    dataSelector, 
    selectedItemOut, 
    setSelectedItemOut, 
    selectedItemId, 
    selectedItemName, 
    isSearchEnabled  }) => {


    const [selectedItem, setItem] = useState({
        searchParam: null,
        selectedItemData: []
      });

    const dispatch = useDispatch();

      console.log(selectedItem);

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
              console.log(selectedObject);
              if(selectedItem.selectedItemData.find(el => el.id === selectedObject.id)){
                  
                  console.log(selectedItem.selectedItemData.indexOf(selectedObject));
                  setItem({
                    searchParam: null,
                    selectedItemData:  [...selectedItem.selectedItemData.filter(el => el.id !==selectedObject.id)]
               
                }); 
              } else {
                    setItem({
                        searchParam: null,
                        selectedItemData:  [...selectedItem.selectedItemData, selectedObject]
                
                    }); 
                }
        }
    
 

    









 
    const [isDropDownVisible, setDropDownVisible] = useState(false); 

    const ref = useRef();

    useEffect(() => {
        ref.current.focus();
    }, [isDropDownVisible]);


    const handleClickOutside = (event) => {
 
        if (ref.current && ref.current.contains(event.target)) {  
            setDropDownVisible(true); 
        } else {  
            setDropDownVisible(false); 
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);


    const onFieldAreaClicked = () => { 
            setDropDownVisible(true); 
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
    }, [selectedItem]);

    const containChecker = (item) => {
        return selectedItem.selectedItemData.includes(item);
    }



    return <div  className={styles.filterDropField} onClick = {() => onFieldAreaClicked()}>
        <div className={styles.fieldArea} >
            <div className={styles.filedText} ref={ref}>
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
 
                            
                    return <div 
                        key={item[selectedItemId]} 
                        className={`${styles.selectItemOption}`} 
                        onClick = {() => onDropItemClickHandler(item)}
                        >  
                           <div className={styles.optionArea}>
                                <label className={styles.container}> 
                                    <input type="checkbox" checked={containChecker(item)? true:false}/>
                                    <span className={styles.checkmark}></span>
                                </label>
                                { item[selectedItemName]} 
                            </div>
                        </div>
                })}
            </div>
        </div>
    </div>
}


export default MultiSelectFilterDropField;