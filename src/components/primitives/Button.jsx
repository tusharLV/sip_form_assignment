import {string,func} from 'prop-types';
const Button = ({text,styleClass,onClickHandler}) => {
    return(<button className={`${styleClass}`} onClick={onClickHandler}>
        {text}
    </button>)
}
Button.propTypes ={
    text:string,
    styleClass:string,
    onClickHandler:func
}
export default Button