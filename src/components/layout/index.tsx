import { Outlet } from "react-router-dom";
import styles from "./index.module.css";

const Layout: React.FC = () => {
  return (
    <div className={styles.Wrapper}>
      <div>navbar</div>
      <div>
        <Outlet />
      </div>
      footer
    </div>
  );
};

export default Layout;
