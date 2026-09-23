"use client"
import React, { createContext, useState } from 'react';
 export const Appcontext=createContext({})
const Appprovider = ({children}) => {
      const [installapp,setinstallapp]=useState([])
    const sharedata={
        installapp,setinstallapp
    }
      return (
       
        <div>
           <Appcontext.Provider value={sharedata}>
            {children}
            </Appcontext.Provider> 
        </div>
    );
};

export default Appprovider;