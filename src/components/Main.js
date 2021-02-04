import React, {useEffect, useState} from "react";
import UserCard from "./UserCard";
import {axiosWithBaseURL} from "../utils/axios"
import {useSelector, useDispatch} from 'react-redux'
import Button from '@material-ui/core/Button'
import {doneAccountEdit} from "../utils/redux/actions"

// import testUserPhoto from "../assets/testPhotos/testUserPhoto.jpg";

// const exampleUser = {
//   age: 32,
//   first: "Kyle",
//   last: "Test",
//   city: "Fort Worth",
//   thumbnail: null,
//   photo: testUserPhoto,
//   bio: "Hey, waiting to meet my new best friend!! Come say hi",
// };

const Main = ({user}) => {
  const [person, setPerson] = useState(user)
  const {changePerson, accountEdit} = useSelector(state => state)
  const [allowEdit, setAllowEdit] = useState(false)
  const dispatch = useDispatch()
  const handleDone = () => {
    dispatch(doneAccountEdit)
  }

  const handleToggleEdit = () => {
    if(allowEdit) {
      dispatch()
    }
    setAllowEdit(!allowEdit)
  }

  useEffect(()=> {
    if (accountEdit) {
      setPerson(user)
    }
    else {
      axiosWithBaseURL()
      .get('/users/random')
      .then(res=> {
        setPerson(res.data)
      })
      .catch(err=> {
        console.log(err)
      })
    }
  },[changePerson, accountEdit])
  return (
    <>
      <div className="main-container">
        <h2>FriendZone</h2>
        {accountEdit && 
          <div style={{display: "flex"}}>
            <h3>This is what others will see.</h3>
            <Button onClick={handleToggleEdit}>{allowEdit ? "Save" : "Edit"}</Button>
          </div>
        }
        <UserCard person={person} allowEdit = {allowEdit}/>
        {accountEdit && <Button onClick = {handleDone}>{allowEdit ? "Save and quit" : "Done"}</Button> }
      </div>
    </>
  );
};

export default Main;
