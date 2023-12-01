import react from "react";
import Task, { useStato, useStatodis } from "./Context"
import { animated, useSprings, useInView, useSpring, config } from '@react-spring/web'


function Primo(){

  let [primo, inPrimo] = useInView()

  let {xbtn, ximg} = useSpring({
    xbtn: inPrimo ? 0 : 300,
    ximg: inPrimo ? 0 : 500,
    config: config.gentle
  })


  return(
    <div ref={primo}>

      <div className="d-flex justify-content-center bg-primary">
        <div style={{ overflowX: "hidden" }}
          className="row col-md-11 col-12 mx-0 position-relative bg-primary d-flex align-items-center justify-content-center totalwindow">

          <div className="col-7 d-flex flex-column justify-content-center align-items-start text-white position-absolute present">
            <h1 className="hammer">Welcome to the AccaDem</h1>
            <p> Where you can develp you stuff </p>

            <animated.button className="btn btn-danger text-white hammer fs-6" style={{ x: ximg }}>
              Learn more
            </animated.button>

          </div>
          <animated.div className="col-7 position-absolute back" style={{ x: xbtn }}>          
            <div className="ground border border-danger border-3"></div>
          </animated.div>

        </div>
      </div>

    </div>
  )
}

export default Primo;