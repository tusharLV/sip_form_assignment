import React from 'react'
import "react-datepicker/dist/react-datepicker.css";
import {AccountDetails, InputHelper, SIPDuration, SubmitButton, Scheme, RadioInput} from './index'
import styles from '../style'
import text from "../constants/index"
import {func, object} from 'prop-types';
const SIPForm = ({onFormSubmit,setEndDateHandler,errorState,setStartDateHandler}) => {

    return(
        <div className="md:m-16 m-4">
            <form action="">
                <div className={`${styles.flexContainer}`}>
                    <div className={`${styles.subFormContainer}`}>
                        <Scheme/>
                        <hr className={`${styles.line}`}/>
                    </div>
                    <InputHelper text={text.SIP_scheme_Input_helper}/>
                </div>
                <div className={`${styles.flexContainer}`}>
                    <div className={`${styles.subFormContainer}`}>
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
                <div className={`${styles.flexContainer}`}>
                    <div className={`${styles.subFormContainer}`}>
                        <SIPDuration setEndDateHandler={setEndDateHandler} setStartDateHandler={setStartDateHandler}/>
                        <hr className={`${styles.line}`}/>
                    </div>
                    <InputHelper text={text.SIP_start_date_input_helper}/>
                </div>
                <div className={`${styles.flexContainer}`}>
                    <div className={`${styles.subFormContainer}`}>
                        <div className={`${styles.inputContainer}`}>
                            <div className="w-1/2">
                                <label htmlFor="">
                                    {text.SIP_top_up_input_label}
                                </label>
                            </div>
                            <RadioInput value={"topUpBooleanTrue"} spanText={"Yes"} containerStyle={"w-1/4"}/>
                            <RadioInput value={"topUpBooleanFalse"} spanText={"No"} containerStyle={"w-1/4"}/>
                        </div>
                        <hr className={`${styles.line}`}/>
                    </div>
                    <InputHelper text={text.SIP_top_up_input_helper}/>
                </div>
                <div className={`${styles.flexContainer}`}>
                    <div className={`${styles.subFormContainer}`}>
                        <div className={`${styles.inputContainer}`}>
                            <div className="w-1/2">
                                <label htmlFor="">
                                    {text.SIP_first_payment_input_label}
                                </label>
                            </div>
                            <RadioInput value={"topUpBooleanTrue"} spanText={"Yes"} containerStyle={"w-1/4"}/>
                            <RadioInput value={"topUpBooleanFalse"} spanText={"No"} containerStyle={"w-1/4"}/>
                        </div>
                        <hr className={`${styles.line}`}/>
                    </div>
                    <InputHelper text={text.SIP_first_payment_input_helper}/>
                </div>
                <AccountDetails/>
                <SubmitButton onClickHandler={onFormSubmit} errorState={errorState}/>
            </form>
        </div>
    )
}
SIPForm.propTypes = {
    onFormSubmit:func,
    setEndDateHandler:func,
    errorState: object,
    setStartDateHandler: func,
}
export default SIPForm