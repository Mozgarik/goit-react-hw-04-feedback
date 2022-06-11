import s from './Counter.module.css'
import PropTypes from 'prop-types';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
return (
    <div className='Feedback-options'>
        <h2>Statistic</h2>
    <ul className={s.item}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
    </ul>
    
    </div>
)
}


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
    }