import s from './Counter.module.css'
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'



export const FeedbackOptions = ({btnNames, options }) => {

    return (
        <ul className={s.buttons}>
            {btnNames.map(el => (
                <li key={nanoid()}><button  className={s.button} value={el} onClick={() => options(el)}>{el}</button></li>
            ))}
            </ul>
    )
}

FeedbackOptions.propTypes = {
    btnNames: PropTypes.array.isRequired,
    options: PropTypes.func.isRequired
    }