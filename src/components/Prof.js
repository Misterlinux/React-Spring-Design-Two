import { useEffect } from "react";
import { animated, useInView, useSpring, config } from '@react-spring/web'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useStato } from './Context';

function Prof(){

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

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
      x === 1 ? primo : 
      x === 2 ? secondo : terzo 
    return refe
  }

  function stile(x){

    let stile = 
      x == 1 ? fila1 : 
      x == 2 ? fila2 : fila3 

    return stile
  }

  return(
    <div className="border-bottom border-2 border-success">

      <div className="row mx-0">
        <div className="col-1 d-none d-md-flex bg-success"></div>

        <div className="col-12 col-md-10 px-0 d-flex justify-content-center align-items-center bg-success" style={{ height: "15vh" }}>
          <div className="preprof"></div>
          <h1 className="position-absolute hammer text-primary p-1 bg-success" style={{ zIndex: 2 }} >
            The professors at AccaDem
          </h1>
        </div>

        <div className="col-1 d-none d-md-flex bg-success"></div>
      </div>

      <div className="bg-primary row mx-0 d-flex justify-content-center py-3">

      {stato.profs.map((cont, index)=> {

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
              style={{ transform: stile(cont.id).transform }}
            >
              <FontAwesomeIcon className="text-success" icon={ cont.icon } />
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

              <p className="mt-1 ">
                {cont.present}
              </p>
            </div>
          </div>
        );} ) }
      </div>

    </div>
  )
}

export default Prof;