import styles from './Card.module.css'

export default function ({num, onClick}) {
    useEffect
    return (
        <div className={styles.outer} onClick={onClick}>
            <div className={styles.base}>
                <p className={styles.number}>{num}</p>
                <div className={styles.buba}></div>
            </div>
        </div>
    )
}

