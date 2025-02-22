import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Flex, Alert } from 'antd';

import Ticket from '../Ticket';
import TicketsSort from '../TicketsSort';
import { loadTickets } from '../../reducers/ticketsReducer';

import styles from './TicketsList.module.scss';

function TicketsList() {
  const list = useSelector((state) => state.tickets.tickets);
  const error = useSelector((state) => state.error.error);
  const loading = useSelector((state) => state.loading.loading);
  const dispatch = useDispatch();
  const [visibleTickets, setVisibleTickets] = useState(20);

  useEffect(() => {
    dispatch(loadTickets());
  }, [dispatch]);

  const handleScroll = useCallback(() => {
    console.log(window.innerHeight, window.scrollY, document.body.offsetHeight);

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
      setVisibleTickets((prev) => {
        console.log('Видимые билеты:', visibleTickets);

        return prev + 20;
      });
    }
  });

  useEffect(() => {
    console.log(handleScroll);

    window.addEventListener('scroll', handleScroll);
    return window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const tickets = list.slice(0, visibleTickets).map((ticket) => {
    return <Ticket key={ticket.id} price={ticket.price} carrier={ticket.carrier} segments={ticket.segments} />;
  });

  return (
    <>
      <TicketsSort />
      {error ? (
        <Alert
          style={{ marginTop: 10, textAlign: 'center', padding: 20 }}
          type="error"
          message="Что-то пошло не так... Перезагрузите страницу."
        />
      ) : (
        <ul className={styles.list}>{tickets}</ul>
      )}
      {loading && (
        <Flex align="center" justify="center" style={{ height: 50, marginTop: 15 }}>
          <Spin size="large" />
        </Flex>
      )}
    </>
  );
}

export default TicketsList;
