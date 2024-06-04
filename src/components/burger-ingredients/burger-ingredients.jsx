import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types';
import styles from './burger-ingredients.module.css';

const BurgerIngredients = ({ ingredients, onIngredientClick }) => {
    const [current, setCurrent] = useState('one');

    return (
        <section className={styles.container}>
            <div className={styles.tabs}>
                <Tab value="one" active={current === 'one'} onClick={() => setCurrent('one')}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={() => setCurrent('two')}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={() => setCurrent('three')}>
                    Начинки
                </Tab>
            </div>
            <div className={styles.ingredients}>
                {ingredients.map(ingredient => (
                    <div key={ingredient._id} className={styles.ingredient} onClick={() => onIngredientClick(ingredient)}>
                        <img src={ingredient.image} alt={ingredient.name} />
                        <p>{ingredient.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType).isRequired,
    onIngredientClick: PropTypes.func.isRequired,
};

export default BurgerIngredients;
