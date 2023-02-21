// import React, { useState } from 'react';
// import { Button, Modal } from 'react-bootstrap';
// import { NavLink } from "react-router-dom";

// function ModalConDatos(props) {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     //--------------------------------------------------

//     /* "idUsuario": idUsuario,
//             "concepto": concepto.current.value,
//             "categoria": rubro,
//             "total": total.current.value,
//             "medio": medio.current.value,
//             "fecha": fecha.current.value */

//     const [concepto, setConcepto] = useState(false);
//     const [categoria, setCategoria] = useState(false);
//     const [total, setTotal] = useState(false);
//     const [medio, setMedio] = useState(false);
//     const [fecha, setFecha] = useState(false);


//     //--------------------------------------------------


//     const boton = props.tipoBoton;


//     if (props.concepto!=null && props.categoria!=null && props.total!=null && props.medio!=null && props.fecha!=null) {


//         setConcepto(props.concepto.current.value);
//         setCategoria(props.rubro);
//         setTotal(props.total.current.value);
//         setMedio(props.medio.current.value);
//         setFecha(props.fecha.current.value);

//     }


//     return (
//         <>
//             {boton === "a" ? <NavLink href="#" onClick={handleShow}>Eliminar</NavLink> :
//                 <input type="button" className="btn btn-primary mt-4" value="Agregar" onClick={() => !props.error() && handleShow()} />
//             }

//             <Modal show={show} onHide={handleClose} size="md"
//                 aria-labelledby="contained-modal-title-vcenter"
//                 centered>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{concepto}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>{concepto}</Modal.Body>


//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Cancelar
//                     </Button>
//                     <Button variant="primary" onClick={() => {
//                         props.onSave();
//                         handleClose();
//                     }}>
//                         Confirmar
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }

// export default ModalConDatos;

