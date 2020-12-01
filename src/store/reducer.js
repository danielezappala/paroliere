    
const reducer = (state, action) => {
    switch (action.type) {

        case "OPEN_SETTINGS":
            console.log('global state on OPEN_SETTINGS  ', state)
            return {
                ...state,
                isSettingsDialogOpen: true
            }
        case "CLOSE_SETTINGS":
            console.log('close_settings')
            return {
                ...state,
                isSettingsDialogOpen: false
            }

        case "INC_ROWSNUM":

            return {
                ...state,
                rowsNum: state.rowsNum - 1
            }
        case "DEC_ROWSNUM":

            return {
                ...state,
                rowsNum: state.rowsNum - 1
            }
        case "CHANGE_ROWSNUM":

        return {
            ...state,
            rowsNum: action.payload
        }
        case "CHANGE_COLSNUM":

        return {
            ...state,
            colsNum: action.payload
        }
         
        case "INC_COLSNUM":
            return {
                ...state,
                colsNum: state.colsNum + 1
            }

        case "DEC_COLSNUM":
            return {
                ...state,
                colsNum: state.colsNum - 1
            }

        case "INC_MATCH":
            return {
                ...state,
                match: state.match + 1
            }
        case "INC_TOTALTIME":
            return {
                ...state,
                totalTime: state.totalTime + 1
            }
        case "DEC_TOTALTIME":
            return {
                ...state,
                totalTime: state.totalTime - 1
            }

        case "INC_COUNTDOWN":
            return {
                ...state,
                countDown: state.countDown + 1
            }
        case "DEC_COUNTDOWN":
            return {
                ...state,
                countDown: state.countDown - 1
            }
        case "ROLL_DICES":
            return {
                ...state,
                //rolls:makeRollDices()
            }
        default:
            {
                return state
            }
    }

}

export default reducer;