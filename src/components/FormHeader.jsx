import React from 'react'
import styles from "../style";
import {bool} from "prop-types"
const FormHeader = ({isSIPFormSubmitted}) => {
    return(
        <div className="md:mx-16 mx-4 flex">
            <div className={isSIPFormSubmitted? `${styles.inactiveTab} mr-1` : `${styles.activeTab} mr-1`}>Step 1: SIP</div>
            <div className={isSIPFormSubmitted? `${styles.activeTab} ml-1` : `${styles.inactiveTab} ml-1`}>Step 2: SWP</div>
        </div>
    )
}
FormHeader.propTypes = {
    isSIPFormSubmitted:bool
}
export default FormHeader
