import React, { useState, useEffect } from "react";

const GeneralContext = React.createContext({});

export const GeneralProvider = (props) => {
  const [generalContext, setGeneralContext] = useState({
    themeMode: "",
  });

  const [tasks, setTasks] = useState();

  useEffect(() => {
    const themeStorage = localStorage.getItem("themeMode");
    const tasksStorage = JSON.parse(localStorage.getItem("tasks"));

    setGeneralContext({
      themeMode: themeStorage ? themeStorage : "light",
    });

    setTasks(tasksStorage ? tasksStorage : []);
  }, []);

  return <GeneralContext.Provider value={{ generalContext, setGeneralContext, tasks, setTasks }}>{props.children}</GeneralContext.Provider>;
};

export const useGeneralContext = () => React.useContext(GeneralContext);
