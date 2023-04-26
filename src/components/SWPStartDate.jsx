import styles from "../style";
import text from "../constants";
import DatePicker from "react-datepicker";
import {useEffect, useState} from "react";

const SWPStartDate = ({switchDate}) => {
    const [swpStartDate,setSwpStartDate] = useState(null)
    const [startDuration,setStartDuration] = useState('')
    const [swpStartType,setSwpStartType] = useState('')

    const handleRadioClick = (e) => {
        setSwpStartType(e.target.value)
    }
    useEffect(()=>{
        if(swpStartType!==''){
            let date = new Date(switchDate)
            date = swpStartType==='immediate' ? date.setDate(date.getDate()+15):(startDuration!=='' ? date.setFullYear(date.getFullYear() + parseInt(startDuration)) : '')
            setSwpStartDate(date)
        }
    },[swpStartType,startDuration])
    return(
        <div className="w-1/2">
            SWP to start After
            <div className={`${styles.inputContainer}`}>
                <div className="w-1/3">
                    <input
                        type="radio"
                        value="immediate"
                        checked={swpStartType==="immediate"}
                        onClick={handleRadioClick}
                    /><span className="px-4">Immediate <span className="line-clamp-1">(after 15 days)</span></span>
                </div>
                <div className="w-2/3">
                    <input
                        type="radio"
                        value="customDate"
                        checked={swpStartType==="customDate"}
                        onClick={handleRadioClick}
                    />
                    <span className="px-4">
                                <select
                                    className={`${styles.formInput} text-gray-400 w-80`}
                                    onChange={(e)=>setStartDuration(e.target.value)}
                                >
                                    <option value="" label="Duration" />
                                    <option label="5 years" value="5" />
                                    <option label="10 years" value="10" />
                                    <option label="15 years" value="15" />
                                </select>
                            </span>
                </div>
            </div>
            <span className="text-sm">{text.SWP_start_date_notice}</span>
            <div className={`${styles.inputContainer}`}>
                <div className="w-1/3">
                    <label htmlFor="">
                        {text.SWP_start_date_label}
                    </label>
                </div>
                <div className="w-2/3">
                    <DatePicker
                        dateFormat="EEE, MMMM d, yyyy"
                        selected={swpStartDate}
                        wrapperClassName="datePicker endDate"
                        placeholderText={'DD/MM/YYYY'}
                    />
                </div>
            </div>
            <hr className={`${styles.line}`}/>
        </div>
    )
}
export default SWPStartDate