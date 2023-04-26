import styles from "../style";
import DatePicker from "react-datepicker";
import {useEffect, useState} from "react";

const SIPDuration = ({setEndDateHandler}) => {

    const [sipStartDate, setSipStartDate] = useState('')
    const [duration, setDuration] = useState('')
    const [sipEndDate,setSipEndDate] = useState(null)

    useEffect(()=>{
        if(sipStartDate!=='' && duration!==''){
            calcAndSetEndDate()
        }
    },[duration,sipStartDate])
    const calcAndSetEndDate = () => {
        let refDate = new Date(sipStartDate);
        refDate.setFullYear(refDate.getFullYear() + parseInt(duration));
        setSipEndDate(refDate)
        setEndDateHandler(refDate)
    }
    return(
        <div>
            <div className={`${styles.inputContainer}`}>
                <div className="w-1/3">
                    <label htmlFor="">
                        SIP Start Date
                    </label>
                </div>
                <div className="w-2/3">
                    <DatePicker
                        dateFormat="EEE, MMMM d, yyyy"
                        onChange={(date) => {
                            setSipStartDate(date)
                        }}
                        selected={sipStartDate ? sipStartDate : null}
                        wrapperClassName="datePicker"
                        placeholderText={'DD/MM/YYYY'}
                    />
                </div>
            </div>
            <div className={`${styles.inputContainer}`}>
                <div className="w-1/3">
                    <label htmlFor="">
                        Frequency
                    </label>
                </div>
                <div className="w-2/3">
                    <input type="radio" value="monthly" checked/><span className="px-4">Monthly</span>
                </div>
            </div>
            <div className={`${styles.inputContainer}`}>
                <div className="w-1/3">
                    <label htmlFor="">
                        SIP Duration
                    </label>
                </div>
                <div className="w-2/3">
                    <select

                        className={`${styles.formInput} text-gray-400 w-10/12`}
                        onChange={(e)=>setDuration(e.target.value)}
                    >
                        <option value="" label="Duration" />
                        <option label="5 years" value="5" />
                        <option label="10 years" value="10" />
                        <option label="15 years" value="15" />
                    </select>
                </div>
            </div>
            <div className={`${styles.inputContainer}`}>
                <div className="w-1/3">
                    <label htmlFor="">
                        SIP End Date
                    </label>
                </div>
                <div className="w-2/3">
                    <DatePicker
                        // showTimeSelect
                        dateFormat="EEE, MMMM d, yyyy"
                        selected={sipEndDate ? sipEndDate : null}
                        wrapperClassName="datePicker endDate"
                        placeholderText={'DD/MM/YYYY'}
                    />
                </div>
            </div>
        </div>
    )
}
export default SIPDuration