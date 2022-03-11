import styles from './FilterDropField.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faAngleUp, faSearch, faTimes  } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react'; 




const FilterDropField = ({
    fieldTItle, 
    data,  
    selectedItemOut,  
    setSelectedItemOutData,
    selectedItemOutFieldType, 
    selectedItemId, 
    selectedItemName, 
    isSearchEnabled,
     }) => {
  

    const [selectedItem, setSelectedItem] = useState({
        searchParam: null,
        selectedItemData: {}
    });

    const [dataFromDataSelectors, setDataFromDataSelectors] = useState([]);

    useEffect(() => {
    
        setDataFromDataSelectors(data); 
    }, [data]);


    const [hasSelectedData, setHasOrNotSelectedData] = useState(false);

    useEffect(() => {
        setHasOrNotSelectedData(Object.entries(selectedItem.selectedItemData).length === 0? false: true)
    }, [selectedItem.selectedItemData])


    
    useEffect(() => {
        if (!selectedItem.searchParam) {
            setDataFromDataSelectors(data);
        } else {
      
        setDataFromDataSelectors( 
            // setDataFromDataSelectors(selectedItem.selectedItemData)
           
                dataFromDataSelectors.filter(
                    x => x[selectedItemName].toString().toLowerCase().includes(selectedItem.searchParam.toString().toLowerCase()))
             
         ); 
        }

        
    
    
    }, [selectedItem.searchParam]);

    useEffect(() => {}, [dataFromDataSelectors]); 
    const [isDropDownVisible, setDropDownVisible] = useState(false); 

    const ref = useRef(); 

    useEffect(() => {
        ref.current.focus();
    }, [isDropDownVisible]);

    const handleClickOutside = e => { 
        if (!ref.current.contains(e.target)) {
            // setClickedOutside(true);
            setDropDownVisible(false) 
        }
    };

    // const handleClickInside = () => setClickedOutside(false);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });


 
    const onFieldAreaClicked = () => { 
            setDropDownVisible(true); 
    }    
    const onDropItemClickHandler = (item,e) => {
        // const isExist = selectedItem.selectedItemData.find(el => el[selectedItemId] === item[selectedItemId]);
 
        setSelectedItem({
            searchParam: selectedItem.searchParam,
            selectedItemData: item
                
        });
 
         
        setSelectedItemOutData(item);
    
       
    } 
 
    const handleChange = (param) => {
        setSelectedItem({
            searchParam: param,
            selectedItemData: selectedItem.selectedItemData
        });
    }

    const getSelectedDataListNames = () => { 
        return  selectedItem?.selectedItemData[selectedItemName].toString();
    }

    return <div ref={ref}  className={styles.filterDropField} onClick = {() => onFieldAreaClicked()}>
        <div className={styles.fieldArea} >
            <div className={styles.filedText} >
                    {Object.entries(selectedItem.selectedItemData).length === 0? fieldTItle: getSelectedDataListNames()}
            </div>
            <div className={`${styles.fieldIcon} ${isDropDownVisible? styles.fieldIconDown: styles.fieldIconUp} ${hasSelectedData? styles.dissapearObject : ''} `}>
                <FontAwesomeIcon icon={faAngleUp} />
            </div>
            <div className={`${styles.fieldIcon} ${isDropDownVisible? styles.fieldIconDown: styles.fieldIconUp}  ${hasSelectedData? '' : styles.dissapearObject}`}>
                <FontAwesomeIcon icon={faTimes} />
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
                {Array.isArray(dataFromDataSelectors) && dataFromDataSelectors.map((item, index) => {    
  
                    return <div 
                        key={index} 
                        className={`${styles.selectItemOption}`} 
                        onClick = {(e) => onDropItemClickHandler(item, e)}
                        >  
                           <div className={styles.optionArea}>
                                
                                { item[selectedItemName]} 
                            </div>
                        </div>
                })}
            </div>
        </div>
    </div>
}


export default FilterDropField;