import React from 'react';
import styles from '../style';
import { Select } from './index';

const Scheme = () => {
  return (
    <div>
      <div className={`${styles.inputContainer}`}>
        <div className="w-1/3">
          <label htmlFor="">Scheme</label>
        </div>
        <div className="w-2/3">
          <Select
            selectStyle={`${styles.formInput} text-gray-400 w-10/12`}
            options={[
              {
                value: '',
                label: 'Scheme Name'
              },
              {
                label: 'Blue Chip Mutual Fund',
                value: 'blue-chip-mutual-fund'
              }
            ]}
          />
        </div>
      </div>
      <div className={`${styles.inputContainer}`}>
        <div className="w-1/3">
          <label htmlFor="">Option</label>
        </div>
        <div className="w-2/3">
          <Select
            selectStyle={`${styles.formInput} text-gray-600 bg-gray-400 w-10/12`}
            disabled={true}
            options={[{ value: '', label: 'Growth' }]}
          />
        </div>
      </div>
    </div>
  );
};
export default Scheme;
