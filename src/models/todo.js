const initialTodoList = [
  {
    content: 'study react',
    complete: false
  },
  {
    content: 'study dva',
    complete: true
  }
]

export default {
  namespace: 'todo',
  state: {
    todoList: [...initialTodoList]
  },
  reducers: {
    add: state => ({
      ...state,
      todoList: [...state.todoList, {
        content: 'new',
        complete: false
      }]
    })
  }
}