import React, { useState, useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import styles from './app.module.css';

const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

const App = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [selectedIngredient, setSelectedIngredient] = useState(null);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                setData(data.data);
                setIsLoading(false);
            })
            .catch(() => {
                setHasError(true);
                setIsLoading(false);
            });
    }, []);

    const handleIngredientClick = (ingredient) => {
        setSelectedIngredient(ingredient);
    };

    const handleOrderClick = () => {
        setIsOrderModalOpen(true);
    };

    const closeModals = () => {
        setSelectedIngredient(null);
        setIsOrderModalOpen(false);
    };

    return (
        <div className={styles.app}>
            <AppHeader />
            <main className={styles.main}>
                {isLoading && <p>Загрузка...</p>}
                {hasError && <p>Произошла ошибка</p>}
                {!isLoading && !hasError && (
                    <>
                        <BurgerIngredients ingredients={data} onIngredientClick={handleIngredientClick} />
                        <BurgerConstructor ingredients={data} onOrderClick={handleOrderClick} />
                    </>
                )}
            </main>
            {selectedIngredient && (
                <Modal onClose={closeModals}>
                    <IngredientDetails ingredient={selectedIngredient} />
                </Modal>
            )}
            {isOrderModalOpen && (
                <Modal onClose={closeModals}>
                    <OrderDetails />
                </Modal>
            )}
        </div>
    );
};

export default App;
