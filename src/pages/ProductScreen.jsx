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
      title: 'Precio',
      dataIndex: 'precio',
      key: 'edad',
    },
    {
      title: 'Descripcion',
      dataIndex: 'descripcion',
      key: 'pais',
    },
  ];
  return (
    <>
    <h1>Productos</h1>
    <Tablecomponent columns={columns} url={'/productos'} />
    </>
  );
};
export default ProductScreen;
