import styles from './DateRangePicker.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import DateRangePickerDropDown from './DateRangePickerDropDown/DateRangePickerDropDown';


const DateRangePicker = () => {


    const [isOnPickerMouseEntered, setPickerMouseEntered] = useState(false);

    const [pickerClickedInside, setPickerClickedInside] = useState(false);

       
    const [date, setDate] = useState({
        startDate: new Date,
        endDate: new Date,
        key: 'selection'
    });

    const [selectedDate, setSelectedDate] = useState('--/--/---- - --/--/----');
    useEffect(() => {
        let startDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(date.startDate);
        let endDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(date.endDate);
        setSelectedDate(`${startDate} - ${endDate}`);
    },[date]);
    
    var ref = useRef(null);

    useEffect(() => {
        ref.current.focus();
    }, [pickerClickedInside]);


    const handleClickOutside = (event) => {
 
        if (ref.current && ref.current.contains(event.target)) { 
            setPickerClickedInside(true);
        } else {  
            setPickerClickedInside(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return <div ref={ref} className={styles.dateRangePicker}>
        <div className={styles.dateRangeLabelArea} onMouseEnter={() => setPickerMouseEntered(true)} onMouseLeave={() => setPickerMouseEntered(false)}>
            <div className={`${styles.calendarIconArea} ${isOnPickerMouseEntered? styles.calendarIconAreaHover: ''}`}>
                <FontAwesomeIcon icon={faCalendarAlt}/>
            </div>

            <div className={styles.selectedDateTextShow}>{selectedDate}</div>
        </div>

        <div className={`${styles.dateRangePickerDrop} ${pickerClickedInside? styles.dropDownShow: ''}`}>
                <DateRangePickerDropDown date={date} setDate={setDate} />
                
                 
        </div>
    </div>
}

export default DateRangePicker;