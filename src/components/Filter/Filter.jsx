import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.css';

import { changeFilter } from '../../redux/filterSlice';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={styles.filter}>
      Find contacts by name:
      <input type="text" value={filter} onChange={handleChange} />
    </label>
  );
};

export default Filter;
