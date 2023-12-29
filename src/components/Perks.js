import { animated, useTransition, config } from "@react-spring/web";
import { useEffect } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useStato } from './Context';

function Perks(){

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  let stato = useStato()

  let spin = useTransition( stato.perks, {
    from: { transform: `perspective(600px) rotateX(360deg)` },
    enter: { transform: `perspective(600px) rotateX(0deg)` },
    leave: { transform: `perspective(600px) rotateX(360deg)` },
    trail: 450,
    config: {duration: 1000},
    config: config.molasses
  })

  return(
    <div className="row mx-0 bg-success">

      <div className="col-2 bg-primary d-none d-md-flex">
      </div>

      <div className="col-12 col-md-8 px-0">

        <div className="position-relative d-flex justify-content-center align-items-center">
          <div className="row mx-0 col-12 border-bottom border-primary border-2" style={{ height: "15vh" }}>
            <div className="d-flex px-0 justify-content-center align-items-center">
              <div className="dietro"></div>
              <h1 className="hammer text-primary position-absolute" style={{ zIndex: 2 }}> 
                <b> Campus Perks </b> 
              </h1>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center" style={{ overflowX: "hidden" }}>
          {spin((stile, items, non, index)=> (
            <animated.div className={`row mx-0 col-12 ${index % 2 ? `bg-success` : `bg-primary`} `} style={{ ...stile }} >
              <div className="col-3 d-flex justify-content-center align-items-center">

                <FontAwesomeIcon
                  className={`fs-2 border ${index % 2 ? `border-primary text-primary` : `border-success text-success`} border-3 p-4`}
                  icon={items.icona}
                />

              </div>
              <div className={`col-9 pe-0 pt-2 d-flex flex-column align-items-start justify-content-center ${index % 2 ? `text-primary` : `text-success`}`}>
                <h3> {items.perk} </h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                  Eligendi exercitationem corrupti rem quia et est veniam pariatur 
                  aspernatur cupiditate dolores?
                </p>
              </div>
            </animated.div>
          ) )}
        </div>

      </div>

      <div className="col-2 bg-success d-none d-md-flex">
      </div>

    </div>
  )
}

export default Perks;