import { useEffect, useRef, useState } from 'react';
import AnimatedInput from '../Shared/AnimatedInput/AnimatedInput';
import AnimateInputich from '../Shared/AnimateInputich/AnimateInputich';
import styles from './Register.module.css';
import iconGoogle from '../../../Images/Socials/iconGoogle.png';
import iconFacebook from '../../../Images/Socials/iconFacebook.png';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from '../../../Modules/User/Register/Action';
import RegisterCompleted from './RegisterCompleted/RegisterCompleted';

const Register = () => {

    const [isUserNameFieldFocused, setUserNameFieldFocused] = useState(false);
    const [userNameFieldValue, setUserNameFieldValue] = useState("");

    var refForUserNameField = useRef();
    const handleClickOutsideUserName = (event) => {

        if (refForUserNameField.current && refForUserNameField.current.contains(event.target)) {
            setUserNameFieldFocused(true);
        } else {

            setUserNameFieldFocused(false);

        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutsideUserName, true);
        return () => {
            document.removeEventListener('click', handleClickOutsideUserName, true);
        };
    }, [userNameFieldValue]);


    // Mail
    const [isMailFieldFocused, setMailFieldFocused] = useState(false);
    const [mailFieldValue, setMailFieldValue] = useState("");

    var refForMailField = useRef();
    const handleClickOutsideMail = (event) => {

        if (refForMailField.current && refForMailField.current.contains(event.target)) {
            setMailFieldFocused(true);
        } else {

            setMailFieldFocused(false);

        }
    };

    useEffect(() => {

        document.addEventListener('click', handleClickOutsideMail, true);
        return () => {
            document.removeEventListener('click', handleClickOutsideMail, true);
        };
    }, [mailFieldValue]);


    // Password
    const [isPasswordFieldFocused, setPasswordFieldFocused] = useState(false);
    const [passwordFieldValue, setPasswordFieldValue] = useState("");

    var refForPasswordField = useRef();
    const handleClickOutsidePassword = (event) => {

        if (refForPasswordField.current && refForPasswordField.current.contains(event.target)) {
            setPasswordFieldFocused(true);
        } else {
            setPasswordFieldFocused(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutsidePassword, true);
        return () => {
            document.removeEventListener('click', handleClickOutsidePassword, true);
        };
    }, [passwordFieldValue]);

    // repeat password
    const [isPasswordRepeatFieldFocused, setPasswordRepeatFieldFocused] = useState(false);
    const [passwordRepeatFieldValue, setPasswordRepeatFieldValue] = useState("");

    var refForPasswordRepeatField = useRef();
    const handleClickOutsidePasswordRepeat = (event) => {

        if (refForPasswordRepeatField.current && refForPasswordRepeatField.current.contains(event.target)) {
            setPasswordRepeatFieldFocused(true);
        } else {
            setPasswordRepeatFieldFocused(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutsidePasswordRepeat, true);
        return () => {
            document.removeEventListener('click', handleClickOutsidePasswordRepeat, true);
        };
    }, [passwordRepeatFieldValue]);



    const [mailIsRequired, setMailRequired] = useState(false);
    const [passwordIsRequired, setPasswordRequired] = useState(false);
    const [repeatPasswordIsRequired, setRepeatPasswordIsRequired] = useState(false);


    const dispatch = useDispatch();
    const registerSelector = useSelector(state => state.registration);

    const registerHandler = () => {
        dispatch(registerAction.get(userNameFieldValue, mailFieldValue, passwordFieldValue));
    }

    const navigate = useNavigate();
    useEffect(() => {
        // console.log(registerSelector);
        if (registerSelector.data.succees === true) {
            navigate("/register/completed", { state: { paramEmail: "asd123" } });

        }
    }, [registerSelector])


    const OnSignUpSubmitClickEvent = () => {
        if (mailFieldValue.length < 1) {
            setMailRequired(true);
            return;
        }
        if (passwordFieldValue.length < 1) {
            setPasswordRequired(true);
            return;
        }
        if (passwordRepeatFieldValue.length < 1) {
            setRepeatPasswordIsRequired(true);
            return;
        }

        registerHandler();

    }

    useEffect(() => {
        setMailRequired(false);
    }, [mailFieldValue]);

    useEffect(() => {
        setPasswordRequired(false);
    }, [passwordFieldValue]);

    useEffect(() => {
        setRepeatPasswordIsRequired(false);
    }, [passwordRepeatFieldValue]);



    const [checkPwStrength, setpwStrength] = useState({
        weak: false,
        medium: false,
        strong: false
    });

    useEffect(() => {
        if (passwordFieldValue.length > 0) {
            passCheckerMeth(passwordFieldValue);
        } else {
            setpwStrength({
                weak: false,
                medium: false,
                strong: false
            });
        }
    }, [passwordFieldValue]);

    const contailsLowerCases = (txt) => {
        return /[a-z]/.test(txt);
    }

    const containsUpperCases = (txt) => {
        return /[A-Z]/.test(txt);
    }

    const containsNumbers = (txt) => {
        return /[0-9]/.test(txt);
    }

    const containsSpecialCharacters = (txt) => {
        return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(txt);
    }

    const passCheckerMeth = (pw) => {
        if (pw.length < 6) {
            setpwStrength({
                weak: true,
                medium: false,
                strong: false
            });
            return;
        }

        if (contailsLowerCases(pw) !== true && containsUpperCases(pw) !== true && containsNumbers(pw) !== true && containsSpecialCharacters(pw) !== true) {
            setpwStrength({
                weak: true,
                medium: false,
                strong: false
            });
            return;
        }



        if ((contailsLowerCases(pw) === true && containsUpperCases(pw) !== true && containsNumbers(pw) !== true && containsSpecialCharacters(pw) !== true)
            || (contailsLowerCases(pw) !== true && containsUpperCases(pw) === true && containsNumbers(pw) !== true && containsSpecialCharacters(pw) !== true)
            || (contailsLowerCases(pw) !== true && containsUpperCases(pw) !== true && containsNumbers(pw) === true && containsSpecialCharacters(pw) !== true)
            || (contailsLowerCases(pw) !== true && containsUpperCases(pw) !== true && containsNumbers(pw) !== true && containsSpecialCharacters(pw) === true)) {
            setpwStrength({
                weak: true,
                medium: false,
                strong: false
            });
            return;
        }

        if ((contailsLowerCases(pw) === true && containsUpperCases(pw) === true && containsNumbers(pw) !== true && containsSpecialCharacters(pw) !== true)
            || (contailsLowerCases(pw) === true && containsUpperCases(pw) !== true && containsNumbers(pw) === true && containsSpecialCharacters(pw) !== true)
            || (contailsLowerCases(pw) === true && containsUpperCases(pw) !== true && containsNumbers(pw) !== true && containsSpecialCharacters(pw) === true)) {
            setpwStrength({
                weak: false,
                medium: true,
                strong: false
            });
            return;
        }

        if ((contailsLowerCases(pw) === true && containsUpperCases(pw) === true && containsNumbers(pw) === true && containsSpecialCharacters(pw) === true)) {
            setpwStrength({
                weak: false,
                medium: false,
                strong: true
            });
            return;
        }


        setpwStrength({
            weak: false,
            medium: true,
            strong: false
        });
        return;


    }

    return <div className={styles.register} id="register-area">

        <div className={styles.formArea}>
            <div><span>User Registration</span></div>

            <form className={styles.registrationForm}>
                <div className={styles.formInput} ref={refForUserNameField}>
                    <AnimatedInput
                        inputType={"text"}
                        placeholderText="Username"
                        inputId={"userNameInputId"}
                        isFocused={isUserNameFieldFocused}
                        setUserNameFieldValue={setUserNameFieldValue}
                    />
                </div>
                <div className={styles.formInput} ref={refForMailField}>
                    <AnimatedInput
                        inputType={"mail"}
                        placeholderText="Mail*"
                        inputId={"mailInputId"}
                        isFocused={isMailFieldFocused}
                        setUserNameFieldValue={setMailFieldValue}
                        requiredIsEmpty={mailIsRequired}
                    />
                </div>


                <div className={styles.passwordWithCkecker}>
                    <div className={styles.formInput} ref={refForPasswordField}>
                        <AnimatedInput
                            inputType={"password"}
                            placeholderText="Password*"
                            inputId={"passwordInputId"}
                            isFocused={isPasswordFieldFocused}
                            setUserNameFieldValue={setPasswordFieldValue}
                            passwordTypeShower={true}
                            requiredIsEmpty={passwordIsRequired}
                        />
                    </div>
                    <div className={`${styles.passCheckerBar} ${isPasswordFieldFocused ? styles.showPwCheckerBar : styles.hidePwChekerBar}`}>
                        <div className={styles.passwordStrengthArea}>
                            <span className={styles.passwordCheckerSpan}>pasword is: {
                                checkPwStrength.weak ? "Weak" :
                                    (checkPwStrength.medium ? "Medium" : (
                                        checkPwStrength.strong ? "Strong" : ""
                                    ))
                            }</span>
                            <div className={styles.strengthBarArea}>
                                <div className={`${styles.barForWeak} ${checkPwStrength.weak ? styles.pwWeak : (checkPwStrength.medium ? styles.pwMedium : (checkPwStrength.strong ? styles.pwStrong : ''))} `}></div>
                                <div className={`${styles.barForMedium} ${checkPwStrength.medium ? styles.pwMedium : (checkPwStrength.strong ? styles.pwStrong : '')}`}></div>
                                <div className={`${styles.barForStrong} ${checkPwStrength.strong ? styles.pwStrong : ''}`}></div>
                            </div>
                        </div>

                        <div className={styles.separator}></div>

                        <div className={styles.passwordRequrementsArea}>
                            <ul className={styles.requirementsUnorderedList}>
                                <li className={passwordFieldValue.length >= 6 ? styles.ifContains : styles.notContains}>
                                    <FontAwesomeIcon icon={passwordFieldValue.length >= 6 ? faCheck : faTimes} />
                                    <span>Minimum length: 6 character</span>
                                </li>
                                <li className={contailsLowerCases(passwordFieldValue) ? styles.ifContains : styles.notContains}>
                                    <FontAwesomeIcon icon={contailsLowerCases(passwordFieldValue) ? faCheck : faTimes} />
                                    <span>Contains 1  lowercase letter</span>
                                </li>
                                <li className={containsUpperCases(passwordFieldValue) ? styles.ifContains : styles.notContains}>
                                    <FontAwesomeIcon icon={containsUpperCases(passwordFieldValue) ? faCheck : faTimes} />
                                    <span>Contains 1  uppercase letter</span>
                                </li>
                                <li className={containsNumbers(passwordFieldValue) ? styles.ifContains : styles.notContains}>
                                    <FontAwesomeIcon icon={containsNumbers(passwordFieldValue) ? faCheck : faTimes} />
                                    <span>Contains 1  number</span>
                                </li>
                                <li className={containsSpecialCharacters(passwordFieldValue) ? styles.ifContains : styles.notContains}>
                                    <FontAwesomeIcon icon={containsSpecialCharacters(passwordFieldValue) ? faCheck : faTimes} />
                                    <span>Contains 1 other character</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.passwordWithCkecker}>
                    <div className={styles.formInput} ref={refForPasswordRepeatField}>
                        <AnimatedInput
                            inputType={"password"}
                            placeholderText="Repeat password*"
                            inputId={"passwordRepeatInputId"}
                            isFocused={isPasswordRepeatFieldFocused}
                            setUserNameFieldValue={setPasswordRepeatFieldValue}
                            passwordTypeShower={true}
                            requiredIsEmpty={repeatPasswordIsRequired}
                        />
                    </div>
                    <div className={`${styles.passCompareBar} ${isPasswordRepeatFieldFocused ? styles.showPwCheckerBar : styles.hidePwChekerBar}`} >
                        {passwordFieldValue !== passwordRepeatFieldValue ?
                            <span className={styles.pwComparerFailed}> <FontAwesomeIcon icon={faTimes} />  Passwords not match</span> : (
                                passwordFieldValue === passwordRepeatFieldValue ?
                                    <span className={styles.pwComparerSuccess}><FontAwesomeIcon icon={faCheck} />  Passwords matches</span> : <span>Unexpected error occured</span>
                            )}
                    </div>
                </div>

                <div className={styles.signUpSubmitBtns}>


                    <div className={styles.registerBtn}>
                        <a onClick={() => OnSignUpSubmitClickEvent()} className={`${styles.loginBtn} ${styles.signUpBtn}`}>

                            <span className={styles.signUpText}>
                                Sign Up
                            </span>
                        </a>
                    </div>
                    <div className={styles.separatorLine}>
                        <div className={styles.strike}>
                            <span>Or</span>
                        </div>
                    </div>
                    <div className={styles.socialBtns}>
                        <a className={`${styles.loginBtn} ${styles.loginBtnFacebook}`} >
                            <img src={iconFacebook} className={styles.iconFacebookSt} />
                            <span className={styles.socialBtnText}>
                                Sign Up with Facebook
                            </span>
                        </a>

                        <a className={`${styles.loginBtn} ${styles.loginBtnGoogle}`}>
                            <img src={iconGoogle} className={styles.iconGoogleSt} />
                            <span className={styles.socialBtnText}>
                                Sign Up with Google
                            </span>
                        </a>
                    </div>



                </div>


            </form>
        </div>

    </div>
}

export default Register;