import { useRef, useState } from 'react';
import styles from './Home.module.css';
import VipItem from './VipItem/VipItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faCrown, faStar } from '@fortawesome/free-solid-svg-icons';


const Home = () => {

    const [selectedVipItem, setSelectedVipItem] = useState(8);
    const sliderRef = useRef();


    let scrollCompleted = 0;
    const slide = (direction) => {
        var container = document.getElementById('vipAreaId');
        var slideVar = setInterval(function () {
            if (direction == 'left') {
                container.scrollLeft -= 300;
            } else {
                container.scrollLeft += 300;
            }
            scrollCompleted += 300;
            if (scrollCompleted >= 1000) {
                window.clearInterval(slideVar);
            }
        }, 50);
    }


    return <div className={styles.home}>
        <div className={styles.homeContentArea}>
            <div className={styles.vipArea} >
                <div className={`${styles.sliderLeft} ${styles.sliderArrow} `} onClick={() => slide('left')} ><FontAwesomeIcon icon={faAngleLeft}/></div>
                <div className={`${styles.sliderRight} ${styles.sliderArrow} `} onClick={() => slide('right')} ><FontAwesomeIcon icon={faAngleRight}/></div>
                <div className={styles.vipAreaTitle}><FontAwesomeIcon icon={faCrown}/><span>VIP +</span></div>
                <div className={styles.vipCars}  id="vipAreaId">
                    {new Array(10).fill().map((e, index) => {
                        return <VipItem
                            outerClass={styles.singleVipItem}
                            key={index}
                            id={"slide-" + index}
                            ref={index === selectedVipItem ? sliderRef : null}
                        />
                    })

                    }
                </div>
            </div>


            <div className={styles.vipArea} >
                <div className={`${styles.sliderLeft} ${styles.sliderArrow} `} onClick={() => slide('left')} ><FontAwesomeIcon icon={faAngleLeft}/></div>
                <div className={`${styles.sliderRight} ${styles.sliderArrow} `} onClick={() => slide('right')} ><FontAwesomeIcon icon={faAngleRight}/></div>
                <div className={styles.vipAreaTitle}><FontAwesomeIcon icon={faStar}/><span>TOP Cars</span></div>
                <div className={styles.vipCars}  id="vipAreaId">
                    {new Array(10).fill().map((e, index) => {
                        return <VipItem
                            outerClass={styles.singleVipItem}
                            key={index}
                            id={"slide-" + index}
                            ref={index === selectedVipItem ? sliderRef : null}
                        />
                    })

                    }
                </div>
            </div>
        </div>

    </div>
}


export default Home;