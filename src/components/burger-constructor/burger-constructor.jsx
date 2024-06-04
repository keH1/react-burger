import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types';
import styles from './burger-constructor.module.css';

const BurgerConstructor = ({ ingredients, onOrderClick }) => {
    return (
        <section className={styles.container}>
            <div className={styles.ingredients}>
                {ingredients.map((ingredient, index) => (
                    <div key={index} className={styles.ingredient}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={ingredient.name}
                            price={ingredient.price}
                            thumbnail={ingredient.image}
                        />
                    </div>
                ))}
            </div>
            <div className={styles.total}>
                <p className="text text_type_digits-medium">610</p>
                <CurrencyIcon type="primary" />
                <Button type="primary" size="medium" htmlType="button" onClick={onOrderClick}>
                    Оформить заказ
                </Button>
            </div>
        </section>
    );
};

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType).isRequired,
    onOrderClick: PropTypes.func.isRequired,
};

export default BurgerConstructor;
