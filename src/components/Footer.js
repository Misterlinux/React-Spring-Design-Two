import React from "react";
import dayjs from 'dayjs';

//npm install dayjs
//we return an object withall data properties
//we can put an argument in it for specific
//

function Footer(){

  //console.log( 36 * Math.pow(10, 5) )

  let ora = 36 * Math.pow(10, 2) 
  let timer = (6 * ora) + (Math.random() * 5 * ora)

  function timed(){

    timer -= 1

    let minutes = timer / 60
    let secondi = Math.floor( timer % 60 )

    let ore = Math.floor( minutes/ 60 )
    let minuti = Math.floor( minutes % 60 )
  
    console.log( "There are still " + ore + " ore "+ minuti + " " + secondi )
  }

  setInterval( timed , 1000)





  return(
    <div style={{height: 2000}}>

      <p>Siamo qui</p>

    </div>
  )
}

export default Footer;