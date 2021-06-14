import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

function AppointmentTimes(props) {



return (
    <div className="container">
        <ListGroup>
            <ListGroupItem>
                <Button>{props.time}</Button>
            </ListGroupItem>
        </ListGroup>
    </div>
)
};


export default AppointmentTimes;