import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import PropTypes from 'prop-types';

import { useStore } from '~/hooks';
import { setSceneEffect } from '~/Store/session/';
import styles from './SceneActions.module.scss';

const cx = classNames.bind(styles);

function SceneActions({ scene, onNextScene }) {
    const { setMenuActive, background } = useStore();
    const [, backgroundDispatch] = background;
    //close Lateral menu: scene, mixer, moods..
    const handleCloseMenu = () => setMenuActive(undefined);

    const handlePlayPauseEffect = (action) => {
        // has effect scene
        if (Object.keys(scene.variants).includes(action.effect)) {
            console.log(action.effect);
            backgroundDispatch(setSceneEffect({ effect: action.effect }));
        }
        // play sound
    };
    const actions = scene.actions;
    return (
        <div className={cx('scene-actions')} onClick={handleCloseMenu}>
            {actions.map((action, index) => (
                <div key={index}>
                    <Tippy
                        interactive
                        delay={100}
                        content={action.title}
                        placement="bottom"
                        offset={[0, -30]}
                        hideOnClick={false}
                    >
                        <div
                            className={cx('popover-action')}
                            style={{
                                left: action.position[0] + '%',
                                top: action.position[1] + '%',
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                if (action.type === 'next-set') {
                                    onNextScene?.();
                                }
                                if (action.type === 'sound') {
                                    handlePlayPauseEffect(action);
                                }
                            }}
                        >
                            <div className={cx('circle')}>
                                <div />
                            </div>
                        </div>
                    </Tippy>
                </div>
            ))}
        </div>
    );
}

SceneActions.propTypes = {
    scene: PropTypes.object.isRequired,
};
export default SceneActions;
