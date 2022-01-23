import styles from './SidebarMenu.module.css';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faChartArea, faChartBar, faChartLine, faChartPie, faCog, faEnvelope, faHome, faMailBulk, faPalette, faUser, faUserCog, faUsers, faUsersSlash } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';


const SidebarMenu = ({isExpanded}) => {

    useEffect(() => { 
    }, [isExpanded]);

    return <div className={styles.sidebarMenu}>

        <div className={styles.menuBlock}>
            <h4 className={[styles.menuTitle,isExpanded? styles.menuTextDisplay: styles.menuTextHide].join(' ')}>MAIN</h4>
           
            <ul className={styles.menuList}>
                <li className={styles.MenuItem}>
                    <a href='#' className={[isExpanded? styles.menuHyp: styles.menuHypNotExpanded].join(' ')}>
                        <FontAwesomeIcon className={[isExpanded? styles.menuIcon: styles.menuIconNotExpanded].join(' ')} icon={faHome} />
                        <span className={[isExpanded? styles.menuTextDisplay: styles.menuTextHide].join(' ')}>Home</span>
                    </a>
                </li>
                <li className={styles.MenuItem}>
                    <a href='#' className={[isExpanded? styles.menuHyp: styles.menuHypNotExpanded].join(' ')}>
                        <FontAwesomeIcon className={[isExpanded? styles.menuIcon: styles.menuIconNotExpanded].join(' ')}icon={faChartLine} />
                        <span className={[isExpanded? styles.menuTextDisplay: styles.menuTextHide].join(' ')}>Statistics</span>
                    </a>
                </li>
                
                <li className={styles.MenuItem}>
                    <a href='#' className={[isExpanded? styles.menuHyp: styles.menuHypNotExpanded].join(' ')}>
                        <FontAwesomeIcon className={[isExpanded? styles.menuIcon: styles.menuIconNotExpanded].join(' ')}icon={faEnvelope} />
                        <span className={[isExpanded? styles.menuTextDisplay: styles.menuTextHide].join(' ')}>Mail</span>
                    </a>
                </li>
            </ul>

        </div>


        <div className={styles.menuBlock}>
            <h4 className={[styles.menuTitle,isExpanded? styles.menuTextDisplay: styles.menuTextHide].join(' ')}>USERS</h4>
            <hr className={isExpanded? styles.brHidden: styles.brVisible} />

            <ul className={styles.menuList}>
                <li className={styles.MenuItem}>
                    <a href='#' className={[isExpanded? styles.menuHyp: styles.menuHypNotExpanded].join(' ')}>
                        <FontAwesomeIcon className={[isExpanded? styles.menuIcon: styles.menuIconNotExpanded].join(' ')}icon={faUsers} />
                        <span className={[isExpanded? styles.menuTextDisplay: styles.menuTextHide].join(' ')}>Registered Users</span>
                    </a>
                </li>
                <li className={styles.MenuItem}>
                    <a href='#' className={[isExpanded? styles.menuHyp: styles.menuHypNotExpanded].join(' ')}>
                        <FontAwesomeIcon className={[isExpanded? styles.menuIcon: styles.menuIconNotExpanded].join(' ')}icon={faUsersSlash} />
                        <span className={[isExpanded? styles.menuTextDisplay: styles.menuTextHide].join(' ')}>Blocked Users</span>
                    </a>
                </li>
                <li className={styles.MenuItem}>
                    <a href='#' className={[isExpanded? styles.menuHyp: styles.menuHypNotExpanded].join(' ')}>
                        <FontAwesomeIcon className={[isExpanded? styles.menuIcon: styles.menuIconNotExpanded].join(' ')}icon={faUserCog} />
                        <span className={[isExpanded? styles.menuTextDisplay: styles.menuTextHide].join(' ')}>User Roles</span>
                    </a>
                </li>
                <li className={styles.MenuItem}>
                    <a href='#' className={[isExpanded? styles.menuHyp: styles.menuHypNotExpanded].join(' ')}>
                        <FontAwesomeIcon className={[isExpanded? styles.menuIcon: styles.menuIconNotExpanded].join(' ')}icon={faChartPie} />
                        <span className={[isExpanded? styles.menuTextDisplay: styles.menuTextHide].join(' ')}> User Statistics</span>
                    </a>
                </li>
            </ul>

        </div>


        <div className={styles.menuBlock}>
            <h4 className={[styles.menuTitle,isExpanded? styles.menuTextDisplay: styles.menuTextHide].join(' ')}>SETTINGS</h4>
            <hr className={isExpanded? styles.brHidden: styles.brVisible} />

            <ul className={styles.menuList}>
                <li className={styles.MenuItem}>
                    <a href='#' className={[isExpanded? styles.menuHyp: styles.menuHypNotExpanded].join(' ')}>
                        <FontAwesomeIcon className={[isExpanded? styles.menuIcon: styles.menuIconNotExpanded].join(' ')}icon={faCog} />
                        <span className={[isExpanded? styles.menuTextDisplay: styles.menuTextHide].join(' ')}>Settings</span>
                    </a>
                </li>
                <li className={styles.MenuItem}>
                    <a href='#' className={[isExpanded? styles.menuHyp: styles.menuHypNotExpanded].join(' ')}>
                        <FontAwesomeIcon className={[isExpanded? styles.menuIcon: styles.menuIconNotExpanded].join(' ')}icon={faPalette} />
                        <span className={[isExpanded? styles.menuTextDisplay: styles.menuTextHide].join(' ')}> Colors</span>
                    </a>
                </li> 
            </ul>

        </div>

    </div>
}


export default SidebarMenu;