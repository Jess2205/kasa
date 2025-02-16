import { useState } from "react";
import styles from "./Collapse.module.scss";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.collapseItem} ${isOpen ? styles.open : ''}`}>
      <div className={styles.collapseHeader} onClick={toggleCollapse}>
        <span>{title}</span>
        <span className={styles.arrowBack}></span>
      </div>
      {isOpen && <div className={styles.collapseContent}>{children}</div>}
    </div>
  );
};

export default Collapse;
