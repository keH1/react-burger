import React from 'react';
import styles from './order-details.module.css';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderDetails = () => (
    <div className={styles.container}>
        <p className={`${styles.orderNumber} text text_type_digits-large`}>034536</p>
        <p className="text text_type_main-medium">идентификатор заказа</p>
        <div className={styles.icon}>
            <CheckMarkIcon type="primary" />
        </div>
        <p className="text text_type_main-default">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive">
            Дождитесь готовности на орбитальной станции
        </p>
    </div>
);

export default OrderDetails;
