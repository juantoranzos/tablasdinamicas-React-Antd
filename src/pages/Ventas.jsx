import React from 'react'
import Tablecomponent from '../Components/Table';

const Ventas = () => {
  const columns = [
    {
      title: 'Nombre comprador',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Nombre vendedor',
      dataIndex: 'edad',
      key: 'edad',
    },
    {
      title: 'Producto vendido',
      dataIndex: 'pais',
      key: 'pais',
    }, {
      title: 'Fecha de venta',
      dataIndex: 'fecha',
      key: 'fecha',
    },
  ];
  return (
    <>
      <h1>Ventas</h1>
      <Tablecomponent columns={columns} />
    </>
  )
}

export default Ventas
