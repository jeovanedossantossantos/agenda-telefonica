import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

type PropsQuemChamou = {
    idContoto: number;
    
    setIdContoto:React.Dispatch<
    React.SetStateAction<number>>;
}

const DEFAULT_VALUE = {
  
    idContoto: 0,
    
    setIdContoto:()=>{},
    
};

export const QuemChamouContext = createContext<PropsQuemChamou>(DEFAULT_VALUE);

const ContextProvider = ({ children }: any) => {

    const [idContoto,setIdContoto] = useState(DEFAULT_VALUE.idContoto)
    
    return (
        <QuemChamouContext.Provider
            value={{idContoto,setIdContoto}}
        >

        {children}
    
        </QuemChamouContext.Provider>
    );
      
}

export default ContextProvider