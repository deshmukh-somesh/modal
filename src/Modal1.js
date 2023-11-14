import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const Modal1 = (props) => {
  // const { showModal, setShowModal } = useState(false);
  const { closeModal1, data1,showModal1 } = props;
  console.log(closeModal1);
  console.log(data1);
  console.log(showModal1)
  return (
    <div>
      <Modal show={showModal1} onHide={closeModal1}>
        <Modal.Header>
          Employee Details:
          <Button className="btn btn-danger" onClick={closeModal1}>
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
          {data1.map((dat) => {
            // console.log(dat)
            return (
              <>
                <h4 key={dat.id}>id: {dat.id}</h4>
                <h4>name: {dat.name}</h4>
                <h4>email: {dat.email}</h4>
                <h4>phone: {dat.phone}</h4>
                <h4>sports: {dat.sports}</h4>
              </>
            );
          })}
          {/* <h4>name:Deshmukh Somesh Shivkumar</h4>
            <h4>email: deshmukhsomesh7777@gmail.com</h4>
            <h4>phone: 7588466302</h4>
            <h4>sports: football </h4>
            <h4>id:2</h4> */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ closeModal1}>Close Modal</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Modal1;
