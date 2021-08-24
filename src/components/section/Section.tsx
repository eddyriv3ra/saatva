import React from "react";
import { Mattress } from "interfaces";
import StarRatings from "react-star-ratings";
import styles from "./section.module.scss";
import Button from "components/button";
import data from "mockData/data.";

interface SectionProps {
  selectedItem: Mattress;
  handleSelectClick: (id: number) => void;
  handleAddToCart: () => void;
}

const Section = ({
  selectedItem,
  handleSelectClick,
  handleAddToCart,
}: SectionProps) => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.imageContainer}>
        <img src={selectedItem.image} alt="mattress" className={styles.image} />
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>Choose Your Mattress</h2>
        <h3 className={styles.mattressType}>SELECT MATTRESS TYPE</h3>
        <div className={styles.buttonsContainer}>
          {data.map((mattress: Mattress) => {
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
  );
};

export default Section;
