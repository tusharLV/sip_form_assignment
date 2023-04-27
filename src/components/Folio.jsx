import React from 'react';
import styles from '../style';
import { Button, InvestingThrough, Select, FolioHeading } from './index';
import text from '../constants/index';
const Folio = () => {
  return (
    <div className="folio-container md:m-8 m-2 box-border border-2 border-black md:p-8 p-2 rounded">
      <FolioHeading />
      <hr className={`${styles.line}`} />
      <div className="flex">
        <Select
          selectStyle={`${styles.formInput} md:w-1/5 w-1/2 md:text-base text-xs`}
          options={[
            {
              value: '',
              label: 'Choose Folio no'
            },
            {
              value: 'BlackSalt',
              label: 'SNP11289078R'
            }
          ]}
        />
        <div className="md:mx-8 mx-2">OR</div>
        <Button
          styleClass="border-amber-400 border-2 rounded text-amber-400 h-8 bg-transparent md:text-base text-xs md:w-1/5 w-1/2 overflow-ellipsis whitespace-nowrap"
          text={text.proceed_with_a_new_folio_button}
        />
      </div>
      <div className="mt-4">{text.investing_through}</div>
      <InvestingThrough />
    </div>
  );
};
export default Folio;
