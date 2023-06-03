import React from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { Layout, Menu, Button, Space } from 'antd';
import { HomeOutlined, FileDoneOutlined, FileSearchOutlined, FileAddOutlined } from '@ant-design/icons';
import {logout} from "../store/slice/auth";
import { useAppDispatch } from "../utils/hook";

const { Header } = Layout;

const Navbar = () => {
    const dispatch = useAppDispatch()
    const location = useLocation();
    //const { logout } = useAuth();
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logout());
        navigate('/login')
    };

    return (
        <Header style={{ position: 'relative', zIndex: '1' }}>
            <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    <Link to="/">Подать заявку на практику</Link>
                </Menu.Item>
                <Menu.Item key="apply-practice-status" icon={<FileDoneOutlined />}>
                    <Link to="/apply-practice-status">Статус заявки и информация о практике</Link>
                </Menu.Item>
                <Menu.Item key="requests" icon={<FileSearchOutlined />}>
                    <Link to="/student-requests">Список заявок</Link>
                </Menu.Item>
                <Menu.Item key="form-page" icon={<FileAddOutlined />}>
                    <Link to="/form-page">Добавить компанию</Link>
                </Menu.Item>
            </Menu>
            <Space style={{ position: 'absolute', top: '50%', right: '24px', transform: 'translateY(-50%)' }}>
                <Button type="primary" onClick={handleLogout}>Logout</Button>
            </Space>
        </Header>
    );
}

export default Navbar;
