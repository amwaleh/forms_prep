import React from "react";
import app from "./base";

const Home = props => {
  return (
    <>
      <h1>Home {props.user.email}</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;