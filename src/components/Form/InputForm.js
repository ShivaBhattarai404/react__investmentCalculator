import React, {useState} from "react";

import Button from "../Button/Button";
import styles from './InputForm.module.css'

const InputForm = props => {
    const [inputValue, setInputValue] = useState({
        principal: "",
        yearly: "",
        interestRate: "",
        time: ""
    })
    
    const inputChangeHandler = (value, identifier) =>{
        setInputValue(prevState => {
            return {...prevState, [identifier]:value}
        })
    }

    const formSubmitHandler = (e) =>{
        e.preventDefault();
        props.onAdd(inputValue);
    }

    const resetHandler = () =>{
        props.reset();
    }

    return (
        <form className={styles.form} onSubmit={formSubmitHandler}>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" onChange={e => inputChangeHandler(e.target.value.toString(), "principal")}/>
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" onChange={e => inputChangeHandler(e.target.value.toString(), "yearly")}/>
                </p>
            </div>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" onChange={e => inputChangeHandler(e.target.value.toString(), "interestRate")} />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" onChange={e => inputChangeHandler(e.target.value.toString(), "time")}/>
                </p>
            </div>
            
            <Button reset={resetHandler} />
        </form>
    )
}

export default InputForm;