import React from "react";
import Task, { useStato, useStatodis } from './Context';
import { animated, useSprings, useInView, useSpring, config } from '@react-spring/web'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";


function Secondo(){

  let stato = useStato()

  let [terzo, inTer] = useInView()

  let {back1, back2} = useSpring({
    back1: inTer ? "#105C49" : "#ec8717",
    back2: inTer ? "#ec8717" : "#105C49",
    config: {duration: 1000}
  })
  

  return (
    <>
      <div className="d-flex justify-content-center bg-danger">
        <div
          className="row col-12 col-md-11 position-relative d-flex align-items-center secondwind"
        >
          <div
            className="col-6 col-md-5 position-absolute secondimg"
          >
            <div className="perksimg border border-3 border-success"></div>
          </div>
          <div
            className="col-7 position-absolute bg-primary d-flex flex-column justify-content-center align-items-end secondtext"
          >
            <div className="col-10 row mx-0">
              <h1 className="text-white"> What we offer </h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                dolor labore ullam aut ea ducimus!
              </p>
              <div>

              <Link to="perks">
                <button className="btn btn-secondary text-white">
                  Check perks
                </button>              
              </Link>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex" ref={terzo}>
        <div className="row mx-0 col-12">
          {stato.perks.map((cont, index) => (
            <animated.div key={index}
              className={`d-flex flex-column justify-content-center align-items-center col-4 col-md-2`}
              style={{ backgroundColor: index % 2 ? back2 : back1 }}
            >
              <div
                className="position-relative d-flex justify-content-center align-items-center"
                style={{ height: "3.5em", paddingTop: "2em", paddingBottom: "2em" }}
              >
                <div className="circle"></div>
                <FontAwesomeIcon
                  className="text-primary"
                  style={{ zIndex: 2 }}
                  icon={cont.icona}
                />
              </div>
              <div
                className="d-flex align-items-center"
                style={{
                  height: "2em",
                  paddingTop: "1.5em",
                  paddingBottom: "2em",
                }}
              >
                <animated.h5
                  className="text-center"
                  style={{ color: index % 2 ? back1 : back2 }}
                >
                  {cont.perk}
                </animated.h5>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Secondo;