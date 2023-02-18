import React from 'react'

const Movimiento = ({movim}) => {
  return (
    <tr>
    <th scope="row">{movim.id}</th>
    <td>{movim.concepto}</td>
    <td>{movim.categoria}</td>
    <td>{movim.medio}</td>
    <td>{movim.total}</td>
    <td>{movim.fecha}</td>
    <td><a href="#">Eliminar</a></td>

  </tr>
  )
}

export default Movimiento