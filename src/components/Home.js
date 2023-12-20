import React from "react";

import Primo from "./Primo";
import Secondo from "./Secondo";
import Terzo from "./Terzo";
import Quarto from "./Quarto";
import Quinto from "./Quinto";
import Footer from "./Footer";

import Extra from "./Extra";

function Home(){

  //remember the scrolUp button that appears at a certainpoint....
  //animated countdown section
  //scrolling a carousel of images sections
  //cards with transparent backound-image
  //cards with dropping text sections (?)
  //roadmap for studies and experience (time -> title)
  //circleicons FULL with different color from their cards backround

  return(
    <div>

      <Primo />
      <Secondo />
      <Terzo />
      <Quarto />
      <Quinto />
      <Footer />

    </div>
  )
}

export default Home;