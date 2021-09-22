import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "8px",
    height: "100%",
    position: "relative",
  },
  overlay: {
    margin: "10px",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
  },
  tab: {
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      minWidth: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
}));
