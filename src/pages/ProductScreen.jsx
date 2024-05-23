import React from 'react';
import Tablecomponent from '../Components/Table';

const ProductScreen = () => {
  const columns = [
    {
      title: 'Nombre producto',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Edad',
      dataIndex: 'edad',
      key: 'edad',
    },
    {
      title: 'Pais',
      dataIndex: 'pais',
      key: 'pais',
    },
  ];

  return (
    <>
    <h1>Productos</h1>
    <Tablecomponent columns={columns} />
    </>
  );
};

export default ProductScreen;
