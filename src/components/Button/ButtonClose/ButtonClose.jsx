import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { closeIcon } from '~/assets/icons';
import styles from '../Button.module.scss';

const cx = classNames.bind(styles);

function ButtonClose({ onClick, className }) {
    const classes = cx('close-btn', {
        [className]: className,
    });

    return (
        <button className={classes} onClick={onClick}>
            <img src={closeIcon} alt="close" />
        </button>
    );
}

ButtonClose.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
};
export default ButtonClose;
