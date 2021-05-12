import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";

import TextField from "@material-ui/core/TextField"

import { getCityState, get_initials, calcAge, findNextSlot } from "../utils/functions";

import defaultImage from "../assets/testPhotos/silhouette.png"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    margin: 10,
    width:300,
    height:400,
    display: "flex",
    flexDirection: "column",
    justifyContent:"space-between",

  },
  title: {
    fontSize: "1.5em"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatarContainer: {
    padding: 0,
    margin: "0 auto"
  },
  avatar: {
    backgroundColor: red[500],
    height:65,
    width: 65,
    margin: "0 auto"
  },
  action: {
    alignSelf: "center !important"
  }
}));

const UserCard = ({ person, allowEdit }) => {
  let parsedCalendar = []
  if(person.calendar) parsedCalendar = [...person.calendar]
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={
      classes.root
    }>
      <CardHeader 
        classes={{
          action: classes.action,
          avatar: classes.avatarContainer
        }}
        avatar={
          <Avatar className={classes.avatar} aria-label="avatar">
              {person.photo
               ? <img src={person.photo} /> 
               :  <AccountCircleIcon/>}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography className={classes.title} variant="h5">{`${person.first_name}`}</Typography>
        }
        // subheader={getCityState(person.postal_code)}
      />
      {/* <CardMedia
        className={classes.media}
        image={person.photo!=null ? person.photo : defaultImage}
        title={`${person.first} ${person.last}`}
      /> */}
      <CardContent style={{display:"flex", flexDirection:"column",justifyContent:"space-between", height: "100%"}}>
        <Typography variant="body2" color="textSecondary" component="p">
          {person.bio}
        </Typography>
        <div>
        <Typography variant="body2" color="textSecondary" component="p">
          Playdate Days/Times:
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {parsedCalendar.length > 0 && parsedCalendar.map(ele=>{
            return (<div>
              <p><span>{ele.day}, </span><span>{ele.time}</span></p>
            </div>)
          })}
        </Typography>
        </div>
       
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="swipe left">
          <ClearIcon />
        </IconButton>
        <IconButton className={classes.expand} aria-label="swipe right">
          <CheckIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default UserCard;
