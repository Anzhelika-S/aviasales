import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Flex, Alert } from 'antd';
import { orderBy } from 'lodash';

import Ticket from '../Ticket';
import TicketsSort from '../TicketsSort';
import { loadTickets } from '../../reducers/ticketsReducer';

import styles from './TicketsList.module.scss';

function TicketsList() {
  const list = useSelector((state) => state.tickets.tickets);
  const error = useSelector((state) => state.error.error);
  const loading = useSelector((state) => state.loading.loading);
  const sort = useSelector((state) => state.sort.sort);
  const filter = useSelector((state) => state.filter.filters);
  const dispatch = useDispatch();
  const [visibleTickets, setVisibleTickets] = useState(10);

  useEffect(() => {
    dispatch(loadTickets());
  }, [dispatch]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
      setVisibleTickets((prev) => prev + 10);
    }
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const filteredList = list.filter((ticket) => {
    if (filter.length === 4) {
      return ticket;
    }

    if (filter.includes('direct')) {
      if (ticket.segments[0].stops.length === 0 || ticket.segments[1].stops.length === 0) {
        return ticket;
      }
    }

    if (filter.includes('one-stop')) {
      if (ticket.segments[0].stops.length === 1 || ticket.segments[1].stops.length === 1) {
        return ticket;
      }
    }

    if (filter.includes('two-stops')) {
      if (ticket.segments[0].stops.length === 2 || ticket.segments[1].stops.length === 2) {
        return ticket;
      }
    }

    if (filter.includes('three-stops')) {
      if (ticket.segments[0].stops.length === 3 || ticket.segments[1].stops.length === 3) {
        return ticket;
      }
    }

    if (filter.length === 0) {
      return undefined;
    }
  });

  const sortedList =
    sort === 'optimal'
      ? orderBy(filteredList, ['price', 'segments[0].duration'], ['asc', 'asc'])
      : filteredList.sort((a, b) => {
          switch (sort) {
            case 'cheapest':
              return a.price - b.price;
            case 'fastest':
              return a.segments[0].duration - b.segments[0].duration;
          }
        });

  const tickets = sortedList.slice(0, visibleTickets).map((ticket) => {
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
      ) : filteredList.length === 0 ? (
        <Alert
          style={{ marginTop: 10, textAlign: 'center', padding: 20 }}
          type="info"
          message="Рейсов, подходящих под заданные фильтры, не найдено"
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
