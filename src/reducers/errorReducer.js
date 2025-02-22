const initialState = {
    error: false,
}

export const ERROR_ON = 'ERROR_ON'
export const ERROR_OFF = 'ERROR_OFF'

export const onError = () => {
    return {
        type: ERROR_ON,
    }
}

export const onErrorOff = () => {
    return {
        type: ERROR_OFF,
    }
}


export const errorReducer = (state = initialState, action) => {
    switch ( action.type) {
        case ERROR_ON:
            return {
                ...state,
                error: true
            }
        case ERROR_OFF:
            return {
                ...state,
                error: false,
            }
        default:
            return state
    }
}
