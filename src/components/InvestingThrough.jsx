import React from 'react'
import styles from "../style";
import text from '../constants/index'
import {Button} from "./index";

const InvestingThrough = () => {
    return(
        <div className="flex md:my-0 my-2">
            <Button text={text.direct_button} styleClass={"md:mr-4 mr-2 rounded bg-secondary md:w-1/5 w-1/3 h-8 text-white md:text-base text-xs overflow-ellipsis whitespace-nowrap"}/>
            <Button styleClass={`${styles.formInput} md:mx-4 mx-2 md:w-1/5 w-1/3 md:text-base text-xs overflow-ellipsis whitespace-nowrap`} text={text.distributor_button}/>
            <Button styleClass={`${styles.formInput} md:mx-4 mx-2 md:w-1/5 w-1/3 md:text-base text-xs  overflow-ellipsis whitespace-nowrap`} text={text.advisor_button}/>
        </div>
    )
}
export default InvestingThrough
