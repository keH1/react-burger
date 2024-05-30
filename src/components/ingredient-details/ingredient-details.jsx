import React from 'react';
import PropTypes from 'prop-types';
import styles from './ingredient-details.module.css';
import { ingredientType } from '../../utils/types';

const IngredientDetails = ({ ingredient }) => (
    <div className={styles.container}>
        <img src={ingredient.image_large} alt={ingredient.name} className={styles.image} />
        <p className="text text_type_main-medium">{ingredient.name}</p>
        <div className={styles.details}>
            <div className={styles.detail}>
                <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                <p className="text text_type_digits-default text_color_inactive">{ingredient.calories}</p>
            </div>
            <div className={styles.detail}>
                <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                <p className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</p>
            </div>
            <div className={styles.detail}>
                <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                <p className="text text_type_digits-default text_color_inactive">{ingredient.fat}</p>
            </div>
            <div className={styles.detail}>
                <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                <p className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</p>
            </div>
        </div>
    </div>
);

IngredientDetails.propTypes = {
    ingredient: ingredientType.isRequired,
};

export default IngredientDetails;
