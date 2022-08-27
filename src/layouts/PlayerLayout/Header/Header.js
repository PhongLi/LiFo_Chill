import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Header.module.scss';
import { logoGif } from '~/assets/images';
import { profileIcon, faqIcon, feedback, infos, infoIcon, playlist, settingIcon, contactIcon } from '~/assets/icons';
import { Button } from '~/components/Button';
import { share, volumeActive, volumeMute, menu, fullscreenIcon } from '~/assets/icons';
import { SettingMenu } from '~/components/SettingMenu';
const cx = classNames.bind(styles);

function Header() {
    const [fullscreen, setFullscreen] = useState(false);

    const MENU_ITEMS = [
        {
            title: 'User settings',
            icon: profileIcon,
        },
        {
            title: 'General settings',
            icon: settingIcon,
        },
        {
            title: 'Contact us',
            icon: contactIcon,
            to: '/contact',
        },
        {
            title: 'How it works',
            icon: infos,
        },
        {
            title: 'FAQ',
            icon: faqIcon,
            to: '/faq',
        },
        {
            title: 'Music',
            icon: playlist,
            to: '/music',
        },
        {
            title: 'About us',
            icon: infoIcon,
        },
        {
            title: 'Share feedback',
            icon: feedback,
        },
    ];


    const checkFullScreen = () => {
        var doc = window.document;
        // least one is fullscreen -> true 
        return (
            doc.fullscreenElement || doc.mozFullScreenElement || doc.webkitFullscreenElement || doc.msFullscreenElement
        );
    };

    const handleFullScreen = () => {
        const doc = window.document;
        const docEl = doc.documentElement;
        
        let requestFullScreen =
            docEl.requestFullscreen ||
            docEl.mozRequestFullScreen ||
            docEl.webkitRequestFullScreen ||
            docEl.msRequestFullscreen;
        let cancelFullScreen =
            doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if (!checkFullScreen()) {
            requestFullScreen.call(docEl);
            setFullscreen(true)
        } else {
            cancelFullScreen.call(doc);
            setFullscreen(false)

        }
    };

    
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={logoGif} alt="logo" style={{ height: 100 }} />
                </div>
                <div className={cx('actions')}>
                    <Button type="transparent">11:38 PM</Button>
                    {!fullscreen && <Button type="premium" emoji={{ symbol: '🚀', label: 'rocket' }}>
                        <p>
                            Access +20 scenes
                            <br />& more with premium
                        </p>
                    </Button>}
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
                    <button className={cx('actionBtn')} onClick={handleFullScreen}>
                        <img src={fullscreenIcon} alt="fullscreenIcon" />
                    </button>
                    <SettingMenu items={MENU_ITEMS}>
                        <button className={cx('actionBtn')}>
                            <img src={menu} alt="menu" />
                        </button>
                    </SettingMenu>
                </div>
            </div>
        </header>
    );
}

export default Header;
