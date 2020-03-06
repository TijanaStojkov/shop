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
        > <Icon>{props.textOrIcon}</Icon> </Button>
)

export default button;