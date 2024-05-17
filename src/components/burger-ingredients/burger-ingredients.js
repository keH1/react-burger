import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyles from './burger-ingredients.module.css';

const BurgerIngredients = ({ ingredients }) => {
    const [current, setCurrent] = React.useState('one');

    return (
        <section className={burgerIngredientsStyles.container}>
            <div className={burgerIngredientsStyles.tabs}>
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
            <div className={burgerIngredientsStyles.ingredients}>
                {ingredients.map(ingredient => (
                    <div key={ingredient._id} className={burgerIngredientsStyles.ingredient}>
                        <img src={ingredient.image} alt={ingredient.name} />
                        <p>{ingredient.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        image_mobile: PropTypes.string.isRequired,
        image_large: PropTypes.string.isRequired,
        __v: PropTypes.number.isRequired
    })).isRequired
};

export default BurgerIngredients;
