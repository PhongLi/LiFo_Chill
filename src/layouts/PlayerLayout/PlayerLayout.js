import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './PlayerLayout.module.scss';
import Header from './Header';
import Bottom from './Bottom';

const cx = classNames.bind(styles);

function PlayerLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>{children}</div>
            <Bottom />
        </div>
    );
}
PlayerLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default PlayerLayout;
