import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Ticket from '../Ticket';
import TicketsSort from '../TicketsSort';
import { loadTickets } from '../../reducers/ticketsReducer';

import styles from './TicketsList.module.scss';

function TicketsList() {
  const list = useSelector((state) => state.tickets.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTickets());
  }, []);

  const tickets = list.map((ticket) => {
    return (
      <Ticket key={list.indexOf(ticket)} price={ticket.price} carrier={ticket.carrier} segments={ticket.segments} />
    );
  });

  return (
    <>
      <TicketsSort />
      <ul className={styles.list}>{tickets}</ul>
    </>
  );
}

export default TicketsList;
