import styles from './MyH1.module.css'
export default function(props) {
    return (
        <h1 className={styles.base}>{props.text}</h1>
    )
}

