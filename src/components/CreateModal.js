import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

function CreateModal(props) {
    return (
        <div className="container">
            <Modal show={props.open} onHide={props.handleClose}>
                <Modal.Header>
                    <Modal.Title>Fill in your information below</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" />
                        </Form.Group>
                        <Button type="submit">Save Changes</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </div>
    )
};

export default CreateModal;