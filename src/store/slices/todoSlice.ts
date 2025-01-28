import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TodoState {
    todos: string[]; // Массив строк для задач
}

const initialState: TodoState = {
    todos: [], // Начальное состояние — пустой массив
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.todos.push(action.payload); // Добавляем новую задачу
        },
    },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;