import React, { useState, useEffect } from "react";

import { useGeneralContext } from "../providers/generalContext";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import { lightTheme, darkTheme } from "../styles/theme";

import * as S from "../styles";

function App() {
  const { generalContext, setGeneralContext } = useGeneralContext();

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

  const [tasks, setTasks] = useState([
    {
      description: "Testando 1",
      status: 2,
      completed: false,
    },
    {
      description: "Testando 2",
      status: 2,
      completed: false,
    },
  ]);

  const addTask = () => {
    const newTask = {
      description: "Testando 123123",
      status: 1,
      completed: false,
    };
    setTasks((tasks) => [...tasks, newTask]);
    console.log(tasks);
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
            <S.Counter active={activeTab === index}>{filterTasks(index).length}</S.Counter>
          </S.Tab>
        ))}
      </S.Tabs>
    );
  };

  const Tasks = () => {
    return (
      <S.TasksBox>
        <S.Ul>
          <Li tasks={filterTasks(activeTab)} />
        </S.Ul>
      </S.TasksBox>
    );
  };

  const Li = (props) => {
    return props.tasks.length > 0
      ? props.tasks.map((task, index) => (
          <S.Li key={index}>
            {task.description}
            <img src={"img/icons/trash.svg"} alt="" />
          </S.Li>
        ))
      : "Nenhum resultado encontrado.";
  };

  const filterTasks = (index) => {
    return tasks.filter((name) => {
      return index > 0 ? name.status === index : name;
    });
  };

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
