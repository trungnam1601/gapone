import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function MenuItem({ title, to, onClick }) {
    return (
        <Fragment>
            <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to} onClick={onClick}>
                <span className={cx('title')}>{title}</span>
            </NavLink>
        </Fragment>
    );
}

export default MenuItem;
