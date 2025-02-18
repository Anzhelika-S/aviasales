import { useDispatch, useSelector } from 'react-redux';

import { toggleAllFilters, toggleFilter } from '../../reducers/filterReducer';

import styles from './Filter.module.scss';

const allFilters = ['direct', 'one-stop', 'two-stops', 'three-stops'];

function Filter() {
  const dispatch = useDispatch();
  const selectedFilters = useSelector((state) => state.filter.filters);

  const allSelected = selectedFilters.length === allFilters.length;

  return (
    <aside className={styles.filter}>
      <h3 className={styles.header}>Количество пересадок</h3>
      <ul className={styles.list}>
        <li className={styles.filterLi}>
          <label htmlFor="all">
            <input
              type="checkbox"
              name="filter-checkbox"
              id="all"
              checked={allSelected}
              onChange={() => dispatch(toggleAllFilters(allFilters))}
            />
            <span>Все</span>
          </label>
        </li>
        <li className={styles.filterLi}>
          <label htmlFor="direct">
            <input
              type="checkbox"
              name="filter-checkbox"
              id="direct"
              checked={selectedFilters.includes('direct')}
              onChange={() => dispatch(toggleFilter('direct'))}
            />
            <span>Без пересадок</span>
          </label>
        </li>
        <li className={styles.filterLi}>
          <label htmlFor="one-overlay">
            <input
              type="checkbox"
              name="filter-checkbox"
              id="one-stop"
              checked={selectedFilters.includes('one-stop')}
              onChange={() => dispatch(toggleFilter('one-stop'))}
            />
            <span>1 пересадка</span>
          </label>
        </li>
        <li className={styles.filterLi}>
          <label htmlFor="two-overlays">
            <input
              type="checkbox"
              name="filter-checkbox"
              id="two-stops"
              checked={selectedFilters.includes('two-stops')}
              onChange={() => dispatch(toggleFilter('two-stops'))}
            />
            <span>2 пересадки</span>
          </label>
        </li>
        <li className={styles.filterLi}>
          <label htmlFor="three-overlays">
            <input
              type="checkbox"
              name="filter-checkbox"
              id="three-stops"
              checked={selectedFilters.includes('three-stops')}
              onChange={() => dispatch(toggleFilter('three-stops'))}
            />
            <span>3 пересадки</span>
          </label>
        </li>
      </ul>
    </aside>
  );
}

export default Filter;
