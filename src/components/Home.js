import React from 'react';
import Main from "./Main"
import MiniDrawer from "./MiniDrawer"

function Home() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <div className="home-container">
      <MiniDrawer user={user}/>
      <Main user= {user}/>
    </div>
  );
}

export default Home;
