import React from 'react'
import styles from '../page.module.scss'

const Button = (
    props: {
        text: string
        onClick?: () => void
        ariaLabel?: string

    }
) => {
    return (
        <button>{props.text}</button>
    )
}

export default Button
