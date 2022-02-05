import styles from './SidebarMenu.module.css';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faChartArea, faChartBar, faChartLine, faChartPie, faCog, faEnvelope, faHome, faMailBulk, faPalette, faUser, faUserCog, faUsers, faUsersSlash } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';


const SidebarMenu = ({isExpanded}) => {

    useEffect(() => { 
    }, [isExpanded]);

    return <div className={styles.sidebarMenu}>

        <div className={styles.menuBlock}>
            <h4 className={`${styles.menuTitle} ${isExpanded? styles.menuTextDisplay: styles.menuTextHide}  `}>MAIN</h4>
           
            <ul className={styles.menuList}>
                <li className={styles.MenuItem}>
                    <a href='#' title='Home' className={`${isExpanded? styles.menuHyp: styles.menuHypNotExpanded} `}>
                        <FontAwesomeIcon className={`${isExpanded? styles.menuIcon: styles.menuIconNotExpanded} `} icon={faHome} />
                        <span className={`${isExpanded? styles.menuTextDisplay: styles.menuTextHide} `}>Home</span>
                    </a> 
                </li>
                <li className={styles.MenuItem}>
                    <a href='#' className={`${isExpanded? styles.menuHyp: styles.menuHypNotExpanded} `}>
                        <FontAwesomeIcon className={`${isExpanded? styles.menuIcon: styles.menuIconNotExpanded} `}icon={faChartLine} />
                        <span className={`${isExpanded? styles.menuTextDisplay: styles.menuTextHide} `}>Statistics</span>
                    </a>
                </li>
                
                <li className={styles.MenuItem}>
                    <a href='#' className={`${isExpanded? styles.menuHyp: styles.menuHypNotExpanded} `}>
                        <FontAwesomeIcon className={`${isExpanded? styles.menuIcon: styles.menuIconNotExpanded} `}icon={faEnvelope} />
                        <span className={`${isExpanded? styles.menuTextDisplay: styles.menuTextHide} `}>Mail</span>
                    </a>
                </li>
            </ul>

        </div>


        <div className={styles.menuBlock}>
            <h4 className={`${styles.menuTitle} ${isExpanded? styles.menuTextDisplay: styles.menuTextHide} `}>USERS</h4>
            <hr className={isExpanded? styles.brHidden: styles.brVisible} />

            <ul className={styles.menuList}>
                <li className={styles.MenuItem}>
                    <a href='#' className={`${isExpanded? styles.menuHyp: styles.menuHypNotExpanded} `}>
                        <FontAwesomeIcon className={`${isExpanded? styles.menuIcon: styles.menuIconNotExpanded} `}icon={faUsers} />
                        <span className={`${isExpanded? styles.menuTextDisplay: styles.menuTextHide} `}>Registered Users</span>
                    </a>
                </li>
                <li className={styles.MenuItem}>
                    <a href='#' className={`${isExpanded? styles.menuHyp: styles.menuHypNotExpanded} `}>
                        <FontAwesomeIcon className={`${isExpanded? styles.menuIcon: styles.menuIconNotExpanded} `}icon={faUsersSlash} />
                        <span className={`${isExpanded? styles.menuTextDisplay: styles.menuTextHide} `}>Blocked Users</span>
                    </a>
                </li>
                <li className={styles.MenuItem}>
                    <a href='#' className={`${isExpanded? styles.menuHyp: styles.menuHypNotExpanded} `}>
                        <FontAwesomeIcon className={`${isExpanded? styles.menuIcon: styles.menuIconNotExpanded} `}icon={faUserCog} />
                        <span className={`${isExpanded? styles.menuTextDisplay: styles.menuTextHide} `}>User Roles</span>
                    </a>
                </li>
                <li className={styles.MenuItem}>
                    <a href='#' className={`${isExpanded? styles.menuHyp: styles.menuHypNotExpanded} `}>
                        <FontAwesomeIcon className={`${isExpanded? styles.menuIcon: styles.menuIconNotExpanded} `}icon={faChartPie} />
                        <span className={`${isExpanded? styles.menuTextDisplay: styles.menuTextHide} `}> User Statistics</span>
                    </a>
                </li>
            </ul>

        </div>


        <div className={styles.menuBlock}>
            <h4 className={`${styles.menuTitle} ${isExpanded? styles.menuTextDisplay: styles.menuTextHide} `}>SETTINGS</h4>
            <hr className={isExpanded? styles.brHidden: styles.brVisible} />

            <ul className={styles.menuList}>
                <li className={styles.MenuItem}>
                    <a href='#' className={`${isExpanded? styles.menuHyp: styles.menuHypNotExpanded} `}>
                        <FontAwesomeIcon className={`${isExpanded? styles.menuIcon: styles.menuIconNotExpanded} `}icon={faCog} />
                        <span className={`${isExpanded? styles.menuTextDisplay: styles.menuTextHide} `}>Settings</span>
                    </a>
                </li>
                <li className={styles.MenuItem}>
                    <a href='#' className={`${isExpanded? styles.menuHyp: styles.menuHypNotExpanded} `}>
                        <FontAwesomeIcon className={`${isExpanded? styles.menuIcon: styles.menuIconNotExpanded} `}icon={faPalette} />
                        <span className={`${isExpanded? styles.menuTextDisplay: styles.menuTextHide} `}> Colors</span>
                    </a>
                </li> 
            </ul>

        </div>

    </div>
}


export default SidebarMenu;