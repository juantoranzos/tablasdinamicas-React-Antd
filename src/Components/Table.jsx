import React from 'react';
import { Table } from 'antd';

const Tablecomponent = (props) => {
  const { columns } = props; // Corregir el nombre de la variable aquí
  return (
    <Table columns={columns}  />
  );
};

export default Tablecomponent;
