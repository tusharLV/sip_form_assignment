import React from 'react';
import styles from '../style';
import { AccountDetailBlock, RadioInput, Select } from './index';
import { bool } from 'prop-types';
const AccountDetails = ({ standingInstruction = true }) => {
  return (
    <div className="m-4">
      {standingInstruction ? (
        <div>
          <span className="font-bold mb-4">Registration Mode</span>
          <RadioInput checked={true} containerStyle={'my-4'} spanText={'Standing Instruction'} />
          <div className="my-4">
            Standing instructions are a means to instruct your bank to auto pay a set amount at
            regular intervals for your investments
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="font-semibold my-2">Select Payment Bank</div>
      <div>
        <Select
          selectStyle={`${styles.formInput} md:w-1/5 w-2/3`}
          options={[
            {
              value: '',
              label: 'HDFC Bank Limited/Default'
            }
          ]}
        />
      </div>
      <AccountDetailBlock option={'Bank name'} value={'HDFC Bank Limited'} />
      <AccountDetailBlock
        option={'Branch Location'}
        value={'TULSIANI CHAMBERS - NARIMAN PT/MUMBAI'}
      />
      <AccountDetailBlock option={'Account Type'} value={'SB'} />
      <AccountDetailBlock option={'Account Number'} value={'000010109878923'} />
      <AccountDetailBlock option={'IFSC Code'} value={'HDFC000000001'} />
      <AccountDetailBlock option={'Payment Mode'} value={'Standing Instruction'} />
    </div>
  );
};
AccountDetails.propTypes = {
  standingInstruction: bool
};
export default AccountDetails;
