import React from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';
import { Select, Row, Col } from 'react-materialize';
import './Filter.css'

const filter = (props) => (
    <Aux>
        <Row>
            <Col s={6}>
                <Select
                label='Filter by size'
                id="Select-9"
                multiple={false}
                onChange={props.filterSize}
                options={{
                    classes: '',
                    dropdownOptions: {
                    alignment: 'left',
                    autoTrigger: true,
                    closeOnClick: true,
                    constrainWidth: true,
                    coverTrigger: true,
                    hover: false,
                    inDuration: 150,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 250
                    }
                }}
                value=""
                >
                <option disabled value="" > {props.size} </option>
                <option value="s"> S </option>
                <option value="m"> M </option>
                <option value="x"> X </option>
                <option value="xl"> XL </option>
                <option value="xxl"> XXL </option>
            </Select>
            </Col>
            <Col s={6}>
            </Col>
        </Row>
        
    </Aux>
)
    
export default filter;