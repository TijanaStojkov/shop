import React from 'react';
import { Icon, Button } from 'react-materialize';


const button = (props) => (                        
    <Button 
        node="button" 
        small 
        style={{ marginRight: '5px' }}  
        className={props.class}
        onClick={props.clicked} 
        disabled={props.disabled}
        > {props.icon?<Icon>{props.icon}</Icon>:null}{props.text} </Button>
)

export default button;