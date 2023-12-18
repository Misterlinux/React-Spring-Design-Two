import React from "react";
import { animated, config, useInView, useSpring, useTransition } from "@react-spring/web";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBaseball, faPenNib, faFire} from "@fortawesome/free-solid-svg-icons"
import {
  BrowserRouter as Router,
  useLocation,
  useParams,
} from "react-router-dom";

import Task, { useStato, useStatodis } from './Context';


function Road({facol}){

  let stato = useStato()
  let campi = stato.courses.filter((cont)=> cont.type == facol)


  return (
    <div className="mt-2">

    {campi.map((cont, index, row)=> (

      cont && 

      <div className="row mx-0 d-flex" key={index}>
        <div className={`col-2 d-flex flex-column align-items-center ${index == 0 && "mt-2"} ${index+1 == row.length && "mb-2" }`}>

          <div className={`circo ${index%2 ? "bg-success text-primary" : "bg-primary text-success"} p-2 border border-dark border-2`}>
            <FontAwesomeIcon icon={ cont.icona } />
          </div>
          <div className="retta"> 
          </div>

        </div>

        <div className="col-10 d-flex flex-column justify-content-center p-2"> 
          <div className="bg-success p-2">
            <h4 className="text-primary"> {cont.name} </h4>
            <p> 
              {cont.subject}
            </p>
          </div>
        </div>
      </div>
    ))}

    </div>
  )
}



function Courses(){

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

      <div className="d-flex bg-primary position-relative" style={{ height: "15vh" }}>

        <div className="courseimg">
        </div>

        <animated.div style={entra}
          className="taglio bg-success text-primary row mx-0 d-flex align-items-center justify-content-center">
          <div className="col-7 hammer">
            <animated.h1 style={{ opacity: texto }}>AccaDem Stem courses</animated.h1> 
          </div>
        </animated.div>

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