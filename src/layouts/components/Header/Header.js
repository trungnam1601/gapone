import { useState } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Fragment } from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '../../../assets/images';
import Menu, { MenuItem, SubMenu } from './Menu';
import config from '../../../config';
import Button from './../../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronDown,
    faAddressCard,
    faGlobeAfrica,
    faMagnifyingGlass,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    const [isActive, setIsActive] = useState(false);
    const [showIcon, setShowIcon] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const handleClickSubMenu = (e) => {
        if (e.target.className === 'title') {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    };
    const handleClear = () => {
        setShowIcon(false);
        setShowForm(false);
    };

    const handleIconSearch = () => {
        setShowIcon(true);
        setShowForm(true);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Gapone" />
                </Link>
                <Fragment>
                    <div>
                        <Tippy
                            // visible
                            interactive={true}
                            render={(attrs) => (
                                <div className={cx('menu-sub-wrapper')}>
                                    <div className={cx('menu-sub-list')} tabIndex="-1" {...attrs}>
                                        <SubMenu
                                            title="Bộ công cụ tăng trưởng kênh Zalo"
                                            to={config.routes.growthzalo}
                                            icon={faAddressCard}
                                            onClick={handleClickSubMenu}
                                        />
                                        <SubMenu
                                            title="Bộ công cụ tăng trưởng Website"
                                            to={config.routes.growthwebsite}
                                            icon={faGlobeAfrica}
                                            onClick={handleClickSubMenu}
                                        />
                                    </div>
                                </div>
                            )}
                        >
                            <div className={cx('solution', isActive ? 'active' : '')}>
                                Giải pháp
                                <FontAwesomeIcon className={cx('icon-down')} icon={faChevronDown} />
                            </div>
                        </Tippy>
                    </div>
                    <Menu>
                        <MenuItem title="Bảng giá" to={config.routes.listprice} onClick={handleClickSubMenu} />
                        <MenuItem title="Khuyến mãi" to={config.routes.promotion} onClick={handleClickSubMenu} />
                        <MenuItem title="Blog" to={config.routes.blog} onClick={handleClickSubMenu} />
                        <MenuItem title="Trợ giúp" to={config.routes.help} onClick={handleClickSubMenu} />
                    </Menu>
                </Fragment>

                <div className={cx('action')}>
                    <div className={cx('search')}>
                        <div className={cx('item')}>
                            {showIcon && (
                                <button className={cx('clear')} onClick={handleClear}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            )}

                            {!showIcon && (
                                <button className={cx('search-icon')} onClick={handleIconSearch}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            )}
                        </div>
                        {showForm && (
                            <div className={cx('form-inner')}>
                                <div className={cx('form-search')}>
                                    <input placeholder="Search..." />
                                </div>
                                <Button
                                    className={cx('button')}
                                    to={config.routes.search}
                                    small
                                    centerIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                                />
                            </div>
                        )}
                    </div>

                    <Button to={config.routes.login} text>
                        Đăng nhập
                    </Button>
                    <Button to={config.routes.register} primary>
                        Đăng ký
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
