import styles from './Ticket.module.scss';

function Ticket({ price, carrier, segments }) {
  return (
    <div className={styles.ticket}>
      <div className={styles.info}>
        <span>{price}</span>
        <span>{carrier}</span>
      </div>
      <div className={styles.info}>
        <div className={styles.cities}>
          <span>
            {segments[0].origin} - {segments[0].destination}
          </span>
          <span>10:00 - 23:00</span>
        </div>
        <div className={styles.duration}>
          <span>В пути</span>
          <span>{segments[0].duration}</span>
        </div>
        <div className={styles.stops}>
          <span>{segments[0].stops.length} пересадки</span>
          <span>{...segments[0].stops}</span>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.cities}>
          <span>
            {segments[1].origin} - {segments[1].destination}
          </span>
          <span>10:00 - 23:00</span>
        </div>
        <div className={styles.duration}>
          <span>В пути</span>
          <span>{segments[1].duration}</span>
        </div>
        <div className={styles.stops}>
          <span>{segments[1].stops.length} пересадки</span>
          <span>{...segments[1].stops}</span>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
