import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function SubMenu({ title, to, onClick, icon }) {
    return (
        <div className={cx('menu-sub-list-item')}>
            <NavLink className={(nav) => cx('link', { active: nav.isActive })} to={to} onClick={onClick}>
                <FontAwesomeIcon className={cx('icon')} icon={icon} />
                <span>{title}</span>
            </NavLink>
        </div>
    );
}

export default SubMenu;
