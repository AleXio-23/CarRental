import { useEffect, useRef, useState } from 'react'; 
import AuthorizedDrop from './AuthorizedDrop/AuthorizedDrop';
import styles from './Header.module.css';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import { ReactComponent as LogoSvg } from './logo.svg';
import UnauthorizedDrop from './UnauthorizedDrop/UnauthorizedDrop';

const Header = () => {

    const [isAuthorised, setAuthorised] = useState(false);
    const [isHeaderLogUserAreaOpen, setHeaderLogUserAreaOpen] = useState(false);
 
    const ref = useRef(null);

    const handleClickOutside = (event) => {
 
        if (ref.current && ref.current.contains(event.target)) { 
            setHeaderLogUserAreaOpen(true);
        } else {  
            setHeaderLogUserAreaOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);


    useEffect(() => {
        var item = localStorage.getItem('tokenData');
        if(item === null || item === undefined) {
            setAuthorised(false);
        } else {
            setAuthorised(true);
        }
    }, []);

    console.log(localStorage.getItem('tokenData'));


    return <div className={styles.header}>
        <div className={styles.headerContent}>
            <div className={styles.headerLogo}>
                
                <div className={styles.svgLogoArea}> 
                    <LogoSvg  className={styles.headerLogoSvg}/>
                   
                </div>
                
                <div className={styles.logoText}>
                    <span>Car</span>
                    <span>Rental</span>
                </div>
            </div>



        <div className={styles.headerLeftSide}>
            
            <div className={styles.menuArea}> 
                <HeaderMenu />  
            </div>

          <div ref={ref} className={styles.headerUserArea}> 
                {
                    isAuthorised?
                    <div className={`${styles.authorizedHeaderMenu}   `}>
                        reg
                    </div>
                    :
                    <div className={`${styles.signInBtn}   `} >Sign In</div>
                }    

                <div className={`${styles.headerDropDownArea} ${isHeaderLogUserAreaOpen? styles.headerDropDownAreaOpened : styles.headerDropDownAreaClosed} `}>
                    
                     {
                         isAuthorised?
                         <AuthorizedDrop/> : <UnauthorizedDrop/>
                     }
                </div>
            </div>


        </div>
            
            
    </div>

        
 </div>

}

export default Header;