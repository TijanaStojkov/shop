import React from 'react';
import { Icon, Button } from 'react-materialize';


const button = (props) => (                        
    <Button 
        node="button" 
        small 
        style={{ marginRight: '5px' }}  
        waves="light" 
        className={props.ClassName}
        onClick={props.clicked} 
        disabled={props.disabled}
        > <Icon>{props.textOrIcon}</Icon>{props.text} </Button>
)

export default button;