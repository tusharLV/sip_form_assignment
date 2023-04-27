import React, { useState } from 'react';
import styles from '../style';
import DatePicker from 'react-datepicker';
import { ExtendedSWPForm, InputHelper, Scheme, SubmitButton, RadioInput } from './index';
import text from '../constants';
import { string, bool, func } from 'prop-types';
const SWPForm = ({ endDate, showFullSWPForm, formSubmitHandler }) => {
  const [switchDate] = useState(endDate ? new Date(endDate).setDate(endDate.getDate() + 15) : '');
  return (
    <div className="md:m-16 m-4">
      <form action="">
        <div className={`${styles.flexContainer}`}>
          <div className={`${styles.subFormContainer}`}>
            <div className={`${styles.inputContainer}`}>
              <RadioInput containerStyle={'w-1/2'} spanText={'Same Scheme'} />
              <div className="w-1/2">
                <input type="radio" checked />
                <span className="px-4">
                  <span>Another Scheme</span>
                  <div className="font-semibold">(One time switch required)</div>
                </span>
              </div>
            </div>
            <Scheme />
            <div className={`${styles.inputContainer} w-10/12 text-sm`}>
              {text.SWP_switch_notice}
            </div>
            <div className={`${styles.inputContainer}`}>
              <div className="w-1/3">
                <label htmlFor="">{text.switch_date_label}</label>
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
          <InputHelper text={text.SWP_scheme_input_helper} />
        </div>
        {showFullSWPForm ? <ExtendedSWPForm switchDate={switchDate} /> : <div></div>}
        <SubmitButton onClickHandler={formSubmitHandler} />
      </form>
    </div>
  );
};
SWPForm.propTypes = {
  endDate: string,
  showFullSWPForm: bool,
  formSubmitHandler: func
};
export default SWPForm;
