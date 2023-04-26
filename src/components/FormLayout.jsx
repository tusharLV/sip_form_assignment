import {SIPForm, SWPForm, FormHeader} from "./index";
import React, {useState} from 'react'

const FormLayout = () => {

    const [isSIPFormSubmitted,setIsSIPFormSubmitted] = useState(false)
    const [endDate,setEndDate] = useState(null)
    const [showFullSWPForm,setShowFullSWPForm] = useState(false)

    const setEndDateHandler = (date) =>{
        setEndDate(date)
    }
    const onSIPFormSubmit = () => {
        //Logic to submit the form to backend
        setIsSIPFormSubmitted(true)
    }
    const onSWPFormSubmit = (e) =>{
        e.preventDefault()
        if(!showFullSWPForm){
            setShowFullSWPForm(!showFullSWPForm)
        }
    }
    return(
        <div>
            <FormHeader isSIPFormSubmitted={isSIPFormSubmitted}/>
            {
                !isSIPFormSubmitted?(
                    <SIPForm
                        onFormSubmit={onSIPFormSubmit}
                        setEndDateHandler={setEndDateHandler}
                    />
                ):(
                    <div></div>
                )
            }
            {
                isSIPFormSubmitted?(
                    <SWPForm
                        endDate={endDate}
                        showFullSWPForm={showFullSWPForm}
                        formSubmitHandler={onSWPFormSubmit}
                    />
                ):(
                    <div></div>
                )
            }
        </div>
    )
}
export default FormLayout
