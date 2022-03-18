
import { useEffect, useState } from 'react';
import styles from './AnimatedInput.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const AnimatedInput = ({
    inputType,
    placeholderText,
    inputId,
    isFocused,
    setUserNameFieldValue,
    passwordTypeShower,
    requiredIsEmpty
}) => {

    const [hasInputValue, setInputValueHaveOrNot] = useState(false);


    const onChangeHandler = (value) => {
        setUserNameFieldValue(value); 
        if (value?.length > 0) {
            setInputValueHaveOrNot(true);
        } else {
            setInputValueHaveOrNot(false);
        }
    }

    useEffect(() => {
        if (isFocused === true) {
            document.getElementById(inputId).focus();
        }
    }, [isFocused]);


    const [inputTypeForPw, setInputTypeForPw] = useState(inputType);
    const onEyeSlashClick = () => {
        setInputTypeForPw("text");
    }

    const onEyeClick = () => {
        setInputTypeForPw("password");
    }

    return inputType !== "password" ?
        <div className={`${styles.customInputPair} ${isFocused ? styles.customInputPairFocused : ''}
                ${requiredIsEmpty ? styles.inputPairRequired : ''}`}  >
            <label
                className={`
                    ${styles.inputLabel} 
                    ${isFocused ? styles.focusedLabel : ''} 
                    ${hasInputValue ? styles.filledInputLabelStyle : ''} 
                    ${requiredIsEmpty ? styles.labelReqiredSet : ''}
                `}
                htmlFor={inputId}>
                {placeholderText}
            </label>
            <input
                className={`
                    ${styles.formInput} 
                    ${isFocused || hasInputValue ? styles.focusedInput : styles.formInputLostFocus} 
                   
            `} type={inputType} id={inputId} onChange={(e) => onChangeHandler(e.target.value)} />
        </div>
        :

        <div className={`${styles.customInputPair} ${isFocused ? styles.customInputPairFocused : ''}  ${requiredIsEmpty ? styles.inputPairRequired : ''} `}  >
            <label className={`${styles.inputLabel} ${isFocused ? styles.focusedLabel : ''}  ${requiredIsEmpty ? styles.labelReqiredSet : ''} ${hasInputValue ? styles.filledInputLabelStyle : ''} `} htmlFor={inputId}>{placeholderText}</label>
            <div className={styles.passwordTypeInputStyle}>
                <input className={`${styles.formInput} ${isFocused || hasInputValue ? styles.focusedInput : styles.formInputLostFocus} `} type={inputTypeForPw} id={inputId} onChange={(e) => onChangeHandler(e.target.value)} />
                <FontAwesomeIcon
                    icon={faEyeSlash}
                    className={`${styles.passwordShowEye}  ${(isFocused && inputTypeForPw === "password") || (hasInputValue && inputTypeForPw === "password") ? styles.passwordShowEyeFocused : ''} `}
                    onClick={() => onEyeSlashClick()}
                />
                <FontAwesomeIcon
                    icon={faEye}
                    className={`${styles.passwordShowEye}  ${(isFocused && inputTypeForPw === "text") || (hasInputValue && inputTypeForPw === "text") ? styles.passwordShowEyeFocused : ''} `}
                    onClick={() => onEyeClick()}
                />
            </div>
        </div>


}

export default AnimatedInput;