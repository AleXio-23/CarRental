import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTractor, faCarSide, faMotorcycle, faBicycle, faEuroSign, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { manufacturersAction } from '../../../../Modules/Dictionary/Manufacturers/Action';
import styles from './CarSpecificationFilter.module.css';
import FilterDropField from './FilterDropField/FilterDropField';
import MultiSelectFilterDropField from './MultiSelectFilterDropField/MultiSelectFilterDropField';
import { carCategoriesAction } from '../../../../Modules/Dictionary/CarCategories/Action';
import { filterAction } from '../../../../Modules/Filter/Action';
import { carModelsAction } from '../../../../Modules/Dictionary/CarModels/Action';
import { TransmissionsAction } from '../../../../Modules/Dictionary/Transmissions/Action';


const CarSpecificationFilter = () => {

    const dispatch = useDispatch();

    const manufacturersSelector = useSelector(state => state.manufacturers);
    const manufacturerData = manufacturersSelector.data;
    const [manufacturerSelectedIds, setManufacturerSelectedIds] = useState([]);
    const [manufacturerDataSet, setManufaturerDataSet] = useState([]);
    useEffect(() => {
        dispatch(manufacturersAction.get());
    }, []);
    useEffect(() => {

        setManufaturerDataSet(manufacturerData);
    }, [manufacturerData]);



    const carCategoriesSelector = useSelector(state => state.carCategories);
    const carCategoriesData = carCategoriesSelector.data;
    const [carCategoriesSelectedIds, setCarCategoriesSelectedIds] = useState([]);
    const [carCategoriesDataSet, setCarCategoriesDataSet] = useState([]);
    useEffect(() => {
        dispatch(carCategoriesAction.get())
    }, [])
    useEffect(() => {
        setCarCategoriesDataSet(carCategoriesData);

    }, [carCategoriesData]);





    const filterSelector = useSelector(state => state.carsFilter);
    const carsFilterData = filterSelector.data;

    useEffect(() => {
        let filterdata = carsFilterData;
        filterdata.manufacturerIdsList = manufacturerSelectedIds;
        filterdata.carCategoryIdsList = carCategoriesSelectedIds;
        filterAction.set(filterdata);
        filterAction.get();

    }, [manufacturerSelectedIds, carCategoriesSelectedIds]);



    const carModelsSelector = useSelector(state => state.carModels);
    const carModelsData = carModelsSelector.data;
    const [carModelSeletedIds, setCarModelsSelectedIds] = useState([]);
    const [carModelsDataSet, setCarModelsDataSet] = useState([]);
    useEffect(() => {
        dispatch(carModelsAction.get(manufacturerSelectedIds));
    }, [manufacturerSelectedIds])
    useEffect(() => {
        setCarModelsDataSet(carModelsData);
    }, [carModelsData]);



    const [yearsSelectDtSet, setYearsSelectDtSet] = useState([]);
    const [filterYearsSelectFrom, setfitlerYearsSelectFrom] = useState({});
    const [filterYearsSelectTo, setfitlerYearsSelectTo] = useState({});
    useEffect(() => {
        var currentYear = new Date().getFullYear();
        let yearArr = [];
        for (var i = currentYear; i >= 1900; i--) {
            var obj = {
                key: i,
                value: i
            }
            yearArr.push(obj);
        }
        setYearsSelectDtSet(yearArr);
    }, []);


    const [engineSelectDtSet, setEngineSelectDtSet] = useState([]);
    const [filterEngineSelectFrom, setfitlerEngineSelectFrom] = useState({});
    const [filterEngineSelectTo, setfitlerEngineSelectTo] = useState({});

    useEffect(() => {
        let engineArr = [];
        engineArr.push({
            key: parseFloat("0.05").toFixed(2).toString(),
            value: parseFloat("0.05").toFixed(2).toString()
        })
        for (var i = 0.1; i <= 13.0; i += 0.1) { 
            var obj = {
                key: parseFloat(i).toFixed(1).toString(),
                value: parseFloat(i).toFixed(1).toString()
            }
            engineArr.push(obj);
        }
        setEngineSelectDtSet(engineArr);
    }, []);


    const [currencySelection, setCurrencySelection] = useState({
        dollar: true,
        euro: false
    });

    const onCurrencyDollarClick = () => {
        setCurrencySelection({
            dollar: true,
            euro: false
        });
    }
    const onCurrencyEuroClick = () => {
        setCurrencySelection({
            dollar: false,
            euro: true
        });
    }


        
    const transmissionsSelector = useSelector(state => state.transmissions);
    const transmissionsData = transmissionsSelector.data;
    const [transmissionsSelectedIds, setTransmissionsSelectedIds] = useState([]);
    const [ transmissionsDataSet, setTransmissionsDataSet] = useState([]);
    useEffect(() => {
        dispatch(TransmissionsAction.get());
    }, []);
    useEffect(() => {
        
        setTransmissionsDataSet(transmissionsData);
        console.log(transmissionsDataSet);
    }, [transmissionsData]);

    return <div className={styles.carSpecificationFilter}>


        <div className={styles.filterFieldsRowCarTypes}>
            <div className={styles.carTypeSelectorBtn}>
                <FontAwesomeIcon icon={faCarSide} />
            </div>
            <div className={styles.carTypeSelectorBtn}>
                <FontAwesomeIcon icon={faTractor} />
            </div>
            <div className={styles.carTypeSelectorBtn}>
                <FontAwesomeIcon icon={faBicycle} />
            </div>

        </div>

        <div className={styles.filterFieldsRow}>
            <div className={styles.specsDrop} >
                <MultiSelectFilterDropField
                    fieldTItle={"Manufacturer"}
                    data={manufacturerDataSet}
                    selectedItemOut={manufacturerSelectedIds}
                    setSelectedItemOutData={setManufacturerSelectedIds}
                    selectedItemOutFieldType={'id'}
                    selectedItemId={'id'}
                    selectedItemName={'manufacturerName'}
                    isSearchEnabled={true}
                />
            </div>

            <div className={styles.specsDrop} >
                <MultiSelectFilterDropField
                    fieldTItle={"Models"}
                    data={carModelsDataSet}
                    selectedItemOut={carModelSeletedIds}
                    setSelectedItemOutData={setCarModelsSelectedIds}
                    selectedItemOutFieldType={'id'}
                    selectedItemId={'id'}
                    selectedItemName={'name'}
                    isSearchEnabled={true}
                />
            </div>


            <div className={styles.specsDrop} >
                <MultiSelectFilterDropField
                    fieldTItle={"Category"}
                    data={carCategoriesDataSet}
                    selectedItemOut={carCategoriesSelectedIds}
                    setSelectedItemOutData={setCarCategoriesSelectedIds}
                    selectedItemOutFieldType={'id'}
                    selectedItemId={'id'}
                    selectedItemName={'categoryName'}
                    isSearchEnabled={true}
                />
            </div>

        </div>

        <div className={styles.filterFieldsRow}>
            <div className={styles.inlinePair}>
                <div className={styles.specsDrop} >
                    <FilterDropField
                        fieldTItle={"From - Year"}
                        data={yearsSelectDtSet}
                        selectedItemOut={filterYearsSelectFrom}
                        setSelectedItemOutData={setfitlerYearsSelectFrom}
                        selectedItemOutFieldType={'key'}
                        selectedItemId={'key'}
                        selectedItemName={'value'}
                        isSearchEnabled={true}
                    />
                </div>
                <div className={styles.specsDrop} >
                    <FilterDropField
                        fieldTItle={"From - Year"}
                        data={yearsSelectDtSet}
                        selectedItemOut={filterYearsSelectTo}
                        setSelectedItemOutData={setfitlerYearsSelectTo}
                        selectedItemOutFieldType={'key'}
                        selectedItemId={'key'}
                        selectedItemName={'value'}
                        isSearchEnabled={true}
                    />
                </div>
            </div>

            <div className={styles.inlinePair}>
                <div className={styles.specsDrop} >
                    <input className={styles.spcedDropInput} type='text' placeholder='Price - From' />
                </div>
                <div className={styles.specsDrop} >
                    <input className={styles.spcedDropInput} type='text' placeholder='Price - To' />
                </div>
                <div className={`${styles.specsDrop} ${styles.currencyBtns} ${currencySelection.dollar === true ? styles.selectedCurrency : ''} `}
                    onClick={() => onCurrencyDollarClick()}>
                    <FontAwesomeIcon icon={faDollarSign} />
                </div>
                <div className={`${styles.specsDrop} ${styles.currencyBtns} ${currencySelection.euro === true ? styles.selectedCurrency : ''}`}
                    onClick={() => onCurrencyEuroClick()}>
                    <FontAwesomeIcon icon={faEuroSign} />
                </div>

            </div>

            <div className={styles.inlinePair}>
                <div className={styles.specsDrop} >
                    <FilterDropField
                        fieldTItle={"Engine - From"}
                        data={engineSelectDtSet}
                        selectedItemOut={filterEngineSelectFrom}
                        setSelectedItemOutData={setfitlerEngineSelectFrom}
                        selectedItemOutFieldType={'key'}
                        selectedItemId={'key'}
                        selectedItemName={'value'}
                        isSearchEnabled={true}
                    />
                </div>
                <div className={styles.specsDrop} >
                    <FilterDropField
                        fieldTItle={"Engine - To"}
                        data={engineSelectDtSet}
                        selectedItemOut={filterEngineSelectTo}
                        setSelectedItemOutData={setfitlerEngineSelectTo}
                        selectedItemOutFieldType={'key'}
                        selectedItemId={'key'}
                        selectedItemName={'value'}
                        isSearchEnabled={true}
                    />
                </div>
            </div>



        </div>



        <div className={styles.filterFieldsRow}>
            <div className={styles.specsDrop} >
                <MultiSelectFilterDropField
                    fieldTItle={"Transmission"}
                    data={transmissionsDataSet}
                    selectedItemOut={transmissionsSelectedIds}
                    setSelectedItemOutData={setTransmissionsSelectedIds}
                    selectedItemOutFieldType={'id'}
                    selectedItemId={'id'}
                    selectedItemName={'transmisionName'}
                    isSearchEnabled={true}
                />
            </div>

            <div className={styles.specsDrop} >
                <MultiSelectFilterDropField
                    fieldTItle={"FuelType"}
                    data={carModelsDataSet}
                    selectedItemOut={carModelSeletedIds}
                    setSelectedItemOutData={setCarModelsSelectedIds}
                    selectedItemOutFieldType={'id'}
                    selectedItemId={'id'}
                    selectedItemName={'name'}
                    isSearchEnabled={true}
                />
            </div>


            <div className={styles.specsDrop} >
                <FilterDropField
                    fieldTItle={"Wheel"}
                    data={yearsSelectDtSet}
                    selectedItemOut={filterYearsSelectFrom}
                    setSelectedItemOutData={setfitlerYearsSelectFrom}
                    selectedItemOutFieldType={'key'}
                    selectedItemId={'key'}
                    selectedItemName={'value'}
                    isSearchEnabled={true}
                />
            </div>

        </div>


        {/* <div className={styles.specsDrop} >

            
        </div> */}
        {/* <FilterDropField 
                    fieldTItle={"საწვავის ტიპი"}
                    dataSelector = {manufacturersSelector}
                    selectedItemOut = {selectedItem}
                    setSelectedItemOut = {setSelectedItem}
                    selectedItemId = {'id'}
                    selectedItemName = {'manufacturerName'}
                    isSearchEnabled = {true}
                /> */}

        {/* <MultiSelectFilterDropField 
                    fieldTItle={"სელექტები"}
                    dataSelector = {manufacturersSelector} 
                    selectedItemOut = {selectedItem}
                    setSelectedItemOut = {setSelectedItem}
                    selectedItemId = {'id'}
                    selectedItemName = {'manufacturerName'}
                    isSearchEnabled = {true}
                    dataAction = {manufacturersAction}
                /> */}


    </div>
}

export default CarSpecificationFilter;