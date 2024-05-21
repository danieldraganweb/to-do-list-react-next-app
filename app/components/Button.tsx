import React from 'react'
import styles from '../page.module.scss'
import { ButtonProps } from '../../types'

const Button = (
    { text, onClick, ariaLabel }: ButtonProps
) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            {text}
        </button>
    )
}

export default Button