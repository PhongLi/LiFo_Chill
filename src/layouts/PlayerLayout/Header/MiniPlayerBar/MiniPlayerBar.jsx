import classNames from 'classnames/bind';
import { nextTrackIcon, pauseTrackIcon, playTrackIcon, prevTrackIcon } from '~/assets/icons';
import { useStore } from '~/hooks';
import { useSelector } from '~/hooks/useSelector';
import { nextTrack, playAndPauseAudio, previousTrack, SessionSelect } from '~/store/session';
import styles from './MiniPlayerBar.module.scss';

const cx = classNames.bind(styles);

function MiniPlayerBar() {
    const { session } = useStore();
    const [, sessionDispatch] = session;

    const isPlaying = useSelector(SessionSelect.getPlayingStatus);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('control-btn', 'prev-btn')} onClick={() => sessionDispatch(previousTrack())}>
                <img src={prevTrackIcon} alt="prev" />
            </div>
            {!isPlaying ? (
                <div className={cx('control-btn', 'play-btn')} onClick={() => sessionDispatch(playAndPauseAudio())}>
                    <img src={playTrackIcon} alt="play" />
                </div>
            ) : (
                <div className={cx('control-btn', 'play-btn')} onClick={() => sessionDispatch(playAndPauseAudio())}>
                    <img src={pauseTrackIcon} alt="pause" />
                </div>
            )}
            <div className={cx('control-btn', 'next-btn')} onClick={() => sessionDispatch(nextTrack())}>
                <img src={nextTrackIcon} alt="next" />
            </div>
        </div>
    );
}

export default MiniPlayerBar;
