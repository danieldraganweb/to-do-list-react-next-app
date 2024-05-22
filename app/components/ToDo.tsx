"use client";
import React, { FC, useState, ChangeEvent } from 'react';
import styles from '../page.module.scss';
import Button from './Button';
import Image from 'next/image'; // Import the Next.js Image component

type ToDoItem = {
    id: number;
    text: string;
    completed: boolean;
};

const ToDo: FC<{}> = () => {
    const [todos, setTodos] = useState<ToDoItem[]>([]);
    const [input, setInput] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleAddTodo = () => {
        if (!input) {
            setError('Please enter a to-do item');
            return;
        }
        setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
        setInput('');
        setError('');
    };

    const handleRemoveTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleCompleteTodo = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const handleEditTodo = (id: number) => {
        const newText = prompt("Edit the text:", todos.find(todo => todo.id === id)?.text);
        if (newText) {
            setTodos(todos.map(todo =>
                todo.id === id ? { ...todo, text: newText } : todo
            ));
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return (
        <>
            <div className={styles.title}>
                <h1>To-Do List</h1>
            </div>
            <div className={styles["input-container"]}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="What needs to be done?"
                    value={input}
                    onChange={handleInputChange}
                />
                <Button
                    text="Add To-do"
                    onClick={handleAddTodo}
                />
            </div>

            <div className={styles.todos}>
                {error && <p className={styles.error}>{error}</p>}
                {todos.map((todo) => (
                    <div key={todo.id} className={styles.todo}>
                        <input
                            type="checkbox"
                            className={styles.checkbox}
                            checked={todo.completed}
                            onChange={() => handleCompleteTodo(todo.id)}
                        />
                        <p className={todo.completed ? styles.completed : ''}>{todo.text}</p>
                        <div className={styles.icons}>
                            <Image src="/edit.svg" className={styles.icon} alt="Edit" width={24} height={24} onClick={() => handleEditTodo(todo.id)} />
                            <Image src="/delete.svg" className={styles.icon} alt="Delete" width={24} height={24} onClick={() => handleRemoveTodo(todo.id)} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ToDo;


