import { List, arrayMove, arrayRemove } from "react-movable";

import * as S from "../../styles";

import { filterTasksByTab } from "../../utils";
import { useGeneralContext } from "../../providers/generalContext";

function ListMovable({ activeTab }) {
  const { tasks, setTasks } = useGeneralContext();

  const changeTask = (value, id) => {
    setTasks(tasks.map((item) => (item.id === id ? { ...item, description: value } : item)));
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks);
  };

  const changeStatus = (value, id) => {
    setTasks(tasks.map((item) => (item.id === id ? { ...item, completed: value, status: value ? 1 : 2 } : item)));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  return filterTasksByTab(tasks, activeTab)?.length > 0 ? (
    <List
      values={filterTasksByTab(tasks, activeTab)}
      onChange={({ oldIndex, newIndex }) => setTasks(arrayMove(tasks, oldIndex, newIndex))}
      renderList={({ children, props }) => <S.Ul {...props}>{children}</S.Ul>}
      renderItem={({ value, props, index }) => {
        return (
          <S.Li {...props} cursor="grabbing">
            <S.Fields>
              <S.Checkbox type="checkbox" defaultChecked={value.completed} onChange={(e) => changeStatus(e.target.checked, value.id)} />
              <S.Input
                type="text"
                placeholder="Digite aqui a descrição da tarefa"
                defaultValue={value.description}
                name={value.id}
                onBlur={(e) => {
                  changeTask(e.target.value, value.id);
                }}
              />
            </S.Fields>
            {value.status !== activeTab && (
              <S.RemoveTask
                onClick={() => {
                  setTasks(typeof index !== "undefined" && value.status !== activeTab ? arrayRemove(tasks, index) : tasks);
                }}>
                <img src="img/icons/trash.svg" alt={index} />
              </S.RemoveTask>
            )}
          </S.Li>
        );
      }}
    />
  ) : (
    "Nenhum resultado encontrado."
  );
}

export default ListMovable;
