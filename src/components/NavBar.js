import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu, Button, Space } from 'antd';
import {HomeOutlined, FileDoneOutlined, FileSearchOutlined, FileAddOutlined, BookOutlined} from '@ant-design/icons';
import { logout } from "../store/slice/auth";
import {useAppDispatch, useAppSelector, useAuth} from "../utils/hook";
import {resetState} from "../store/slice/assets";

const { Header } = Layout;

const Navbar = () => {
    const {role} = useAuth();
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(resetState())
        navigate('/login');
    };

    return (
        <Header style={{ position: 'relative', zIndex: 1, padding: 0, margin: 0 }}>
            <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
                {role === 'student' && (
                    <>

                        <Menu.Item key="home" icon={<HomeOutlined />}>
                            <Link to="/">Подать заявку на практику</Link>
                        </Menu.Item>
                        <Menu.Item key="apply-practice-status" icon={<FileDoneOutlined />}>
                            <Link to="/apply-practice-status">Статус заявки и информация о практике</Link>
                        </Menu.Item>
                        <Menu.Item key="summary" icon={<BookOutlined />}>
                            <Link to="/summary">Мое резюме</Link>
                        </Menu.Item>
                    </>
                )}
                {role === 'company' && (
                    <>
                        <Menu.Item key="requests" icon={<FileSearchOutlined />}>
                            <Link to="/student-requests">Список заявок</Link>
                        </Menu.Item>
                        <Menu.Item key="form-page" icon={<FileAddOutlined />}>
                            <Link to="/form-page">Добавить компанию</Link>
                        </Menu.Item>
                    </>
                )}
                {role === 'university' && (
                    <>
                        <Menu.Item key="registration" icon={<FileAddOutlined />}>
                            <Link to="/registration">регистрация пользователей</Link>
                        </Menu.Item>
                    </>
                )}
            </Menu>
            <Space style={{ position: 'absolute', top: '50%', right: '24px', transform: 'translateY(-50%)' }}>
                <Button type="primary" onClick={handleLogout}>Logout</Button>
            </Space>
        </Header>
    );
};

export default Navbar;
