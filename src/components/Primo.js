import { animated, useInView, useSpring, config } from '@react-spring/web'
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

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
          className="row col-md-11 col-12 mx-0 bg-primary totalwindow">

          <div className="col-7 text-white position-absolute present">
            <h1 className="hammer">Welcome to the AccaDem</h1>
            <p> Where you can develp you stuff </p>

            <Link to="prof">
            <animated.button className="btn btn-danger text-white hammer fs-6" style={{ x: ximg }}>
              Learn more
            </animated.button>
            </Link>

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