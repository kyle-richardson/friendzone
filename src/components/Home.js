import React from 'react';
import LeftMenu from "./LeftMenu"
import Main from "./Main"

function Home() {
  return (
    <div className="home-container">
      <LeftMenu />
      <Main/>
    </div>
  );
}

export default Home;
