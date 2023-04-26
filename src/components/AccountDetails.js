import {SIPForm, SWPForm, FormHeader} from "./index";
import React from 'react'
import styles from "../style";

const AccountDetails = ({standingInstruction=true}) => {
    return(
        <div className="m-4">
            {
                standingInstruction?(
                       <div>
                           <span className="font-bold mb-4">Registration Mode</span>
                           <div className="my-4">
                               <input type="radio" checked/><span className="ml-4"> Standing Instruction</span>
                           </div>
                           <div className="my-4">
                               Standing instructions are a means to instruct your bank to auto pay a set amount at regular intervals for your investments
                           </div>
                       </div>
                ):(<div></div>)
            }
            <div className="font-semibold my-2">
                Select Payment Bank
            </div>
            <div>
                <select
                    value={"test"}
                    className={`${styles.formInput} w-1/5`}
                >
                    <option value="" label="HDFC Bank Limited/Default" />
                </select>
            </div>
            <div className="flex my-2">
                <div className="text-gray-400 w-1/6">
                    Bank name
                </div>
                <div>
                    :HDFC Bank Limited
                </div>
            </div>
            <div className="flex my-2">
                <div className="text-gray-400 w-1/6">
                    Branch Location
                </div>
                <div>
                    :TULSIANI CHAMBERS - NARIMAN PT/MUMBAI
                </div>
            </div>
            <div className="flex my-2">
                <div className="text-gray-400 w-1/6">
                    Account Type
                </div>
                <div>
                    :SB
                </div>
            </div>
            <div className="flex my-2">
                <div className="text-gray-400 w-1/6">
                    Account Number
                </div>
                <div>
                    :000010109878923
                </div>
            </div>
            <div className="flex my-2">
                <div className="text-gray-400 w-1/6">
                    IFSC Code
                </div>
                <div>
                    :HDFC000000001
                </div>
            </div>
            <div className="flex my-2">
                <div className="text-gray-400 w-1/6">
                    Payment Mode
                </div>
                <div>
                    :Standing Instruction
                </div>
            </div>
        </div>
    )
}
export default AccountDetails
