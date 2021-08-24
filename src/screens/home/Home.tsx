import { useState } from "react";
import StarRatings from "react-star-ratings";
import Button from "components/button";
import Header from "components/header";
import styles from "./home.module.scss";
import data from "mockData/data.";
import { Matrress } from "interfaces";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState<Matrress>(data[0]);
  const [cartItems, setCartItems] = useState<Matrress[]>([]);

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
      (acc: number, currentValue: Matrress) => acc + currentValue.units,
      0
    );

  return (
    <div>
      <Header units={getNumberOfCartItems()} />
      <div className={styles.sectionContainer}>
        <div className={styles.imageContainer}>
          <img
            src={selectedItem.image}
            alt="mattress"
            className={styles.image}
          />
        </div>
        <div className={styles.section}>
          <h2 className={styles.title}>Choose Your Mattress</h2>
          <h3 className={styles.mattressType}>SELECT MATTRESS TYPE</h3>
          <div className={styles.buttonsContainer}>
            {data.map((mattress: Matrress) => {
              return (
                <Button
                  key={mattress.id}
                  onClick={() => handleSelectClick(mattress.id)}
                  selected={selectedItem.id === mattress.id}
                >
                  {mattress.name}
                </Button>
              );
            })}
          </div>
          <div className={styles.info}>
            <p className={styles.name}>{selectedItem.name}</p>
            <p className={styles.price}>{`$${selectedItem.price}`}</p>
          </div>
          <div className={styles.starRatings}>
            <StarRatings
              rating={selectedItem.reviewRating}
              starDimension="40px"
              starSpacing="15px"
            />
          </div>
          <div className={styles.addToCartButton}>
            <Button status="primary" onClick={handleAddToCart}>
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
