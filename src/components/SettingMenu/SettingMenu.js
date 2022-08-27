import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import styles from './SettingMenu.module.scss';
import { Button } from '../Button';

const cx = classNames.bind(styles);

function SettingMenu({ items = [], children }) {
    const handleOnclick = (item) => {
        console.log(item)
    }
    
    const renderItems = () =>
        items.map((item, index) => {
            const Icon = item.icon;
            return (
                <Button key={index} leftIcon={Icon} to={item.to} className={cx('menu-item')} onClick={()=>handleOnclick(item.title)}>
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
}

export default SettingMenu;
