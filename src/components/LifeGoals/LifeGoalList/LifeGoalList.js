import React from 'react';

import LifeGoalItem from '../LifeGoalItem/LifeGoalItem';
import './LifeGoalList.css';

const LifeGoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <LifeGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </LifeGoalItem>
      ))}
    </ul>
  );
};

export default LifeGoalList;
