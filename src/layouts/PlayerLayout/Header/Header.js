import classNames from 'classnames/bind';
import { useState } from 'react';
import Switch from 'react-switch';

import { logoGif, pixelModeOff, pixelModeOn } from '~/assets/images';
import {
    share,
    volumeActive,
    volumeMute,
    menu,
    fullscreenIcon,
    sunIcon,
    moonIcon,
} from '~/assets/icons';
import Button from '~/components/Button';
import SettingMenu from '~/components/SettingMenu';
import { MENU_ITEMS } from '~/constants';
import { useStore } from '~/hooks';
import { useSelector } from '~/hooks/useSelector';
import { SessionSelect, setSceneNight, setScenePixel } from '~/Store/session';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const [fullscreen, setFullscreen] = useState(false);
    const { setModalType, background } = useStore();
    const [, backgroundDispatch] = background;

    const nightMode = useSelector(SessionSelect.nightMode);
    const pixelMode = useSelector(SessionSelect.pixelMode);
    const currentScene = useSelector(SessionSelect.getScene);

    const variants = Object.keys(currentScene.variants);

    const hasNightVersion = !!variants.find((variant) => variant.includes('night'));
    const hasPixelVersion = !!variants.find((variant) => variant.includes('pixel'));

    // console.log('hasNightVersion', hasNightVersion);
    // console.log('hasPixelVersion', hasPixelVersion);

    const checkFullScreen = () => {
        var doc = window.document;
        // least one is fullscreen -> true
        return (
            doc.fullscreenElement || doc.mozFullScreenElement || doc.webkitFullscreenElement || doc.msFullscreenElement
        );
    };

    // toggle when click fullscreen button
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
            setFullscreen(true);
        } else {
            cancelFullScreen.call(doc);
            setFullscreen(false);
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
                    {/* toggle day night */}
                    {hasNightVersion && (
                        <div className={cx('toggle-weather')}>
                            <Switch
                                checked={!nightMode}
                                onChange={() => {
                                    backgroundDispatch(setSceneNight());
                                }}
                                offColor="#bfbfbf"
                                onColor="#f3a952"
                                offHandleColor="#fff"
                                height={30}
                                width={60}
                                handleDiameter={24}
                                activeBoxShadow="0px 0px 0px 0px transparent"
                                checkedIcon={
                                    <div className={cx('switch-icon')}>
                                        <img src={sunIcon} alt="" />
                                    </div>
                                }
                                uncheckedIcon={
                                    <div className={cx('switch-icon')}>
                                        <img src={moonIcon} alt="" />
                                    </div>
                                }
                            />
                        </div>
                    )}
                    {/* toggle pixel mode */}
                    {hasPixelVersion && (
                        <div
                            className={cx('toggle-pixel')}
                            onClick={() => {
                                backgroundDispatch(setScenePixel());
                            }}
                        >
                            {pixelMode ? (
                                <img src={pixelModeOn} alt="" className={cx('pixel-icon')} />
                            ) : (
                                <img
                                    src={pixelModeOff}
                                    alt=""
                                    className={cx('pixel-icon')}
                                    style={{ filter: 'invert()' }}
                                />
                            )}
                        </div>
                    )}

                    {/* fullscreen button */}
                    {!fullscreen && (
                        <Button
                            type="premium"
                            emoji={{ symbol: '🚀', label: 'rocket' }}
                            onClick={() => setModalType('Pricing')}
                        >
                            <p>
                                Access +20 scenes
                                <br />& more with premium
                            </p>
                        </Button>
                    )}
                    <Button type="transparent" className={cx('signUp-btn')}>
                        Sign up
                    </Button>
                    <button className={cx('actionBtn')} onClick={() => setModalType('Share')}>
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
