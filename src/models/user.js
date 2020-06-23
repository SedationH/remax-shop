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
  namespace: 'user',
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