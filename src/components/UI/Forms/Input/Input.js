import React from 'react';
import './Input.scss'
const input = (props) =>{
    let inputElement = null;
    const inputClasses = []
    if (props.invalid && props.shouldValidate && props.tuched) {
        inputClasses.push('Invalid')
    }

    switch ( props.elementType ) {
        case ('input'):
            inputElement = <input className={inputClasses} {...props.elementConfig} value={props.value} onChange={props.change}/>
            break;
        case ('textarea'):
            inputElement = <textarea className={inputClasses} {...props.elementConfig} value={props.value} onChange={props.change}/>
            break;
        case ('select'):   
            inputElement = 
            <select value={props.value} onChange={props.change}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value} >{option.deliveryValue}</option>
                ))}
            </select>
            break;
        default:
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.change}/>
    }
    return (
        <div>
            {inputElement}
        </div>
    )
}
export default input;