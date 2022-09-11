import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import DefaultModal from '~/components/DefaultModal';
import Background from '~/components/Background';

const cx = classNames.bind(styles);
function Main() {
    return (
        <div className={cx('wrapper')}>
            <Background />
            <DefaultModal />
        </div>
    );
}

export default Main;
