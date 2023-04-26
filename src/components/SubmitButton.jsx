import text from '../constants/index'
const SubmitButton = ({onClickHandler}) => {
    return(
        <div className="flex flex-col justify-center w-full p-8">
            <button className="border-2 rounded border-amber-400 w-3/12 h-8 bg-amber-400 self-center" onClick={(e)=>onClickHandler(e)}>{text.next}</button>
            <span className="self-center text-sm">
                {text.button_promotion}
            </span>
        </div>
    )
}
export default SubmitButton