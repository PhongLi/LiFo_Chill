import classNames from 'classnames/bind';
import styles from './Main.module.scss';

const cx = classNames.bind(styles);
function Main() {
    return <div className={cx('wrapper')}>Main</div>;
}

export default Main;
