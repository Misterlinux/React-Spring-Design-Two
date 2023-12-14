import {useEffect, useState, useRef, useMemo} from "react";
import { useSpring, useTransition, animated, config} from "@react-spring/web";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

function Quinto(){

  let hour = 3600
  let timer = useMemo(()=>{
    return (6 * hour) + (Math.random() * 5 * hour)
  },[])

  let [dehou, setDehou ] = useState(["2"])
  let [hou, setHou] = useState(["3"])

  let [desec, setDesec ] = useState(["5"])
  let [sec, setSec] = useState(["9"])

  let [demin, setDemin ] = useState(["5"])
  let [min, setMin] = useState(["9"])

  let circle = {
    from: { y: -20 },
    enter: { y: 0, config: config.gentle },
    leave: { y: 50 },
    exitBeforeEnter: true,
    config: {duration: 333 },
  }

  let secondi = useTransition(sec, circle)
  let desecondi = useTransition(desec, circle)

  let minuti = useTransition(min, circle)
  let deminuti = useTransition(demin, circle)

  let ora = useTransition(hou, circle)
  let deora = useTransition(dehou, circle)

  let timeo = useRef(timer)
  let timeo1 = timeo.current;

  function porta(){
    timeo1 -= 1

    let seconds = Math.floor(timeo1 % 60);
    let minutes = Math.floor((timeo1 / 60) % 60);
    let hours = Math.floor(timeo1 / (60 * 60) % 24)

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let primo = hours.toString().split("") 
    let secondo = minutes.toString().split("")
    let terzo = seconds.toString().split("")

    setSec( terzo[1] )    
    setDesec( terzo[0] )
    setMin( secondo[1] )
    setDemin( secondo[0] )
    setHou( primo[1] )
    setDehou( primo[0] )
  }

  let inter;

  useEffect(()=>{

    if( timeo1 ){
      inter = setInterval(()=>{

        if(timeo1==0){
          alert("Thanks for wating, the special sale is off")
          clearInterval(inter)
        }

        porta()
      }, 1000)
    }

    return () =>{
      clearInterval(inter)
    }

  }, [timeo1])

  //OK so, to avoid the elements stuttering between each other
  //exitbefore: true is not enought we need display none
  //on the leave 

  return(
    <div className="position-relative bg-danger dealwindow flex-column p-3">

      <div className="position-absolute backo">
      </div>

      <div className="position-relative row mx-0 col-10 col-md-8 justify-content-center bg-primary p-3">

        <div className="text-center text-success">
          <h2>Enroll Now</h2>
          <p>Limited time offer avaiable</p>
        </div>

        <div className="row mx-0 col-9 digitwindow p-2">
          <h1 className="col-4 row mx-0 p-0 ">

            {deora((stile, cont) => (
              <animated.div className="col-5 digit" style={stile}> 
                {cont} 
              </animated.div>
            )) }

            {ora((stile, cont) => (
              <animated.div className="col-5 digit" style={stile}> 
                {cont} 
              </animated.div>
            )) }
            
            <div className="p-0 col-2 d-flex align-items-center justify-content-center">:</div>
          </h1>
          <h1 className="col-4 row mx-0 p-0">
            {deminuti((stile, cont) => (
              <animated.div className="col-5 digit" style={stile}> 
                {cont} 
              </animated.div>
            )) }

            {minuti((stile, cont) => (
              <animated.div className="col-5 digit" style={stile}> 
                {cont} 
              </animated.div>
            )) }

            <div className="p-0 col-2 d-flex align-items-center justify-content-center">:</div>
          </h1>
          <h1 className="col-4 row mx-0 p-0">
            {desecondi((stile, cont) => (
              <animated.div className="col-5 digit" style={stile}> 
                {cont} 
              </animated.div>
            )) }    

            {secondi((stile, cont) => (
              <animated.div className="col-5 digit" style={stile}> 
                {cont} 
              </animated.div>
            )) }
          </h1>
        </div>

        <div className="text-center mt-3">
          <Link to="sign">
          <button className="btn btn-success text-primary">
            <b>Sign in </b>
          </button>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Quinto;