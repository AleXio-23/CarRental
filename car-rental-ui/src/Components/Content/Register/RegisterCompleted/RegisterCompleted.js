import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from './RegisterCompleted.module.css';

const RegisterCompleted = () => {
    const loc = useLocation();
    const nav = useNavigate();
    useEffect(() => { 
        if (loc.state === null || loc.state["paramEmail"] === null || loc.state["paramEmail"] === undefined) {
            nav("/register"); 
        }
    }, []);
    
    return <div className={styles.RegisterCompleted}><span>Activation link sent on </span><a href="https://www.gmail.com/" target="_blank">{loc.state !== null? loc.state["paramEmail"]: ''}</a>. <span>Please, activate your account before sing in.</span></div>
}

export default RegisterCompleted;