import styles from "./innercomponent.module.css";
export default function InnerComponent({ children }) {
  return <div className={styles.innerComponent}>{children}</div>;
}
