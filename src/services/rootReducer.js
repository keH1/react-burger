// services/rootReducer.js
import { combineReducers } from 'redux';
import ingredientsReducer from './components/ingredients/ingredientsSlice';
import constructorReducer from './constructor/constructorSlice';
import ingredientDetailsReducer from './ingredientDetails/ingredientDetailsSlice';
import orderReducer from './order/orderSlice';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    constructor: constructorReducer,
    ingredientDetails: ingredientDetailsReducer,
    order: orderReducer
});
