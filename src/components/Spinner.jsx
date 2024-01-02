import styles from "./Spinner.module.css";
import CircularProgress from "@mui/material/CircularProgress";
function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <CircularProgress style={{ color: "white" }} />
    </div>
  );
}

export default Spinner;
