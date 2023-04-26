import styles from "../style";

const InputHelper = ({text}) => {
    return (
        <div className={`${styles.inputHelperText}`}>
            {text}
        </div>
    )
}
export default InputHelper