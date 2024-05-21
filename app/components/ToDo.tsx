import React, { ReactElement } from 'react';
import styles from '../page.module.scss';
import Button from './Button';

const ToDo = (): ReactElement => {
    return (
        <>
            <div className={styles.title}>
                <h1>To-Do List</h1>
            </div>
            <div className={styles["input-container"]}>
                <input className={styles.input} type="text" placeholder="What needs to be done?" />
                <Button text="Add To-do" />
            </div>
        </>
    )
}

export default ToDo;


