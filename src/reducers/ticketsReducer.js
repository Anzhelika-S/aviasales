import { onError } from "./errorReducer";
import { onLoadingOff } from "./loadingReducer";
import uniqid from 'uniqid'

const initialState = {
  tickets: [],
};

export const LOAD_TICKETS = 'LOAD_TICKETS';

export const loadTickets = () => {  
  return async (dispatch) => {
    try {
      let stop = false 
      let errors = 0

      const res = await fetch('https://aviasales-test-api.kata.academy/search')
      const {searchId} = await res.json()
        

     while (!stop) {
      try {
        const ticketsRes = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)

        if(!ticketsRes.ok) {
          errors++
        }

        const data = await ticketsRes.json()
        const newTickets = data.tickets.map(ticket => ({
          ...ticket,
          id: uniqid()
        }))

        stop = data.stop
        
        dispatch({
        type: LOAD_TICKETS,
        tickets: newTickets,
      });

      } catch (err) {
        if(errors === 5) {
          stop = true
          dispatch(onError())
          dispatch(onLoadingOff())
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
      } 
       
    } 
    } catch (err) {
        dispatch(onError())
          dispatch(onLoadingOff())

    } finally {
      dispatch(onLoadingOff())
    }
  };
};

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.tickets]
      };
    default:
      return state;
  }
};
