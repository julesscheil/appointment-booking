import React, {Component} from 'react';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

class AppointmentTimes extends Component {
render() {
    console.log(this.props.time)
return (
    <div className="container">
        <ListGroup>
            <ListGroupItem>
                <Button>this.props.time</Button>
            </ListGroupItem>
        </ListGroup>
    </div>
)
}
};


export default AppointmentTimes;