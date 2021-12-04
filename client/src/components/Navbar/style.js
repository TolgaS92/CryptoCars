import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  userName: {
    marginLeft: "5px",
    display: "flex",
    alignItems: "center",
    width: "200px",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  button: {
    marginRight: "5px",
    color: "white",
  },
  signIn: {
    display: "flex",
    marginLeft: "auto",
  },
  logo: {
    height: "50px",
    width: "50px",
    marginRight: "10px",
    zoom: "125%",
  },
}));
