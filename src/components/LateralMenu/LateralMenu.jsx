import classNames from 'classnames/bind';
import { ReactSVG } from 'react-svg';
import Tippy from '@tippyjs/react';
import { followCursor } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';

import {
    focusIcon,
    menuHistory,
    menuNotesIcon,
    menuPDFIcon,
    menuRounded,
    menuTimerIcon,
    menuYoutubeIcon,
    moodIcon,
    setIcon,
    templateIcon,
} from '~/assets/icons';
import Mixer from './Mixer';
import SceneSelector from './SceneSelector';
import { useStore } from '~/hooks';
import styles from './LateralMenu.module.scss';
import SaveTemplate from './SaveTemplate';

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
                {/* Show menu item */}
                {menuActive === 'SceneSelector' && <SceneSelector />}
                {menuActive === 'Mixer' && <Mixer />}
                {menuActive === 'Templates' && <SaveTemplate />}

                {/* lateral menu */}
                <div className={cx('lateral-menu')}>
                    {menuActive === 'Mixer' && (
                        <img src={menuRounded} alt="menuRounded" className={cx('rounded-top')} />
                    )}
                    <Tooltip content="Mixer">
                        <div className={cx('menu-item')} onClick={() => handleSelect('Mixer')}>
                            <ReactSVG src={moodIcon} alt="mixer" className={menuActive === 'Mixer' ? cx('svg') : ''} />
                        </div>
                    </Tooltip>
                    <Tooltip content="Templates">
                        <div className={cx('menu-item')} onClick={() => handleSelect('Templates')}>
                            <ReactSVG
                                src={templateIcon}
                                alt="templates"
                                className={menuActive === 'Templates' ? cx('svg') : ''}
                            />
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
                        <div className={cx('menu-item')} onClick={() => handleSelect('Tools')}>
                            <ReactSVG src={focusIcon} alt="focus" className={menuActive === 'Tools' ? cx('svg') : ''} />
                        </div>
                    </Tooltip>
                    {/* study zone */}
                    <div className={cx('study-tools', `${menuActive === 'Tools' ? 'open' : 'closed'}`)}>
                        <div className={cx('divider')}></div>
                        <Tooltip content="Youtube">
                            <div className={cx('menu-item', `${menuActive !== 'Tools' && 'closed'}`)}>
                                <ReactSVG src={menuYoutubeIcon} alt="youtube" />
                            </div>
                        </Tooltip>
                        <Tooltip content="Timer">
                            <div className={cx('menu-item', `${menuActive !== 'Tools' && 'closed'}`)}>
                                <ReactSVG src={menuTimerIcon} alt="timer" />
                            </div>
                        </Tooltip>
                        <Tooltip content="Notes">
                            <div className={cx('menu-item', `${menuActive !== 'Tools' && 'closed'}`)}>
                                <ReactSVG src={menuNotesIcon} alt="notes" />
                            </div>
                        </Tooltip>
                        <Tooltip content="PDF Reader">
                            <div className={cx('menu-item', `${menuActive !== 'Tools' && 'closed'}`)}>
                                <ReactSVG src={menuPDFIcon} alt="pdf" />
                            </div>
                        </Tooltip>
                        <Tooltip content="Insights">
                            <div className={cx('menu-item', `${menuActive !== 'Tools' && 'closed'}`)}>
                                <ReactSVG src={menuHistory} alt="insights" />
                            </div>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LateralMenu;
