import styles from '../style';
import text from '../constants';
import { AccountDetails, InputHelper, RadioInput, SWPStartDate } from './index';
import { string } from 'prop-types';

const ExtendedSWPForm = ({ switchDate }) => {
  return (
    <div>
      <div className={`${styles.flexContainer}`}>
        <div className={`${styles.subFormContainer}`}>
          <hr className={`${styles.line}`} />
          <div className={`${styles.inputContainer}`}>
            <div className="w-1/3">
              <label htmlFor="">{text.SWP_frequency_label}</label>
            </div>
            <RadioInput containerStyle={'w-1/3'} spanText={'Monthly'} value={'monthly'} />
            <RadioInput containerStyle={'w-1/3'} spanText={'Quarterly'} value={'monthly'} />
          </div>
          <hr className={`${styles.line}`} />
        </div>
      </div>
      <div className={`${styles.flexContainer}`}>
        <div className={`${styles.subFormContainer}`}>
          {text.SWP_amount_label}
          <div className={`${styles.inputContainer} py-4`}>
            <RadioInput
              containerStyle={'md:w-1/3 w-1/2'}
              spanText={'Recommended'}
              value={'monthly'}
            />
            <RadioInput containerStyle={'md:w-1/3 w-1/2'} spanText={'Custom'} value={'quarterly'} />
          </div>
          <div className={`${styles.inputContainer} py-4`}>
            <input type="text" className={`${styles.formInput}`} placeholder={`Amount`} />
          </div>
          <hr className={`${styles.line}`} />
        </div>
        <InputHelper text={text.SWP_amount_input_helper} />
      </div>
      <div className={`${styles.flexContainer}`}>
        <SWPStartDate switchDate={switchDate} />
        <InputHelper text={text.SWP_start_date_helper} />
      </div>
      <AccountDetails standingInstruction={false} />
    </div>
  );
};
ExtendedSWPForm.propTypes = {
  switchDate: string
};
export default ExtendedSWPForm;
