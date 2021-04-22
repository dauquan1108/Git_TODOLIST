import * as types from "../constants/ActionTypes";

let ToDoList = [];

const Todo = (state = ToDoList, action) => {
  const toDoListView = [...state];
  switch (action.type) {
    case types.TODO_LIST_VIEW:
      //toDoList => lay o file trong file Todo.js
      state = action.toDoList;
      return [...state];
    case types.ADD_TODO_LIST:
      toDoListView.push({
        title: action.item,
        isComplete: false,
      });
      return [...toDoListView];
    case types.EDIT_ITEM_TODO_LIST:
      const idEdit = action.id;
      const value = action.value;
      toDoListView.forEach((todo) => {
        if (todo.id === idEdit) {
          todo.title = value;
        }
      });
      // toDoEditing ={}

      return [...toDoListView];
    case types.DELETE_TODO_LIST:
      const todoListNew = toDoListView.filter((todo) => todo.id !== action.id);
      return todoListNew;
    case types.ITEM_CHECKBOX:
      const id = action.id;
      toDoListView.forEach((todo) => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
      });
      return [...toDoListView];
    case types.DELETE_TODO_LIST_ALL:
      return [...state.filter((item) => !item.isComplete)];

    case types.CHECK_ALL_TODO_LIST_TRUE:
      debugger;
      toDoListView.forEach((todo) => {
        if (todo.isComplete === true) {
          todo.isComplete = false;
        }
        // else if (todo.isComplete === false) {
        //   todo.isComplete = true;
        // }
      });
      // toDoListView.filter((item) => !item.isComplete);
      return [...toDoListView];

    case types.CHECK_ALL_TODO_LIST_FALSE:
      debugger;
      toDoListView.forEach((todo) => {
        if (todo.isComplete === false) {
          todo.isComplete = true;
        }
        // else if (todo.isComplete === true) {
        //   todo.isComplete = false;
        // }
      });
      // toDoListView.filter((item) => item.isComplete)

      return [...toDoListView];
    default:
      return [...state];
  }


};
// isCompleteTrue = () => {
//   toDoListView.forEach((todo) => {
//     if (todo.isComplete === false) {
//       todo.isComplete = true;
//     }
//   });
  
// };

export default Todo;
