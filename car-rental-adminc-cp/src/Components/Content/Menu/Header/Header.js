import styles from './Header.module.css';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faBars, faCog, faSearch, faSignOutAlt, faSortDown, faSortUp, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import noAvatar from '../../../../Images/noAvatar.png'


const Header = ( {isExpanded, setExpanded}) => {

    return <div className={styles.Header}>
        <div className={styles.HeaderBarIconContent}  onClick={() => setExpanded(!isExpanded)}>
            <FontAwesomeIcon className={styles.headerBarsIcon} icon={faBars}
            />
        </div>

        <div className={styles.SearchArea}>
            <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
            <input type='text' className={styles.searchInput} placeholder='Click and type to search anywhere' />
        </div>

        <div className={styles.headerProfile}>
            <div className={styles.profileContent}>
                <img src={noAvatar} className={styles.prifileImage} alt="header no avatar"/>
                <span className={styles.headerUserInfo}>John Doe</span>
                <FontAwesomeIcon icon={faSortDown} className={styles.avatarArrow}/>
            </div>

            <div className={styles.profileDropDownContent}>
                
                <ul className={styles.profileDropdownMenu}>
                    <li><FontAwesomeIcon icon={faUserAlt}/>Profile</li>
                    <li><FontAwesomeIcon icon={faCog}/>Settings</li>
                    <hr />
                    <li><FontAwesomeIcon icon={faSignOutAlt}/>Log out</li>
                </ul>
            </div>
        </div>
    </div>
}

export default Header;