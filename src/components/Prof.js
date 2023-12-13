import React from "react";
import { animated, useSprings, useInView, useSpring, config } from '@react-spring/web'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBaseballBatBall, faTree, faBusSimple} from "@fortawesome/free-solid-svg-icons";
import Task, { useStato, useStatodis } from './Context';

function Prof(){

  let stato = useStato();

  let [primo, seePri] = useInView({
    threshold: 0.5
  })
  let [secondo, seeSec] = useInView({
    threshold: 0.5
  })
  let [terzo, seeTer] = useInView({
    threshold: 0.5
  })

  let sposta = function(lista){
    return {
      largo: lista ? "100%" : "0%",
      centro: lista ? "center 40%" : "center 0%",
      transform: lista ? "rotate(360deg)" : "rotate(0deg)",
      config: {duration: 1200},
      config: config.molasses
    }
  }

  let fila1 = useSpring( sposta(seePri) )
  let fila2 = useSpring( sposta(seeSec) )
  let fila3 = useSpring( sposta(seeTer) )

  function visto(x){

    let refe = 
      x == 1 ? primo : 
      x == 2 ? secondo : terzo 
    return refe
  }

  function stile(x){

    let stile = 
      x == 1 ? fila1 : 
      x == 2 ? fila2 : fila3 

    return stile
  }



  return(
    <div className="row mx-0 d-flex justify-content-center">

      <div className="py-5">
        <h1 className="text-center">List of Teachers at the AccaDem</h1>
      </div>

      { stato.profs.map((cont, index)=> {

        return (
          <div
            ref={visto(cont.id)} key={index}
            className="col-6 col-md-5 px-1 mb-3 d-flex flex-column align-items-center position-relative"
          >
            <animated.div 
              className="professor"
              style={{
                backgroundImage: `url(${cont.img})`,
                backgroundPosition: stile(cont.id).centro,
              }}
            ></animated.div>

            <animated.div
              className="exagon bg-primary position-absolute d-flex justify-content-center align-items-center"
              style={{
                transform: stile(cont.id).transform,
              }}
            >
              <FontAwesomeIcon
                className="text-success"
                icon={faBaseballBatBall}
              />
            </animated.div>

            <div className="bg-success w-100 px-2 pb-2 position-relative" >
              <h3 className="mt-4 hammer" style={{ marginBottom: "-0.2em" }}>
                {cont.name}
              </h3>
              <div className="position-relative d-inline">
                <p className="d-inline" style={{ fontSize: "0.9em" }}>
                  <i> {cont.field} </i>
                </p>
                <animated.div
                  className="position-absolute linea"
                  style={{ width: stile(cont.id).largo }}
                ></animated.div>
              </div>

              <p className="mt-1">
                {cont.present}
              </p>
            </div>
          </div>
        );} ) }

      <div style={{ height: "50vh" }}></div>

    </div>
  )
}

export default Prof;