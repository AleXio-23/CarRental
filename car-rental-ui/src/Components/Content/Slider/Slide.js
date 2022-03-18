import styles from './Slide.module.css';
import { useEffect, useRef, useState } from 'react';
import bicycle from '../../../Images/HomeSlideImages/bicycle.png'
import Jeep from '../../../Images/HomeSlideImages/Jeep.png'
import Sedan from '../../../Images/HomeSlideImages/Sedan.png'
import clsx from 'clsx'
import backgroundCityCar from '../../../Images/HomeSlideImages/backgroundCityCar.jpg'
import backgroundBike from '../../../Images/HomeSlideImages/backgroundBike.jpg'
import backgroundOffroad from '../../../Images/HomeSlideImages/backgroundOffroad.jpg'
import Filter from '../Filter/Filter';

const Slide = () => {
    const sliderRef = useRef();


    const [style, setStyle] = useState({
        root: styles.sliderArea
    })

    const [imgStyles, setImgStyles] = useState({
        sedan: clsx(''),
        jeep: clsx(''),
        bicycle: clsx('')
    });



    const [sliderImageBoxStyles, setSliderImageBoxStyles] = useState({
        //  root: styles.sliderImagesBox
        root: clsx(styles.sliderImagesBox)
    });

    const [sliderTitle, setSliderTitle] = useState({
        root: clsx(styles.sliderTitle)
    })




    const [textStyles, setTextStyles] = useState({
        text1: '',
        text2: '',
        text3: ''
    });


    const [backgroundImgStyles, setBackgroundImgStyles] = useState({
        bg1: '',
        bg2: '',
        bg3: ''
    });

    const onStartSlider = () => {
        setBackgroundImgStyles({
            bg1: styles.sliderBacgroundsShow,
            bg2: styles.bgDefaults,
            bg3: styles.bgDefaults
        });
        setTextStyles({
            text1: styles.textShow,
            text2: styles.textDefaults,
            text3: styles.textDefaults
        });
        setImgStyles({
            sedan: clsx(styles.imgCarsSetvisible),
            jeep: clsx(styles.carImagesDefault),
            bicycle: clsx(styles.carImagesDefault)
        });
    }
    const SecondSlider = () => {
        setBackgroundImgStyles({
            bg1: styles.bgDefaults,
            bg2: styles.sliderBacgroundsShow,
            bg3: styles.bgDefaults
        });
        setTextStyles({
            text1: styles.textDissapear,
            text2: styles.textShow,
            text3: styles.textDefaults
        });
        setImgStyles({
            sedan: clsx(styles.imgCarsSetInvisible),
            jeep: clsx(styles.imgCarsSetvisible),
            bicycle: clsx(styles.carImagesDefault)
        });
    }


    const ThirdSlider = () => {
        setBackgroundImgStyles({
            bg1: styles.bgDefaults,
            bg2: styles.bgDefaults,
            bg3: styles.sliderBacgroundsShow
        });
        setTextStyles({
            text1: styles.textDissapear,
            text2: styles.textDissapear,
            text3: styles.textShow
        });
        setImgStyles({
            sedan: clsx(styles.imgCarsSetInvisible),
            jeep: clsx(styles.imgCarsSetInvisible),
            bicycle: clsx(styles.imgCarsSetvisible)
        });
    }

    const [currentSlide, setCurrentSlide] = useState(1);

    // var sliderVar = setInterval(function () {
    //     if (currentSlide === 1) {
    //         SecondSlider();
    //         setCurrentSlide(2);
    //     }
    //     if (currentSlide === 2) {
    //         ThirdSlider();
    //         setCurrentSlide(3);
    //     }
    //     if (currentSlide === 3) {
    //         onStartSlider();
    //         setCurrentSlide(1);
    //     }
    //     window.clearInterval(sliderVar);
    // }, 1000);

    const infinitySliding = () => {
        onStartSlider();


        // setTimeout(function(){       
        //     SecondSlider();

        //     setTimeout(function(){ 
        //         ThirdSlider();

        //         setTimeout(function(){ 
        //             return infinitySliding();
        //           }, 4000);
        //       }, 4000);
        //   }, 4000);


    }

    useEffect(() => {
        infinitySliding();

    }, []);


    return <div className={styles.slide} ref={sliderRef}>

        <div className={styles.sliderImagesBg}>
            <img className={`${backgroundImgStyles.bg1}  `} src={backgroundCityCar} />
            <img className={`${backgroundImgStyles.bg2}  `} src={backgroundOffroad} />
            <img className={`${backgroundImgStyles.bg3}  `} src={backgroundBike} />
        </div>

        <div className={style.root}>
            <div className={styles.sliderContent}>
                <h1 className={sliderTitle.root}>Car Rentals</h1>

                <div className={styles.textArea}>
                    <h3 className={textStyles.text1}>With Flexible Bookings & No Hidden Fees, Secure Your Car Rental at The Best Price Now. Unbeatable Prices. No Credit Card Fees.</h3>
                    <h3 className={textStyles.text2}>Find the best rental prices on luxury, offroad, economy, and family rental cars anywhere in your country.  </h3>
                    <h3 className={textStyles.text3}>Cheap bicycle rental. Find the best deals on bicycle hire. Compare prices, read reviews, rent a bicycle with the Best Price Guarantee.</h3>
                </div>
            </div>

            <div className={sliderImageBoxStyles.root}>
                <img className={`${imgStyles.defaultStyle} ${imgStyles.sedan} `} src={Sedan} />
                <img className={`${imgStyles.defaultStyle} ${imgStyles.jeep}`} src={Jeep} />
                <img className={`${imgStyles.defaultStyle} ${imgStyles.bicycle}`} src={bicycle} />
            </div>



        </div>


        <div className={styles.filterArea}>
            <Filter />

        </div>

    </div>

}

export default Slide;