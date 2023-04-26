import React from 'react'
import styles from "../style";
import {InvestingThrough} from "./index";
import text from '../constants/index'
const Folio = () => {
    return(
        <div className="folio-container m-8 box-border border-2 border-black p-8 rounded">
            <div className="">
                <div className="text-2xl font-bold flex items-center">
                    {text.folio_heading} &nbsp;<img src="./exclamation-mark-inside-a-circle-svgrepo-com.svg" alt="" style={{height:"20px"}}/>
                </div>
                <div className="my-4">
                    {text.folio_subheading}
                </div>
                <hr className={`${styles.line}`}/>
                <form action="">
                    <div className="flex">
                        <select
                            value={"Choose Folio no."}
                            className={`${styles.formInput} w-1/5 md:w-1/4 sm:w-1/3 xs:w-1/2`}
                        >
                            <option value="" label="Choose Folio no" />
                            <option value="BlackSalt" label="SNP11289078R" />
                        </select>
                        <div className="mx-8">
                            OR
                        </div>
                        <button className="xs:w-1/2 w-1/5 border-amber-400 border-2 rounded text-amber-400 h-8 bg-transparent">
                            {text.proceed_with_a_new_folio_button}
                        </button>
                    </div>
                    <div className="mt-4">
                        {text.investing_through}
                    </div>
                    <InvestingThrough/>
                </form>
            </div>
        </div>
    )
}
export default Folio