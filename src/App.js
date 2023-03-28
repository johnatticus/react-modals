import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const vocData = {
  voc1: { title: "voc1-value", href: "#", content: "voc1-content" },
  voc2: { title: "voc2-value", href: "#", content: "voc2-content" },
  voc3: { title: "voc3-value", href: "#", content: "voc3-content" },
  voc4: { title: "voc4-value", href: "#", content: "voc4-content" }
};

export default function App() {
  const [vocToShow, setVocToShow] = useState(null);
  const showModal = (voc) => setVocToShow(voc);
  const hideModal = () => setVocToShow(null);
  return (
    <div className="p-3">
      {vocToShow && (
        <MyModal show={vocToShow} voc={vocToShow} onClose={hideModal} />
      )}
      <ul className="list-inline p-3">
        {Object.keys(vocData).map((voc, key) => {
          console.log(vocData[voc]);
          return (
            <li key={key} className="list-inline-item voc-item">
              <Button onClick={() => showModal(vocData[voc])}>
                <small>{vocData[voc].title}</small>
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function MyModal({ show, voc, onClose }) {
  return (
    <Modal
      show={show}
      onHide={onClose}
      backdrop="static"
      keyboard={false}
      aria-labelledby={`contained-modal-title-${voc.href}`}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id={`contained-modal-title-${voc.href}`}>
          {voc.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{voc.content}</Modal.Body>
    </Modal>
  );
}


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
