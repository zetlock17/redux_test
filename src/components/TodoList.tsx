import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store/slices/todoSlice';
import { RootState } from '../store/store';

const TodoList: React.FC = () => {
    const [text, setText] = useState<string>(''); // Состояние для текста новой задачи
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todos.todos); // Получаем список задач

    const handleAddTodo = () => {
        if (text.trim()) { // Проверяем, что текст не пустой
            dispatch(addTodo(text)); // Диспатчим действие добавления задачи
            setText(''); // Очищаем поле ввода
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} // Обновляем состояние текста
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo: string, index: number) => ( // Явно указываем типы для todo и index
                    <li key={index}>{todo}</li> // Отображаем каждую задачу
                ))}
            </ul>
        </div>
    );
};

export default TodoList;