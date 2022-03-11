import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './LocationDropDownContent.module.css';



const LocationDropDownContent = ({citiesData, onItemClickHandler}) => {

    return <div className={styles.locationDropDownContent}> 
            {
                Array.isArray(citiesData) && citiesData.map((city) => (
                    <div className={styles.locationDropSingle} key = {city.id}  onClick={() => onItemClickHandler(city)}>
                        <div className={styles.locIcon}>
                        <FontAwesomeIcon icon={faThumbtack} />
                        </div>

                        <div className={styles.locText}>
                            <span className={styles.cityName}>{city.cityName}</span>
                            <span className={styles.citieCountry}>{city.countryName}</span>
                        </div>
                    </div>
                ))
            }
    
    </div>

}

export default LocationDropDownContent;