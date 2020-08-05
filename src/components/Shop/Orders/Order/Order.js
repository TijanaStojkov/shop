import React, { Component } from 'react';
import Aux from '../../../hoc/Auxilary/Auxilary';
import {CollapsibleItem, Icon, Collapsible } from 'react-materialize'


class Order extends Component {
    render() {
        return (
            <Aux>
                <Collapsible
                    accordion
                    popout
                    >
                    <CollapsibleItem
                        expanded={false}
                        header="Order 1"
                        node="div"
                    >
                        Details
                    </CollapsibleItem>
                    <CollapsibleItem
                        expanded={false}
                        header="Order 2"
                        node="div"
                    >
                        Details
                    </CollapsibleItem>
                    <CollapsibleItem
                        expanded={false}
                        header="Order 3"
                        node="div"
                    >
                        Details
                    </CollapsibleItem>
                    <CollapsibleItem
                        expanded={false}
                        header="Order 4"
                        node="div"
                    >
                        Details
                    </CollapsibleItem>
  
                </Collapsible>
            </Aux>
        )
    }
}

export default Order;