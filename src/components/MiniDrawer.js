import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BlurCircularIcon from "@material-ui/icons/BlurCircular";
import ChatIcon from '@material-ui/icons/Chat';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {logout, accountEdit} from '../utils/redux/actions'
import {useDispatch} from 'react-redux'
import {useHistory} from "react-router"

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  listItem: {
    cursor: "pointer",
    '&:hover': {
      background: "rgb(240, 240, 240)"
    }
  },
  listItemTextSmall: {
    fontSize: '1.3rem'
  },
  listItemTextBig: {
    fontSize: '1.8rem'
  }
}));

const MiniDrawer= ({user}) =>{

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch()
  const {push} = useHistory()
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout)
    sessionStorage.removeItem('user')
    push('/signin')
  }

  const handleAccountEdit = () => {
    dispatch(accountEdit)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
      </AppBar>
      <Drawer
        onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
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
      >
        <List>
          <ListItem  className = {classes.listItem} onClick={handleAccountEdit}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary={<span className={classes.listItemTextBig}>{user.first_name}</span>}/>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem className = {classes.listItem} >
            <ListItemIcon>
              <BlurCircularIcon />
            </ListItemIcon>
            <ListItemText primary={<span className={classes.listItemTextSmall}>Matches</span>} />
          </ListItem>
          <ListItem  className = {classes.listItem} >
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary={<span className={classes.listItemTextSmall}>Conversations</span>} />
          </ListItem>
        </List>
        <List style={{position: "absolute", bottom: "10px", width: drawerWidth}}>
          <ListItem className = {classes.listItem} 
            onClick={handleLogout}>
            <ListItemIcon>
              <ExitToAppIcon/>
            </ListItemIcon>
            <ListItemText primary={<span className={classes.listItemTextSmall}>Logout</span>} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default MiniDrawer