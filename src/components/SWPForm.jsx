import React, {useState} from 'react'
import styles from "../style";
import DatePicker from "react-datepicker";
import {AccountDetails, InputHelper, Scheme, SubmitButton, SWPStartDate} from "./index";
import text from "../constants";

const SWPForm = ({endDate,showFullSWPForm,formSubmitHandler}) => {

    const [switchDate,setSwitchDate] = useState(endDate?new Date(endDate).setDate(endDate.getDate()+15):'')
    return(
        <div className="m-16">
            <form action="">
                <div className="flex">
                    <div className="w-1/2">
                        <div className={`${styles.inputContainer}`}>
                            <div className="w-1/2">
                                <input type="radio"/><span className="px-4"> Same Scheme</span>
                            </div>
                            <div className="w-1/2">
                                <input type="radio" checked/><span className="px-4"><span>Another Scheme</span><div className="font-semibold">(One time switch required)</div></span>
                            </div>
                        </div>
                        <Scheme/>
                        <div className={`${styles.inputContainer} w-10/12 text-sm`}>
                            {text.SWP_switch_notice}
                        </div>
                        <div className={`${styles.inputContainer}`}>
                            <div className="w-1/3">
                                <label htmlFor="">
                                    {text.switch_date_label}
                                </label>
                            </div>
                            <div className="w-2/3">
                                <DatePicker
                                    dateFormat="EEE, MMMM d, yyyy"
                                    selected={switchDate}
                                    wrapperClassName="datePicker endDate"
                                    placeholderText={'DD/MM/YYYY'}
                                />
                            </div>
                        </div>
                    </div>
                    <InputHelper text={text.SWP_scheme_input_helper}/>
                </div>
                {
                    showFullSWPForm?(
                        <div>
                            <div className="flex">
                                <div className="w-1/2">
                                    <hr className={`${styles.line}`}/>
                                    <div className={`${styles.inputContainer}`}>
                                        <div className="w-1/3">
                                            <label htmlFor="">
                                                {text.SWP_frequency_label}
                                            </label>
                                        </div>
                                        <div className="w-1/3">
                                            <input type="radio" value="monthly"/><span className="px-4">Monthly</span>
                                        </div>
                                        <div className="w-1/3">
                                            <input type="radio" value="quarterly"/><span className="px-4">Quarterly</span>
                                        </div>
                                    </div>
                                    <hr className={`${styles.line}`}/>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-1/2">
                                    {text.SWP_amount_label}
                                    <div className={`${styles.inputContainer} py-4`}>
                                        <div className="w-1/3">
                                            <input type="radio" value="monthly"/><span className="px-4">Recommended</span>
                                        </div>
                                        <div className="w-1/3">
                                            <input type="radio" value="quarterly"/><span className="px-4">Custom</span>
                                        </div>
                                    </div>
                                    <div className={`${styles.inputContainer} py-4`}>
                                        <input type="text" className={`${styles.formInput}`} placeholder={`Amount`}/>
                                    </div>
                                    <hr className={`${styles.line}`}/>
                                </div>
                                <InputHelper text={text.SWP_amount_input_helper}/>
                            </div>
                            <div className="flex">
                                <SWPStartDate switchDate={switchDate}/>
                                <InputHelper text={text.SWP_start_date_helper}/>
                            </div>
                            <AccountDetails standingInstruction={false}/>
                        </div>
                    ):(
                        <div></div>
                    )
                }
                <SubmitButton onClickHandler={formSubmitHandler}/>
            </form>
        </div>
    )
}
export default SWPForm