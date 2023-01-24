import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    type,
    size,
    emoji,
    leftIcon,
    rightIcon,
    className,
    children,
    disabled = false,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
        props.target = '_blank';
    }
    const classes = cx('wrapper', {
        [className]: className,
        [type]: type,
        [size]: size,
        disabled,
    });
    return (
        <Comp className={classes} {...props}>
            {emoji && (
                <span role="img" className={cx('emoji')} aria-label={`${emoji.label} emoji`}>
                    {emoji.symbol}
                </span>
            )}
            {leftIcon && <img src={leftIcon} className={cx('icon')} alt="leftIcon" />}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <img src={rightIcon} className={cx('icon')} alt="rightIcon" />}
        </Comp>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    emoji: PropTypes.object,
};
export default Button;
