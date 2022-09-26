import classNames from 'classnames/bind';

import { playIcon, nextIcon, prevIcon, pauseIcon } from '~/assets/icons';
import styles from './Bottom.module.scss';

const cx = classNames.bind(styles);

function Bottom() {
    return (
        <div className={cx('bottom-bar')}>
            <div className={cx('artist-info')}>
                <p>Music by - lofi.co 2021 ©</p>
            </div>
            <div className={cx('player-bar')}>
                <img src={prevIcon} alt="" className={cx('icon', 'button-np')} />

                {true ? (
                    <img src={playIcon} alt="" className={cx('icon', 'button-pp')} />
                ) : (
                    <img src={pauseIcon} alt="" className={cx('icon', 'button-pp')} />
                )}

                <img src={nextIcon} alt="" className={cx('icon', 'button-np')} />
            </div>
        </div>
    );
}

export default Bottom;
