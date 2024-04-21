
import React, { useState } from 'react';
import RecentTransaction from './Transact/components/RecentTransaction';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  SettingOutlined, 
  TransactionOutlined, 
  MoneyCollectOutlined, 
  ProfileOutlined ,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Monitor', '2',<Link to='/CryptoTrack'> <DesktopOutlined /></Link>),
  getItem('Visualize', '1',<PieChartOutlined />, [  getItem('Bitcoin', '5',<Link to='/coins/bitcoin'><MoneyCollectOutlined /></Link>),
  getItem('Ether', '5',<Link to='/coins/ethereum'><MoneyCollectOutlined /></Link>)]),
  getItem('User', 'sub1', <UserOutlined />,
  [
    getItem('Profile', '3',<ProfileOutlined />),getItem('File', '4',<FileOutlined />),
  ]
  ),
  getItem('Transaction', 'sub2', <TransactionOutlined />,[getItem('Track 1', '6'), getItem('Track 2', '8')]),
  getItem('Setting', '9', <SettingOutlined />),
];
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {token: { colorBgContainer, borderRadiusLG },} = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
        <div className="flex flex-1 justify-center items-center h-full text-richblack-100 text-3xl  shadow-lg rounded-md">
        <RecentTransaction/>
      </div>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          CryptoVista ©{new Date().getFullYear()} Created by Suyash Singh
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
