import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {AccountDetails, InputHelper, SIPDuration} from './index'
import styles from '../style'
import text from "../constants/index"
import {Scheme} from "./index";
import {SubmitButton} from "./index";

const SIPForm = ({onFormSubmit,setEndDateHandler}) => {

    return(
        <div className="m-16">
            <form action="">
                <div className="flex">
                    <div className="w-1/2">
                        <Scheme/>
                        <hr className={`${styles.line}`}/>
                    </div>
                    <InputHelper text={text.SIP_scheme_Input_helper}/>
                </div>
                <div className="flex ">
                   <div className="w-1/2">
                       <div className="flex">
                           <div className="w-1/3">
                               <label htmlFor="">
                                   {text.SIP_amount_label}
                               </label>
                           </div>
                           <div className="w-2/3">
                               <input type="text" placeholder="Amount" className={`${styles.formInput} text-gray-400 w-10/12`}/>
                           </div>
                       </div>
                       <hr className={`${styles.line}`}/>
                   </div>
                    <InputHelper text={text.SIP_amount_input_helper}/>
                </div>
                <div className="flex">
                    <div className="w-1/2">
                        <SIPDuration setEndDateHandler={setEndDateHandler}/>
                        <hr className={`${styles.line}`}/>
                    </div>
                    <InputHelper text={text.SIP_start_date_input_helper}/>
                </div>
                <div className="flex">
                    <div className="w-1/2">
                        <div className={`${styles.inputContainer}`}>
                            <div className="w-1/2">
                                <label htmlFor="">
                                    {text.SIP_top_up_input_label}
                                </label>
                            </div>
                            <div className="w-1/2 flex justify-around">
                                <div><input type="radio" value="topUpBooleanTrue"/><span className="px-4">Yes</span></div>
                                <div><input type="radio" value="topUpBooleanFalse"/><span className="px-4">No</span></div>
                            </div>
                        </div>
                        <hr className={`${styles.line}`}/>
                    </div>
                    <InputHelper text={text.SIP_top_up_input_helper}/>
                </div>
                <div className="flex">
                    <div className="w-1/2">
                        <div className={`${styles.inputContainer}`}>
                            <div className="w-1/2">
                                <label htmlFor="">
                                    {text.SIP_first_payment_input_label}
                                </label>
                            </div>
                            <div className="w-1/2 flex justify-around">
                                <div><input type="radio" value="firstPaymentBooleanTrue"/><span className="px-4">Yes</span></div>
                                <div><input type="radio" value="firstPaymentBooleanFalse"/><span className="px-4">No</span></div>
                            </div>
                        </div>
                        <hr className={`${styles.line}`}/>
                    </div>
                    <InputHelper text={text.SIP_first_payment_input_helper}/>
                </div>
                <AccountDetails/>
                <SubmitButton onClickHandler={onFormSubmit}/>
            </form>
        </div>
    )
}
export default SIPForm