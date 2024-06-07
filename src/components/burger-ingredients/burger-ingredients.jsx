import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIngredients } from '../../services/ingredients/ingredientsSlice';
import Ingredient from '../ingredient/ingredient';
import styles from './burger-ingredients.module.css';

const BurgerIngredients = () => {
    const dispatch = useDispatch();
    const { items, status, error } = useSelector(state => state.ingredients);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchIngredients());
        }
    }, [status, dispatch]);

    return (
        <div className={styles.container}>
            {status === 'loading' && <p>Загрузка...</p>}
            {status === 'failed' && <p>Произошла ошибка: {error}</p>}
            {status === 'succeeded' && items.map(item => (
                <Ingredient key={item._id} item={item} />
            ))}
        </div>
    );
};

export default BurgerIngredients;
