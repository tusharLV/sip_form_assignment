import React from 'react'
import styles from "../style";
import text from '../constants/index'

const InvestingThrough = () => {
    return(
        <div className="flex">
            <button className="mr-4 rounded bg-secondary w-1/5 h-8 text-white">
                {text.direct_button}
            </button>
            <button className={`${styles.formInput} mx-4 w-1/5`}>
                {text.distributor_button}
            </button>
            <button className={`${styles.formInput} mx-4 w-1/5`}>
                {text.advisor_button}
            </button>
        </div>
    )
}
export default InvestingThrough
