import styles from './HeaderMenu.module.css';


const HeaderMenu = () => {

    return <ul className={styles.headerMenu}>
        <li className={styles.menuList}><a href='#'>Home</a></li>
        <li className={styles.menuList}><a href='#'>About</a></li>        
        <li className={styles.menuList}><a href='#'>Contact</a></li>
    </ul>
}

export default HeaderMenu;  