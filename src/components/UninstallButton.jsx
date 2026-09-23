"use client";

import React, { useContext } from "react";
import { Appcontext } from "@/context/Appcontext";
import { toast } from "react-toastify";

const UninstallButton = ({ app }) => {
  const { installapp, setinstallapp } = useContext(Appcontext);

  const handleUninstall = () => {
    const updatedApps = installapp.filter(
      (item) => item.id !== app.id
    );

    setinstallapp(updatedApps);

    toast.success("App uninstalled successfully!");
  };

  return (
    <button
  onClick={handleUninstall}
  className="btn btn-error w-full rounded-full sm:w-auto"
>
  Uninstall
</button>
  );
};

export default UninstallButton;