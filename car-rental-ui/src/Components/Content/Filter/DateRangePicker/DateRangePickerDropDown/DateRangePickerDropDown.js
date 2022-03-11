import styles from './DateRangePickerDropDown.module.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { Calendar, DateRangePicker } from 'react-date-range';
import { useState } from 'react';
const DateRangePickerDropDown = ({date, setDate}) => {
 
    const handleSelect = (date) => {
        setDate({...date});
         
      }
 
 
    return <div className={styles.dateRangePickerDropDown}>
           
           <DateRangePicker
            className={styles.datePickerCalendar}
                ranges={[date]}
                minDate = {new Date}
                startDate = {date.startDate}
                endDate = {date.endDate}
        onChange={(val) => handleSelect(val.selection)}
      />

      
{/* <DateRangePicker
                endDate={endDate}
                inline={true}
                minDate={new Date()}
                onChange={() => onChange}
                selected={new Date()}
                selectRange={selectRange}
                showWeekNumbers={true}
                startDate={new Date()}
              /> */}

    </div>
}

export default DateRangePickerDropDown;