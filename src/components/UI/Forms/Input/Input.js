import React from 'react';
import { Select } from 'react-materialize';
import './Input.scss'
const input = (props) =>{
    let inputElement = null;

    switch ( props.elementType ) {
        case ('input'):
            inputElement = <input {...props.elementConfig} value={props.value}/>
            break;
        case ('textarea'):
            inputElement = <textarea {...props.elementConfig} value={props.value}/>
            break;
        case ('select'):   
            inputElement = 
            <Select {...props.elementConfig} value={props.value}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>{option.deliveryValue}</option>
                ))}
            </Select>
            break;
        default:
            inputElement = <input {...props.elementConfig} value={props.value}/>
    }
    return (
        <div>
            {inputElement}
        </div>
    )
}
export default input;