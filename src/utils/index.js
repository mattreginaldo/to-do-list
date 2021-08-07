export const filterTasksByTab = (tasks, index) => {
    return tasks?.filter((name) => {
      return index > 0 ? name.status === index : name;
    });
};
