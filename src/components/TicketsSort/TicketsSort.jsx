import styles from "./TicketsSort.module.scss";

function TicketsSort() {
  return (
    <div className={styles.group}>
      <button className={styles.button}>Самый дешевый</button>
      <button className={styles.button}>Самый быстрый</button>
      <button className={styles.button}>Оптимальный</button>
    </div>
  );
}

export default TicketsSort;
