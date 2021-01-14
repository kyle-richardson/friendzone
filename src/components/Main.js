import React, {useEffect, useState} from "react";
import axios from "axios"
import UserCard from "./UserCard";
import {axiosWithBaseURL} from "../utils/axios"

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
