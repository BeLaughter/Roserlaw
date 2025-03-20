import React from "react";
import Body from "../Components/Body";
import Facility from "../Components/Facility";
import Aboutus from "../Components/Aboutus";
import Teach from "../Components/Teach";
import Appoint from "../Components/Appoint";
import Pop from "../Components/Pop";
import Testi from "../Components/Testi";
import Classes from "../Components/Classes";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      <Body />
      <Facility />
      <Aboutus />
      <Teach />
      <Classes />
      <Appoint />
      <Pop />
      <Testi />
    </div>
  );
};

export default Home;
