import {useEffect, useState, useRef, useMemo} from "react";
import { useSpring, useTransition, animated} from "@react-spring/web";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faMapLocationDot, faEnvelope} from "@fortawesome/free-solid-svg-icons"

//we return an object withall data properties
//we can put an argument in it for specific

function Footer(){



  return(
    <div className="d-flex justify-content-center py-2 bg-primary">
      <div className="row mx-0 col-12 col-md-10">

        <div className="col-5 col-md-4 row mx-0 px-0 ">
          
          <h4 className="pe-1 py-1 text-danger hammer">About AccaDem</h4>

          <div className="d-flex align-items-center">
            <p className="mb-0 pe-0 text-success">
              Lorem ipsum dolor, sit amet consec tetur adipis icing elit. 
              Sed libero in deleniti ea reprehenderit molestias.
            </p>
          </div>

        </div>

        <div className="col-4 d-none d-md-flex flex-column justify-content-around">

          <h4 className="hammer text-danger text-center">Our Socials</h4>

          <div className="d-flex justify-content-around">
            <div className="d-flex align-items-center justify-content-around ">
              <FontAwesomeIcon className="p-3 bg-success border border-success rounded-circle" icon={faGithub} />
            </div>
            <div className="d-flex align-items-center ">
              <FontAwesomeIcon className="p-3 bg-success border border-success rounded-circle" icon={faLinkedin} />
            </div>
            <div className="d-flex align-items-center ">
              <FontAwesomeIcon className="p-3 bg-success border border-success rounded-circle" icon={faCodepen} />
            </div>
          </div>

        </div>

        <div className="col-2 d-md-none d-flex flex-column justify-content-around align-items-center">
          
          <div className="d-flex align-items-center">
            <a className="text-dark" href="https://github.com/Misterlinux/React-Spring-Design-Two">
            <FontAwesomeIcon className="p-3 p-md-2 bg-success border border-success rounded-circle" icon={faGithub} />
            </a>
          </div>
          <div className="d-flex align-items-center ">
            <a className="text-dark" href="https://github.com/Misterlinux/React-Spring-Design-Two">
            <FontAwesomeIcon className="p-3 p-md-2 bg-success border border-success rounded-circle" icon={faLinkedin} />
            </a>
          </div>
          <div className="d-flex align-items-center ">
            <a className="text-dark" href="https://codesandbox.io/dashboard/recent">
            <FontAwesomeIcon className="p-3 p-md-2 bg-success border border-success rounded-circle" icon={faCodepen} />
            </a>
          </div>

        </div>


        <div className="row mx-0 col-5 col-md-4 px-0 text-success">

          <h4 className="text-danger py-1 hammer">Contact us</h4>
          
          <div className="contacts px-0 justify-content-around">

            <div className="row col-12 mx-0">
              <div className="col-3 col-md-2 pe-0 align-self-center">
                <FontAwesomeIcon icon={faPhone} /> 
              </div>
              <div className="col-9 col-md-10 ps-1 pe-0 text-break">
                1234567890
              </div>
            </div>

            <div className="row col-12 mx-0">
              <div className="col-3 col-md-2 pe-0 align-self-center">
                <FontAwesomeIcon icon={faMapLocationDot} />
              </div>
              <div className="col-9 col-md-10 ps-1">
                St. Lorem, ipsum
              </div>
            </div>

            <div className="row col-12 mx-0">
              <div className="col-3 col-md-2 pe-0 align-self-center">
                <FontAwesomeIcon className="d-flex" icon={faEnvelope} />
              </div>
              <div className="col-9 col-md-10 text-break ps-1">
                AccaDem@lorem.com
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer;