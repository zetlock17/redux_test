import React from 'react';
import TodoList from './components/TodoList';
import './styles/components/header.scss';

const App: React.FC = () => {
    return (
        <div className='header'>
            <TodoList /> {/* Рендерим компонент списка задач */}
        </div>
    );
};

export default App;