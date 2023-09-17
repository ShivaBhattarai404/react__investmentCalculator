import React from 'react'

import styles from './Button.module.css'

const Button = props => {
    return (
        <p className={styles.actions}>
            <button onClick={props.reset} type="reset" className={styles.buttonAlt}>
                Reset
            </button>
            <button type="submit" className={styles.button}>
                Calculate
            </button>
        </p>
    )
}

export default Button