import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { useStore } from '~/hooks';
import Button from '~/components/Button';
import styles from './SettingMenu.module.scss';

const cx = classNames.bind(styles);

function SettingMenu({ items = [], children }) {
    const { setModalType, currentUser } = useStore();
    const loggedIn = !!currentUser;
    const navigate = useNavigate();

    const getListItems = () => {
        if (loggedIn) {
            return items.filter((e) => e.id !== 1);
        } else return items.filter((e) => e.id !== 0);
    };
    const renderItems = () =>
        getListItems().map((item, index) => {
            const handleClick = () => {
                if (item.modal) {
                    setModalType(item.modal);
                } else if (item.action) {
                    item.action();
                } else if (item.id === 1) {
                    navigate('?auth=login');
                } else {
                    // console.log(item);
                }
            };
            const Icon = item.icon;

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
