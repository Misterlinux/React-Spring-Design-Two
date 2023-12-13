import {useEffect, useState, useRef, useMemo} from "react";
import dayjs from 'dayjs';
import { useSpring, useTransition, animated} from "@react-spring/web";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faMapLocationDot, faEnvelope} from "@fortawesome/free-solid-svg-icons"

//npm install dayjs
//we return an object withall data properties
//we can put an argument in it for specific

function Footer(){





  return(
    <div className="d-flex justify-content-center py-2 bg-secondary" style={{ height: "21vh" }}>
      <div className="row mx-0 col-12">
        <div className="col-7 row mx-0 p-0">
          
          <h3>In sospeso</h3>

          <div className="col-4 d-flex align-items-center ">
            <FontAwesomeIcon className="p-3 bg-success border border-success rounded-circle" icon={faGithub} />
          </div>
          <div className="col-4 d-flex align-items-center ">
            <FontAwesomeIcon className="p-3 bg-success border border-success rounded-circle" icon={faLinkedin} />
          </div>
          <div className="col-4 d-flex align-items-center ">
            <FontAwesomeIcon className="p-3 bg-success border border-success rounded-circle" icon={faCodepen} />
          </div>
        </div>

        <div className="col-5 ">
          <h3 className="text-center">Contact us</h3>

          <div className="d-flex flex-column justify-content-center">

            <div className="d-flex">
              <FontAwesomeIcon icon={faPhone} /> 
              <p className="ps-1"> 123-4567890 </p>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon icon={faMapLocationDot} />
              <p className="ps-1"> St. Lorem, ipsum </p>
            </div>
            <div className="d-flex "> 
              <FontAwesomeIcon icon={faMapLocationDot} />
              <p className="ps-1"> lorem@mail.com </p>
            </div>

          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Footer;