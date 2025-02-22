import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from 'antd';

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
          <Checkbox
            checked={allSelected}
            onChange={() => dispatch(toggleAllFilters(allFilters))}
            style={{ alignItems: 'center' }}
          >
            Все
          </Checkbox>
        </li>
        <li className={styles.filterLi}>
          <Checkbox
            checked={selectedFilters.includes('direct')}
            onChange={() => dispatch(toggleFilter('direct'))}
            style={{ alignItems: 'center' }}
          >
            Без пересадок
          </Checkbox>
        </li>
        <li className={styles.filterLi}>
          <Checkbox
            checked={selectedFilters.includes('one-stop')}
            onChange={() => dispatch(toggleFilter('one-stop'))}
            style={{ alignItems: 'center' }}
          >
            1 пересадка
          </Checkbox>
        </li>
        <li className={styles.filterLi}>
          <Checkbox
            checked={selectedFilters.includes('two-stops')}
            onChange={() => dispatch(toggleFilter('two-stops'))}
            style={{ alignItems: 'center' }}
          >
            2 пересадки
          </Checkbox>
        </li>
        <li className={styles.filterLi}>
          <Checkbox
            checked={selectedFilters.includes('three-stops')}
            onChange={() => dispatch(toggleFilter('three-stops'))}
            style={{ alignItems: 'center' }}
          >
            3 пересадки
          </Checkbox>
        </li>
      </ul>
    </aside>
  );
}

export default Filter;
