import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appBar: {
      backgroundColor:"#707070"
    },
  }));
const Navbar = () => {
    const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appBar} position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
            <Typography  variant="h6" color="inherit">
                Programing Blog
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
