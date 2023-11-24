import { useReducer, useContext, createContext} from 'react';

const Stato = createContext(null);
const Statodis = createContext(null);

export default function Task({children}){

  function reducer(state, action){
    throw Error('Unknown action: ' + action.type);
  }

  const initialState = { age: 42, name: "testo"};
  const [instate] = useReducer(reducer, initialState);

  return (
    <div>
      <Stato.Provider value={instate}>
        {children}
      </Stato.Provider>
    </div>
  );
}

export function useStato() {
  return useContext(Stato);
}
export function useStatodis() {
  return useContext(Statodis);
}