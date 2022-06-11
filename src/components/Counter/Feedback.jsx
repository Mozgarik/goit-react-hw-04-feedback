import { FeedbackOptions } from './FeedbackOptions'
import PropTypes from 'prop-types';


export function Feedback({ title, options }) {
    const names = ['good', 'neutral', 'bad']
    return (
    <div className='Feedback-Statistic'>
    <h2>{title}</h2>
    <FeedbackOptions 
    btnNames = {names}
    options={options}
    />
   </div>
  )
}

Feedback.propTypes = {
   title: PropTypes.string.isRequired,
   options: PropTypes.func.isRequired
   }