import {ACTIONS} from "./App"

function DigitButton({dispatch, digit}) {
  return (
    <button onClick={()=>{dispatch({type: ACTIONS.ADD_DIGIT ,payload:{digit}})}}>{digit}</button>
  )
}

export default DigitButton 



// 	case ACTIONS.CHOOSE_OPERATION:
// 			if (state.currentOperand == null && state.previousOperand == null) {
// 				return state;
// 			}
// 			if (state.previousOperand === null) {
// 				return {
// 					...state,
// 					operation: payload.operation,
// 					previousOperand: state.currentOperand,
// 					currentOperand: null,
// 				};
// 			}