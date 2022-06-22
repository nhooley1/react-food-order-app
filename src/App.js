import { Fragment, useState } from 'react';
import Header from './Layout/Header';
import Meals from './Meals/Meals';
import Cart from './Cart/Cart';

function App() {
  const [isModalShown, setIsModalShown] = useState(false);

  const openModalHandler = () => {
    setIsModalShown(true);
  };

  const closeModalHandler = () => {
    setIsModalShown(false);
  };
  return (
    <Fragment>
      {isModalShown && <Cart onCloseModel={closeModalHandler} />}
      <Header onOpenModel={openModalHandler} />
      <Meals />
    </Fragment>
  );
}

export default App;
