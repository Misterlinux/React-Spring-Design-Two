import {useState} from "react";


function Quinto(){

  let [ora, setOra] = useState([])


  let testo = []

  function updateTime (){
    testo = []
    var now = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Rome"})); 

    var nowHours = now.getHours().toString()
    var nowMinutes = now.getMinutes().toString()
    var nowSeconds = now.getSeconds().toString()

    updateContainer(nowHours)
    updateContainer(nowMinutes)
    updateContainer(nowSeconds)
  }

  function updateContainer (newTime) {
    var time = newTime.split('')

    if (time.length === 1) {
      time.unshift('0')
    }
  
    console.log( time )
    testo.push( time )

    console.log( testo.flat() )
    console.log( "-------" )
  }

  //setInterval(updateTime, 5000)


  return(
    <div className="position-relative bg-danger d-flex flex-column justify-content-center align-items-center p-3" style={{ height: "50vh" }}>

      <div className="position-absolute backo">
      </div>


      <div className="position-relative row mx-0 col-10 justify-content-center bg-primary p-3">

      <div className="text-center text-success">
        <h2>Enroll Now</h2>
        <p>Limited time offer avaiable</p>
      </div>

      <div className="row mx-0 col-9 justify-content-center bg-success p-4">
        <div className="col-4">12 :</div>
        <div className="col-4">12 :</div>
        <div className="col-4">12</div>
      </div>

      <div className="text-center mt-3">
        <button className="btn btn-success text-primary">
          Sign in
        </button>
      </div>

      </div>

    </div>
  )
}

export default Quinto;