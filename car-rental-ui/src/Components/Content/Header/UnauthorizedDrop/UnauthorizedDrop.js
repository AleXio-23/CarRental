import styles from './UnauthorizedDrop.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock  } from '@fortawesome/free-solid-svg-icons';
import iconGoogle from '../../../../Images/Socials/iconGoogle.png'
import iconFacebook from '../../../../Images/Socials/iconFacebook.png'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authorizeAction } from '../../../../Modules/User/Authorize/Action';
import { decodeJwtToken, IsTokenValid, useTokenValidation } from '../../../../Tools/Helpers/jwtTokenHelper';
import { tokenValidationAction } from '../../../../Modules/User/TokenValidation/Action';
import { Link } from 'react-router-dom';

const UnauthorizedDrop = ({checkSuccessfulSignIn}) => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const dispatch = useDispatch();

    const authorizedDataSelector = useSelector(state => state.authorize);     
    

    const SignInHandler = () => {
        dispatch(authorizeAction.get(userEmail, userPassword));
    }

    useEffect(() => {
        if(authorizedDataSelector.data?.token !==  undefined) { 
            localStorage.setItem("tokenData", JSON.stringify(authorizedDataSelector.data));        
            checkSuccessfulSignIn();
        }
    }, [authorizedDataSelector])

    const checkToken = useSelector(state => state.tokenValidate);
    
    useEffect(() => {
        dispatch(tokenValidationAction.get());

    }, []);

    
    useEffect(() => { 
    }, [checkToken]);

    return <div className={styles.AuthorizedDrop}>
            <div className={styles.inputPairs}>
                <label className={styles.labelForInput} >User</label>
                <div className={styles.inputWrapper}  >
                    <div className={styles.inputIcon}>
                     <FontAwesomeIcon icon={faUser} />
                    </div>
                    <input className={styles.inputBox} onChange={(e) => setUserEmail(e.target.value)} type='text' placeholder='Username or mail'/>
                </div>
            </div>

            
            <div className={styles.inputPairs}>
                <label className={styles.labelForInput} >Password</label>
                <div className={styles.inputWrapper}  >
                    <div className={styles.inputIcon}>
                        <FontAwesomeIcon icon={faLock} />
                    </div>
                    <input className={styles.inputBox} onChange={(e) => setUserPassword(e.target.value)} type='password' placeholder='Password'/>
                </div>
            </div>


            <div className={styles.authorizeBtns}>
                <a href='#' className={styles.rememberPass}>Forgot password?</a>
                <a href='#' className={styles.signInBtn} onClick = {() => SignInHandler()}>Sign In</a>
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
            <Link to={"/register"} className={`${styles.loginBtn} ${styles.signUpBtn}`}>
                <span className={styles.registerIcon}>Cr</span>
                 <span className={styles.socialBtnText}> 
                    Sign Up
                </span>
            </Link> 
        </div>

    </div>
}

export default UnauthorizedDrop;