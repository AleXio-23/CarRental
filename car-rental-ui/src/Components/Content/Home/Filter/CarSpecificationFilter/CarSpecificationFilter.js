import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './CarSpecificationFilter.module.css';
import FilterDropField from './FilterDropField/FilterDropField';
import MultiSelectFilterDropField from './MultiSelectFilterDropField/MultiSelectFilterDropField';


const  CarSpecificationFilter = () => {

   const manufacturersSelector = useSelector(state => state.manufacturers);

    const [selectedItem, setSelectedItem] = useState({});

    useEffect(() => {

        console.log(selectedItem);
    }, [selectedItem]);

    // {fieldTItle, optionsList, selectedItem, selectedItemId, selectedItemName}
    return <div className={styles.carSpecificationFilter}>

<div className={styles.specsDrop} >
<FilterDropField 
            fieldTItle={"საწვავის ტიპი"}
            dataSelector = {manufacturersSelector}
            selectedItemOut = {selectedItem}
            setSelectedItemOut = {setSelectedItem}
            selectedItemId = {'id'}
            selectedItemName = {'manufacturerName'}
            isSearchEnabled = {true}
        />

{/* <MultiSelectFilterDropField 
            fieldTItle={"Manufacturer"}
            dataSelector = {manufacturersSelector}
            selectedItemOut = {selectedItem}
            setSelectedItemOut = {setSelectedItem}
            selectedItemId = {'id'}
            selectedItemName = {'manufacturerName'}
            isSearchEnabled = {true}
        /> */}
</div>
       
    </div>
}

export default CarSpecificationFilter;