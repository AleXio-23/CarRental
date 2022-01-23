import styles from './Header.module.css';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
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
                <span>John Doe</span>
                <FontAwesomeIcon icon={faSortDown} className={styles.avatarArror}/>
            </div>

            <div className={styles.profileDropDownContent}>
                
                <ul className={styles.profileDropdownMenu}>
                    <li>Profile</li>
                    <li>Settings</li>
                    <hr />
                    <li>Log out</li>
                </ul>
            </div>
        </div>
    </div>
}

export default Header;