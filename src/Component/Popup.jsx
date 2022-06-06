import React, { useState } from "react";
import { Form, Button, Modal, Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Popup = () => {
  const [show, setShow] = useState(true);
  let Navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
    Navigate("/");
  };
  // const handleShow = () => setShow(true);

  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Add User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                  >
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Popup;
