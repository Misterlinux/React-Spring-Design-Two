import {useState} from "react";
import { useSprings, useChain, useSpringRef, animated, config, useSpring} from "@react-spring/web";
import Collapse from 'react-bootstrap/Collapse';

function Sign(){

  const colonna0 = useSpringRef()
  const colonna1 = useSpringRef()
  const colonna2 = useSpringRef()

  let mix = [colonna0, colonna1, colonna2]

  let [left, apileft] = useSprings(3, (i)=>({
    ref: mix[i],
    from: {x: -35, opacity: 0 },
    to: {x: 5, opacity: 1 },
    delay: 200,
    duration: 1000,
    config: config.wobbly
  }) )

  useChain( 
    [colonna0, colonna1, colonna2] , 
    [0, 1, 2 ]
  )

  function vedaci(e){
    e.preventDefault()

    let forma= e.target
    let formdata = new FormData(forma)
    let dati = Object.fromEntries(formdata.entries())
  
    if( dati.plan == "basic" ){
      alert(`
        You selected the basic plan ${dati.name}, good,I guess
      `)
    }else if( dati.plan == "techstem" ){
      alert(`
        Thanks for selecting the Tech/Stem plan ${dati.name},
        we will contact you at this number: ${dati.phone}
      `)
    }else if( dati.plan == "complete" ){
      alert(`
        Congratulations ${dati.name} for choosing the complete plan,
        Let's getin contact at ${dati.phone}
      `)
    }else{
      alert(`
        We will call you, maybe.
      `)
    }
    
  }

  const [numba, setNum] = useState("");

  function calling(e){
    const value = e.target.value.replace(/\D/g, "");
    setNum(value);
  }
  
  // Mobile design
  const [basic, setBasic] = useState(false);
  const [stem, setStem] = useState(false);
  const [compl, setCompl] = useState(false);

  let destra = useSpring({
    from: {x: 0},
    to: {x: 300},
  })

  return(
    <div className="bg-success">

      <div className="row mx-0 py-3 d-none d-md-flex justify-content-around">

        <div className="px-0 border border-primary border-2" style={{ width: "31%" }}>

          <div className="bg-primary py-2 text-success d-flex flex-column justify-content-center align-items-center">
            <h2 className="hammer">Basic plan</h2>
            <h4 className="hammer">550EUR</h4>
          </div>

          <div style={{ height: "15vh" }}>
            <div className="basic" style={{ backgroundImage: "url(https://i.pinimg.com/236x/6f/bc/bb/6fbcbb4e2080b8c29288db2f5e3b4a98.jpg)" }}></div>
          </div>

          <div>
            <div className="py-1">- Access to all basic classes.</div>
            <div className="py-1">- Access to one intermediate class</div>
            <div className="py-1">- Montly mentor review session </div>
          </div>

        </div>

        <div className="px-0 border border-primary border-2" style={{ width: "31%" }}>

          <div className="bg-primary hammer py-2 text-success d-flex flex-column justify-content-center align-items-center">
            <h2>STEM/Tech plan</h2>
            <h4>850EUR</h4>
          </div>

          <div style={{ height: "15vh" }}>
            <div className="basic" style={{ backgroundImage: "url(https://i.pinimg.com/236x/dd/30/14/dd301435d76051d80e13391b099a8dc3.jpg)" }}></div>
          </div>

          <animated.div style={left[1]}>
            <div className="py-1">- Access to all basic classes.</div>
            <div className="py-1">- Access to intermediate/advanced Stem or Tech courses</div>
            <div className="py-1">- Bi-weekly mentor review session</div>
            <div className="py-1">- Access to one Stem or Tech workshop </div>
          </animated.div>

        </div>

        <div className="px-0 border border-primary border-2" style={{ width: "31%"}}>

          <div className="bg-primary hammer py-2  text-success d-flex flex-column justify-content-center align-items-center">
            <h2>Complete plan</h2>
            <h4>1300EUR</h4>
          </div>

          <div style={{ height: "15vh" }}>
            <div className="basic" style={{ backgroundImage: "url(https://i.pinimg.com/236x/e4/f6/44/e4f6444bf1ed00969a69141baa74676c.jpg)" }}></div>
          </div>

          <animated.div style={left[2]}>
            <div className="py-1">- Access to all basic classes.</div>
            <div className="py-1">- Access to all intermediate and advanced classes.</div>
            <div className="py-1">- Weekly mentor review session</div>
            <div className="py-1">- Access to all Stem/Tech workshops</div>
            <div className="py-1">- Free parking and bike sharing</div>
          </animated.div>

        </div>
      </div>

      <div className="row mx-0 d-flex justify-content-center align-content-center">

        <h2 className="text-center text-primary hammer py-2">Choose your plan</h2>

        <form className="row mx-0 col-10 d-flex justify-content-center" onSubmit={vedaci}>

          <div className="col-6">
            <div className='form-floating'>
              <input name='name' id="nome" required
                type="text" className="form-control" placeholder='name'/>
              <label htmlFor="#nome" className="form-label">Name</label>
            </div>
          </div>
          <div className="col-6">
            <div className='form-floating'>
              <input value={numba} onChange={calling}  
                name='phone' id="phone" required
                type="text" className="form-control" placeholder='phone'/>
              <label htmlFor="#phone" className="form-label">phone</label>
            </div>
          </div>

          <div className="col-12 mt-2">
            <select name="plan" className="form-select form-select-lg" required>
              <option value="basic">Basic</option>
              <option value="techstem">Tech/Stem</option>
              <option value="complete">Complete</option>
              <option value="free">free consuelling</option>
            </select>
          </div>

          <div className="text-center my-3">
            <button className="btn btn-primary text-success">
              Sign in
            </button>
          </div>

        </form>

      </div>


      <div className="d-flex justify-content-center row mx-0">

        <animated.div onClick={ () => setBasic(!basic) } style={ left[0] }
            className="bg-primary text-success hammer col-10 px-0 mb-3 d-flex flex-column justify-content-center align-items-center">
          
          <div className="position-relative d-flex align-items-center row col-12 mx-0">

            <div className="col-7 ps-4 pb-4">
              <h1 className="hammer">Basic plan</h1>
              <h3 className="hammer">550EUR</h3>
            </div>          

            <div className="col-5 px-0" style={{ height: "15vh" }}>
              <div className="basic" style={{ backgroundImage: "url(https://i.pinimg.com/236x/6f/bc/bb/6fbcbb4e2080b8c29288db2f5e3b4a98.jpg)" }}></div>
            </div>

            <div className="bg-success position-absolute d-flex justify-content-center align-self-end cupola">
              <h3 className="text-primary"> -- Includes -- </h3>
            </div>

          </div>

          <Collapse in={basic}>
            <div id="example-collapse-text" className="bg-success w-100 text-primary ps-2 border-start border-2 border-primary">
              <div className="py-1">- Access to all basic classes.</div>
              <div className="py-1">- Access to one intermediate class</div>
              <div className="py-1">- Montly mentor review session </div>
            </div>
          </Collapse>

        </animated.div>


        <animated.div onClick={ () => setStem(!stem) } style={ left[1] }
            className="bg-primary text-success hammer col-10 px-0 mb-3 d-flex flex-column justify-content-center align-items-center">
          
          <div className="position-relative d-flex align-items-center row col-12 mx-0">

            <div className="col-7 ps-4 pb-4 hammer">
              <h1>STEM/Tech plan</h1>
              <h3>850EUR</h3>
            </div>          

            <div className="col-5 px-0" style={{ height: "15vh" }}>
              <div className="basic" style={{ backgroundImage: "url(https://i.pinimg.com/236x/dd/30/14/dd301435d76051d80e13391b099a8dc3.jpg)" }}></div>
            </div>

            <div className="bg-success position-absolute d-flex justify-content-center align-self-end cupola">
              <h3 className="text-primary"> -- Includes -- </h3>
            </div>

          </div>

          <Collapse in={stem}>
            <div id="example-collapse-text" className="bg-success w-100 text-primary ps-2 border-start border-2 border-primary">
              <div className="py-1">- Access to all basic classes.</div>
              <div className="py-1">- Access to intermediate/advanced Stem or Tech courses</div>
              <div className="py-1">- Bi-weekly mentor review session</div>
              <div className="py-1">- Access to one Stem or Tech workshop </div>
            </div>
          </Collapse>

        </animated.div>

        <animated.div onClick={ () => setCompl(!compl) } style={ left[2] }
            className="bg-primary text-success hammer col-10 px-0 mb-3 d-flex flex-column justify-content-center align-items-center">
          
          <div className="position-relative d-flex align-items-center row col-12 mx-0">

            <div className="col-7 ps-4 pb-4 hammer">
              <h1>Complete plan</h1>
              <h3>1300EUR</h3>
            </div>          

            <div className="col-5 px-0" style={{ height: "15vh" }}>
              <div className="basic" style={{ backgroundImage: "url(https://i.pinimg.com/236x/e4/f6/44/e4f6444bf1ed00969a69141baa74676c.jpg)" }}></div>
            </div>

            <div className="bg-success position-absolute d-flex justify-content-center align-self-end cupola">
              <h3 className="text-primary"> -- Includes -- </h3>
            </div>

          </div>

          <Collapse in={compl}>
            <div id="example-collapse-text" className="bg-success w-100 text-primary ps-2 border-start border-2 border-primary">
              <div className="py-1">- Access to all basic classes.</div>
              <div className="py-1">- Access to all intermediate and advanced classes.</div>
              <div className="py-1">- Weekly mentor review session</div>
              <div className="py-1">- Access to all Stem/Tech workshops</div>
              <div className="py-1">- Free parking and bike sharing</div>
            </div>
          </Collapse>

        </animated.div>

      </div>



    </div>
  )
}

export default Sign;