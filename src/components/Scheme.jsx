import React from 'react'
import styles from "../style";

const Scheme = () => {
    return(
        <div>
            <div className={`${styles.inputContainer}`}>
                <div className="w-1/3">
                    <label htmlFor="">Scheme</label>
                </div>
                <div className="w-2/3">
                    <select
                        className={`${styles.formInput} text-gray-400 w-10/12`}
                    >
                        <option value="" label="Scheme Name" />
                        <option label="Blue Chip Mutual Fund" value="blue-chip-mutual-fund" />
                    </select>
                </div>
            </div>
            <div className={`${styles.inputContainer}`}>
                <div className="w-1/3">
                    <label htmlFor="">Option</label>
                </div>
                <div className="w-2/3">
                    <select
                        value={"Choose Folio no."}
                        disabled={true}
                        className={`${styles.formInput} text-gray-600 bg-gray-400 w-10/12`}
                    >
                        <option value="" label="Growth" />
                        <option value="red" label="red" />
                        <option value="blue" label="blue" />
                        <option value="green" label="green" />
                    </select>
                </div>
            </div>
        </div>
    )
}
export default Scheme
