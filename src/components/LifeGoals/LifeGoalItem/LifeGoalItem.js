import React from 'react';

import styles from './LifeGoalItem.module.css';

const LifeGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className={styles.goalItem} onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default LifeGoalItem;
