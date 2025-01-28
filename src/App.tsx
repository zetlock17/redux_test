import React from 'react';
import TodoList from './components/TodoList';

const App: React.FC = () => {
    return (
        <div>
            <TodoList /> {/* Рендерим компонент списка задач */}
        </div>
    );
};

export default App;