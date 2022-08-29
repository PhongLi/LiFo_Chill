import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import DefaultModal from '~/components/DefaultModal';

const cx = classNames.bind(styles);
function Main() {
    return (
        <div className={cx('wrapper')}>
            <DefaultModal />
        </div>
    );
}

export default Main;
