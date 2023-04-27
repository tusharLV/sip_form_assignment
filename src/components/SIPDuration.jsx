import styles from '../style';
import DatePicker from 'react-datepicker';
import { useEffect, useState } from 'react';
import { RadioInput, Select } from './index';
import { func } from 'prop-types';
const SIPDuration = ({ setEndDateHandler, setStartDateHandler }) => {
  const [sipStartDate, setSipStartDate] = useState('');
  const [duration, setDuration] = useState('');
  const [sipEndDate, setSipEndDate] = useState(null);

  useEffect(() => {
    if (sipStartDate !== '' && duration !== '') {
      calcAndSetEndDate();
    }
  }, [duration, sipStartDate]);
  const calcAndSetEndDate = () => {
    let refDate = new Date(sipStartDate);
    refDate.setFullYear(refDate.getFullYear() + parseInt(duration));
    setSipEndDate(refDate);
    setEndDateHandler(refDate);
  };
  return (
    <div>
      <div className={`${styles.inputContainer}`}>
        <div className="w-1/3">
          <label htmlFor="">SIP Start Date</label>
        </div>
        <div className="w-2/3">
          <DatePicker
            dateFormat="EEE, MMMM d, yyyy"
            onChange={(date) => {
              setSipStartDate(date);
              setStartDateHandler(date);
            }}
            selected={sipStartDate ? sipStartDate : null}
            wrapperClassName="datePicker"
            placeholderText={'DD/MM/YYYY'}
          />
        </div>
      </div>
      <div className={`${styles.inputContainer}`}>
        <div className="w-1/3">
          <label htmlFor="">Frequency</label>
        </div>
        <RadioInput
          value={'monthly'}
          spanText={'Monthly'}
          containerStyle={'w-2/3'}
          checked={true}
        />
      </div>
      <div className={`${styles.inputContainer}`}>
        <div className="w-1/3">
          <label htmlFor="">SIP Duration</label>
        </div>
        <div className="w-2/3">
          <Select
            selectStyle={`${styles.formInput} text-gray-400 w-10/12`}
            options={[
              {
                value: '',
                label: 'Duration'
              },
              {
                value: '5',
                label: '5 years'
              },
              {
                value: '10',
                label: '10 years'
              },
              {
                value: '15',
                label: '15 years'
              }
            ]}
            onChangeHandler={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>
      <div className={`${styles.inputContainer}`}>
        <div className="w-1/3">
          <label htmlFor="">SIP End Date</label>
        </div>
        <div className="w-2/3">
          <DatePicker
            dateFormat="EEE, MMMM d, yyyy"
            selected={sipEndDate ? sipEndDate : null}
            wrapperClassName="datePicker endDate"
            placeholderText={'DD/MM/YYYY'}
          />
        </div>
      </div>
    </div>
  );
};
SIPDuration.propTypes = {
  setEndDateHandler: func,
  setStartDateHandler: func
};
export default SIPDuration;
