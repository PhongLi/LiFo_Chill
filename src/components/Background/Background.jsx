import { useState, useEffect, useRef, memo } from 'react';
import ReactPlayer from 'react-player';

import SceneActions from './SceneActions';
import useStore from '~/hooks/useStore';
import { setSceneAndSet } from '~/store/session';
import { useSelector } from '~/hooks/useSelector';
import { SessionSelect } from '~/store/session';
import classNames from 'classnames/bind';

import styles from './Background.module.scss';
const cx = classNames.bind(styles);

function Background() {
    const { session } = useStore();
    const [sessionState, sessionDispatch] = session;
    const video1 = useRef();
    const video2 = useRef();

    const [active, setActive] = useState();
    const [isPending, setIsPending] = useState();
    const sourceVideo = useSelector(SessionSelect.getSceneSource);
    const [sourceVideo1, setSourceVideo1] = useState(sourceVideo);
    const [sourceVideo2, setSourceVideo2] = useState(sourceVideo);

    const currentScene = useSelector(SessionSelect.getScene);
    useEffect(() => {
        if (active === 1) {
            const noPending = sourceVideo === sourceVideo2;
            setSourceVideo2(sourceVideo);
            setIsPending(2);
            if (noPending) setActive(2);
        } else {
            const noPending = sourceVideo === sourceVideo1;
            setSourceVideo1(sourceVideo);
            setIsPending(1);
            if (noPending) setActive(1);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sourceVideo]);

    const handleNextScene = () => {
        const newSceneIndex =
            sessionState.set.scenes.length === sessionState.sceneIndex + 1 ? 0 : sessionState.sceneIndex + 1;
        sessionDispatch(setSceneAndSet({ set: sessionState.set, sceneIndex: newSceneIndex }));
    };

    return (
        <div className={cx('wrapper')}>
            <ReactPlayer
                url={sourceVideo1}
                ref={video1}
                playing={true}
                width="100%"
                height="100%"
                style={{ opacity: active === 1 ? '1' : '0' }}
                className={cx('background-video')}
                playsInline
                loop
                muted
                onReady={() => {
                    if (isPending === 1) setActive(1);
                }}
            />
            <ReactPlayer
                url={sourceVideo2}
                ref={video2}
                playing={true}
                width="100%"
                height="100%"
                style={{ opacity: active === 2 ? '1' : '0' }}
                className={cx('background-video')}
                playsInline
                loop
                muted
                onReady={() => {
                    if (isPending === 2) setActive(2);
                }}
            />
            <SceneActions scene={currentScene} onNextScene={handleNextScene} />
        </div>
    );
}

export default memo(Background);
