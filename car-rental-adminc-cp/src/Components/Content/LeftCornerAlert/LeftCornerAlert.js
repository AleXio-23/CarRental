import styles from './LeftCornerAlert.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faExclamationTriangle, faTimes, faCheck} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const x = {
    info: {
        icon: faExclamationCircle,
        colors: styles.InfoTypeColors
    },
    error: {
        icon: faTimes,
        colors: styles.ErrorTypeColors
    },
    success: {
        icon: faCheck,
        colors: styles.SuccessTypeColors
    },
    warning: {
        icon: faExclamationTriangle,
        colors: styles.WarningTypeColors
    }
}

const LeftCornerAlert = ({type="info", message = "", visible, createAlert}) => {
    
 
    const[isAlertVisible, setAlertVisibility] = useState(false);

    useEffect(() => {

    })
    useEffect(() => {
        setAlertVisibility(visible); 
    }, [visible]);

    useEffect(() => { 
        if(isAlertVisible){
          const timer = setTimeout(() => {
            setAlertVisibility(false);
            createAlert({});
          }, 3000);
          return () => clearTimeout(timer);
        }
  
    }, [isAlertVisible]);
  


    return <div className={[styles.leftCornerAlert, x[type].colors,  isAlertVisible? styles.isAlertAreaVisible: styles.isAlertAreaHidden].join(' ')}>
            <span className={styles.iconClass}> 
                <FontAwesomeIcon icon={x[type].icon} /> 
            </span>
            <span className={styles.messageClass}>{message}</span>
    </div>
}

export default LeftCornerAlert;
