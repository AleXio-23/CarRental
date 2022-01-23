 
import styles from './Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faVideo } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
 

const Login = ( {setTokenValid, createAlert}) => {
        
    const [hasUsernameFocus, setUsernameFocus] = useState(false);
    const navigate = useNavigate();
    const [hasPasswordFocus, setPasswordFocus] = useState(false);
        
    useEffect(() => {
        
    }, [hasUsernameFocus]);

    useEffect(() => {
        
    }, [hasPasswordFocus]);

    
    
    const signIn = (tokenValidation) => {
        setTokenValid(true);
        navigate("/admin/home");
        // var navigate = UseNavigationNavigate({to="/admin/home"})

    }

    return (
    <div className={styles.login}>
        
        <div className={styles.loginArea}>
                <div className={styles.loginHeader}>
                        <div className={styles.cpLogo}><span>CP</span></div> 
                </div>

                <div className={styles.loginFormArea}>
                    <div className={styles.longAreaLogo}>
                        <span className={styles.longLogoFirstLetter}>C</span>
                        <span className={styles.longLogoBody}>arRental</span> 
                        <span className={styles.longLogoFirstLetter}> A</span>
                        <span className={styles.longLogoBody}>dmin</span>
                    </div>
                    <div className={styles.formLine}>
                        <div className={styles.inputPairs}>
                            <span className={hasUsernameFocus? styles.focusedIcon : styles.IconDefault}><FontAwesomeIcon icon={faUser} /></span>
                            <input onBlur={() => setUsernameFocus(false)} onFocus={() => setUsernameFocus(true)} type="text" placeholder='Username or mail' />
                        </div>
                    </div>

                    <div className={styles.formLine}>
                        <div className={styles.inputPairs}>
                            <span className={hasPasswordFocus? styles.focusedIcon : styles.IconDefault}><FontAwesomeIcon icon={faLock} /></span>
                            <input onBlur={() => setPasswordFocus(false)} onFocus={() => setPasswordFocus(true)}  type="Password" placeholder='Password' />
                        </div>
                    </div>

                    <div className={styles.buttonArea}>
                         <button className={styles.submitBtn} onClick={() => /*createAlert({alertType: 'error', alertMessage: 'Alert MEssage', visibility: true}) */signIn(true) }>Sign In</button>
                    </div>
                </div>
        </div>

    </div>
    );
}


export default Login;