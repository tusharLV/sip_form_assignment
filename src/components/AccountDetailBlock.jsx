import { string } from 'prop-types';
const AccountDetailBlock = ({ option, value }) => {
  return (
    <div className="flex my-2">
      <div className="text-gray-400 md:w-1/6 w-1/3 md:text-base text-xs">{option}</div>
      <div className="md:text-base text-xs">:{value}</div>
    </div>
  );
};
AccountDetailBlock.propTypes = {
  option: string,
  value: string
};
export default AccountDetailBlock;
