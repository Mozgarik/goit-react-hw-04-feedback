import s from './Counter.module.css'
import PropTypes from 'prop-types';

export function Notification({ message }) {
    return (
        <div>
            <h4 className={s.Notification}>{message}</h4>
        </div>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
    }