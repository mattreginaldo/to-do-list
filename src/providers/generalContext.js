import React, { useState, useEffect } from "react";

const GeneralContext = React.createContext({});

export const GeneralProvider = (props) => {
  const [generalContext, setGeneralContext] = useState({
    themeMode: "",
  });

  useEffect(() => {
    const themeStorage = localStorage.getItem("themeMode");
    const tasksStorage = localStorage.getItem("tasks");

    setGeneralContext({
      themeMode: themeStorage ? themeStorage : "light",
    });
  }, []);

  return <GeneralContext.Provider value={{ generalContext, setGeneralContext }}>{props.children}</GeneralContext.Provider>;
};

export const useGeneralContext = () => React.useContext(GeneralContext);
