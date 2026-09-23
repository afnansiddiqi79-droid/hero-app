"use client"
import { Appcontext } from '@/context/Appcontext';
import React, { useContext } from 'react';
import { toast } from "react-toastify";
const Buttonin = ({r}) => {
   
    const {installapp,setinstallapp}=useContext(Appcontext)
    console.log("installapp:", installapp);
    return (
        <div>
             <button className="btn 
             btn-primary w-full 
             rounded-full px-7
              sm:w-auto" onClick={() => {
  const alreadyInstalled = installapp.some(
    (app) => app.id === r.id
  );

  if (alreadyInstalled) {
    toast.info("App already installed!");
    return;
  }

  setinstallapp([...installapp, r]);
  toast.success("App installed successfully!");
}}
>
                Install App
              </button>
        </div>
    );
};

export default Buttonin;