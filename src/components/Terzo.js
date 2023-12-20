import {useState, useEffect} from "react";
import { animated, config, useInView, useSpring, useTransition } from "@react-spring/web";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Task, { useStato, useStatodis } from './Context';
import { filter } from "lodash";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Courses from "./Courses";

function Terzo(){

  let stato = useStato()
  let [course, setCourse] = useState([true, false, false])

  let [seecors, setSeecors] = useState( stato.courses ) 
  let filters = ["", "stem", "tech"]

  function quale(indice){

    setSeecors(()=>{
      return stato.courses.map((cont)=>{

        return cont.type.includes(filters[indice]) && cont
      })
    })

  }

  function check(n){
    
    setCourse((x)=>{
      return x.map((x1, i)=>{

        if( i == n ){
          x1 = true
          quale(i)
        }else{
          x1 = false
        }
        
        return x1
      })
    })
  }

  //If you re-add elements those won't get updated, BUT wont even animate and only new one
  //trail is for the time between teh elements render, while update and exirbefore do conflic
  const metti = useTransition(seecors, {
    from: {x: "-100px", y: "-50px", scale: 0 ,opacity: 0},
    enter: {x: "0px", y: "0px", scale: 1 ,opacity: 1, config: {duration: 300} },
    leave: {x: "-100px", y: "-50px", scale: 0 ,opacity: 0, config: {duration: 400}},
    trail: 100,
  })


  return(
    <div className="bg-primary">

      <div className="d-flex justify-content-center">
        <div className="row col-12 col-md-10 bg-primary">

          <div className="d-flex justify-content-center row mx-0 text-success">
            <h1 className="text-center py-2 hammer"> -- Courses -- </h1>

            <div className="col-10 col-md-6 d-flex justify-content-center p-0 text-primary">
              <div onClick={()=> check(0)} className={`col-4 p-3 text-center leftcut ${course[0] ? "bg-success" : "bg-danger" }`}>
                <h5>All</h5>
              </div>
              <div onClick={()=> check(1)} className={`col-3 p-3 text-center ${course[1] ? "bg-success" : "bg-danger" }`}>
                <h5>Stem</h5>
              </div>
              <div onClick={()=> check(2)} className={`col-4 p-3 rightcut ${course[2] ? "bg-success" : "bg-danger" }`}>
                <h5>Techs</h5>
              </div>
            </div>
          </div>

          <div className="bg-success border-bottom border-1 border-primary row col-12 mx-0 px-0" >
            <div className="d-flex align-items-center justify-content-around justify-content-md-center row mx-0 px-0 container-fluid">

              {metti( (stile, item, ter, index)=> (
                item &&
                <animated.div className="col-6 col-md-4 row d-flex justify-content-center align-content-center my-4" style={stile} key={index}>
                  <Link to={item.type} className="px-0">
                  <div className="col-12 col-md-10 d-flex justify-content-center align-items-center position-relative border border-primary border-2 quadro"> 
                    
                    <div className="sfondo" style={{ backgroundImage: `url(${item.img})` }}></div>
                    <div className="text-start position-absolute text-primary p-2 "> 
                      <h4 className="hammer">{item.name}</h4>
                      <p>{item.desc}</p>
                    </div>

                  </div>
                  </Link>
                </animated.div>
              ))}
              
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Terzo;