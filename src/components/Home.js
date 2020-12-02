import React from 'react';
import LeftMenu from "./components/LeftMenu"
import Main from "./components/Main"

function Home() {
  return (
    <div className="home-container">
      <LeftMenu />
      <Main/>
    </div>
  );
}

export default Home;
