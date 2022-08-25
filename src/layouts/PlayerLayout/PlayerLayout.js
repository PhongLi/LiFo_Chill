import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './PlayerLayout.module.scss';
import Header from './Header';

const cx = classNames.bind(styles);
function PlayerLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('container')}>{children}</div>
        </div>
    );
}
PlayerLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default PlayerLayout;
