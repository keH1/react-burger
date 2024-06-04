import React from 'react';
import styles from './order-details.module.css';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderDetails = () => {
    return (
        <div className={styles.container}>
            <p className={styles.number}>034536</p>
            <p className={styles.identifier}>идентификатор заказа</p>
            <div className={styles.statusIcon}>
                <CheckMarkIcon type="primary" />
            </div>
            <p className={styles.statusMessage}>Ваш заказ начали готовить</p>
            <p className={styles.description}>
                Дождитесь готовности на орбитальной станции
            </p>
        </div>
    );
};

export default OrderDetails;
