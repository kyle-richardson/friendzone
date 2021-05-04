import React, {useEffect, useState} from "react";
import UserCard from "./UserCard";
import {axiosWithBaseURL} from "../utils/axios"
import {useSelector, useDispatch} from 'react-redux'
import Button from '@material-ui/core/Button'
import {doneAccountEdit} from "../utils/redux/actions"
import CardList from "./CardList"


const Main = ({user}) => {
  const [people, setPeople] = useState()
  const {changePerson, accountEdit} = useSelector(state => state)
  const [allowEdit, setAllowEdit] = useState(false)
  const dispatch = useDispatch()
  const handleDone = () => {
    if(allowEdit){

    }
    setAllowEdit(false)
    dispatch(doneAccountEdit)
  }

  const handleToggleEdit = () => {
    if(allowEdit) {
      dispatch()
    }
    setAllowEdit(!allowEdit)
  }

  useEffect(()=> {
    if (!accountEdit) {
      axiosWithBaseURL()
      .get('/users/getlist')
      .then(res=> {
        console.log(res)
        setPeople(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
    // else {
    //   axiosWithBaseURL()
    //   .get('/users/random')
    //   .then(res=> {
    //     setPerson(res.data)
    //   })
    //   .catch(err=> {
    //     console.log(err)
    //   })
    // }
  },[changePerson, accountEdit])
  return (
    <>
      <div className="main-container">
        <h2>FriendZone</h2>
        <div className="list-container">
        {accountEdit ? 
          <>
          <div style={{display: "flex"}}>
            <p>This is what others will see.</p>
            <Button onClick={handleToggleEdit}>{allowEdit ? "Save" : "Edit"}</Button>
          </div>
          <UserCard person={user} allowEdit = {true}/>
          <Button onClick = {handleDone}>{allowEdit ? "Save and quit" : "Done"}</Button>
          </>
          :
          people && <CardList key={people} people={people}/>
        }
        </div>
       
      </div>
    </>
  );
};

export default Main;
