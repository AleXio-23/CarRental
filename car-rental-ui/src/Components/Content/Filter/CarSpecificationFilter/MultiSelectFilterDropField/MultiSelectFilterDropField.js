import styles from './MultiSelectFilterDropField.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faAngleUp, faSearch  } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react'; 




const MultiSelectFilterDropField = ({
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
        selectedItemData: []
    });

    const [dataFromDataSelectors, setDataFromDataSelectors] = useState([]);

    useEffect(() => {
    
        setDataFromDataSelectors(data); 
    }, [data]);



    
    useEffect(() => {
        if (!selectedItem.searchParam) {
            setDataFromDataSelectors(data);
        } else {
      
        setDataFromDataSelectors( 
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
        const isExist = selectedItem.selectedItemData.find(el => el[selectedItemId] === item[selectedItemId]);
    
        setSelectedItem({
            searchParam: selectedItem.searchParam,
            selectedItemData: isExist? 
                selectedItem.selectedItemData.filter(el => el[selectedItemId] !== item[selectedItemId])
                : [...selectedItem.selectedItemData, item]
        });


     
        const isExistOut = selectedItemOut.find(el => el === item[selectedItemId]);
 
        var seletedItemIds = isExistOut?
        selectedItemOut.filter(el => el !== item[selectedItemId])
        : [...selectedItemOut, item[selectedItemOutFieldType]];
         
         
        setSelectedItemOutData(seletedItemIds);
    
       
    } 
 
    const handleChange = (param) => {
        setSelectedItem({
            searchParam: param,
            selectedItemData: selectedItem.selectedItemData
        });
    }

    const getSelectedDataListNames = () => {
        let arr = [];
        selectedItem?.selectedItemData.forEach(element => {
            arr.push(element[selectedItemName]);
        }); 
        return arr.toString();
    }

    return <div ref={ref}  className={styles.filterDropField} onClick = {() => onFieldAreaClicked()}>
        <div className={styles.fieldArea} >
            <div className={styles.filedText} >
                    {Object.entries(selectedItem.selectedItemData).length === 0? fieldTItle: getSelectedDataListNames()}
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
                {Array.isArray(dataFromDataSelectors) && dataFromDataSelectors.map((item, index) => {    
  
                    return <div 
                        key={index} 
                        className={`${styles.selectItemOption}`} 
                        onClick = {(e) => onDropItemClickHandler(item, e)}
                        >  
                           <div className={styles.optionArea}>
                                <label className={styles.container}> 
                                    <input type="checkbox" style={{pointerEvents: 'none'}  } readOnly  checked = {Boolean(selectedItem.selectedItemData.find(el => el.id === item.id))} />
                                    <span className={styles.checkmark}></span>
                                </label>
                                { item  [selectedItemName]} 
                            </div>
                        </div>
                })}
            </div>
        </div>
    </div>
}


export default MultiSelectFilterDropField;