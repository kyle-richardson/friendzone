import React from "react";
import UserCard from "./UserCard";
import testUserPhoto from "../assets/testPhotos/testUserPhoto.jpg";

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
  return (
    <div className="main-container">
      <h2>FriendZone</h2>
      <UserCard person={exampleUser} />
    </div>
  );
};

export default Main;
