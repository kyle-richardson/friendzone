import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BlurCircularIcon from "@material-ui/icons/BlurCircular";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const LeftMenu = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            {open && <ListItemText primary={"Name"} />}
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              <BlurCircularIcon />
            </ListItemIcon>
            {open && <ListItemText primary={"Your Likes"} />}
          </ListItem>
          {open && (
            <ListItem>
              <ListItemText primary={"Find your conversations here"} />
            </ListItem>
          )}
        </List>
      </Drawer>
    </div>
  );
};

export default LeftMenu;
