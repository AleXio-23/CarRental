import styles from './UnauthorizedDrop.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock  } from '@fortawesome/free-solid-svg-icons';
import iconGoogle from '../../../../Images/Socials/iconGoogle.png'
import iconFacebook from '../../../../Images/Socials/iconFacebook.png'

const UnauthorizedDrop = () => {

    return <div className={styles.AuthorizedDrop}>
            <div className={styles.inputPairs}>
                <label className={styles.labelForInput} >User</label>
                <div className={styles.inputWrapper}  >
                    <div className={styles.inputIcon}>
                     <FontAwesomeIcon icon={faUser} />
                    </div>
                    <input className={styles.inputBox} type='text' placeholder='Username or mail'/>
                </div>
            </div>

            
            <div className={styles.inputPairs}>
                <label className={styles.labelForInput} >Password</label>
                <div className={styles.inputWrapper}  >
                    <div className={styles.inputIcon}>
                        <FontAwesomeIcon icon={faLock} />
                    </div>
                    <input className={styles.inputBox} type='password' placeholder='Password'/>
                </div>
            </div>


            <div className={styles.authorizeBtns}>
                <a href='#' className={styles.rememberPass}>Forgot password?</a>
                <a href='#' className={styles.signInBtn}>Sign In</a>
            </div>
        
        <div className={styles.separatorLine}>
            <div className={styles.strike}>
                <span>Login With</span>
            </div>
        </div>

        <div className={styles.socialBtns}> 
            <a className = {`${styles.loginBtn} ${styles.loginBtnFacebook}`} >
                <img src={iconFacebook} className={styles.iconFacebookSt}/>
                <span className={styles.socialBtnText}> 
                Login with Facebook
                </span>
            </a>

            <a  className = {`${styles.loginBtn} ${styles.loginBtnGoogle}`}>
            <img src={iconGoogle} className={styles.iconGoogleSt}/>
            <span className={styles.socialBtnText}> 
                Login with Google
                </span>
            </a>
        </div>


        <div className={styles.separatorLine}>
            <div className={styles.strike}>
                <span>Or</span>
            </div>
        </div>

        <div className={styles.socialBtns}>
            <a href='#' className={`${styles.loginBtn} ${styles.signUpBtn}`}>
                <span className={styles.registerIcon}>Cr</span>
                 <span className={styles.socialBtnText}> 
                    Sign Up
                </span>
            </a> 
        </div>

    </div>
}

export default UnauthorizedDrop;