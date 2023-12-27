import {useEffect} from "react";
import { easings ,animated, config, useInView, useSpring, useTransition } from "@react-spring/web";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBaseball, faPenNib, faFire} from "@fortawesome/free-solid-svg-icons"
import {
  BrowserRouter as Router,
  useLocation,
  useParams,
} from "react-router-dom";

import Task, { useStato, useStatodis } from './Context';
import stem from "../images/stem.jpg";
import tech from "../images/tech.jpg"

function Road({facol}){

  let stato = useStato()
  let campi = stato.courses.filter((cont)=> cont.type == facol)

  let {opa, top, top1 ,trans} = useSpring({
    from: { opa: 1,top: "35%", top1: "41%" ,trans: `rotate(720deg)` },
    to: [
      { opa: 0.4,top: "20%", top1: "26%", trans: `rotate(360deg)` },
      { opa: 1,top: "0%", top1: "6%" ,trans: `rotate(0deg)`, delay: 400 }
    ],
    config: { tension: 250, friction: 15 }
  })
  
  return (
    <div className="pt-2 bg-primary">

    {campi.map((cont, index, row)=> (

      cont && 
      <div className="d-flex justify-content-center" key={index}>

      <div className="row mx-0 col-12 col-md-9">

        <div className={`position-relative col-2 col-md-1 d-flex flex-column align-items-center ${index == 0 && "mt-2"} ${index+1 == row.length && "mb-2" }`}>

          <animated.div style={{ zIndex: 2, top: top, transform: trans }} 
            className={`position-absolute circo ${index%2 ? "bg-success text-primary" : "bg-primary text-success"} p-2 border border-danger border-3`}>
            <FontAwesomeIcon icon={ cont.icona } style={{ fontSize: "1.3em" }} />
          </animated.div>

          <div className="retta position-absolute"> 
          </div>
        </div>

        <div className="position-relative col-10 col-md-11 d-flex flex-column justify-content-center p-2"> 

          <animated.div className="bg-success position-absolute triangle" 
            style={{ top: top1 }}>
          </animated.div>

          <div className="bg-success p-2" style={{ zIndex: 2 }}>
            <animated.h4 style={{ opacity: opa }} className="text-primary"> {cont.name} </animated.h4>
            <animated.p style={{ opacity: opa }}> 
              {cont.subject}
            </animated.p>
          </div>
        </div>

      </div>
      </div>
    ))}

    </div>
  )
}

function Courses(){

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  let {texto, ...entra} = useSpring({
    from: {opacity: 0.5, x: -500, texto: 0.2},
    to: [
      {opacity: 1, x: 0 },
      {texto: 1}
    ],
    config: config.wobbly
  })

  const location = useLocation().pathname.split("/")[1]

  return(
    <div>

      <div className="d-flex justify-content-center bg-success" style={{ height: "15vh" }}>
        <div className="row mx-0 col-12 col-md-9 position-relative">

          <div className="courseimg" style={{ backgroundImage: `url( ${ location == "stem" ? stem : tech } )` }}>
          </div>

          <animated.div style={entra}
            className="taglio bg-primary text-success row mx-0 d-flex align-items-center justify-content-center">
            <div className="col-7 hammer">
              <animated.h1 style={{ opacity: texto }}>
                AccaDem {location == "stem" ? "Stem" : "Tech" } courses
              </animated.h1> 
            </div>
          </animated.div>

        </div>
      </div>

      {location == "stem" ? (
        <Road facol={location} />
      ) : (
        <Road facol={location} />
      )}
  
    </div>
  )
}

export default Courses;