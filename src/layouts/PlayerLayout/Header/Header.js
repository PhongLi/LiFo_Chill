import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { logoGif } from '~/assets/images';
import { Button } from '~/components/Button';
import { share, volumeActive, volumeMute, menu, fullscreenIcon } from '~/assets/icons';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={logoGif} alt="logo" style={{ height: 100 }} />
                </div>
                <div className={cx('actions')}>
                    <Button type="transparent">11:38 PM</Button>
                    <Button type="premium" emoji={{ symbol: '🚀', label: 'rocket' }}>
                        <p>
                            Access +20 scenes
                            <br />& more with premium
                        </p>
                    </Button>
                    <Button type="transparent" className={cx('signUp-btn')}>
                        Sign up
                    </Button>
                    <button className={cx('actionBtn')}>
                        <img src={share} alt="share" />
                    </button>
                    <button className={cx('actionBtn')}>
                        {true ? (
                            <img src={volumeActive} alt="volumeActive" />
                        ) : (
                            <img src={volumeMute} alt="volumeMute" />
                        )}
                    </button>
                    <button className={cx('actionBtn')}>
                        <img src={fullscreenIcon} alt="fullscreenIcon" />
                    </button>
                    <button className={cx('actionBtn')}>
                        <img src={menu} alt="menu" />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
