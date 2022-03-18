import styles from "./VipItem.module.css";
import Jeep from '../../../../Images/HomeSlideImages/Jeep.png';
import { forwardRef, useEffect } from "react";


const VipItem = forwardRef(({ outerClass, id }, ref) => {

    useEffect(() => {
        console.log(ref);
    }, [])
    return <div className={`${styles.vipItem} ${outerClass}`} id={id} ref={ref}>
        <img src={Jeep} className={styles.vipItemImage} />
        <div className={styles.descrp}>
            <div className={styles.citYear}>
                <span>თბილისი</span>
                <span>2016</span>
            </div>

            <span className={styles.title}>BMW M3</span>
            <div className={styles.typesArea}>
                <span>Jeep</span>
                <span>Hibryd</span>
            </div>

            <div className={styles.priceField}>
                <span>94, 500</span>
                <span>E</span>
                <span> - Per day</span>
            </div>
        </div>
    </div>
}
)
export default VipItem;