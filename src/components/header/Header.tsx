import { shoppingCart } from "utils/images";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <h2 className={styles.brand}>saatva</h2>
      <img src={shoppingCart} alt="shopping cart" className={styles.image} />
    </header>
  );
};

export default Header;
