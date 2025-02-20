const initialState = {
    tickets: []
}

export const SET_TICKETS = 'SET_TICKETS'

export const LOAD_TICKETS = 'LOAD_TICKETS'

export const setTickets = (tickets) => {
    return {
        type: SET_TICKETS,
        tickets
    }
}

export const loadTickets = () => {
     return async dispatch => {
        try {
            const id = await fetch('https://aviasales-test-api.kata.academy/search')
                            .then((res) => res.json())
                            .catch((err) => err);
            const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id.searchId}`)
                            .then((res) => res.json())
                            .catch((err) => err);        
            dispatch({
            type: SET_TICKETS,
            tickets: res.tickets
            });
        } catch(err) {
            console.error(err);
        }
    }
}

export const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TICKETS: 
            return {
                ...state,
                tickets: [...action.tickets]
            }
        default:
            return state
    }
}