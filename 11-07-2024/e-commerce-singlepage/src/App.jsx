import styles from "./App.module.css";
import { Header } from "./components/Header/Header.jsx";
import { ShowProduct } from "./components/ShowProduct/Showproduct.jsx";
import { Button } from "./components/Button/Button.jsx";
import { Bio } from "./components/Bio/Bio.jsx";

function App() {
  return (
    <>
      <Header />
      <div className={styles.showbio_container}>
        <ShowProduct />
        <Bio />
      </div>
    </>
  );
}

export default App;
