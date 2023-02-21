import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

function MiModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const boton = props.tipoBoton;

  return (
    <>
      {boton === "a" ? <NavLink href="#" onClick={handleShow}>Eliminar</NavLink> :
        <input type="button" className="btn btn-primary mt-4" value="Agregar" onClick={() => !props.error() && handleShow()} />
      }

      <Modal show={show} onHide={handleClose} size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => {
            props.onSave();
            handleClose();
            
          }}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MiModal;