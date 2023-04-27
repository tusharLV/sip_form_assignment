import { SIPForm, SWPForm, FormHeader } from './index';
import React, { useState } from 'react';

const FormLayout = () => {
  const [isSIPFormSubmitted, setIsSIPFormSubmitted] = useState(false);
  const [endDate, setEndDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [showFullSWPForm, setShowFullSWPForm] = useState(false);
  const [errorObject, setErrorObject] = useState({ error: false });
  const setEndDateHandler = (date) => {
    setEndDate(date);
  };
  const onSIPFormSubmit = (e) => {
    //Logic to submit the form to backend
    e.preventDefault();
    if (!endDate) {
      setErrorObject({
        error: true,
        message: 'Please Input Start Date and Duration to Move Forward'
      });
    } else if (startDate <= new Date()) {
      setErrorObject({
        error: true,
        message: "SIP Start Date should be greater than today's date"
      });
    } else {
      setIsSIPFormSubmitted(true);
      setErrorObject({ error: false });
    }
  };
  const onSWPFormSubmit = (e) => {
    e.preventDefault();
    if (!showFullSWPForm) {
      setShowFullSWPForm(!showFullSWPForm);
    }
  };
  return (
    <div className="md:text-base text-sm">
      <FormHeader isSIPFormSubmitted={isSIPFormSubmitted} />
      {!isSIPFormSubmitted ? (
        <SIPForm
          onFormSubmit={onSIPFormSubmit}
          setEndDateHandler={setEndDateHandler}
          setStartDateHandler={(date) => setStartDate(date)}
          errorState={errorObject}
        />
      ) : (
        <div></div>
      )}
      {isSIPFormSubmitted ? (
        <SWPForm
          endDate={endDate}
          showFullSWPForm={showFullSWPForm}
          formSubmitHandler={onSWPFormSubmit}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default FormLayout;
