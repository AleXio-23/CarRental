import { Link } from 'react-router-dom';
import styles from './HeaderMenu.module.css';


const HeaderMenu = () => {

    return <ul className={styles.headerMenu}>
        <li className={styles.menuList}><Link to={"/"} >Home</Link></li>
        <li className={styles.menuList}><a href='#'>About</a></li>        
        <li className={styles.menuList}><a href='#'>Contact</a></li>
    </ul>
}

export default HeaderMenu;  