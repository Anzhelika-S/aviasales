import { useDispatch } from 'react-redux';
import { Radio, ConfigProvider } from 'antd';

import { setSort } from '../../reducers/sortReducer';

import styles from './TicketsSort.module.scss';

function TicketsSort() {
  const dispatch = useDispatch();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2196f3',
          colorPrimaryHover: '#2196f3',
        },
      }}
    >
      <Radio.Group
        buttonStyle="solid"
        defaultValue="cheapest"
        onChange={(e) => dispatch(setSort(e.target.value))}
        className={styles.group}
      >
        <Radio.Button className={styles.button} value="cheapest">
          {' '}
          Самый дешевый
        </Radio.Button>
        <Radio.Button className={styles.button} value="fastest">
          Самый быстрый
        </Radio.Button>
        <Radio.Button className={styles.button} value="optimal">
          Оптимальный
        </Radio.Button>
      </Radio.Group>
    </ConfigProvider>
  );
}

export default TicketsSort;
