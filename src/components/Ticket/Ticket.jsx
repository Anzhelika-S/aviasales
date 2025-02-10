import styles from "./Ticket.module.scss";

function Ticket({ price, carrier }) {
  return (
    <div className={styles.ticket}>
      <span>{price}</span>
      <span>{carrier}</span>
    </div>
  );
}

export default Ticket;
