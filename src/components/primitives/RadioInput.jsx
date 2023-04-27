import { string, bool } from 'prop-types';
const RadioInput = ({ containerStyle, value, spanText, checked = false }) => {
  return (
    <div className={`${containerStyle}`}>
      <input type="radio" value={value} checked={checked} />
      <span className="md:px-4 px-2">{spanText}</span>
    </div>
  );
};
RadioInput.propTypes = {
  containerStyle: string,
  value: string,
  spanText: string,
  checked: bool
};
export default RadioInput;
