import { shoppingCart } from "utils/images";
import styles from "./header.module.scss";

interface HeaderProps {
  units: number;
}

const Header = ({ units }: HeaderProps) => {
  return (
    <header className={styles.container}>
      <h2 className={styles.brand}>saatva</h2>
      <div style={{ position: "relative" }}>
        {units !== 0 && <div className={styles.notification}>{units}</div>}
        <img src={shoppingCart} alt="shopping cart" className={styles.image} />
      </div>
    </header>
  );
};

export default Header;
