import classNames from 'classnames/bind';
import styles from './LoadingPage.module.scss';
import { logoGif } from '~/assets/images';

const cx = classNames.bind(styles);

function LoadingPage() {
    return (
        <div className={cx('loading-page')}>
            <img src={logoGif} alt="logo" height={130} />
        </div>
    );
}

export default LoadingPage;
