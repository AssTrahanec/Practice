import React from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined, FileDoneOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = () => {
    const location = useLocation();
    return (
        <Header style={{ position: 'relative', zIndex: '1' }}>
            <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    <Link to="/home">Подать заявку на практику</Link>
                </Menu.Item>
                <Menu.Item key="apply-practice-status" icon={<FileDoneOutlined />}>
                    <Link to="/apply-practice-status">Статус заявки и информация о практике</Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
}

export default Navbar;