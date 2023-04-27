import styles from '../style';
import { string } from 'prop-types';
const InputHelper = ({ text }) => {
  return <div className={`${styles.inputHelperText}`}>{text}</div>;
};
InputHelper.propTypes = {
  text: string
};
export default InputHelper;
