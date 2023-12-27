import React, {useState, useRef, useEffect, useMemo} from "react";
import { animated, config, useInView, useSpring, useTransition, useSprings } from "@react-spring/web";

import Task, { useStato, useStatodis } from './Context';
import Carousel from 'react-bootstrap/Carousel';

import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

function Quarto(){

  let stato = useStato()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Remember that the carousel arrows are SVG imported imagefiles, 
  //we can modify their fill tho
  let [desc, seeDesc] = useInView()

  let lower = useSpring({
    opacity: 1,
    bottom: seeDesc ? "0vh" : "50vh",
    config: {duration: 1200}
  })

  return(
    <div className="bg-success d-flex justify-content-center">

      <div className="row mx-0 col-12 bg-primary py-4">

        <h2 className="text-center text-success pb-md-4"> -- Gallery -- </h2>

        <div className="d-md-flex d-none">
        {stato.gallery.map((cont, index)=> 

          <div className="col-4 row mx-0 d-flex justify-content-center" style={{ height: "65vh" }} key={index}>
            <Link to="gallery" className="d-flex">
            <div className="position-relative col-11 d-flex px-0 flex-column justify-content-end align-items-center">
              <div className="position-absolute photo" style={{ backgroundImage: `url(${cont.img})`}}></div>
              <div className="position-absolute p-3 text-danger bg-primary align-self-end">
                {cont.name}
              </div>
            </div>
            </Link>
          </div>
        )}
        </div>
        
        <div className="d-flex d-md-none justify-content-center" ref={desc}>

          <Carousel className="py-3 col-12">
            {stato.gallery.map((cont, index)=>(

              <Carousel.Item key={index} interval={2000}>
                
              <div className="row mx-0 d-flex justify-content-center" style={{ height: "65vh" }} key={index}>
                
                <Link to="gallery" className="d-flex">
                <div className="position-relative col-11 d-flex px-0 flex-column justify-content-end align-items-center">
                  <div className="position-absolute photo" style={{ backgroundImage: `url(${cont.img})`}}></div>
                  <animated.div className="row mx-0 col-7 position-absolute p-1 text-danger bg-primary align-self-end" style={lower}>
                    <h6>{cont.name}</h6>
                  </animated.div>
                </div>
                </Link>

              </div>

              <br />
              </Carousel.Item>
            ))}
          </Carousel>

        </div>

      </div>

    </div>
  )
}


export default Quarto;