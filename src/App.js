  import "./App.css";
  import { Button, Modal } from "react-bootstrap";
  import { useState } from "react";

  const data = [
    {
      id: "1",
      name: "somesh deshmukh",
      email: "deshmukhsomesh7777@gmail.com",
      phone: 9588466302,
      sports: "football",
    },
  ];

  function App() {
    const [showModal, setshowModal] = useState(false);

    const closeModal = () => {
      setshowModal(false);
    };
    return (
      <div>
        <Button onClick={() => setshowModal(true)}>Open Modal </Button>
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header>
            Employee Details:
            <Button className="btn btn-danger" onClick={() => closeModal()}>
              X
            </Button>
          </Modal.Header>
          <Modal.Body>
            {data.map((dat) => {
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
            <Button onClick={() => closeModal()}>Close Modal</Button>
          </Modal.Footer>
        </Modal>
        <div className="container">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
            facere libero, voluptatibus ut consequuntur culpa veritatis eum
            voluptate numquam. Molestiae exercitationem explicabo saepe? Molestias
            autem illo perspiciatis temporibus nobis, vero ratione dolore
            aspernatur recusandae quae quisquam eius tempore quam fugit nihil
            perferendis, fugiat odit veritatis assumenda! Exercitationem corrupti
            dolorem deserunt fugit pariatur fugiat aut quasi.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
            facere libero, voluptatibus ut consequuntur culpa veritatis eum
            voluptate numquam. Molestiae exercitationem explicabo saepe? Molestias
            autem illo perspiciatis temporibus nobis, vero ratione dolore
            aspernatur recusandae quae quisquam eius tempore quam fugit nihil
            perferendis, fugiat odit veritatis assumenda! Exercitationem corrupti
            dolorem deserunt fugit pariatur fugiat aut quasi.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
            facere libero, voluptatibus ut consequuntur culpa veritatis eum
            voluptate numquam. Molestiae exercitationem explicabo saepe? Molestias
            autem illo perspiciatis temporibus nobis, vero ratione dolore
            aspernatur recusandae quae quisquam eius tempore quam fugit nihil
            perferendis, fugiat odit veritatis assumenda! Exercitationem corrupti
            dolorem deserunt fugit pariatur fugiat aut quasi.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
            facere libero, voluptatibus ut consequuntur culpa veritatis eum
            voluptate numquam. Molestiae exercitationem explicabo saepe? Molestias
            autem illo perspiciatis temporibus nobis, vero ratione dolore
            aspernatur recusandae quae quisquam eius tempore quam fugit nihil
            perferendis, fugiat odit veritatis assumenda! Exercitationem corrupti
            dolorem deserunt fugit pariatur fugiat aut quasi.
          </p>
        </div>
      </div>
    );
  }

  export default App;
