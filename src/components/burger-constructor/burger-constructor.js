import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyles from './burger-constructor.module.css';

const BurgerConstructor = ({ ingredients }) => {
    return (
        <section className={burgerConstructorStyles.container}>
            <div className={burgerConstructorStyles.ingredients}>
                {ingredients.map((ingredient, index) => (
                    <div key={index} className={burgerConstructorStyles.ingredient}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={ingredient.name}
                            price={ingredient.price}
                            thumbnail={ingredient.image}
                        />
                    </div>
                ))}
            </div>
            <div className={burgerConstructorStyles.total}>
                <div className={burgerConstructorStyles.total_sum}>
                    <p className="text text_type_digits-medium">610</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="medium">
                    Оформить заказ
                </Button>
            </div>
        </section>
    );
};

BurgerConstructor.propTypes = {
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

export default BurgerConstructor;
