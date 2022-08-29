import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import { useContext } from 'react';

import styles from './SettingMenu.module.scss';
import Button from '~/components/Button';
import { AppContext } from '~/Context/AppProvider';

const cx = classNames.bind(styles);

function SettingMenu({ items = [], children }) {
    const { setModalType } = useContext(AppContext);

    const renderItems = () =>
        items.map((item, index) => {
            const Icon = item.icon;
            const handleClick = () => {
                if (['Tutorial', 'PremiumPopup'].includes(item.modal)) {
                    setModalType(item.modal);
                } else {
                    console.log(item);
                }
            };

            return (
                <Button key={index} leftIcon={Icon} to={item.to} className={cx('menu-item')} onClick={handleClick}>
                    {item.title}
                </Button>
            );
        });

    return (
        <Tippy
            interactive
            hideOnClick={false}
            delay={[0, 1000]}
            offset={[30, 15]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <div className={cx('menu-wrapper')}>{renderItems()}</div>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
SettingMenu.propTypes = {
    items: PropTypes.array,
    children: PropTypes.node.isRequired,
};

export default SettingMenu;
