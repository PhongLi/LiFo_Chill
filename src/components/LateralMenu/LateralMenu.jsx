import classNames from 'classnames/bind';
import { ReactSVG } from 'react-svg';
import Tippy from '@tippyjs/react';
import { followCursor } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';

import { focusIcon, moodIcon, setIcon, templateIcon } from '~/assets/icons';
import styles from './LateralMenu.module.scss';
import SceneSelector from './SceneSelector';
import { useStore } from '~/hooks';

const cx = classNames.bind(styles);

function LateralMenu() {
    const { menuActive, setMenuActive } = useStore();

    function Tooltip({ children, content = 'tooltips' }) {
        return (
            <div>
                <Tippy
                    interactive
                    placement="left"
                    content={content}
                    theme="lateral"
                    delay={[0, 0]}
                    followCursor={true}
                    plugins={followCursor}
                    hideOnClick={false}
                >
                    {children}
                </Tippy>
            </div>
        );
    }
    const handleSelect = (menu) => {
        menuActive === menu ? setMenuActive(undefined) : setMenuActive(menu);
    };

    return (
        <>
            <div className={cx('wrapper')} id="lateralMenu">
                {menuActive === 'SceneSelector' && <SceneSelector />}
                <div className={cx('lateral-menu')}>
                    <Tooltip content="Mixer">
                        <div className={cx('menu-item')}>
                            <ReactSVG src={moodIcon} alt="mixer" />
                        </div>
                    </Tooltip>
                    <Tooltip content="Templates">
                        <div className={cx('menu-item')}>
                            <ReactSVG src={templateIcon} alt="templates" />
                        </div>
                    </Tooltip>
                    <Tooltip content="Scenes">
                        <div className={cx('menu-item')} onClick={() => handleSelect('SceneSelector')}>
                            <ReactSVG
                                src={setIcon}
                                alt="sets"
                                className={menuActive === 'SceneSelector' ? cx('svg') : ''}
                            />
                        </div>
                    </Tooltip>
                    <Tooltip content="Tools">
                        <div className={cx('menu-item')}>
                            <ReactSVG src={focusIcon} alt="focus" />
                        </div>
                    </Tooltip>
                </div>
            </div>
        </>
    );
}

export default LateralMenu;
