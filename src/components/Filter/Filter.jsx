import styles from "./Filter.module.scss";

function Filter() {
  return (
    <aside className={styles.filter}>
      <h3 className={styles.header}>Количество пересадок</h3>
      <ul className={styles.list}>
        <li className={styles.filterLi}>
          <label htmlFor="all">
            <input type="checkbox" name="filter-checkbox" id="all" />
            <span>Все</span>
          </label>
        </li>
        <li className={styles.filterLi}>
          <label htmlFor="direct">
            <input type="checkbox" name="filter-checkbox" id="direct" />
            <span>Без пересадок</span>
          </label>
        </li>
        <li className={styles.filterLi}>
          <label htmlFor="one-overlay">
            <input type="checkbox" name="filter-checkbox" id="one-overlay" />
            <span>1 пересадка</span>
          </label>
        </li>
        <li className={styles.filterLi}>
          <label htmlFor="two-overlays">
            <input type="checkbox" name="filter-checkbox" id="two-overlays" />
            <span>2 пересадки</span>
          </label>
        </li>
        <li className={styles.filterLi}>
          <label htmlFor="three-overlays">
            <input type="checkbox" name="filter-checkbox" id="three-overlays" />
            <span>3 пересадки</span>
          </label>
        </li>
      </ul>
    </aside>
  );
}

export default Filter;
