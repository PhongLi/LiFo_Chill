import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import DefaultModal from '~/components/DefaultModal';
import Background from '~/components/Background';
import LateralMenu from '~/components/LateralMenu';

const cx = classNames.bind(styles);
function Main() {
    return (
        <div className={cx('wrapper')}>
            <Background />
            <DefaultModal />
            <LateralMenu />
        </div>
    );
}

export default Main;
