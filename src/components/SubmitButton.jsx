import text from '../constants/index'
import {Button} from "./index";
import {func, object} from "prop-types"
const SubmitButton = ({onClickHandler,errorState=null}) => {

    return(
        <div className="flex flex-col justify-center w-full p-8">
            {
                (errorState && errorState.error)?(
                    <div className="self-center text-2xl text-red-600 font-bold">
                        {errorState.message}
                    </div>
                ):(<div></div>)
            }
            <Button styleClass="border-2 rounded border-amber-400 md:w-3/12 w-1/2 h-8 bg-amber-400 self-center" text={text.next} onClickHandler={(e)=>onClickHandler(e) }/>
            <span className="self-center text-sm">
                {text.button_promotion}
            </span>
        </div>
    )
}
SubmitButton.propTypes = {
    onClickHandler: func,
    errorState: object
}
export default SubmitButton