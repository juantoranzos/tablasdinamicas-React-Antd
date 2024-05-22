import { ShoppingCartOutlined } from '@ant-design/icons'
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const items = [
    {
      key: 'productos',
      label: <Link to='/'>Productos</Link>,
      icon: <ShoppingCartOutlined />,
    },
    {
      key: 'ventas',
      label: <Link to='/ventas'>Ventas</Link>,
      icon: <ShoppingCartOutlined />},
      {
        key: 'usuarios',
        label: <Link to='/usuarios'>Usuarios</Link>,
        icon: <ShoppingCartOutlined />,
      },
  ];
    
  return (
    <Sider> 

      <Menu
      style={{ height: '100%', borderRight: 0 }}
      defaultSelectedKeys={['1']}
      mode="inline"
      items={items}
      theme="dark"
    />

    </Sider> 
  )
}

export default SideBar
