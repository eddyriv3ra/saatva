import { useState } from "react";
import Header from "components/header";
import data from "mockData/data.";
import { Mattress } from "interfaces";
import Section from "components/section";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState<Mattress>(data[0]);
  const [cartItems, setCartItems] = useState<Mattress[]>([]);

  const handleSelectClick = (id: number) => {
    const item =
      data.find((value) => {
        return value.id === id;
      }) || data[0];
    setSelectedItem(item);
  };

  const handleAddToCart = () => {
    const cartItemsCopy = [...cartItems];
    const item = cartItemsCopy.find((cartItem) => {
      return cartItem.id === selectedItem.id;
    });
    if (!item) {
      return setCartItems([...cartItemsCopy, { ...selectedItem, units: 1 }]);
    }
    item.units++;
    return setCartItems([...cartItemsCopy]);
  };

  const getNumberOfCartItems = () =>
    cartItems.reduce(
      (acc: number, currentValue: Mattress) => acc + currentValue.units,
      0
    );

  return (
    <>
      <Header units={getNumberOfCartItems()} />
      <Section
        handleSelectClick={handleSelectClick}
        handleAddToCart={handleAddToCart}
        selectedItem={selectedItem}
      />
    </>
  );
};

export default Home;
