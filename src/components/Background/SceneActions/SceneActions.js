import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './SceneActions.module.scss';

const cx = classNames.bind(styles);

function SceneActions({scene}) {
    
    const actions = scene.actions;
    return (
        <div className={cx('scene-actions')}>
            {actions.map((action, index) => {
                return (
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
                            >
                                <div className={cx('circle')}>
                                    <div />
                                </div>
                            </div>
                        </Tippy>
                    </div>
                );
            })}
        </div>
    );
}

export default SceneActions;
