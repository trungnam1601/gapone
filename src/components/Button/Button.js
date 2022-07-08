import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    primary = false,
    text = false,
    disabled = false,
    small = false,
    centerIcon,
    leftIcon,
    RightIcon,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        delete props.onClick;
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        text,
        disabled,
        small,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            {centerIcon ? (
                <span className={cx('icon')}>{centerIcon}</span>
            ) : (
                <span className={cx('title')}>{children}</span>
            )}
            {RightIcon && <span className={cx('icon')}>{RightIcon}</span>}
        </Comp>
    );
}

export default Button;
