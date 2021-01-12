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
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";

import { get_initials, calcAge } from "../utils/functions";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
  avatar: {
    backgroundColor: red[500],
  },
}));

const UserCard = ({ person }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <h1>Data dump</h1>
      {person ? (
            <pre>{JSON.stringify(person, null, 2)}</pre>
          
       ) : (
            console.log("no person")
          )}
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {person.photo
              ? person.photo
              : get_initials(person.first_name, person.last_name)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography variant="h5">{`${person.first_name}, ${calcAge(person.birthdate)}`}</Typography>
        }
        subheader={person.city}
      />
      <CardMedia
        className={classes.media}
        image={person.photo!=null ? person.photo : AccountCircleIcon}
        title={`${person.first} ${person.last}`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {person.bio}
        </Typography>
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
