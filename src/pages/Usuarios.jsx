import React from 'react'
import Tablecomponent from '../Components/Table'

export const Usuarios = () => {
  const columns = [
    {
      title: 'Nombre usuario',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Edad',
      dataIndex: 'edad',
      key: 'edad',
    },
    {
      title: 'Correo electronico',
      dataIndex: 'pais',
      key: 'pais',
    },
  ];

  return (
    <Tablecomponent columns={columns}/>
  )
}
