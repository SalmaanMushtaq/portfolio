/* eslint-disable react/prop-types */
import { Avatar } from "@mui/material";
import styles from "./Logo.module.css";
const Logo = ({ sx, props }) => {
  return (
    <Avatar
      alt="Logo"
      src="./logo.png"
      variant="square"
      className={styles.MuiAvatar}
      sx={sx}
      {...props}
    />
  );
};

export default Logo;
