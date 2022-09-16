import classNames from 'classnames/bind';

import styles from './Background.module.scss';
import SceneActions from './SceneActions';
import useStore from '~/hooks/useStore';

const cx = classNames.bind(styles);

function Background() {
    const { background } = useStore();
    const [backgroundState] = background;
    const scene = backgroundState.set.scenes[backgroundState.sceneIndex];

    const getSceneSource = () => {
        return scene.variants.default;
    };
    const sourceVideo = getSceneSource();

    return (
        <div className={cx('wrapper')}>
            <video className={cx('background-video')} src={sourceVideo} autoPlay playsInline loop muted />
            {/* <video className={cx('background-video')} src={sourceVideo} autoPlay playsInline loop muted /> */}
            <SceneActions scene={scene} />
        </div>
    );
}

export default Background;
