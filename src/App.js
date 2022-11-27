import React, { useState } from 'react';

import LifeGoalList from './components/LifeGoals/LifeGoalList/LifeGoalList';
import Input from './components/LifeGoals/Input/Input';
import './App.css';

const App = () => {
  const [lifeGoals, setLifeGoals] = useState([
    { text: 'Start Setting Goals!', id: 'g1' },
  ]);

  const addGoalHandler = enteredText => {
    setLifeGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setLifeGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (lifeGoals.length > 0) {
    content = (
      <LifeGoalList items={lifeGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <Input onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {lifeGoals.length > 0 && (
          <CourseGoalList
            items={lifeGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
