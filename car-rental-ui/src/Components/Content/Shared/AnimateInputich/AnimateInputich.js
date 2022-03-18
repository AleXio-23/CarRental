import styles from './AnimateInputich.module.css';


const AnimateInputich = () => {
    return <div className={styles.wrapper}>
                <input className={styles.input} id={'test'}/>
                <label className={styles.label} htmlFor="test">ragca</label>
    </div>
}

export default AnimateInputich;