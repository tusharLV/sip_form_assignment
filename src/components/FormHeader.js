import React from 'react'
import styles from "../style";

const FormHeader = ({isSIPFormSubmitted}) => {
    return(
        <div className="mx-16 flex">
            <div className={isSIPFormSubmitted? `${styles.inactiveTab}` : `${styles.activeTab}`}>Step 1: SIP</div>
            <div className={isSIPFormSubmitted? `${styles.activeTab}` : `${styles.inactiveTab}`}>Step 2: SWP</div>
        </div>
    )
}
export default FormHeader
