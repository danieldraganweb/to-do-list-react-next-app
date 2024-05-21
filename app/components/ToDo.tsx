"use client";
import React, { ReactElement } from 'react';
import styles from '../page.module.scss';
import Button from './Button';

const ToDo = (): ReactElement => {

    const [todos, setTodos] = React.useState<string[]>([]);
    const [input, setInput] = React.useState<string>('');
    const [error, setError] = React.useState<string>('');

    const handleAddTodo = () => {
        if (!input) {
            setError('Please enter a to-do item');
            return;
        }
        setTodos([...todos, input]);
        setInput('');
        setError('');
    }

    const handleRemoveTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const handleCompleteTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos[index] = `${newTodos[index]} - Completed`;
        setTodos(newTodos);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

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
                {todos.map((todo, index) => (
                    <div key={index} className={styles.todo}>
                        <p>{todo}</p>
                        <Button
                            text="Complete"
                            onClick={() => handleCompleteTodo(index)}
                        />
                        <Button
                            text="Remove"
                            onClick={() => handleRemoveTodo(index)}
                        />
                    </div>
                ))}
            </div>
        </>
    )


}

export default ToDo;