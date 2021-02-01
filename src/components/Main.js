import React, {useEffect, useState} from "react";
import UserCard from "./UserCard";
import {axiosWithBaseURL} from "../utils/axios"
import {useSelector} from 'react-redux'

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
  const {changePerson} = useSelector(state => state)
  useEffect(()=> {
    axiosWithBaseURL()
    .get('/users/random')
    .then(res=> {
      setPerson(res.data)
      console.log(res.data)
    })
    .catch(err=> {
      console.log(err)
    })
  },[changePerson])
  return (
    <>
      <div className="main-container">
        <h2>FriendZone</h2>
        <UserCard person={person} />
      </div>
    </>
  );
};

export default Main;
