import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { projects } from './data';
import './App.css';

// const vocData = {
//   voc1: { title: "voc1-value", href: "#", content: "voc1-content" },
//   voc2: { title: "voc2-value", href: "#", content: "voc2-content" },
//   voc3: { title: "voc3-value", href: "#", content: "voc3-content" },
//   voc4: { title: "voc4-value", href: "#", content: "voc4-content" }
// };

export default function App() {
  const [vocToShow, setVocToShow] = useState(null);
  const showModal = (item) => setVocToShow(item);
  const hideModal = () => setVocToShow(null);
  return (
    <div className="p-3">
      {vocToShow && (
        <MyModal show={vocToShow} item={vocToShow} onClose={hideModal} />
      )}
      <ul className="list-inline p-3">
        {Object.keys(projects).map((item, key) => {
          console.log(projects[item]);
          return (
            <li key={key} className="list-inline-item voc-item">
              <Button onClick={() => showModal(projects[item])}>
                <small>{projects[item].title}</small>
              </Button>
            </li>
          );
        })}
        
      </ul>
    </div>
  );
}

function MyModal({ show, item, onClose }) {
  return (
    <Modal
      show={show}
      onHide={onClose}
      backdrop="static"
      keyboard={false}
      aria-labelledby={`contained-modal-title-${item.id}`}
      centered
      className="p"
    >
      <Modal.Header 
        closeButton
        className="special-modal"
      >
        <Modal.Title id={`contained-modal-title-${item.id}`}>
          {item.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{item.description}</Modal.Body>
    </Modal>
  );
}


////////////////////////////////////////////////////////////////

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// // Modal.setAppElement('#yourAppElement');

// function App() {
//   let subtitle;
//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = '#f00';
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   return (
//     <div>
//       <button onClick={openModal}>Open Modal</button>
//       <Modal
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
//         <button onClick={closeModal}>close</button>
//         <div>I am a modal</div>
//         <form>
//           <input />
//           <button>tab navigation</button>
//           <button>stays</button>
//           <button>inside</button>
//           <button>the modal</button>
//         </form>
//       </Modal>
//     </div>
//   );
// }

// export default App;









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
