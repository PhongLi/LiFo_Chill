import classNames from 'classnames/bind';

import { playIcon, nextIcon, prevIcon, pauseIcon } from '~/assets/icons';
import { useStore } from '~/hooks';
import { useSelector } from '~/hooks/useSelector';
import { nextTrack, playAndPauseAudio, previousTrack, SessionSelect } from '~/store/session';
import styles from './Bottom.module.scss';
const cx = classNames.bind(styles);

function Bottom() {

    const { session } = useStore();
    const [, sessionDispatch] = session;
    const playing = useSelector(SessionSelect.getPlayingStatus);
    const currentTrack = useSelector(SessionSelect.getCurrentTrack);
    
    const handelPlayPause = () => {
        sessionDispatch(playAndPauseAudio());
    };
    const handleNextTrack = () => {
        sessionDispatch(nextTrack());
    };
    const handlePrevTrack = () => {
        sessionDispatch(previousTrack());
    };
    const handleOpenLink = () => {
        currentTrack.social_link && window.open(currentTrack.social_link);
    };
    return (
        <div className={cx('bottom-bar')}>
            <div className={cx('artist-info')}>
                <p>{!!currentTrack.title?.length ? 'Music by -' : 'Music by - lofi.co 2021 ©'}</p>

                {currentTrack.title?.length && currentTrack.title?.includes('https:') && (
                    <img src={currentTrack.title} alt="" className={cx('title')} onClick={handleOpenLink} />
                )}
            </div>
            <div className={cx('player-bar','hideMobile')}>
                <img src={prevIcon} alt="" className={cx('icon', 'button-np')} onClick={handlePrevTrack} />

                <>
                    {!playing ? (
                        <img src={playIcon} alt="" className={cx('icon', 'button-pp')} onClick={handelPlayPause} />
                    ) : (
                        <img src={pauseIcon} alt="" className={cx('icon', 'button-pp')} onClick={handelPlayPause} />
                    )}
                </>

                <img src={nextIcon} alt="" className={cx('icon', 'button-np')} onClick={handleNextTrack} />
            </div>
        </div>
    );
}

export default Bottom;
