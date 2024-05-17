import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import headerStyles from './app-header.module.css';

const AppHeader = () => {
    return (
        <header className={headerStyles.header}>
            <nav className={headerStyles.nav}>
                <div className={headerStyles.item}>
                    <BurgerIcon type="primary" />
                    <p className="text text_type_main-default">Конструктор</p>
                </div>
                <div className={headerStyles.item}>
                    <ListIcon type="secondary" />
                    <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
                </div>
            </nav>
            <Logo />
            <div className={headerStyles.item}>
                <ProfileIcon type="secondary" />
                <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
            </div>
        </header>
    );
};

export default AppHeader;
