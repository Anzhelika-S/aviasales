import { addMinutes } from 'date-fns';

import styles from './Ticket.module.scss';

function Ticket({ price, carrier, segments }) {
  const getTime = (n) => {
    const time = new Date(segments[n].date);
    const hoursStart = time.getUTCHours() < 10 ? '0' + time.getUTCHours() : time.getUTCHours();
    const minutesStart = time.getUTCMinutes() < 10 ? '0' + time.getUTCMinutes() : time.getUTCMinutes();
    const timeDif = addMinutes(time, segments[n].duration);
    const hoursEnd = timeDif.getUTCHours() < 10 ? '0' + timeDif.getUTCHours() : timeDif.getUTCHours();
    const minutesEnd = timeDif.getUTCMinutes() < 10 ? '0' + timeDif.getUTCMinutes() : timeDif.getUTCMinutes();

    return (
      <span>
        {' '}
        {hoursStart}:{minutesStart} - {hoursEnd}:{minutesEnd}{' '}
      </span>
    );
  };

  const getStops = (stops) => {
    switch (stops.length) {
      case 1:
        return '1 пересадка';
      case 2:
        return '2 пересадки';
      case 3:
        return '3 пересадки';
      default:
        return 'Без пересадок';
    }
  };

  return (
    <div className={styles.ticket}>
      <div className={styles.info}>
        <span>{price.toLocaleString('ru')} P</span>
        <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt={`Лого ${carrier}`} />
      </div>
      <div className={styles.info}>
        <div className={styles.cities}>
          <span>
            {segments[0].origin} - {segments[0].destination}
          </span>
          {getTime(0)}
        </div>
        <div className={styles.duration}>
          <span>В пути</span>
          <span>
            {(segments[0].duration / 60).toFixed()}ч {segments[0].duration % 60}м
          </span>
        </div>
        <div className={styles.stops}>
          <span>{getStops(segments[0].stops)}</span>
          <span>{segments[0].stops.join(', ')}</span>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.cities}>
          <span>
            {segments[1].origin} - {segments[1].destination}
          </span>
          {getTime(1)}
        </div>
        <div className={styles.duration}>
          <span>В пути</span>
          <span>
            {(segments[1].duration / 60).toFixed()}ч {segments[1].duration % 60}м
          </span>
        </div>
        <div className={styles.stops}>
          <span>{getStops(segments[1].stops)}</span>
          <span>{segments[1].stops.join(', ')}</span>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
