import React from 'react'
import Tablecomponent from '../Components/Table';

const Ventas = () => {
  const columns = [
    {
      title: 'Nombre comprador',
      dataIndex: 'nombreComprador',
      key: 'name',
    },
    {
      title: 'Nombre vendedor',
      dataIndex: 'vendedor',
      key: 'edad',
    },
    {
      title: 'Producto vendido',
      dataIndex: 'ProductoNombre',
      key: 'pais',
    }, {
      title: 'Fecha de venta',
      dataIndex: 'fechaVenta',
      key: 'fecha',
    },
  ];
  return (
    <>
      <h1>Ventas</h1>
      <Tablecomponent columns={columns} url='/ventas' />
    </>
  )
}

export default Ventas
