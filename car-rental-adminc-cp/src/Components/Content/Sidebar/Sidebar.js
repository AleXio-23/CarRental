import styles from './Sidebar.module.css';
import noAvatar from '../../../Images/noAvatar.png'
import SidebarMenu from '../Menu/SidebarMenu/SidebarMenu';
import { useEffect } from 'react';


const Sidebar = ({isExpanded}) => {

    useEffect(() => { 
    }, [isExpanded]);

    return <div className={styles.sidebar}>
        <div className={[  !isExpanded? styles.headerLogoNotExpanded: styles.headerLogo].join(' ')}>
            <span className={[ isExpanded? styles.headerProjectLogo: styles.headerProjectLogoNotExpanded].join(' ')}>
                CR
            </span>
            <span className={[styles.headerLogoTitile,isExpanded? styles.menuTextDisplay: styles.menuTextHide].join(' ')}>
                Admin Panel
            </span>
        </div>

        <div className={[styles.adminCredintials, isExpanded? styles.adminCredintialsExpanded: styles.adminCredintialsNotExpanded].join(' ')}>
            <span className={[styles.credintialName, isExpanded? styles.menuTextDisplay: styles.menuTextHide].join(' ')}>John Doe</span>
            <span className={[styles.credintialMail, isExpanded? styles.menuTextDisplay: styles.menuTextHide].join(' ')}>jDoe@carRental.com</span>
        </div>
        <div className={styles.adminAvatar}>
            <div className={[styles.avatarArea, isExpanded? styles.avatarAreaExpanded: styles.avatarAreaNotExpanded].join(' ')}>
                <img src={noAvatar} className={[isExpanded? styles.avatarImageExpanded: styles.avatarImageNotExpanded].join(' ')} alt='Avatar'/>
            </div>
        </div>

        <div className={styles.menuArea}>
            <SidebarMenu isExpanded = {isExpanded} />
        </div>
    </div>
}


export default Sidebar;