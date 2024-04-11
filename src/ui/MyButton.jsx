import styles from './MyButton.module.css'

export default function (props) {
    
    const typeButton = props.typeBtn ? styles[props.typeBtn] : styles.info
    return (
        <button
            className={`${styles.base} ${typeButton}`}
            onClick={props.handler}
        >
            {props.text}
        </button>
    )
}

