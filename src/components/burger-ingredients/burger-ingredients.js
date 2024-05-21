import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types';
import styles from './burger-ingredients.module.css';

const BurgerIngredients = ({ ingredients }) => {
    const [current, setCurrent] = React.useState('one');

    return (
        <section className={styles.container}>
            <div className={styles.tabs}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={styles.ingredients}>
                {ingredients.map(ingredient => (
                    <div key={ingredient._id} className={styles.ingredient}>
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
};

export default BurgerIngredients;
