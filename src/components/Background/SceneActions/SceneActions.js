import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './SceneActions.module.scss';
import { useStore } from '~/hooks';

const cx = classNames.bind(styles);

function SceneActions({ scene }) {
    const { setMenuActive } = useStore();
    const handleCloseMenu = () => setMenuActive(undefined); //Lateral menu: scene, mixer, moods..

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
                            onClick={(e) => e.stopPropagation()}
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

export default SceneActions;
