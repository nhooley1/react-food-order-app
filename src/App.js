import { Fragment, useState } from 'react';
import Header from './Layout/Header';
import Meals from './Meals/Meals';
import Cart from './Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [isModalShown, setIsModalShown] = useState(false);

  const openModalHandler = () => {
    setIsModalShown(true);
  };

  const closeModalHandler = () => {
    setIsModalShown(false);
  };
  return (
    <CartProvider>
      <Fragment>
        {isModalShown && <Cart onCloseModel={closeModalHandler} />}
        <Header onOpenModel={openModalHandler} />
        <Meals />
      </Fragment>
    </CartProvider>
  );
}

export default App;
