import "./App.css";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import Modal1 from "./Modal1";

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
      <Modal1 closeModal1={closeModal} data1={data} showModal1 ={showModal}/>
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
