import React from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from './AuthContext';
const { Title } = Typography;

const LoginPage = () => {
    const { login } = useAuth();
    const users = [
        {
         login: "student",
         password:"student",
         role: "student"
        },
        {
            login: "company",
            password:"company",
            role: "company"
        }];
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Received values:', values);
        const { email, password } = values;

        const user = users.find(user => user.login === email && user.password === password);

        if (user) {
            login();
            navigate('/home');
        }else {
            setError("Неверный логин или пароль");
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card style={{ width: 300 }}>
                <Title level={4} style={{ textAlign: 'center', marginBottom: 24 }}>Вход</Title>
                <Form name="login" onFinish={onFinish}>
                    <Form.Item
                        name="email"
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
                        <Button type="primary" htmlType="submit" block>
                            Войти
                        </Button>
                    </Form.Item>
                    {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
                </Form>
            </Card>
        </div>
    );
}

export default LoginPage;