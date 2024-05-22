import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import SideBar from './SideBar'

export const LayoutComponent = ({ children }) => {
    return (
        <Layout style={{ minheight: '100vh' }}>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content className='site-layout-background' style={{ padding: 24,  margin: 0, minHeight: 280 }}>
                    <SideBar />
                    {children}
                </Content>

            </Layout>

        </Layout>
    )
}
