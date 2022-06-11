import React, { useState } from "react";
import { Feedback } from "./Counter/Feedback";
import { Statistics } from "./Counter/Statistics";
import { Notification } from "./Counter/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = el => {
    if (el === 'good') {
      setGood(good + 1);
    }
    if (el === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (el === 'bad') {
      setBad(bad + 1);
    }
  };

const countTotalFeedback = () => {
  return good + neutral + bad
}

const countPositiveFeedbackPercentage = () => {
  return Math.round(good * 100 / countTotalFeedback());
}


 return (
  <div
  style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    color: '#010101'
  }}
>
     <div className="Counter">
        <Feedback
        options={handleIncrement}
        title={'Please leave feedback'}
        />
        {countTotalFeedback() > 0 ? 
        <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()} 
        positivePercentage={countPositiveFeedbackPercentage()}/>
         :
        <Notification 
        message="There is no feedback"/>} 
     </div>
     </div>
 )
    }

export default App