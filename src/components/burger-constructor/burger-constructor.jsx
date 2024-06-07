// components/burger-constructor/burger-constructor.jsx
import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { addItem, removeItem, moveItem } from '../../services/constructor/constructorSlice';
import { createOrder } from '../../services/order/orderSlice';
import ConstructorItem from '../constructor-item/constructor-item';
import styles from './burger-constructor.module.css';

const BurgerConstructor = () => {
    const dispatch = useDispatch();
    const { bun, items } = useSelector(state => state.constructor);
    const orderNumber = useSelector(state => state.order.orderNumber);

    const [, drop] = useDrop({
        accept: 'ingredient',
        drop: (item) => {
            dispatch(addItem(item));
        }
    });

    const totalPrice = useMemo(() => {
        const bunPrice = bun ? bun.price * 2 : 0;
        const itemsPrice = items.reduce((acc, item) => acc + item.price, 0);
        return bunPrice + itemsPrice;
    }, [bun, items]);

    const handleOrder = () => {
        const ingredientIds = items.map(item => item._id);
        if (bun) {
            ingredientIds.push(bun._id);
        }
        dispatch(createOrder(ingredientIds));
    };

    return (
        <div ref={drop} className={styles.container}>
            {bun && <ConstructorItem item={bun} type="top" />}
            {items.map((item, index) => (
                <ConstructorItem key={item._id} item={item} index={index} moveItem={moveItem} />
            ))}
            {bun && <ConstructorItem item={bun} type="bottom" />}
            <div className={styles.total}>
                <span>Стоимость: {totalPrice}</span>
                <button onClick={handleOrder}>Оформить заказ</button>
            </div>
            {orderNumber && <div>Ваш заказ: {orderNumber}</div>}
        </div>
    );
};

export default BurgerConstructor;
