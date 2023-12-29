import React from "react";

import { useStato } from './Context';
import { useState ,useEffect, useMemo, useRef } from "react"
import useMeasure from 'react-use-measure'
import { animated, useTransition} from '@react-spring/web'

function Gallery(){

  let stato = useStato()
  let Data = stato.gallerypage

  function useMedia(queries, values, defaultValue) {
    const match = () => values[queries.findIndex(q => matchMedia(q).matches)] || defaultValue
    const [value, set] = useState(match)
  
    useEffect(() => {
      const handler = () => set(match)
      window.addEventListener('resize', handler)
      return () => window.removeEventListener('resize', handler)
    }, [])
  
    return value
  }

  const columns = useMedia(
    ['(min-width: 1100px)', '(min-width: 900px)', '(min-width: 600px)'], [5, 4, 3], 2)

  const [ref, { width }] = useMeasure()
  
  let [images, setImages] = useState([ ])
 
  let vol = useRef(0)
  let volta = vol.current

  //Data[volta] on the setImages() won't work, we need to set it outside
  function add(){

    if( volta < Data.length ){
      let next = Data[volta]
      setImages((x)=> ( [...x, next ] ))
    }else{
      console.log("all images added")
    }

    volta += 1
  }


  let inter;

  useEffect(()=>{
    add()
    
    inter = setInterval(()=>{
      add()

      volta == Data.length && clearInterval(inter)
    }, 1000)

    return () =>{
      clearInterval(inter)
    }

  }, [volta])


  const [alto, tutto] = useMemo(()=> {
    let alto = new Array(columns).fill(0) 

    let tutto = images.map((cont, index)=> {
      const column = alto.indexOf(Math.min(...alto)) 
      const x = (width / columns) * column 
      const y = (alto[column] += cont.height ) - cont.height 

      return { ...cont, x, y, width: width/ columns, height: cont.height  }
    })

    return [alto, tutto]
  }, [columns, images, width])


  let transitions = useTransition(tutto, {
    key: item => item.css,
    from: ({ x, y, width, height }) => ({ x, y, width: 0, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 5,
  })

  //{ backgroundImage: `url(${item.css}?auto=compress&dpr=2&h=500&w=500)`}
  return (
    <div className="bg-success">
      
      <div className="row mx-0 bg-danger position-relative d-flex justify-content-center align-items-center" 
           style={{ height: "4em" }}>

        <div className="galleria"></div>

        <h2 className="text-primary text-center hammer position-absolute">
          <b>Our Gallery</b>
        </h2>
      </div>

      <div ref={ref} className="list" style={{ height: Math.max(...alto) }}>
        
        {transitions((style, item) => (
          <animated.div style={style}>
            <div 
              className="border border-4 border-primary"
              style={{
                backgroundImage: `url(${item.css}?auto=compress&dpr=2&h=500&w=500)`
              }} 
            />
          </animated.div>
        ))}

      </div>

    </div>
  )
}

export default Gallery;