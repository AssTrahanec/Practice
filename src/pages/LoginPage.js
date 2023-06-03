import React from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import {useAppDispatch, useAppSelector} from "../utils/hook";
import {loginUser} from "../store/thunks/auth";
const { Title } = Typography;

const LoginPage = ({ history }) => {
    const dispatch = useAppDispatch();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const loading = useAppSelector(state => state.auth.isLoading)
    const onFinish = async (values) => {
        try {
            //const response = await axios.post(API_ADDRESS + '/auth/sign-in', values);
                await dispatch(loginUser(values))
        } catch (error) {
            setError('Ошибка при выполнении запроса');
        }
        console.log("hui", 'sssss')
        navigate('/'); // Переход на другую страницу после успешной авторизации
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card style={{ width: 300 }}>
                <Title level={4} style={{ textAlign: 'center', marginBottom: 24 }}>Вход</Title>
                <Form form={form} name="login-form" onFinish={onFinish}>
                    <Form.Item
                        name="login"
                        rules={[{ required: true, message: 'Пожалуйста, введите ваш email' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль' }]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="Пароль" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" loading={loading} htmlType="submit" block>
                            {loading ? 'Загрузка...' : 'Войти'}
                        </Button>
                    </Form.Item>
                    {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
                </Form>
            </Card>
        </div>
    );
}

export default LoginPage;
