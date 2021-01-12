import React, {useEffect, useState} from "react";
import axios from "axios"
import UserCard from "./UserCard";
import {axiosWithBaseURL} from "../utils/axios"


// import LeftMenu from "./components/LeftMenu"
import testUserPhoto from "../assets/testPhotos/testUserPhoto.jpg";

// "message": "welcome",
// "id": 1,
// "username": "fzAdmin",
// "type": "admin",
// "bio": null,
// "address": null,
// "postal_code": "76244",
// "isLoggedIn": true
const exampleUser = {
  age: 32,
  first: "Kyle",
  last: "Test",
  city: "Fort Worth",
  thumbnail: null,
  photo: testUserPhoto,
  bio: "Hey, waiting to meet my new best friend!! Come say hi",
};

const Main = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log(user)
  // useEffect(()=> {
  //   // setMyUser(exampleUser)
  //   axiosWithBaseURL().post("/users/login", {
  //     // "username": {username},
  //     // "password": {password}
  //     "username": `${process.env.REACT_APP_ADMIN_USERNAME}`,
  //     "password": `${process.env.REACT_APP_ADMIN_PASSWORD}`
  //   })
  //     .then((res) => {
  //       console.log(res.data)
  //       setMyUser(res.data)
  //     }
  //     )
  // }, [])
  return (
    <>
    <div className='app-container'>

    </div>
    <div className="main-container">
      <h2>FriendZone</h2>
      <UserCard person={user} />
    </div>
    </>
  );
};

export default Main;
