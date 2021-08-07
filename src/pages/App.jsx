import React, { useState, useEffect } from "react";

import { useGeneralContext } from "../providers/generalContext";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import { lightTheme, darkTheme } from "../styles/theme";

import * as S from "../styles";

import { filterTasksByTab } from "../utils";
import ListMovable from "../components/listMovable";

function App() {
  function getRandomInt() {
    return Math.floor(Math.random() * (50000 - 0)) + 0;
  }

  const newTask = {
    id: getRandomInt(),
    description: "",
    status: 2,
    completed: false,
  };
  const { generalContext, setGeneralContext } = useGeneralContext();
  const { tasks, setTasks } = useGeneralContext();

  const [tabs, setTabs] = useState([
    {
      label: "Todas",
      name: "all",
    },
    {
      label: "Concluídas",
      name: "completed",
    },
    {
      label: "Não concluídas",
      name: "notCompleted",
    },
  ]);

  const [activeTab, setActiveTab] = useState(0);

  const addTask = () => {
    setTasks([...tasks, newTask]);
  };

  const handleTheme = (mode) => {
    localStorage.setItem("themeMode", mode);
    setGeneralContext({ themeMode: mode });
  };

  const ModeImage = () => {
    return generalContext.themeMode === "light" ? <img src="img/icons/dark.svg" onClick={() => handleTheme("dark")} /> : <img src="img/icons/light.svg" onClick={() => handleTheme("light")} />;
  };

  const Options = () => {
    return (
      <S.Options>
        <S.Ul align="row" justifyContent="space-between">
          <S.Li unset cursor="pointer" padding="0" onClick={() => addTask()}>
            <img src="img/icons/new.svg" />
            Nova tarefa
          </S.Li>
          <S.Li unset cursor="pointer" padding="0">
            <ModeImage />
          </S.Li>
        </S.Ul>
      </S.Options>
    );
  };

  const Tabs = () => {
    return (
      <S.Tabs>
        {tabs.map((tab, index) => (
          <S.Tab
            key={index}
            onClick={() => {
              setActiveTab(index);
            }}
            active={activeTab === index}>
            {tab.label}
            <S.Counter active={activeTab === index}>{filterTasksByTab(tasks, index)?.length}</S.Counter>
          </S.Tab>
        ))}
      </S.Tabs>
    );
  };

  const Tasks = () => {
    return (
      <S.TasksBox>
        <S.Ul>
          <ListMovable activeTab={activeTab} />
        </S.Ul>
      </S.TasksBox>
    );
  };

  useEffect(() => {
    if (tasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      setTasks(tasks);
      console.log(tasks);
    }
  }, [tasks]);

  return (
    <ThemeProvider theme={generalContext.themeMode === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <S.Content>
        <S.TodoTitle>To-do List</S.TodoTitle>
        <Options />
        <Tabs />
        <Tasks />
      </S.Content>
    </ThemeProvider>
  );
}

export default App;
