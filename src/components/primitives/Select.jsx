import { array, string, bool, func } from 'prop-types';

const Select = ({ options, selectStyle, disabled = false, onChangeHandler }) => {
  let i = 0;
  return (
    <select className={`${selectStyle}`} disabled={disabled} onChange={onChangeHandler}>
      {options.map((option) => (
        <option value={option.value} label={option.label} key={i++} />
      ))}
    </select>
  );
};
Select.propTypes = {
  options: array,
  selectStyle: string,
  disabled: bool,
  onChangeHandler: func
};
export default Select;
